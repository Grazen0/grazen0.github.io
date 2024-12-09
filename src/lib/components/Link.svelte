<script lang="ts">
	import classNames from 'classnames';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		external?: boolean;
	}

	let {
		external = false,
		class: className,
		children,
		...props
	}: Props = $props();
</script>

<a
	class={classNames(className, 'text-spring-blue hover:underline')}
	target={classNames(external && '_blank')}
	rel={classNames(external && 'noopener noreferrer')}
	{...props}>{@render children?.()}</a
>
