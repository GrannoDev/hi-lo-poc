<script lang="ts">
	import DeckTile from '$lib/components/DeckTile.svelte';

	const decks = [5, 6, 7, 8];
</script>

<div class="flex min-h-dvh flex-col items-center justify-center px-6">
	<div class="flex flex-col items-center gap-2">
		<h1 class="font-mono text-6xl font-bold tracking-tighter text-primary">HI-LO</h1>
		<p class="text-text-dim">Select number of decks to begin</p>
	</div>

	<div class="mt-10 grid w-full max-w-xs grid-cols-2 gap-4">
		{#each decks as count}
			<DeckTile {count} />
		{/each}
	</div>

	<p class="mt-12 text-center text-xs text-text-dim/50">
		Tap a deck count to start counting
	</p>
</div>
