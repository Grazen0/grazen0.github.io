<script lang="ts">
	import classNames from 'classnames';
	import type { HTMLAttributes } from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export interface Props extends HTMLAttributes<any> {}

	let { class: className, children, ...props }: Props = $props();
</script>

<em
	class={classNames(
		className,
		'text-carp-yellow not-italic drop-shadow-[0_0_0.1rem_theme(colors.carp-yellow/75%)] '
	)}
	{...props}>{@render children?.()}</em
>
