---
title: An Anecdote on Memory Ownership in C
summary: An interesting personal experience with C, featuring Rust.
tags: [programming, c, rust]
createdAt: 2025-08-03
---

Recently, I've been working on [Gemu]. It's a neat little Game Boy emulator that began as a personal project to learn C. Now, I recently had a short anecdote that I thought I'd share here.

## The Issue

Somewhere in my code there's a `GameBoy` struct, which acts as a sort of "glue" between most important components of the emulator (except for frontend-specifics). In particular, it holds these two things:

```c
typedef struct GameBoy {
    // ...
    uint8_t *rom;    // An array of uint8_t's
    size_t rom_len;  // Length of rom
    // ...
} GameBoy;
```

These fields, `rom` and `rom_len`, hold the current cartridge ROM data loaded into the emulator (and its size). They are initialized as `nullptr` and `0`, respectively. In order to "load a ROM" into `GameBoy`, I wrote this function:

```c
void GameBoy_load_rom(GameBoy *self, uint8_t *rom, size_t rom_len) {
    self->rom = rom;
    self->rom_len = rom_len;
    // more stuff...
}
```

This _just seemed_ to work. And it really did. Simple is better, right? At least that's what I thought back then.

One small issue was that, in practice, it just so happened that the ROM data passed to `GameBoy_load_rom` was always the return value of a call to `SDL_LoadFile`. Loading a ROM would look something like this:

```c
size_t rom_len;
uint8_t *rom = SDL_LoadFile("path/to/a/rom.gb", &rom_len);
GameBoy_load_rom(rom, rom_len);
```

`SDL_LoadFile` reads a file and returns its bytes in a heap-allocated array. As per the SDL docs, this array should eventually be freed via `SDL_free`. Naively, I simply introduced the following "destructor" function for `GameBoy` (which I would make sure to call appropriately):

```c
void GameBoy_destroy(GameBoy *self) {
    SDL_free(self->rom);
    self->rom = nullptr; // nullptr exists in C23!
    self->rom_len = 0;
}
```

I also added a `free(self->rom)` at the beginning of `GameBoy_load_rom` to free the previously held `rom` before loading a new one.

My rationale for this was that `GameBoy` should "own" `rom`, so it should be responsible for cleaning up `rom` when destroyed.

There was a clear issue with this design, however. **`GameBoy` _assumed_ that `rom` was a heap-allocated array**. Not only that, but (being 100% pragmatic) it also assumed that `rom` was an _SDL_-heap-allocated array. What if I ever wanted to load, say, a static array to `rom`? Do note that I was always calling `GameBoy_load_rom` with the result of an `SDL_LoadFile`, so this didn't cause any problems in practice, but it was still an objectively bad design choice.

## The Rust Way

> Funny story, actually: I learned Rust before C. You'll see here how I used that to my advantage.

So what do you know, Rust came to the rescue. _"How would I approach this in Rust, anyways?"_ I thought. This is more or less what I pictured in my mind:

```rust
struct GameBoy {
    // ...
    rom: Vec<u8>,
    // ...
}

impl GameBoy {
    fn load_rom(&mut self, rom: &[u8]) {
        self.rom = rom.to_vec();
        // ...
    }
}
```

Some key things here:

1. `GameBoy` clearly **defines** its `rom`'s structure. It "mandates" that `rom` be a `Vec`.
2. `GameBoy::load_rom` **borrows** its `rom` parameter and **constructs** its own `rom` by copying (via `to_vec`, which copies a slice into a new `Vec`).
3. `GameBoy` **cleans up** its `rom` when destroyed (dropped).

It is in this sense that `GameBoy` clearly **owns** `rom` in this example.

Note points 1 and 2 in particular. This Rust version of my (attempt at) C code works because, here, `GameBoy` _does not_ assume anything about the `rom` passed in `GameBoy::load_rom` other than it's a slice of `u8`s. It defines its own internal structure clearly: `rom` is a `Vec<u8>`.

> As it turns out, my implementation of `GameBoy_load_rom` suggested that `rom` was, in fact, "borrowed", while the destructor suggested it was owned. This was the main problem.

## The C Solution

What has incorrect was not my intuition about `GameBoy` having to "own" its `rom`, but the way I had implemented it. By doing these two things simultaneously...

```c
void GameBoy_load_rom(GameBoy *self, uint8_t *rom, size_t rom_len) {
    free(self->rom);
    self->rom = rom;
    self->rom_len = rom_len;
    // more stuff...
}

void GameBoy_destroy(GameBoy *self) {
    SDL_free(self->rom);
    self->rom = nullptr;
    self->rom_len = 0;
}
```

...I had essentially created a very strange ownership model where `GameBoy` sort-of-but-not-completely owned `rom`. The data of `rom` itself was (kind of?) owned outside of `GameBoy`, but it was also being freed by `GameBoy`. Weird.

My solution was essentially this:

```c
void GameBoy_load_rom(GameBoy *self, const uint8_t *rom, size_t rom_len) {
    free(self->rom);

    self->rom = malloc(rom_len * sizeof(self->rom[0]));
    memcpy(self->rom, rom, rom_len * sizeof(self->rom[0]));
    self->rom_len = rom_len;

    // more stuff...
}

// Nothing changed here, though
void GameBoy_destroy(GameBoy *self) {
    SDL_free(self->rom);
    self->rom = nullptr;
    self->rom_len = 0;
}
```

All 4 properties from the Rust example now hold:

2. `GameBoy` _"mandates"_ that `rom` be a heap-allocated array.
3. `GameBoy_load_rom` _"borrows"_ its `rom` parameter and _constructs_ its own `rom` by copying.
4. `GameBoy` _cleans up_ its `rom` when destroyed (via `GameBoy-destroy`).

It is now clear that `GameBoy` **owns** `rom`: it is the sole one responsible for the construction and cleanup of `rom`.

## Documentation is Important!

I repeat: **documentation is important**. It is in any programming language, but perhaps especially so in C. C doesn't give you ownership semantics or any features on that matter. As with many other things in the language, it is up to the programmer. Thus, it is crucial to manually document what the language does not already self-document. Case in point: ownership semantics.

For example, this is more or less how I ended up documenting `GameBoy_load_rom`:

```c
/**
 * \brief Loads ROM data into a GameBoy.
 *
 * This method copies rom, so it does not take ownership of it.
 *
 * \param self the GameBoy to load the ROM to.
 * \param rom the ROM data to load.
 * \param rom_len the length of rom.
 */
void GameBoy_load_rom(GameBoy *self, const u8 *rom, size_t rom_len);
```

Using C has really made me appreciate how Rust has concepts like memory ownership baked right into the language. I wouldn't have had this issue at all if I were writing my emulator in Rust. Since Rust uses the ownership model at the language level, not only is it enforced by the compiler, but memory ownership is self-documented by _the language itself_.

Still, no shame to C! I think it's a great language: insanely simple, powerful, and fun. I absolutely look forward to keep going with it to write more software.

[Gemu]: https://github.com/Grazen0/gemu
