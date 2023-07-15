<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	let invalidated = false;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>Random Number: {data.n}</p>

<button type="submit" on:click={() => fetch('/api/revalidate').then(() => (invalidated = true))}>
	Invalidate
</button>
<button on:click={() => window.location.reload()}>Refresh</button>
{#if invalidated}
	<p style={'color:red'}>Invalidated!</p>
{/if}
