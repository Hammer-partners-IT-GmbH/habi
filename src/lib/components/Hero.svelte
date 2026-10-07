<script lang="ts">
	import { sanitizeHTML } from '$lib/utils/sanitizeHTML';

	const { title = '', subtitle = '' } = $props();

	const features = [
		'DSGVO-konform',
		'Cloudbasiert & sicher',
		'Individuell konfigurierbar',
		'App & Webzugriff'
	];
</script>

<div class="mx-auto max-w-4xl text-center">
	<!-- svelte-ignore a11y_missing_content -->
	<h1
		class="font-display mb-6 text-5xl font-light leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
		use:sanitizeHTML={[title]}
	></h1>

	<p
		class="mx-auto mb-10 max-w-2xl font-sans text-lg font-light leading-relaxed text-steel-light/90 md:text-xl"
		use:sanitizeHTML={[subtitle]}
	></p>

	<div class="mt-16 flex flex-wrap items-center justify-center gap-8">
		{#each features as feature (feature)}
			<div class="flex items-center gap-2 text-steel/70">
				<span class="text-gold text-lg">✓</span>
				<span class="font-sans text-sm">{feature}</span>
			</div>
		{/each}
	</div>
</div>
