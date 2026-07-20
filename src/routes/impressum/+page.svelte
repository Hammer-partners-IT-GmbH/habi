<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	const contact = {
		company: 'Hammer partners IT GmbH',
		street: 'Außer der Schleifmühle 75',
		city: '28203 Bremen',
		email: 'info@habi.med',
		website: 'habi.med'
	};

	const management = ['Thorsten Hammer', 'Matthias Henke', 'Oliver Schumacher'];

	const register = {
		court: 'Amtsgericht Bremen',
		number: 'HRB 39651'
	};

	const vatId = 'DE366387167';
</script>

<div class="min-h-screen">
	<!-- Hero -->
	<section class="relative flex items-center overflow-hidden pt-32 pb-16">
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

		<div class="container relative">
			<div class="mx-auto max-w-3xl text-center">
				<span class="font-sans mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-gold">
					Rechtliches
				</span>
				<h1
					class="font-display mb-4 text-5xl font-light leading-tight tracking-tight text-white md:text-6xl"
				>
					Impressum
				</h1>
				<p class="font-sans text-base font-light text-steel/80">
					Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
				</p>
			</div>
		</div>
	</section>

	<!-- Content -->
	<section class="border-t border-white/10 bg-navy-dark py-24">
		<div class="container">
			<div class="mx-auto max-w-3xl space-y-6">
				<!-- Angaben gemäß § 5 DDG -->
				<Card.Root id="angaben" class="border-white/10 bg-white/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">
								Angaben gemäß § 5 DDG
							</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<p class="font-sans text-sm font-light leading-relaxed text-white/80">
							{contact.company}<br />
							{contact.street}<br />
							{contact.city}
						</p>
					</Card.Content>
				</Card.Root>

				<!-- Vertreten durch -->
				<Card.Root id="vertreten" class="border-white/10 bg-white/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">
								Vertreten durch
							</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<ul class="space-y-2">
							{#each management as person (person)}
								<li class="flex items-start gap-2.5">
									<span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60"></span>
									<span class="font-sans text-sm font-light text-white/80">{person}</span>
								</li>
							{/each}
						</ul>
					</Card.Content>
				</Card.Root>

				<!-- Kontakt -->
				<Card.Root id="kontakt" class="border-white/10 bg-white/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">Kontakt</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<ul class="space-y-2.5">
							<li class="flex items-start gap-2.5">
								<span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60"></span>
								<span class="font-sans text-sm font-light text-white/80">
									E-Mail:
									<a href="mailto:{contact.email}" class="text-gold hover:text-gold-light"
										>{contact.email}</a
									>
								</span>
							</li>
							<li class="flex items-start gap-2.5">
								<span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60"></span>
								<span class="font-sans text-sm font-light text-white/80">
									Website:
									<a
										href="https://{contact.website}"
										class="text-gold hover:text-gold-light"
										target="_blank"
										rel="noopener noreferrer">{contact.website}</a
									>
								</span>
							</li>
						</ul>
					</Card.Content>
				</Card.Root>

				<!-- Registereintrag -->
				<Card.Root id="register" class="border-white/10 bg-white/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">
								Registereintrag
							</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<ul class="space-y-2.5">
							<li class="flex items-start gap-2.5">
								<span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60"></span>
								<span class="font-sans text-sm font-light text-white/80"
									>Registergericht: {register.court}</span
								>
							</li>
							<li class="flex items-start gap-2.5">
								<span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60"></span>
								<span class="font-sans text-sm font-light text-white/80"
									>Registernummer: {register.number}</span
								>
							</li>
						</ul>
					</Card.Content>
				</Card.Root>

				<!-- Umsatzsteuer-ID -->
				<Card.Root id="ust" class="border-white/10 bg-white/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">
								Umsatzsteuer-ID
							</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<p class="font-sans text-sm font-light leading-relaxed text-white/80">
							Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
							<span class="text-gold">{vatId}</span>
						</p>
					</Card.Content>
				</Card.Root>

				<!-- Aufsichtsbehörde (fehlende Angabe ergänzt, mit Hinweis auf Ausfüllung) -->
				<Card.Root id="aufsicht" class="border-white/10 bg-white/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">
								Zuständige Aufsichtsbehörde
							</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<p class="font-sans text-sm font-light leading-relaxed text-white/80">
							[Zuständige Aufsichts- bzw. Kammerbehörde, sofern für die Tätigkeit
							erforderlich – z. B. bei berufsrechtlichen Vorgaben, ansonsten entfällt dieser
							Punkt]
						</p>
					</Card.Content>
				</Card.Root>

				<!-- EU-Streitschlichtung -->
				<Card.Root id="streit" class="border-white/10 bg-white/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">
								EU-Streitschlichtung
							</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<p class="font-sans text-sm font-light leading-relaxed text-white/80">
							Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
							bereit:
							<a
								href="https://ec.europa.eu/consumers/odr/"
								class="text-gold hover:text-gold-light"
								target="_blank"
								rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a
							>.<br />
							Unsere E-Mail-Adresse finden Sie oben im Impressum.
						</p>
					</Card.Content>
				</Card.Root>

				<!-- Verbraucherstreitbeilegung -->
				<Card.Root id="verbraucher" class="border-white/10 bg-white/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">
								Verbraucherstreitbeilegung / Universalschlichtungsstelle
							</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<p class="font-sans text-sm font-light leading-relaxed text-white/80">
							Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
							Verbraucherschlichtungsstelle teilzunehmen.
						</p>
					</Card.Content>
				</Card.Root>

				<Separator class="bg-white/10" />

				<!-- Haftung für Inhalte -->
				<Card.Root id="haftung-inhalte" class="border-white/10 bg-white/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">
								Haftung für Inhalte
							</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<p class="font-sans text-sm font-light leading-relaxed text-steel/70">
							Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
							Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
							als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
							Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
							rechtswidrige Tätigkeit hinweisen.
						</p>
						<p class="font-sans mt-3 text-sm font-light leading-relaxed text-steel/70">
							Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
							allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
							jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
							Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
							umgehend entfernen.
						</p>
					</Card.Content>
				</Card.Root>

				<!-- Haftung für Links -->
				<Card.Root id="haftung-links" class="border-white/10 bg-white/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">
								Haftung für Links
							</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<p class="font-sans text-sm font-light leading-relaxed text-steel/70">
							Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
							keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
							Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
							Anbieter oder Betreiber der Seiten verantwortlich.
						</p>
						<p class="font-sans mt-3 text-sm font-light leading-relaxed text-steel/70">
							Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
							Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
							nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
							jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
							Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
						</p>
					</Card.Content>
				</Card.Root>

				<!-- Urheberrecht -->
				<Card.Root id="urheberrecht" class="border-white/10 bg-white/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">
								Urheberrecht
							</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<p class="font-sans text-sm font-light leading-relaxed text-steel/70">
							Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
							unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
							Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
							bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
						</p>
						<p class="font-sans mt-3 text-sm font-light leading-relaxed text-steel/70">
							Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
							Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
							wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
							Dritter als solche gekennzeichnet.
						</p>
					</Card.Content>
				</Card.Root>

				<!-- Markenhinweis -->
				<Card.Root id="marke" class="border-gold/20 bg-gold/5 backdrop-blur-sm">
					<Card.Header class="pb-3">
						<div class="mb-2 flex items-center gap-3">
							<Card.Title class="font-display text-lg font-light text-white">
								Markenhinweis
							</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<p class="font-sans text-sm font-light leading-relaxed text-white/80">
							HaBI<sup class="text-xs">®</sup> ist eine eingetragene Marke der Hammer partners IT
							GmbH.
						</p>
					</Card.Content>
				</Card.Root>
			</div>

			<!-- Note about placeholders -->
			<div class="mx-auto mt-10 max-w-3xl">
				<p class="font-sans text-center text-xs font-light text-steel/40">
					Bitte prüfen und ergänzen Sie die mit eckigen Klammern gekennzeichneten Angaben (z. B.
					Telefonnummer, ggf. Aufsichtsbehörde) vor Veröffentlichung.
				</p>
			</div>
		</div>
	</section>
</div>