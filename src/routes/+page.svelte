<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>Random Number: {data.n}</p>

<button type="submit" on:click={() => fetch('/api/revalidate').then(r => console.log(r.json()))}>Invalidate</button>
<button on:click={() => window.location.reload()}>Refresh</button>
