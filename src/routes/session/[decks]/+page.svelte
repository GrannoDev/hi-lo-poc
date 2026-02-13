<script lang="ts">
	import { page } from '$app/state';
	import { createSession } from '$lib/counting.svelte.js';
	import TrueCount from '$lib/components/TrueCount.svelte';
	import CountButton from '$lib/components/CountButton.svelte';

	const deckCount = $derived(Number(page.params.decks));
	const session = $derived(createSession(deckCount));
</script>

<div class="flex min-h-dvh flex-col">
	<!-- Header -->
	<header class="flex items-center justify-between px-4 pt-4 pb-2">
		<a
			href="/"
			class="rounded-lg border border-border-subtle px-4 py-2 text-base text-text-dim transition-colors hover:text-primary active:scale-95"
		>
			&larr; Exit
		</a>
		<span class="font-mono text-base text-text-dim">
			{session.deckCount} deck{session.deckCount === 1 ? '' : 's'}
		</span>
		<button
			type="button"
			onclick={() => session.reset()}
			class="rounded-lg border border-danger/30 px-4 py-2 text-base text-danger/70 transition-colors hover:text-danger active:scale-95"
		>
			Reset
		</button>
	</header>

	<!-- Progress bar -->
	<div class="mx-4 mt-1 h-1 overflow-hidden rounded-full bg-border-subtle">
		<div
			class="h-full rounded-full bg-primary/60 transition-all duration-200"
			style:width="{Math.min(session.progress * 100, 100)}%"
		></div>
	</div>

	<!-- Main content -->
	<div class="flex flex-1 flex-col items-center justify-center gap-6 px-4">
		<TrueCount trueCount={session.trueCount} runningCount={session.runningCount} />

		<!-- Stats row -->
		<div class="flex w-full max-w-xs justify-around">
			<div class="flex flex-col items-center">
				<span class="text-xs text-text-dim">Cards</span>
				<span class="font-mono text-sm text-text">{session.cardsDealt} / {session.totalCards}</span>
			</div>
			<div class="flex flex-col items-center">
				<span class="text-xs text-text-dim">Decks Left</span>
				<span class="font-mono text-sm text-text">{session.decksRemaining.toFixed(1)}</span>
			</div>
		</div>
	</div>

	<!-- Undo + Count buttons -->
	<div class="flex flex-col gap-3 px-4 pt-4 pb-8">
		<button
			type="button"
			onclick={() => session.undo()}
			disabled={!session.canUndo}
			class="w-full rounded-2xl border border-border-subtle bg-bg-elevated py-3 text-base text-text-dim transition-all hover:text-primary active:scale-95 disabled:opacity-30"
		>
			Undo
		</button>
		<div class="flex gap-3">
			<CountButton label="+1" sublabel="2–6" value="+1" onclick={() => session.record(1)} />
			<CountButton label="0" sublabel="7–9" value="0" onclick={() => session.record(0)} />
			<CountButton label="-1" sublabel="10–A" value="-1" onclick={() => session.record(-1)} />
		</div>
	</div>
</div>
