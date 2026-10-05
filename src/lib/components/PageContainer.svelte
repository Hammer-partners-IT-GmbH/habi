<script lang="ts">
	// Svelte 5 prop access via $props()
	const { topPadding = 'pt-16', className = '', children } = $props();
</script>

<section class={'relative flex items-center overflow-hidden ' + topPadding + ' ' + className}>
	<!-- Background decoration copied from root page for consistent look -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
		<div
			class="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-steel/5 blur-3xl animate-pulse-slow"
		></div>
		<div
			class="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-gold/5 blur-3xl animate-pulse-slow"
			style="animation-delay: 2s"
		></div>
		<div
			class="absolute inset-0 opacity-[0.03]"
			style="background-image: linear-gradient(rgba(155,186,202,1) 1px, transparent 1px), linear-gradient(90deg, rgba(155,186,202,1) 1px, transparent 1px); background-size: 80px 80px"
		></div>
	</div>

	<div class="container relative py-24 lg:py-32">
		{@render children()}
	</div>
</section>
