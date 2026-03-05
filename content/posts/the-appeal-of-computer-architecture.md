---
title: The Appeal of Computer Architecture
summary: My draw towards hardware and systems programming.
tags: [arch, hardware, c]
createdAt: 2026-03-05
---

I discovered computer architecture all the way back in high-school, mostly
thanks to Ben Eater's [6502 computer series][6502-series]. I was fascinated at
how an actual computer could be assembled from a few chips on a breadboard, and
at how I could make software run as real electrical signals on my own hand-wired
hardware. A perfect evolution of building Lego as a kid, if that makes sense. I
built a small, simple computer with a Z80 CPU, ROM, RAM, and an LCD screen. I
would program the system in Z80 assembly via an Arduino MEGA and a hand-soldered
circuit board that wrote the binary to the ROM chip. I learned a bit about
electronics in general, too. Despite all the fun I had, I did end up leaving all
of this behind after a year or so, probably due to focusing on other
school-related activities.

![My Z80 computer](/assets/posts/the-appeal-of-computer-architecture/z80_computer.jpeg '(I did accidentally place the LCD screen upside-down).')

Last semester, I finally took Computer Architecture (a class dreaded by many in
my university, apparently). This class not only re-lit that spark in me that I
had long lost to time, but fueled it more than I could have ever imagined back
then.

Anyways, this post will be an assortment of related and unrelated ideas I'd like
to talk about on the topic.

[6502-series]: https://www.youtube.com/watch?v=LnzuMJLZRdU&list=PLowKtXNTBypFbtuVMUVXNR0z1mu7dp7eH

## The importance of abstraction

The concept of abstraction plays an important role on nearly any field of
computer science. However, I have not yet found another topic that uses
abstraction in such an illustrative and appealing way as computer architecture.
Computer architecture essentially traverses the following (perhaps simplified)
progression of abstraction layers:

1. Transistors (not taught in my class)
2. Logic gates
3. Combinational logic (muxes, adders, etc.)
4. Sequential logic (latches, flip flops, FSMs, etc.)
5. Microarchitecture
6. Architecture (x86, ARM, RISC-V, etc.)
7. Software

Throughout the semester, we traveled from the logic gate level all the way up to
(micro)architecture and software. As it turns out, something as huge as a CPU
can always be recursively decomposed into many smaller blocks of sequential and
combinational logic, each of which are just composed of logic gates at the lower
level (made out of transistors, of course).

I would argue that computer architecture, as a field, excels at proving the fact
that big things can be built from small, fundamental principles ---given the
right amount of _discipline_---. I keep finding it fascinating how any hardware
block, no matter how big, can always be recursively divided into individual,
simpler components.

Perhaps this recursive nature of abstraction plays a part in my liking of it. I
tend to find recursive objects pretty, after all.

