<script lang="ts">
	const {
		title = '',
		subtitle = '',
		ctaPrimary = 'Jetzt Demo anfragen',
		ctaSecondary = 'Mehr erfahren'
	} = $props();

	const features = [
		'DSGVO-konform',
		'Cloudbasiert & sicher',
		'Individuell konfigurierbar',
		'App & Webzugriff'
	];
</script>

<div class="mx-auto max-w-4xl text-center">
	<h1
		class="font-display mb-6 text-5xl font-light leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
	>
		{#if title}
			{@html title}
		{/if}
	</h1>

	<p
		class="mx-auto mb-10 max-w-2xl font-sans text-lg font-light leading-relaxed text-steel-light/90 md:text-xl"
	>
		{subtitle}
	</p>

	<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
		<button
			class="bg-gold text-navy-dark font-medium hover:bg-gold-light border-0 px-8 py-3 text-base rounded"
		>
			{ctaPrimary}
		</button>

		<button
			class="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-3 text-base rounded"
		>
			{ctaSecondary}
		</button>
	</div>

	<div class="mt-16 flex flex-wrap items-center justify-center gap-8">
		{#each features as feature (feature)}
			<div class="flex items-center gap-2 text-steel/70">
				<span class="text-gold text-lg">✓</span>
				<span class="font-sans text-sm">{feature}</span>
			</div>
		{/each}
	</div>
</div>
