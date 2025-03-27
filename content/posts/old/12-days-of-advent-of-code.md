---
title: 12 Days of Advent of Code
slug: 12-days-of-advent-of-code
summary: Ropes, CRTs, monkeys, and hills
tags: [aoc-2022]
image:
  url: /img/aoc-2022/days_9_12.png
  alt: A hot air balloon made out of ASCII text next to twelve yellow stars.
createdAt: 2022-12-14
draft: true
---

12 days into [Advent of Code](https://adventofcode.com), already, and things sure are getting fun.

## [Day 9: Rope Bridge](https://adventofcode.com/2022/day/9)

Honestly, what a fun puzzle! It felt like building a slightly more complicated snake game, using some (surprisingly realistic) rope physics.

I didn't personally find part 1 all that difficult, perhaps because of the way I pictured how the program could work. A couple of `Math.sign`s later, it was done.

After that, part 2 just required a bit of refactoring, which turned out to be pretty easy, especially since [I've done a snake game before](https://github.com/ElCholoGamer/snaek).

![Visualization!](/img/aoc-2022/day_9_vis.gif)

Fun times.

## [Day 10: Cathode-Ray Tube](https://adventofcode.com/2022/day/10)

CPU? Clock circuit? Registers? Instruction cycles? Now, this was _my_ territory. Well, at least it did as much as help me read the puzzle instructions faster. It wasn't that complicated anyways.

What I came up with wasn't the most elegant solution, but it was relatively simple and easy to understand. After I figured out how to handle clock cycles, the rest of part 1 was easy.

Now, I must saw I had a real _blast_ with part 2. Rendering pixels to a CRT with clock-driven timing as the CPU executed instructions to change a sprite's position? That right there really sounded like something taken out of a real old-school computer system.

Synchronizing the CPU and the rendering wasn't at all difficult due to the way I had set up my code in part 1. Just copy-pasted some chunks, modified some lines, added some new code to handle pixels, and it was done.

![(Is this how a CRT looks like?)](/img/aoc-2022/day_10_vis.gif)

By the way, I ended up in place 88 on the global leaderboard! I'd say it was sort of a fluke, since I was comfortable with a handful of concepts and terms used in the puzzle, which allowed me to skim quickly through the instructions. Still feeling proud about it. ( ▀ ͜͞ʖ▀)

## [Day 11: Monkey in the Middle](https://adventofcode.com/2022/day/11)

How do you quantify a "worry level"? How does a monkey know how to check the divisivility of some number? How would you even-

Ah well, it's Advent of Code. It doesn't have to make sense.

Now, part 1 really did take me a long time to actually understand the puzzle instructions and how monkeys acted. Thankfully, it included an example description of what a round might look like step-by-step, which was extremely helpful.

Part 1 was mostly trivial. No real thinking involved; I just had to follow what the instructions said and I'd be fine.

Part 2, on the other hand... yeah. No dividing the worry levels by 3 caused them to get absolutely _humongous_.

At first, an unsuspecting me thought that it could be a good idea to use TypeScript's `BigInt` type. I, however, did not have the slightest idea what sizes of numbers I was dealing with. Sure enough, the worry levels were **way** too large.

And what do you do when an AoC puzzle contains **way** too large numbers for any computer in existence to process?

Math. The answer is always math.

The new goal to keep the worry levels low without affecting the monkey's behavior. That is: reduce the worry levels _as much as possible_ without affecting their divisibility by the numbers the monkeys tested with.

After some brainstorming and thinking, I found out the answer to be the modulo operator and the least common multiple of the "monkey divisibility numbers" (as I had named them).

As I figured: You can subtract the LCM of a set of numbers from the worry level as many times as you can and, as long as it's still positive, it'll retain its divisibility by those numbers.

I'd say this is the first challenge that forced me to really think about the puzzle and come up with non-programming solutions. I don't have any formal education on these sorts of topics, too, so I have to say I felt really proud of having found out the answer.

![No visualization for this one, here's a monkey instead.](/img/monkey_drip.gif)

## [Day 12: Hill Climbing Algorithm](https://adventofcode.com/2022/day/12)

If this was last year, I'd have been completely lost on this one.

Thankfully, it's not last year.

Thanks to [day 15 on 2020's event](https://adventofcode.com/2021/day/15), I learned about pathfinding and [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm), so part 1 was a piece of cake.

Also, while I could've just used BFS, Dijkstra isn't really all that much more complicated, and I thought it might be a better idea to get prepared for whatever part 2 would throw at me.

Well, I ended up _not_ needing Dijkstra for part 2, so I refactored a bit of my code and changed it to a simple BFS.

The rest was simple. I did the same thing as part 1, but used the "end" square as the starting point for the BFS algorithm instead of the "start" square. Then, I simply grabbed the lowest distance of any "a" square.

![A nice visualization again](/img/aoc-2022/day_12_vis.gif)

## Wrapping up

Finally, the difficulty seems to be ramping up a bit, and it looks like things are about to get a _lot_ more complicated later on. As always, looking forward to it!
