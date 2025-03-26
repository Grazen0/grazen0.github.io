---
title: 16 Days of Advent of Code
slug: 16-days-of-advent-of-code
summary: Packets, sand, beacons, and valves
tags: [aoc-2022]
image:
  url: /img/aoc-2022/days_13_16.png
  alt: A hot air balloon made out of ASCII text next to sixteen yellow stars.
createdAt: 2022-12-18
# draft: true
---

Already 16 days into [Advent of Code](https://adventofcode.com), and the difficulty just spiked tremendously. O_o

## [Day 13: Distress Signal](https://adventofcode.com/2022/day/13)

[Oh, the memories...](https://adventofcode.com/2021/day/18)

I'd say the more challenging part of the puzzle was parsing the input. Yes, I'm using TypeScript now, but I felt like using `eval()` would be cheating, and I wanted just a bit more of a challenge. ;)

The instructions were a bit confusing too, so I had to re-read them a couple of times to make sure I actually understood how the sorting rules worked. Nothing _super_ difficult, though.

Part 2 was as easy as pie, too. All I had to do was insert the new arrays into the list of packets, sort them, and retrieve their new indexes.

## [Day 14: Regolith Reservoir](https://adventofcode.com/2022/day/14)

Pretty cool concept for a puzzle. Maybe I cheated a little, because I used an `ExtendableGrid` class I had built myself way before the event, just as a utility structure in case I needed it.

Nothing much out of the ordinary, though. A simple —perhaps naive— solution worked just fine by simulating sand units falling one by one. Since I was using an extendable grid as well, I didn't need to worry about array sizes or anything like that.

Also, this one was fun to visualize!

![Sand physics go brrr...](/img/aoc-2022/day_14_vis.gif)

## [Day 15: Beacon Exclusion Zone](https://adventofcode.com/2022/day/15)

_Bam._ First road bump. And what a way to get PTSD from [last year's beacon-related-shenanigans](https://adventofcode.com/2021/day/19).

After reading the puzzle instructions through and through, I couldn't have been more relieved to know that the sensors actually _knew_ their exact location, and that beacon positions were **not** relative.

Not long after, I managed to brute-force my way through part 1, with an _alarmingly high_ runtime duration. Clearly, part 2 was gonna be real trouble.

Precisely, it made the problem exactly 4,000,000 times larger.

Now, it looks like I'm not very smart, because while other people used an interesting observation about sensor radiuses and perimeters, I ended up using a semi-brute-force approach that somehow managed to compute the answer in ~30 seconds. Nothing particularly special: it scans the grid line-by-line, and uses ranges to keep track of places intersections with every sensor on the given line.

## [Day 16: Proboscidea Volcanium](https://adventofcode.com/2022/day/16)

I'm still not sure whether I'm a big fan of these problems or not. It's not that they're inherently annoying, but it's might be more so the fact that I'm not very experienced with them, and I tend to find them **really** difficult.

As many other people, I made the observation that I should only care about the valves with a flow rate greater than 0, while all the other "useless" valves should be treated pretty much just as "paths" to get to the "useful" valves.

With that in mind, I set up a DFS algorithm that explored every possible way of opening as many valves as possible, which managed to compute the right answer in just under 500ms. Not _that_ good, but not _that_ bad either...

And this was pretty much my face when I read part 2:

![Yup...](/img/blinking_guy.jpg)

Now there's an _elephant_?

This one was **really** tough. I _mean_ it. I'm wasn't the only one, though, as it seemed like this was, in fact, being the hardest day so far for pretty much everyone.

I spent several hours thinking and trying a couple of different approaches, but none of them seemed to actually finish computing, or just straight-up spewed out a wrong answer.

Lucky for me, I found something particular in the input that was **not** present in the example input.

As it turns out, the example input made it so that all the valves could be opened by a single "participant" (either me or the elephant). _However_, since the real input had more valves, it actually made it **impossible** for **all** of them to be opened in time, even with two participants.

Again, with that in mind, I came up with a solution: Run the algorithm from part 1, and run it _again_ —as to simulate the elephant— with the remaining closed valves. Since the real input didn't let all the valves be open by the end of the 26 minutes, this approach effectively managed to check all possible branches of the problem, and I managed to find the right answer.

I mean, yeah it doesn't work on the example input, and it takes almost 20 minutes to compute, but a solution's a solution. ¯\\\_(ツ)\_/¯

## Things are getting crazier...

Now we're getting into what's probably going to be the peak in difficulty of this year's event on these next days. Strapping on to my seat belt and wishing for the best of luck, 'cause I'm gonna need it. ✌
