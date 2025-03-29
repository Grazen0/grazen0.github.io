---
title: 4 Days of Advent of Code in Rust

summary: Calories, games, rucksacks, and assignments
tags: [aoc-2022]
image:
  url: /img/aoc-2022/days_1_4.png
  alt: A hot air balloon made out of ASCII text next to four yellow stars.
---

You know, I'm pretty sure there's nothing that gets me the most excited _every single_ year than counting down the days for [Advent of Code](/posts/offtopic/advent-of-code)! (Yes, not even my own birthday gets close to it). This year wasn't the exception, as it turns out.

(If you wanna check out my solutions, click [here](https://github.com/ElCholoGamer/advent-of-code-rust/)!)

Just as many other people, I decided to take on AoC with [Rust](https://www.rust-lang.org/) this year. I really enjoy the language, and I thought this could be a great opportunity to become more fluent in the language. However, I decided to do some preparation first.

Copy-pasting the puzzle input manually from the website? That ain't my thing, so I wrote a function that automatically fetched it with a user-provided session cookie and saved it to a folder, not to be tampered with.

Apart from that, I just set up a basic folder structure with Cargo workspaces and wrote some utility functions for the library. I kind of wanted to write some sort of benchmarking "framework-ish" utility, but I thought that it could wait for later.

![Ready.](/img/rambo.gif)

Just as the clock was approaching midnight on November 30th, I finished writing a bit of boilerplate code. As well as setting up some `part_1` and `part_2` functions to write my main code in, I assumed the input of day 1 would be a list of numbers, because from previous AoC experiences...

Day 1 is always just a simple list of numbers, right?

## [Day 1: Calorie Counting](https://adventofcode.com/2022/day/1)

Surprise! The input turned out to be a list of numbers, **some being separated by a blank line**. The parsing function in my boilerplate code was pretty much useless.

:0

Just a bit annoying though, I had to rewrite some of my boilerplate code. (Awww)

Despite this, the rest of challenge was trivial. I suppose that's to be expected: day 1 is always supposed to be extremely easy.

Still though, I did manage to learn a few bits of knowledge on Rust's `Vec` type: `sort_by` and `max`.

Nice start!

(Does Santa really have _that_ many elves?)

## [Day 2: Rock Paper Scissors](https://adventofcode.com/2022/day/2)

Elves playing rock paper scissors to get closer to the snacks. Ah yes.

Well, it's hard to describe how "difficult" this day was...

Nevermind, it was still pretty easy in retrospective, albeit a little tedious. Though, it was fun (and interesting) to reason about how "Rock Paper Scissors" would actually work from a programming perspective.

The way I coded my solution, I used a `struct` and an `enum` to hold input data and `Rock`, `Paper` and `Scissors` play variants respectively. And hey, it might not be very optimized, but if it works, it works.

## [Day 3: Rucksack Reorganization](https://adventofcode.com/2022/day/3)

(Why are these elves so unorganized?)

Honestly, the hardest part about day 3 might have been actually reading the puzzle. It wasn't too hard _per-se_, but I kind of feel like it might have added in **way** to many unnecessary details.

Nevertheless, the puzzle itself wasn't that complicated. Some Google searches for Rust iterators later, both parts were done, and the elves now had the correct badges on their beloved rucksacks.

...and by the way, I absolutely _adore_ Rust iterators. They make a great deal of tasks way more straightforward and concise.

## Intermission

So there I was, sitting on my desk on Saturday after having finished day 3, when the word "benchmark" came to my mind.

Right! I definitely wanted to benchmark my solutions in some and check their performance, and maybe make a "standard" way of organizing my solutions and their respective pieces of code. Better do it right there than later, right?

I spent a couple of hours, and came up with a nice solution, which I'm pretty happy with.

```rust
pub trait AocSolution {
    type Input;
    type Output: Display;
    fn parse_input(raw_input: String) -> Self::Input;
    fn part_1(input: &Self::Input) -> Result<Self::Output, BoxedError>;
    fn part_2(input: &Self::Input) -> Result<Self::Output, BoxedError>;
}
```

That's it! Well, not really. There's some code in charge of actually handling structs with this trait and their error handling, but this is all that I'm concerned with when writing a puzzle solution: All I gotta do is create a struct that implements this trait, and one of my library's functions will run it for me, with benchmarking and error handling.

![Nice.](/img/thumbs_up.gif)

## [Day 4: Camp Cleanup](https://adventofcode.com/2022/day/4)

Ehh, I think this puzzle is the second easiest one so far. Parsing the input was easy, the puzzle itself was pretty much some intuition and math, and overall it didn't present that big of a challenge.

Despite, I did learn one thing by experience: Rust has **two** range types: `Range` and `RangeInclusive`, which differ in what you can probably guess already.

## That's all for now!

Yup, these have been the first 4 days of [Advent of Code](https://adventofcode.com). Even if it has been pretty easy so far, I've still learned a handful of things about Rust! I can't wait for the later puzzles. Seriously, I have no idea why this event in particular makes me _so_ excited. I suppose it's just one of a kind ;)

Anyway, that's all for now. Peace!
