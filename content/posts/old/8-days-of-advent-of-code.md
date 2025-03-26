---
title: 8 Days of Advent of Code
slug: 8-days-of-advent-of-code
summary: Supply crates, packet makers, file systems, and tree houses.
tags: [aoc-2022]
image:
  url: /img/aoc-2022/days_5_8.png
  alt: A hot air balloon made out of ASCII text next to eight yellow stars
createdAt: 2022-12-10
draft: true
---

8 days into December, this year's [Advent of Code](https://adventofcode.com/) continues to be a fun challenge, and it's getting a tad more interesting now!

## [Day 5: Supply Stacks](https://adventofcode.com/2022/day/5)

One word: **Parsing**

I'd say the main challenge of day 5 wasn't the puzzle itself, but more so parsing the actual input.

```
1 |     [D]
2 | [N] [C]
3 | [Z] [M] [P]
4 |  1   2   3
5 |
6 | move 1 from 2 to 1
7 | move 3 from 1 to 3
8 | move 2 from 2 to 1
9 | move 1 from 1 to 2
```

Still, it wasn't too hard. In the end, I decided to do the following:

1. Find the empty line in the input. (5 in this case)
2. Get the number of piles by splitting its previous line by whitespace and counting its elements.
3. Working my way up from there and pushing the crates into the piles.

Not trivial, but still relatively easy.

The puzzles themselves, on the other hand, _were_ pretty much trivial; not much to say there. Pushing, popping, etc. ¯\\\_(ツ)\_/¯

Still, I did find this puzzle fun overall. I even made a visualization!

![(Using the example input)](/img/aoc-2022/day_5_vis.gif)

## [Day 6: Tuning Trouble](https://adventofcode.com/2022/day/6)

Because of course the elves are gonna give _us_ the **single** broken communication device they have. -\_-

For this puzzle, I used a naive brute force approach which I absolutely _did not_ expect to work, just because it'd be way too easy to be true. As it turns out, though, I was able to get the answer pretty quickly.

![Really?](/img/cat_hiss.gif)

There wasn't much interesting to this puzzle overall, and many people on the AoC subreddit appear to agree in that it really was _that_ easy.

## [Day 7: No Space Left On Device](https://adventofcode.com/2022/day/7)

Things get a whole lot more interesting! o.o

Building a directory tree from lines of terminal output sounded like a blast, and I immediately got working on it.

...but hold on, it wasn't very easy.

See, I already had an idea from the start of how the program would work on a high level; the puzzle itself wasn't anything super-complicated or anything. Just one issue: **Rust**.

Building graph-like data structures in Rust turned out to be a lot more difficult than I expected, though it could be due to the fact that I'm not very well-versed in the language. In particular, I struggled to make the children nodes hold any sort of "reference" to their parents in order to traverse the tree upwards.

That's why, after a lot of thinking, I came up with an alternative solution to implement the tree: Use a `Vec` to hold the nodes, and use their indices as "addresses" to reference other nodes. Another way to think about it is that I made my own "virtual" memory and my own "pointers" which I had full control of.

Also, since it was a guarantee that no nodes were going to be deleted anywhere in the code, I didn't run into any problems about invalid indices.

Once I got the tree-building algorithm working, the rest of part 1 and the whole of part 2 weren't as difficult: just some recursive functions to calculate directory sizes.

## [Day 8: Treetop Tree House](https://adventofcode.com/2022/day/8)

Ah, the smell of 2D grids in the morning.

I'm not so proud of the code I wrote for this puzzle, but again, a relatively naive approach somehow worked.

For part 1, I traversed the tree map from each edge until as it found taller and taller trees to mark as "visible". Part 2, on the other hand, used a _very_ inefficient brute-force method of checking the individual viewing score of every single tree to get the max value.

## And the journey continues...

I'm expecting things will get a tad more difficult from now on, so I really look forward to these next days! As usual, I'll be posting about them.

Peace!
