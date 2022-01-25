<div class="content">
	<slot />
</div>

<style lang="scss">
	.content {
		max-width: 800px;
		margin: 0 auto;
		padding: 1em;

		font-family: 'Ubuntu Mono', consolas;
		font-size: 1.5em;
		line-height: 1.8em;

		background-color: #000000ee;
		color: white;

		border-radius: 10px;

		& :global(h1) {
			font-size: 1.5em;
			text-align: center;
			margin: 1em 0;
		}

		& :global(h2) {
			margin: 1.5em 0 0 0;
			// font-size: 1.25em;
		}

		& :global(a) {
			color: #799fbd;
		}

		& :global(span[title]) {
			text-decoration: underline;
		}

		& :global(ul) {
			line-height: 1.5em;
		}
	}
</style>
