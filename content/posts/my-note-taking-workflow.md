---
title: My Workflow for Taking Class Notes
summary: A nice note-taking setup with Obsidian, tmux and Neovim
tags: [productivity, neovim]
createdAt: 2025-07-20
---

I'm currently majoring in Computer Science. As such, I treat the matter of taking notes during class _with the upmost respect_.

At least, I think I have a pretty nice note-taking workflow, which I'd like to share here.

![A screenshot of the author's note-taking workflow.](/assets/posts/my-note-taking-workflow/obsidian-neovim.png 'This is what my screen looks like most of the time when taking notes.')

If you're interested on my notes, they're open source. You can find them [here][class-notes]. (They're in spanish, though. Hope you don't mind).

## The core: Obsidian

The heart of my workflow is [Obsidian], a free and awesome note-taking app. Unlike other online apps like Notion, Obsidian works 100% locally on your machine. More than anything else, this means your notes _belong to you_, which is something I value incredibly.

![A screenshot of the author's Obsidian vault](/assets/posts/my-note-taking-workflow/obsidian.png 'This is what a note in my Obsidian vault looks like.')

You can see my directory structure from the screenshot; it's mostly self explanatory.

The most important plugins I have are the following:

- [Git][obsidian-plugin-git]: Allows me to store my notes on a Git repo and sync them via GitHub.
- [Excalidraw][obsidian-plugin-excalidraw]: Integrates the [Excalidraw] tool into Obsidian. I don't use this one that much anymore, but it's still useful.
- [Extended MathJax][obsidian-plugin-extended-mathjax]: Adds support for a custom LaTeX preamble. Useful to add custom macros, commands, etc.
- [LaTeX Suite][obsidian-plugin-latex-suite]: Enhances your LaTeX editing experience with snippets, auto-fractions, and more. A **must-have** if you write a decent amount of math on your notes.

I also have a few additional plugins (some of which I'll mention later on), but these are the really important ones in my opinion.

For taking my notes, I use the [Zettelkasten Method][zettelkasten]. In short, the Zettelkasten Method (applied to Obsidian) consists of using hyperlinks and tags to organize notes instead of following some directory structure. One of the main benefits of the Zettelkasten Method is the fact that **you don't have a strict, brittle directory structure** for your notes. In practice, this means that you can create notes about pretty much whatever you want, and the note _will_ fit into your directory structure precisely because there is _no_ directory structure.

If you're even a bit interested in the Zettelkasten Method, I _absolutely_ recommend you read the article I linked previously.

## The extra mile

Now, if you _do_ have a life, you can stop right here. This is probably everything you'll ever need for taking notes.

If you don't have a life, please _do_ proceed.

### My environment

I use NixOS with the [Hyprland] tiling window manager, which, as the name suggests, allows me to place windows in a tiled layout on my screen. As with most other tiling window managers, Hyprland's workflow is mostly keyboard-based. This factor is _huge_ for my productivity, because it means that I can do pretty much anything on my computer without getting my hands off of my keyboard. It's not only about speed though, it's also about comfort.

If you want to, you can check out my Hyprland config [here][hyprland-config].

### Neovim

[Neovim] is, hands down, the best text editor. No -- it's actually the only correct option. Don't ask any questions.

I'm a _huge_ Neovim nerd, so I like to do _absolutely everything_ in Neovim. I mean it. I use Neovim to code in virtually every single one of my university classes. Doesn't matter what language I'm writing in; in Neovim I feel at home.

This is why, instead of writing my notes directly on Obsidian, I use [obsidian.nvim] to write my notes in Neovim side-by-side with the Obsidian app. Also, I find [obsidian-bridge.nvim] absolutely necessary since it adds some nice features like scroll sync between Neovim and Obsidian.

The way you manage your sessions in Neovim is important, too. No one really wants to restore their Neovim workspace the way it was last time they quit. There are many existing solutions for this such as [mini.sessions] and [project.nvim]. However, I prefer to try and stick to what Neovim has built-in: native Neovim sessions via `Session.vim`. To make them actually comfortable to use, though, I use tpope's [vim-obsession] plugin and also have added `Session.vim` to my global `.gitignore` file.

### Tmux

[Tmux] is a "terminal multiplexer". Essentially, it allows you to create and manage multiple terminals (and terminal sessions) within one single terminal window. However, what's most useful for this workflow of mine is its capability to **keep my sessions running in the background**.

![A screenshot of an example of tmux's usage](/assets/posts/my-note-taking-workflow/tmux.png "This is what my tmux might look like when I'm working on a project.")

Together with the [tmux-resurrect] and [tmux-continuum] plugins, tmux allows me to have a persistent "class-notes" session with a Neovim session open, which I can switch to and from anytime I want. This way, I can be working on anything else at a given time on another tmux session, and quickly switch to my notes session as soon as I have to write something down.

## Closing words

The way you take notes can be genuinely game-changing. That's why I've put so much effort into my own workflow (although I admit there's a point where it's mostly due to )

Perhaps one of the most important aspects of a good note-taking workflow is that it should be fun **to you**. Not to me, not to some other random guy on the internet who tells you that there's some "single, right way" to take notes. I really do believe that having while writing fun can be a huge productivity booster.

Or... if handwritten notes are your deal, you do you. I ain't no one to boss you around.

[class-notes]: https://github.com/Grazen0/class-notes/
[excalidraw]: https://excalidraw.com/
[obsidian]: https://obsidian.md/
[obsidian-plugin-excalidraw]: https://github.com/zsviczian/obsidian-excalidraw-plugin/
[obsidian-plugin-extended-mathjax]: https://github.com/wei2912/obsidian-latex?
[obsidian-plugin-git]: https://github.com/Vinzent03/obsidian-git/
[obsidian-plugin-latex-suite]: https://github.com/artisticat1/obsidian-latex-suite/
[hyprland]: https://hyprland.org/
[tmux]: https://github.com/tmux/tmux
[tmux-continuum]: https://github.com/tmux-plugins/tmux-continuum/
[tmux-resurrect]: https://github.com/tmux-plugins/tmux-resurrect/
[zettelkasten]: https://zettelkasten.de/introduction/
[obsidian.nvim]: https://github.com/epwalsh/obsidian.nvim/
[obsidian-bridge.nvim]: https://github.com/oflisback/obsidian-bridge.nvim/
[mini.sessions]: https://github.com/echasnovski/mini.sessions/
[project.nvim]: https://github.com/ahmedkhalf/project.nvim/
[hyprland-config]: https://github.com/Grazen0/nixos-config/tree/main/profiles/home/graphical/wm/hypr/hyprland
[neovim]: https://neovim.io/
[vim-obsession]: https://github.com/tpope/vim-obsession/