> The book we used in my class (Harris and Harris' "Computer Architecture and
> Digital Design") talks about a concept it refers to as **discipline**: the
> ability to choose the right layer of abstraction for a particular task.
> Discipline proves to be crucial for hardware design, but is a skill that can
> be used most likely anywhere else in computer science.

## Unraveling the black box

**Black box** is a term that refers to a system that, despite one not knowing
about its inner workings, can be used solely in terms of its inputs and outputs.
In short: something that "just works". _(See electrical appliances, integrated
circuits, compilers, LLMs, etc.)_. When something is called a "black box", this is
usually said with the additional meaning of its inner workings commonly not
being understood as well.

Computers may just be the ultimate black box, and even more so with how
complicated they have gotten by this day and age. Deep inside, a motherboard
contains decades of technological research and engineering soldered onto a piece
of fiberglass. And yet, we use them every day without sparing a single moment to
wonder how exactly those _so-called "transistors"_ magically make things happen
on the screen.

A computer architecture class might not be able to show you the _entire_ picture
(and no undergraduate class could hope to do this at a reasonable detail for
each component of the system), but it sure lets you understand some of the most
important components, including the CPU, memory systems, and I/O.

> An example: All of a sudden, the stack is not just this abstract concept
> somewhere in your computer that _somehow_ stores function calls and local
> variables. It becomes clear how exactly function calls work: how the stack
> pointer is manipulated, how return addresses and local variables are saved,
> and how this affects performance. Tail-call recursion optimizations benefit
> from this sort of analysis, for example.

Computer architecture has been the biggest leap I have ever taken so far in
understanding the computer black box. I would argue that a leap like this is an
absolute must for any CS student. We work on computers, after all (unless you go
for the theoretical side, of course), so it is therefore fundamental to
understand to a reasonable degree each part of their inner workings.

## Software-hardware interaction

Ever since my experiments back in high-school, I've been fascinated by how
software and hardware interact. A great deal of my liking for my Z80 computer
back then came from how the software _I_ wrote _on my laptop_ would actually
translate to _electrical signals_ in a physical circuit; electrical signals that
would interact with the logic I had placed in the breadboard to provide, for
example, memory mapping. The numbers I had typed in my assembly program became
actual signals sent to the LCD screen that

This was a feeling that something like web development (which I had been
focusing on before then) could never hope to match. I found something very
special in going bare-metal. My programs were suddenly not simply pieces of text
executed by another black box (see JavaScript, Python, etc.), but actual,
_physical_ instructions controlling the Z80's silicon. The term "machine code"
became _real_.

My computer architecture class expanded my knowledge about how software
interacts with hardware. We designed a RISC-V core in Verilog and synthesized it
to a real FPGA board, which led me to investigate what kinds of systems I could
design with my own core. I realized that, much like with my Z80 computer, I now
had the ability to design systems around my RISC-V core, except that I could now
design by myself not only the system overall, but also my own I/O peripherals.
Memory mappings were now designed not with 74LS chips, but with Verilog wires
and muxes.

We were taught RISC-V assembly in class (which sufficed for the course,
clearly), but I discovered that C code could compile to bare-metal RISC-V too,
unsurprising as it may be to many. Turns out that my custom-designed hardware
was capable of running not just assembly, but also actual C code, which
completely baffled me. This, together with the fact that our FPGA board
contained multiple general-purpose I/O pins, meant that I could now explore
software-hardware interaction within a much more comfortable language.

Given particular memory mappings and some physical wire connections, a program
like this could now print to an LCD screen:

```c
// Memory-mapped addresses as per my own hardware design
#define LCD_INSTR (*(volatile uint8_t*)0x8000'0000)
#define LCD_DATA (*(volatile uint8_t*)0x8000'0001)

void lcd_print(char s[]) {
    while (*s != '\0')
        LCD_DATA = *s++;
}

void main() {
    LCD_INSTR = 0b0000'0001; // Clear screen
    LCD_INSTR = 0b0000'1000; // Reset cursor

    lcd_print("Hello, world!");
}
```

And there's something I find very enjoyable about writing bare-metal C geared
specifically towards hardware that I, myself, have designed with Verilog.

Perhaps the best display of what my curiosity led me to is what we presented as
our group's final class project: a [Snake game]. It used custom-made modules for
VGA and audio output and to read a NES Classic Mini controller via I2C. All of
these were used by the RISC-V core, which was [programmed in C][snake-c].

![A picture of the Snake game](/assets/posts/the-appeal-of-computer-architecture/snake.png 'This is what the game looked like.')

> Interestingly, I managed to borrow some programming techniques from the NES
> itself, namely the use of VBlanks and _draw buffering_. I knew these
> techniques from a period some time ago where I explored programming for the
> NES.

[snake game]: https://github.com/Grazen0/riscv-cpu/
[snake-c]: https://github.com/Grazen0/riscv-cpu/blob/main/firmware/src/main.c

## Closing words

Knowledge is power. I think there's something truly beautiful about exploring
computers from their lowest level all the way to the software layer. I say this
even for CS students not particularly interested in systems programming or
hardware. As said before, it truly is a marvelous display of decades of
engineering and research, as well as a prime display of abstraction in practice.

I hope I can keep finding new areas between hardware and low-level to explore.
My next step in this journey will be operating systems, which I believe I'll
enjoy as much, if not even more than computer architecture.
