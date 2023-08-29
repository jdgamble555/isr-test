<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	let invalidated = false;

	const revalidate: SubmitFunction<{ success: boolean }> = () => {
		return async ({ result }) => {
			switch (result.type) {
				case 'failure':
					applyAction(result);
					break;
				case 'error':
					console.error(result.error);
					break;
				case 'success':
					invalidated = true;
			}
		};
	};
</script>

<h1>Welcome to SvelteKit</h1>

<p>Random Number: {data.n}</p>
<form method="post" use:enhance={revalidate}>
	<button formaction="/revalidate">Invalidate</button>
	<button on:click={() => window.location.reload()}>Refresh</button>
</form>

{#if invalidated}
	<p style={'color:red'}>Invalidated!</p>
{/if}
