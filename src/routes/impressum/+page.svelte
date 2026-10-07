<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
</script>

<PageContainer className="bg-transparent">
	<div class="mx-auto max-w-4xl">
		<header class="mb-8 flex flex-col gap-4 md:mb-12">
			<p class="text-sm font-medium uppercase tracking-[0.25em] text-gold/80">Legal</p>
			<h1 class="text-4xl font-light tracking-tight text-white md:text-5xl">Impressum</h1>
			<p class="max-w-2xl text-base text-steel/80">Angaben gemäß § 5 DDG</p>
		</header>

		<main
			class="overflow-hidden rounded-[28px] border border-white/10 bg-white/3 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm"
		>
			<div
				class="border-b border-white/10 bg-linear-to-r from-gold/10 via-transparent to-steel/10 px-6 py-5 md:px-8"
			>
				<p class="text-sm uppercase tracking-[0.2em] text-gold">Hammer partners IT GmbH</p>
			</div>

			<div class="grid gap-6 p-6 md:grid-cols-2 md:p-8">
				<div class="space-y-2 rounded-2xl border border-white/10 bg-white/2 p-5 md:col-span-2">
					<h2 class="text-lg font-medium text-gold">Unternehmen</h2>
					<p class="text-lg text-white">Hammer partners IT GmbH</p>
					<p class="text-steel/80">Außer der Schleifmühle 75</p>
					<p class="text-steel/80">28203 Bremen</p>
					<p class="text-steel/80">Deutschland</p>
				</div>

				<div class="space-y-2 rounded-2xl border border-white/10 bg-white/2 p-5">
					<h2 class="text-lg font-medium text-gold">Vertretung</h2>
					<p class="text-white">Vertreten durch die Geschäftsführer:</p>
					<ul class="space-y-1 text-steel/80">
						<li>Thorsten Hammer</li>
						<li>Mathias Henke</li>
						<li>Oliver Schumacher</li>
					</ul>
				</div>

				<div class="space-y-2 rounded-2xl border border-white/10 bg-white/2 p-5">
					<h2 class="text-lg font-medium text-gold">Kontakt</h2>
					<ul class="space-y-2 text-steel/80">
						<li>
							<span class="font-medium text-white">Telefon:</span>
							<a
								class="ml-2 text-gold transition-colors hover:text-gold-light"
								href="tel:+49421369060"
							>
								+49 421 3690 60
							</a>
						</li>
						<li>
							<span class="font-medium text-white">E-Mail:</span>
							<a
								class="ml-2 text-gold transition-colors hover:text-gold-light"
								href="mailto:info@it.hammer.partners"
							>
								info@it.hammer.partners
							</a>
						</li>
						<li>
							<span class="font-medium text-white">Internet:</span>
							<a
								class="ml-2 text-gold transition-colors hover:text-gold-light"
								href="https://hammer.partners"
								target="_blank"
								rel="noreferrer"
							>
								hammer.partners
							</a>
						</li>
					</ul>
				</div>

				<div class="space-y-2 rounded-2xl border border-white/10 bg-white/2 p-5 md:col-span-2">
					<h2 class="text-lg font-medium text-gold">Registereintrag</h2>
					<div class="grid gap-4 text-steel/80 sm:grid-cols-2">
						<div>
							<p><span class="font-medium text-white">Registergericht:</span> Amtsgericht Bremen</p>
						</div>
						<div>
							<p><span class="font-medium text-white">Registernummer:</span> HRB 39651 HB</p>
						</div>
					</div>
				</div>

				<div class="space-y-2 rounded-2xl border border-white/10 bg-white/2 p-5 md:col-span-2">
					<h2 class="text-lg font-medium text-gold">Umsatzsteuer</h2>
					<p class="text-steel/80">
						<span class="font-medium text-white">Umsatzsteuer-ID:</span>
						DE366387167
					</p>
					<p class="text-sm text-steel/70">
						Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz
					</p>
				</div>
			</div>
		</main>
	</div>
</PageContainer>
