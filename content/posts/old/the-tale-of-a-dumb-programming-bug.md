---
title: The Dumb Tale of  a Programming Bug

summary: A thrilling debugging journey featuring Vercel.
tags: [web-dev]
image:
  url: /img/web-dev/fixing-a-really-dumb-bug.jpg
  alt: A dog on a computer
---

> "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
>
> ― Edsger W. Dijkstra

---

See that view counter up there? It only just started working properly a few days ago. What was initially just a relatively simple bug ended up taking weeks of work and refactoring. Wanna know why and how? Well, buckle up, because I'm about to tell you a thought-provoking, inspiring, and life-changing programming story.

## The problem

A few weeks ago, I had just finished coding in a view counter for the post pages. _At least I thought I had_.

It was a pretty simple idea: A counter that increments whenever someone views a post, using an IP-based cooldown. Using Next.js's [incremental static regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration), I set a revalidation time for the post pages. Basically, this meant that they would be rebuilt every so often, fetching and using an updated view count from the database each time.

I tested the view counter locally. Sure enough, it worked fine. Every visit incremented the view counter internally so often, and the page would regenerate after an interval. Confident, I committed my changes and pushed to production. What could go wrong?

Something went wrong.

![Who would have guessed?](/img/mind_blown.gif)

The view counter wasn't being updated.

What I mean is: Sure, the `views` counter on the database was being incremented as it should, but the counter displayed on the pages wasn't updating after the delay I had programmed.

Tried refreshing the page a couple times, didn't work. No errors showed up in the console, either, which did not help _at all_ on the situation. I double-checked that the bug only occurred in production, which it did. Also double-checked that I hadn't put an extra zero on the revalidation time or anything; no luck either.

## Debugging in progress...

In my hands was a bug that I had no idea what the cause of was. The only thing I knew is that, since it seemed to only happen in production, it probably had something to do with [Vercel](https://vercel.com), the hosting platform I use for this blog.

Maybe Vercel didn't support ISR? Extremely unlikely, but I supposed it'd be worth a shot. In order to test this, I created a dummy project that used ISR, just for the sake of it. Almost as I was expecting, though, it did work both locally _and_ when deployed on the platform. No luck.

Maybe it was because I was using dynamic paths? I modified the dummy project to use dynamic paths as well, but it still worked just fine on Vercel.

![Getting tired...](/img/cat_ded.gif)

A couple of hours had passed already. I had spent most the time just... browsing through the code, seeing if I could find something, _anything_ that could lead me to and answer. I was still completely clueless.

## And everything seemed lost...

...until I noticed something.

See, it couldn't be a bug directly _on_ Vercel, right? That means the error was probably caused by something specific in my code. Perhaps I had encountered some sort of edge-case Vercel didn't accout for.

Just as I was losing my last bit of sanity left, **it** popped into my mind.

So, my blog's posts were files, right? If you checked the repository at that point in time, you could see that they lived as plain markdown files inside the project, and they were read from the file system to generate the pages.

Why, it turns out Vercel doesn't give functions like `getStaticProps` full access to the file system when performing ISR. That is, `getStaticProps` was unable to access, among other files, the posts folder. Therefore, it was throwing an error that prevented the page from successfully regenerating.

That was it.

## What now?

See, the fastest solution right there would probably have been to take a look at the Vercel docs in order to find out a way to give my functions access to the posts directory during ISR. Heck, maybe it could have been a really easy fix for all I knew.

But that'd be boring, right?

I thought this would probably be a nice opportunity to revamp how I handle posts and how I publish them. Perhaps it was about time I ended the whole "markdown-files-living-in-the-repository" thing, and probably move to using a database or something along those lines.

_Oh yeah, it's refactoring time._

![Definitely a decision I wouldn't regret at all](/img/sunglasses_wow.gif)

## The end of it?

Next thing you know, I'm migrating everything to a MongoDB database and refactoring nearly the **entire** backend of the blog. Unexpectedly, this happened to take a _looong_ time, mostly because, as it turns out, Mongoose, Next.js and TypeScript don't go along very well sometimes. (Might be an idea for a future post though!)

Finally, after tons of refactoring, the view counter worked and updated as it should. Success!

Pretty funny, right? The cause of the bug ended up being something completely unrelated and that I had never _ever_ really thought about. But hey, that's what programming is all about, right?

_Right?_

Alright, I'm done.

![How I sleep knowing the view counter finally works](/img/web-dev/how_i_sleep_knowing.jpg)
