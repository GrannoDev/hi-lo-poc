<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>HI-LO Card Counter</title>
	<meta name="description" content="HI-LO card counting assistant" />
</svelte:head>

<div class="noise">
	{@render children()}
</div>
