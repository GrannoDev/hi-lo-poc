<script lang="ts">
	let {
		value,
		label,
		sublabel,
		onclick
	}: {
		value: string;
		label: string;
		sublabel: string;
		onclick: () => void;
	} = $props();

	const variant = $derived(
		label === '+1' ? 'primary' : label === '-1' ? 'danger' : 'muted'
	);
</script>

<button
	type="button"
	{onclick}
	class="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl border py-6 transition-all active:scale-95
		{variant === 'primary'
			? 'border-primary/30 bg-primary/10 active:bg-primary/20'
			: variant === 'danger'
				? 'border-danger/30 bg-danger/10 active:bg-danger/20'
				: 'border-border bg-bg-elevated active:bg-surface'}"
>
	<span
		class="font-mono text-3xl font-bold
			{variant === 'primary'
				? 'text-primary'
				: variant === 'danger'
					? 'text-danger'
					: 'text-text-dim'}"
	>
		{label}
	</span>
	<span class="text-xs text-text-dim">{sublabel}</span>
</button>
