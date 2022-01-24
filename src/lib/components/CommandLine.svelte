<script lang="ts">
	export let username: string;
	export let desktopName: string;
	export let cursor: boolean;
</script>

<span class="green">{username}@{desktopName}</span>:<span class="light-blue"
	>~</span
>${' '}<slot />{#if cursor}█{/if}
