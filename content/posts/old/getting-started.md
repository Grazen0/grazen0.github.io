---
title: Getting Started with the CHIP-8 Emulator
slug: getting-started
summary: Getting our project set up!
tags: [chip-8]
image:
  url: /img/chip-8/getting_started.jpg
  alt: A kid and his dad tinkering with a COSMAC VIP
createdAt: 2022-04-01
draft: true
---

It's true! We're finally getting started with the emulator. As I mentioned at the start of this guide, you can follow along in the programming language of your choice. I'll be using some pseudocode, just to make some things clearer.

![Get ready!](/img/chip-8/press_start.gif)

## 🤔 Requirements

First, you'll need some platform to run the game on. Here are some ideas:

- HTML canvas with JavaScript. (Maybe even WebAssembly if you feel daring!)
- [SDL2](https://www.libsdl.org/) with C/C++, or using bindings for languages such as Python, Rust, and Go.
- A Raspberry PI or an Arduino board. (+15 points)
- Some sort of embedded system. (+100 points)

As long as your platform has some sort of display system and input, it works.

Anyways, we'll start with the CPU! This will be the core of your emulator, and where pretty much everything in the project will live.

![Feeling like a pro yet?](/img/chip-8/cpu.gif)

Well, in the case of the CHIP-8, you aren't exactly emulating an actual CPU per-se, but it's pretty close, come on.

## 🏗 Structure

This part's pretty simple: mostly a one-to-one mapping of the [specs](/posts/chip-8/specs-overview). You can achieve it using a class, object, or whatever struct thingy your language has. An example might look like this:

```rust
CPU {
  memory: u8[4096],  // 4096-byte memory
  pc: u16,           // Program counter
  v: u8[16],         // V0-VF registers
  i: u16,            // I register
  stack: Stack<u16>, // Stack (use the data type you prefer)
  dt: u8,            // Delay timer
  st: u8,            // Sound timer
}
```

Note that `u8` means an unsigned 8-bit number, and `u16` means an unsigned 16-bit number. "Unsigned" basically means these numbers can only be positive.

All memory should be initialized as 0, as well as the registers and timers. The program counter, however, should be initialized to `0x200` because, like I mentioned in a previous post, that's where programs are loaded in memory.

> **Tip!**
>
> If you're using a very high-level language like Python or Javascript, avoid using its primitive `number` type if it has one. These are most likely 32/64 bit _signed_ numbers, which can be counter-productive when trying to work with what should be 8-bit or 16-bit numbers. In JavaScript, for example, you can use a `Uint8Array` instead of a number list for the memory and registers.

## ⬇ Loading a program

A CHIP-8 program is simply a sequence of bytes, 8-bit numbers, or whatever you wanna call them. By "loading", I refer to putting it into memory, starting at address `0x200`.

The process is pretty straightforward:

```js
CPU {
    // ...
    load_program(program: u8[]) {
        for (var i = 0; i < program.length; i++) {
            this.memory[0x200 + i] = program[i]; // Note the 0x200 offset!
        }
    }
}
```

(Man, I really hope this is how I'm supposed to write pseudocode)

## 🏃‍♂️ Executing a program

Every CPU has an execution cycle or loop. In the case of the CHIP-8, it looks something like this:

1. Get the instruction at the memory address `PC` currently points to
2. Increase `PC` by 2
3. Extract the instruction kind and parameters
4. Execute the instruction
5. Repeat

The reason `PC` is increased by 2 is because each instruction is 2 bytes long. Also, note that it should increased _before_ executing the instruction. We'll get more into how to execute instructions in the next chapter.

## ⏱ Timing

You can't just let the CPU run your computer's usual speed. It's waaay too fast!

Different CHIP-8 games are designed to run at different speeds. These can sometimes vary a lot, but the usual range is of 500-1000Hz. When making your emulator, you should probably make this configurable.

On the other hand, there's the delay and sound timers. These are easier: They decrement at a rate of 60Hz.

> The [hertz](https://en.wikipedia.org/wiki/Hertz) (Hz) is a unit of frequency, and means "one cycle per second". Therefore, the emulator should run at about 500-1000 cycles per second, and the timers decrease exactly 60 times per second.

The way you achieve these timings depends on your platform. On native platforms, you could just use some sort of `sleep` function, although it might require a bit of work to get just right. In the browser, you can use `window.requestAnimationFrame` to run a callback at the screen's refresh rate.

Executing some code exactly 500-1000 times per second is very difficult to do with precision, which is why virtually no emulators do it that way. Instead of having two threads or independent code loops running at different intervals (one for the CPU cycles, and one for the timers), you can have both of them in a single loop running 60 times per second. To emulate the CPU running at 500Hz, you can simply run multiple cycles on each frame.

```js
var fps = 60 // Main loop running 60 times per second
var cpu_speed = 750 // Meaning 750Hz
var cycles_per_frame = cpu_speed / fps // CPU will run this many cycles per frame

loop {
    for (var i = 0; i < cycles_per_frame; i++) {
        cpu.cycle()
    }

    cpu.decrease_timers()

    sleep(1000 / fps) // Wait for next frame
}
```

And... I think that's pretty much all we need to get started. Implement this in your programming language, and you should be good to go!
