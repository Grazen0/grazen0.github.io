<script lang="ts">
  import { randomRange, clearNullishTimeout } from '$lib/util';
  import { onMount } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  export interface Props extends HTMLAttributes<HTMLDivElement> {
    command: string;
    output: string;
    prompt?: string;
    cursor?: string;
    initialDelay?: number;
    cursorBlinkInterval?: number;
    typingDelay?: [min: number, max: number];
    commandEnterDelay?: [min: number, max: number];
  }

  let {
    command,
    output,
    prompt = '$ ',
    cursor = '█',
    cursorBlinkInterval = 500,
    initialDelay = 200,
    typingDelay = [80, 120],
    commandEnterDelay = [1000, 1200],
    class: className,
  }: Props = $props();

  let commandProgress = $state(0);
  let isCursorVisible = $state(true);
  let outputReached = $state(false);
  let cursorBlinkTimeout = $state<number | null>(null);
  let terminalTickTimeout = $state<number | null>(null);

  const blinkCursor = (): void => {
    isCursorVisible = !isCursorVisible;
    cursorBlinkTimeout = setTimeout(blinkCursor, cursorBlinkInterval);
  };

  const resetCursorBlink = (): void => {
    isCursorVisible = true;
    clearNullishTimeout(cursorBlinkTimeout);
    cursorBlinkTimeout = setTimeout(blinkCursor, cursorBlinkInterval);
  };

  const type = (): void => {
    commandProgress++;
    resetCursorBlink();

    if (commandProgress >= command.length) {
      terminalTickTimeout = setTimeout(
        () => {
          outputReached = true;
          resetCursorBlink();
        },
        randomRange(commandEnterDelay[0], commandEnterDelay[1]),
      );
    } else {
      terminalTickTimeout = setTimeout(type, randomRange(typingDelay[0], typingDelay[1]));
    }
  };

  onMount(() => {
    resetCursorBlink();
    const initialTimeout = setTimeout(type, initialDelay);

    return (): void => {
      clearTimeout(initialTimeout);
      clearNullishTimeout(cursorBlinkTimeout);
      clearNullishTimeout(terminalTickTimeout);
    };
  });

  let partialCommand = $derived(command.substring(0, commandProgress));
  let displayCursor = $derived(isCursorVisible ? cursor : '');
  let buffer = $derived(
    !outputReached ? prompt + partialCommand : prompt + command + '\n' + output + '\n' + prompt,
  );
</script>

<div class={['whitespace-pre', className]}>
  {buffer}{displayCursor}
</div>
