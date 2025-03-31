---
title: My Workflow for Taking Class Notes at University
summary: A nice note-taking setup with Obsidian, tmux and Neovim
tags: [productivity, obsidian, neovim]
---

I'm currently majoring in Computer Science. As such, I treat the matter of taking notes during class *with the upmost respect*.

At least, I think I have a pretty nice note-taking workflow, which I'd like to share here.

![A screenshot of the author's note-taking workflow.](/assets/posts/my-note-taking-workflow/obsidian-neovim.png "This is what my screen looks like most of the time when taking notes.")

If you're interested on my notes, they're open source. You can find them [here][class-notes].

## The core: Obsidian

The heart of my workflow is [Obsidian], a free and awesome note-taking app. Unlike Notion and other online apps, Obsidian works completely on your machine. More than anything else, this means your notes *belong to you*, which is something I value incredibly.

![A screenshot of the author's Obsidian vault](/assets/posts/my-note-taking-workflow/obsidian.png "This is what a note in my Obsidian vault looks like.")

You can see my directory structure from the screenshot; it's mostly self explanatory.

The most important plugins I have are the following:

- [Git][obsidian-plugin-git]: Allows me to store my notes on a Git repo and sync them via GitHub.
- [Excalidraw][obsidian-plugin-excalidraw]: Integrates the [Excalidraw] tool into Obsidian. I don't use this one that much anymore, but it's still useful.
- [Extended MathJax][obsidian-plugin-extended-mathjax]: Adds support for a custom LaTeX preamble. Useful to add custom macros, commands, etc.
- [LaTeX Suite][obsidian-plugin-latex-suite]: Enhances your LaTeX editing experience with snippets, auto-fractions, and more. A **must-have** if you write a decent amount of math on your notes.

I also have a few additional plugins (some of which I'll mention later on), but these are the really important ones, in my opinion.

My notes use the [Zettelkasten Method][zettelkasten] (or at least I try to make them). In short, the Zettelkasten Method (applied to Obsidian) consists of using hyperlinks and tags to organize notes instead of following some directory structure. One of the main benefits of the Zettelkasten Method I've noticed from my own is the fact that **you don't have an unchangeable directory structure** for your notes. In practice, this means you can pretty much create notes about whatever you want, and the note *will* fit into your directory structure precisely because there is *no* directory structure.

If you're even a bit interested in the Zettelkasten Method, I *absolutely* recommend you read the article I linked previously.

## The extra stuff

Now, if you *do* have a life, you can stop right here. This is probably everything you'll ever need for taking notes.

If you don't have a life, please *do* proceed.

I use NixOS with the [river] tiling window manager, which, as the name suggests, allows me to place windows in a tiled layout on my screen. As with most other window managers, river's workflow is mostly keyboard-based. These two factors are *huge* for productivity, in my opinion.

### Neovim

I'm a *huge* Neovim nerd, so I prefer to do *absolutely everything* in Neovim.

Mention tpope/vim-obsession

### Tmux

[Tmux] is a "terminal multiplexer". Essentially, it allows you to create and manage multiple terminals (and terminal sessions) within one single terminal window. However, what's most useful for this workflow of mine is its capability to **keep my sessions running** in the background.

![A screenshot of an example of tmux's usage](/assets/posts/my-note-taking-workflow/tmux.png "This is what tmux may look like when working on a proyect.")

Together with the [tmux-resurrect] and [tmux-continuum] plugins, tmux allows me to have a persistent "class-notes" session with a Neovim session open, which I can switch to and from anytime I want. This way, I can be working on anything else at a given time on another tmux session, and quickly switch to my notes session as soon as I have to write something down during class.

## Closing words

[class-notes]: https://github.com/Grazen0/class-notes/
[excalidraw]: https://excalidraw.com/
[obsidian]: https://obsidian.md/
[obsidian-plugin-excalidraw]: https://github.com/zsviczian/obsidian-excalidraw-plugin/
[obsidian-plugin-extended-mathjax]: https://github.com/wei2912/obsidian-latex
[obsidian-plugin-git]: https://github.com/Vinzent03/obsidian-git
[obsidian-plugin-latex-suite]: https://github.com/artisticat1/obsidian-latex-suite/
[river]: https://codeberg.org/river/river/
[tmux]: https://github.com/tmux/tmux
[tmux-continuum]: https://github.com/tmux-plugins/tmux-continuum
[tmux-resurrect]: https://github.com/tmux-plugins/tmux-resurrect
[zettelkasten]: https://zettelkasten.de/introduction/
