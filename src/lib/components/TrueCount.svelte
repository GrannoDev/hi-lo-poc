<script lang="ts">
	let { trueCount, runningCount }: { trueCount: number; runningCount: number } = $props();

	const rounded = $derived(Math.round(trueCount * 10) / 10);
	const sign = $derived(rounded >= 0 ? '+' : '\u2212');
	const number = $derived(Math.abs(rounded).toFixed(1));
	const colorClass = $derived(
		rounded >= 3 ? 'text-primary' : rounded >= 1 ? 'text-warm' : 'text-danger'
	);
	const glowColor = $derived(
		rounded >= 3
			? '0 0 40px var(--color-primary-glow), 0 0 80px var(--color-primary-glow)'
			: rounded >= 1
				? '0 0 40px var(--color-warm-glow), 0 0 80px var(--color-warm-glow)'
				: '0 0 40px var(--color-danger-glow), 0 0 80px var(--color-danger-glow)'
	);
</script>

<div class="flex flex-col items-center gap-1">
	<span class="text-xs font-medium tracking-widest text-text-dim uppercase">True Count</span>
	<div
		class="relative font-mono font-bold leading-none transition-all duration-300 {colorClass}"
		style:text-shadow={glowColor}
	>
		<span class="absolute right-full top-1/2 -translate-y-1/2 text-4xl opacity-60">{sign}</span>
		<span class="text-7xl">{number}</span>
	</div>
	<span class="mt-2 font-mono text-lg text-text-dim">
		RC: {runningCount >= 0 ? '+' : ''}{runningCount}
	</span>
</div>
