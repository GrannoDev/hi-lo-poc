<script lang="ts">
	let { count }: { count: number } = $props();
</script>

<a
	href="/session/{count}"
	class="group flex aspect-square flex-col items-center justify-center rounded-2xl border border-border-subtle bg-bg-card transition-all active:scale-95 hover:border-primary/40 hover:bg-bg-elevated"
>
	<span class="font-mono text-5xl font-bold text-text-bright transition-colors group-hover:text-primary">
		{count}
	</span>
	<span class="mt-1 text-sm text-text-dim">decks</span>
</a>
