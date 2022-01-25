<script lang="ts">
	export let username: string;
	export let desktopName: string;
	export let cursor: boolean;
</script>

<span class="hide"
	><span class="green">{username}@{desktopName}</span>:<span class="light-blue">~</span></span
>${' '}<slot />{#if cursor}<span class="cursor">█</span>{/if}

<style>
	.cursor {
		user-select: none;
	}

	@media screen and (max-width: 500px) {
		.hide {
			display: none;
		}
	}
</style>
