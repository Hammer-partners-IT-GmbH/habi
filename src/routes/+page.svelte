<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	let mobileMenuOpen = $state(false);

	const features = [
		{
			icon: '📊',
			title: 'Ein-Klick-Analyse',
			description:
				'Mit einem Klick sehen Sie eine vollständige Analyse Ihrer unternehmerischen Daten – von der Gesamtsumme bis zur einzelnen Transaktion.'
		},
		{
			icon: '☁️',
			title: 'Cloudbasiert',
			description:
				'Unsere Lösungen sind cloudbasiert und somit jederzeit und von überall schnell verfügbar – sicher und zuverlässig.'
		},
		{
			icon: '🎯',
			title: 'Individuell angepasst',
			description:
				'Digitale Lösungen, die wir auf Ihre Abläufe und Anforderungen zuschneiden, damit Sie Zeit für Ihr Kerngeschäft gewinnen.'
		},
		{
			icon: '📈',
			title: 'Benchmarking',
			description:
				'Vergleich der Fallzahlen und Kostenrelationen im Fachgruppenvergleich – wissen Sie, wo Sie im Vergleich stehen.'
		}
	];

	const habiFin = {
		title: 'HaBI fin',
		subtitle: 'Finanzreporting',
		badge: 'Verfügbar',
		badgeVariant: 'default' as const,
		description:
			'Tagesaktuelle Auswertungen und Visualisierungen mit Drill-Down-Möglichkeiten bis auf Ebene der Einzelbuchungen – auf Basis der auf unseren Systemen geführten Finanz- und Lohnbuchhaltungen.',
		features: [
			'Tagesaktuelle Datenauswertungen',
			'Drill-Down bis zur Einzelbuchung',
			'Visualisierungen mit MS PowerBI®',
			'Finanz- und Lohnbuchhaltung integriert',
			'Cloudbasierter Zugriff jederzeit verfügbar'
		]
	};

	const habiMed = {
		title: 'HaBI med®',
		subtitle: 'Gesundheitswesen',
		badge: 'Verfügbar',
		badgeVariant: 'default' as const,
		description:
			'Unsere spezialisierte Lösung für den ambulanten Gesundheitsbereich – entwickelt gemeinsam mit Experten aus der Steuerberatung und der kassenärztlichen Abrechnung.',
		features: [
			'Automatisierter Abgleich der Abrechnungsdaten mit den KV-Honorarbescheiden',
			'Prognose des erwarteten Honorars auf Basis vorläufiger CON-Dateien',
			'Interne Leistungsanalyse (z.B. quotierte Leistung nach LANR, Quotierung nach GNR)',
			'Externer Fachgruppenvergleich (Fallzahlen, EUR/Fall und mehr)',
			'Automatisierte Fallanalyse zur Optimierung der Abrechnung',
			'Deckungsbeitragsrechnung je Leistungserbringer',
			'Exportmöglichkeit an die Finanzbuchhaltung (DATEVPro-Format in Entwicklung)'
		],
		components: [
			{
				title: 'Datentransport-Toolbox',
				items: [
					'Import der CON-/PAD-Dateien (Abrechnungsdateien für GKV/PVS vor Transportverschlüsselung)',
					'Import über Standardschnittstellen (GDPDU/DLS) möglich',
					'Upload pseudonymisierter Abrechnungsdaten in gesicherten Cloudspeicher (Pseudonymisierung erfolgt lokal)'
				]
			},
			{
				title: 'Stammdatenverwaltung',
				items: [
					'Berechtigungsverwaltung (Benutzer, Benutzergruppen, Reports)',
					'Stammdaten: Kostenstellen, LANR, PersonalNr, Fibukonten'
				]
			},
			{
				title: 'Praxisreporting PLUS',
				items: [
					'Auswahl vordefinierter interaktiver Reports auf Basis PowerBI®',
					'Individuelle Anpassung der Reports problemlos möglich'
				]
			}
		]
	};

	const habiDent = {
		title: 'HaBI dent',
		subtitle: 'Zahnmedizin',
		badge: 'In Entwicklung',
		badgeVariant: 'secondary' as const,
		description:
			'Die spezialisierte Lösung für Zahnarztpraxen und kieferorthopädische Einrichtungen befindet sich aktuell in der Entwicklung.',
		features: [
			'Spezialisiert auf zahnmedizinische Abrechnungssysteme',
			'Angepasste Auswertungen für die Dentalbranche',
			'Benchmarking im Fachgruppenvergleich',
			'Nahtlose Integration mit bestehenden Praxissoftwaresystemen'
		]
	};

	const faqItems = [
		{
			id: 'faq-1',
			question: 'Wer ist die Hammer & Partner IT GmbH?',
			answer:
				'Die Gesellschaft ist aus der Überzeugung gegründet worden, dass die Informationen der laufenden Buchhaltung allein für die fundierte betriebswirtschaftliche Beratung größerer ärztlicher Praxen nicht ausreichend sind. Daher haben sich die Profis der Steuerberatung von Hammer & Partner mit IT-Experten in der Abrechnung kassenärztlicher Leistungen zusammengetan und die Hammer & Partner IT GmbH gegründet – mit dem Ziel, maßgeschneiderte digitale Lösungen für das Gesundheitswesen und andere Branchen zu entwickeln.'
		},
		{
			id: 'faq-2',
			question: 'Was ist die HaBI-App?',
			answer:
				'HaBI® steht für Hammer Business Intelligence und ist unser besonderes Reporting-System. Es handelt sich um ein individuelles digitales Werkzeug, das auf Basis von MS PowerBI® entwickelt wurde und auf Ihre spezifischen Abläufe und Anforderungen angepasst wird. Unsere Mandantinnen und Mandanten erhalten Zugang per App oder Webbrowser und können damit ihre unternehmerischen Daten jederzeit analysieren – von aggregierten Summen bis hin zu einzelnen Transaktionen.'
		},
		{
			id: 'faq-3',
			question: 'Wie kommen die Daten in die App?',
			answer:
				'Der Datentransport erfolgt sicher und verschlüsselt. Bei HaBI med® werden die Abrechnungsdaten zunächst lokal auf Ihrem System pseudonymisiert und dann in einen gesicherten Cloudspeicher hochgeladen. Für Finanzdaten aus HaBI fin werden die Daten direkt aus den auf unseren Systemen geführten Buchführungen übernommen. Soweit Buchführungen nicht auf unseren Systemen geführt werden, ist ein Import über Standardschnittstellen (GDPDU/DLS) möglich.'
		},
		{
			id: 'faq-4',
			question: 'Für welche Branchen ist HaBI geeignet?',
			answer:
				'HaBI ist für verschiedene Branchen verfügbar: HaBI fin eignet sich für alle Unternehmen, die auf unseren Systemen ihre Finanzbuchhaltung führen. HaBI med® ist speziell für den ambulanten Gesundheitsbereich entwickelt – ideal für große Arztpraxen, Medizinische Versorgungszentren, Gesundheitszentren und Labore. HaBI dent (in Entwicklung) wird speziell auf die Bedürfnisse von Zahnarztpraxen zugeschnitten sein.'
		},
		{
			id: 'faq-5',
			question: 'Ist HaBI datenschutzkonform?',
			answer:
				'Ja, der Datenschutz hat bei uns höchste Priorität. Bei HaBI med® erfolgt die Pseudonymisierung der sensiblen Abrechnungsdaten bereits lokal auf Ihrem System, bevor sie in die Cloud übertragen werden. Alle Daten werden in gesicherten deutschen Cloudspeichern abgelegt und unterliegen den geltenden Datenschutzbestimmungen (DSGVO).'
		}
	];
</script>

<div class="min-h-screen">
	<!-- Navigation -->
	<nav
		class="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md"
	>
		<div class="container">
			<div class="flex h-16 items-center justify-between">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-2 no-underline">
					<div class="flex flex-col leading-none">
						<span
							class="font-display text-xl font-light tracking-tight text-white"
							>HaBI<sup class="text-xs text-gold">®</sup></span
						>
						<span class="font-sans text-[10px] font-light tracking-widest text-steel uppercase"
							>Hammer Business Intelligence</span
						>
					</div>
				</a>

				<!-- Desktop Nav -->
				<div class="hidden items-center gap-8 md:flex">
					<a href="#loesungen" class="font-sans text-sm font-light text-white/80 no-underline hover:text-white transition-colors">Lösungen</a>
					<a href="#habimeddetails" class="font-sans text-sm font-light text-white/80 no-underline hover:text-white transition-colors">HaBI med®</a>
					<a href="#faq" class="font-sans text-sm font-light text-white/80 no-underline hover:text-white transition-colors">FAQ</a>
					<Button size="sm" class="bg-gold text-navy-dark font-medium hover:bg-gold-light border-0">
						Demo anfragen
					</Button>
				</div>

				<!-- Mobile menu toggle -->
				<button
					class="flex flex-col gap-1.5 p-2 md:hidden"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-label="Menü öffnen"
				>
					<span
						class="block h-0.5 w-5 bg-white transition-all {mobileMenuOpen
							? 'translate-y-2 rotate-45'
							: ''}"
					></span>
					<span
						class="block h-0.5 w-5 bg-white transition-all {mobileMenuOpen ? 'opacity-0' : ''}"
					></span>
					<span
						class="block h-0.5 w-5 bg-white transition-all {mobileMenuOpen
							? '-translate-y-2 -rotate-45'
							: ''}"
					></span>
				</button>
			</div>

			<!-- Mobile Menu -->
			{#if mobileMenuOpen}
				<div class="border-t border-white/10 py-4 md:hidden">
					<div class="flex flex-col gap-3">
						<a
							href="#loesungen"
							onclick={() => (mobileMenuOpen = false)}
							class="font-sans text-sm text-white/80 no-underline hover:text-white"
						>Lösungen</a>
						<a
							href="#habimeddetails"
							onclick={() => (mobileMenuOpen = false)}
							class="font-sans text-sm text-white/80 no-underline hover:text-white"
						>HaBI med®</a>
						<a
							href="#faq"
							onclick={() => (mobileMenuOpen = false)}
							class="font-sans text-sm text-white/80 no-underline hover:text-white"
						>FAQ</a>
						<Button size="sm" class="w-fit bg-gold text-navy-dark font-medium hover:bg-gold-light border-0">
							Demo anfragen
						</Button>
					</div>
				</div>
			{/if}
		</div>
	</nav>

	<!-- Hero -->
	<section class="relative flex min-h-screen items-center overflow-hidden pt-16">
		<!-- Background decoration -->
		<div
			class="pointer-events-none absolute inset-0 overflow-hidden"
			aria-hidden="true"
		>
			<div
				class="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-steel/5 blur-3xl animate-pulse-slow"
			></div>
			<div
				class="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-gold/5 blur-3xl animate-pulse-slow"
				style="animation-delay: 2s"
			></div>
			<!-- Grid lines -->
			<div
				class="absolute inset-0 opacity-[0.03]"
				style="background-image: linear-gradient(rgba(155,186,202,1) 1px, transparent 1px), linear-gradient(90deg, rgba(155,186,202,1) 1px, transparent 1px); background-size: 80px 80px"
			></div>
		</div>

		<div class="container relative py-24 lg:py-32">
			<div class="mx-auto max-w-4xl text-center">
				<Badge
					class="mb-6 border border-gold/30 bg-gold/10 text-gold hover:bg-gold/10"
					variant="outline"
				>
					MS PowerBI® basiertes Reporting
				</Badge>

				<h1
					class="font-display mb-6 text-5xl font-light leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
				>
					Erfolgreich mit digitaler
					<span
						class="block text-transparent bg-clip-text"
						style="background-image: linear-gradient(135deg, #c4973a, #d9b264)"
					>Geschäftsanalyse</span>
				</h1>

				<p
					class="mx-auto mb-10 max-w-2xl font-sans text-lg font-light leading-relaxed text-steel-light/90 md:text-xl"
				>
					Erhalten Sie eine Sofort-Analyse Ihrer Daten mit HaBI<sup class="text-xs">®</sup> – Ihrem
					individuellen digitalen Reporting-Werkzeug. Angepasst auf Ihre Abläufe, schnell und
					zeitsparend.
				</p>

				<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Button
						size="lg"
						class="bg-gold text-navy-dark font-medium hover:bg-gold-light border-0 px-8 text-base"
					>
						Jetzt Demo anfragen
					</Button>
					<Button
						size="lg"
						variant="outline"
						class="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 text-base"
					>
						Mehr über HaBI® erfahren
					</Button>
				</div>

				<!-- Trust indicators -->
				<div class="mt-16 flex flex-wrap items-center justify-center gap-8">
					<div class="flex items-center gap-2 text-steel/70">
						<span class="text-gold text-lg">✓</span>
						<span class="font-sans text-sm">DSGVO-konform</span>
					</div>
					<div class="flex items-center gap-2 text-steel/70">
						<span class="text-gold text-lg">✓</span>
						<span class="font-sans text-sm">Cloudbasiert & sicher</span>
					</div>
					<div class="flex items-center gap-2 text-steel/70">
						<span class="text-gold text-lg">✓</span>
						<span class="font-sans text-sm">Individuell konfigurierbar</span>
					</div>
					<div class="flex items-center gap-2 text-steel/70">
						<span class="text-gold text-lg">✓</span>
						<span class="font-sans text-sm">App & Webzugriff</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-steel/40">
			<span class="font-sans text-xs tracking-widest uppercase">Mehr erfahren</span>
			<svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"></path>
			</svg>
		</div>
	</section>

	<!-- Features Grid -->
	<section class="border-t border-white/10 bg-navy-dark py-24">
		<div class="container">
			<div class="mx-auto mb-16 max-w-2xl text-center">
				<h2
					class="font-display mb-4 text-4xl font-light tracking-tight text-white md:text-5xl"
				>
					Intelligenter in der digitalen Ära
				</h2>
				<p class="font-sans text-base font-light text-steel/80">
					Mit digitalen Lösungen, die wir auf Ihre Abläufe anpassen, gewinnen Sie Zeit für das
					Kerngeschäft. Alles, was für Sie steuerungsrelevant ist, erhalten Sie auf einen Blick.
				</p>
			</div>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{#each features as feature}
					<Card.Root
						class="border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-gold/20 hover:bg-white/8"
					>
						<Card.Content class="p-6">
							<div
								class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-2xl"
							>
								{feature.icon}
							</div>
							<h3 class="font-display mb-2 text-lg font-light text-white">{feature.title}</h3>
							<p class="font-sans text-sm font-light leading-relaxed text-steel/70">
								{feature.description}
							</p>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</div>
	</section>

	<!-- Products Section -->
	<section id="loesungen" class="py-24">
		<div class="container">
			<div class="mx-auto mb-16 max-w-2xl text-center">
				<span
					class="font-sans mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-gold"
				>
					Individuelle Lösungen für Sie
				</span>
				<h2
					class="font-display mb-4 text-4xl font-light tracking-tight text-white md:text-5xl"
				>
					HaBI<sup class="text-2xl">®</sup> – Hammer Business Intelligence
				</h2>
				<p class="font-sans text-base font-light text-steel/80">
					Drei spezialisierte Module für unterschiedliche Branchen und Anforderungen – alle gebaut
					auf modernster PowerBI®-Technologie.
				</p>
			</div>

			<Tabs.Root value="fin" class="w-full">
				<Tabs.List variant="underline" class="mb-12 border-b border-white/10 w-full justify-start gap-0 bg-transparent p-0 h-auto rounded-none">
					<Tabs.Trigger
						value="fin"
						class="rounded-none border-b-2 border-transparent px-6 pb-4 pt-2 font-sans text-base font-light text-white/60 data-[state=active]:border-gold data-[state=active]:text-white transition-all"
					>
						HaBI fin
					</Tabs.Trigger>
					<Tabs.Trigger
						value="med"
						class="rounded-none border-b-2 border-transparent px-6 pb-4 pt-2 font-sans text-base font-light text-white/60 data-[state=active]:border-gold data-[state=active]:text-white transition-all"
					>
						HaBI med®
					</Tabs.Trigger>
					<Tabs.Trigger
						value="dent"
						class="rounded-none border-b-2 border-transparent px-6 pb-4 pt-2 font-sans text-base font-light text-white/60 data-[state=active]:border-gold data-[state=active]:text-white transition-all"
					>
						HaBI dent
					</Tabs.Trigger>
				</Tabs.List>

				<!-- HaBI fin -->
				<Tabs.Content value="fin">
					<div class="grid gap-10 lg:grid-cols-2 lg:items-center">
						<div>
							<div class="mb-3 flex items-center gap-3">
								<Badge class="border-gold/30 bg-gold/10 text-gold" variant="outline">
									{habiFin.badge}
								</Badge>
								<span class="font-sans text-sm text-steel/60">{habiFin.subtitle}</span>
							</div>
							<h3 class="font-display mb-4 text-3xl font-light text-white md:text-4xl">
								{habiFin.title}
							</h3>
							<p class="font-sans mb-8 text-base font-light leading-relaxed text-steel/80">
								{habiFin.description}
							</p>
							<ul class="space-y-3">
								{#each habiFin.features as feat}
									<li class="flex items-start gap-3">
										<span class="mt-0.5 text-gold text-base flex-shrink-0">→</span>
										<span class="font-sans text-sm font-light text-white/80">{feat}</span>
									</li>
								{/each}
							</ul>
							<div class="mt-8">
								<Button class="bg-gold text-navy-dark font-medium hover:bg-gold-light border-0">
									Mehr über HaBI fin
								</Button>
							</div>
						</div>
						<div
							class="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-dark p-8"
						>
							<div class="absolute top-0 right-0 h-32 w-32 bg-gold/5 rounded-full blur-2xl"></div>
							<div class="relative">
								<div class="mb-6 flex items-center justify-between">
									<span class="font-sans text-xs uppercase tracking-widest text-steel/50">Dashboard Vorschau</span>
									<div class="flex gap-1.5">
										<div class="h-2.5 w-2.5 rounded-full bg-red-400/60"></div>
										<div class="h-2.5 w-2.5 rounded-full bg-yellow-400/60"></div>
										<div class="h-2.5 w-2.5 rounded-full bg-green-400/60"></div>
									</div>
								</div>
								<!-- Mock chart bars -->
								<div class="mb-6 flex items-end gap-2 h-32">
									{#each [60, 80, 45, 95, 70, 85, 55, 90, 75, 65] as h}
										<div
											class="flex-1 rounded-sm bg-gold/20 transition-all hover:bg-gold/40"
											style="height: {h}%"
										></div>
									{/each}
								</div>
								<Separator class="bg-white/10 mb-4" />
								<div class="grid grid-cols-2 gap-4">
									<div>
										<div class="font-sans text-xs text-steel/50 mb-1">Gesamtumsatz</div>
										<div class="font-display text-xl text-white">€ 1,24 Mio.</div>
									</div>
									<div>
										<div class="font-sans text-xs text-steel/50 mb-1">Buchungen</div>
										<div class="font-display text-xl text-white">4.832</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Tabs.Content>

				<!-- HaBI med -->
				<Tabs.Content value="med">
					<div class="grid gap-10 lg:grid-cols-2 lg:items-start">
						<div>
							<div class="mb-3 flex items-center gap-3">
								<Badge class="border-gold/30 bg-gold/10 text-gold" variant="outline">
									{habiMed.badge}
								</Badge>
								<span class="font-sans text-sm text-steel/60">{habiMed.subtitle}</span>
							</div>
							<h3 class="font-display mb-4 text-3xl font-light text-white md:text-4xl">
								{habiMed.title}
							</h3>
							<p class="font-sans mb-8 text-base font-light leading-relaxed text-steel/80">
								{habiMed.description}
							</p>
							<ul class="space-y-3">
								{#each habiMed.features as feat}
									<li class="flex items-start gap-3">
										<span class="mt-0.5 text-gold text-base flex-shrink-0">→</span>
										<span class="font-sans text-sm font-light text-white/80">{feat}</span>
									</li>
								{/each}
							</ul>
							<div class="mt-8">
								<Button class="bg-gold text-navy-dark font-medium hover:bg-gold-light border-0">
									Mehr über HaBI med®
								</Button>
							</div>
						</div>
						<!-- Stats card -->
						<div class="space-y-4">
							<div class="rounded-2xl border border-white/10 bg-navy-dark p-6">
								<div class="font-sans text-xs uppercase tracking-widest text-steel/50 mb-4">Honorarprognose</div>
								<div class="flex items-end gap-1 h-20 mb-4">
									{#each [40, 55, 70, 60, 80, 75, 90, 85, 95, 88] as h, i}
										<div
											class="flex-1 rounded-sm transition-all hover:opacity-80"
											style="height: {h}%; background-color: {i >= 7 ? 'rgba(196,151,58,0.5)' : 'rgba(155,186,202,0.2)'}"
										></div>
									{/each}
								</div>
								<div class="flex justify-between text-xs text-steel/40 font-sans">
									<span>Jan</span><span>Apr</span><span>Jul</span><span>Okt</span><span>Dez</span>
								</div>
							</div>
							<div class="grid grid-cols-2 gap-4">
								<div class="rounded-2xl border border-white/10 bg-navy-dark p-5">
									<div class="font-sans text-xs text-steel/50 mb-2">Fallzahlen</div>
									<div class="font-display text-2xl text-white">1.248</div>
									<div class="font-sans text-xs text-emerald-400/70 mt-1">+3,2% vs. Fachgruppe</div>
								</div>
								<div class="rounded-2xl border border-white/10 bg-navy-dark p-5">
									<div class="font-sans text-xs text-steel/50 mb-2">EUR / Fall</div>
									<div class="font-display text-2xl text-white">€ 48,70</div>
									<div class="font-sans text-xs text-gold/70 mt-1">Fachgruppe Ø: € 46,20</div>
								</div>
							</div>
						</div>
					</div>
				</Tabs.Content>

				<!-- HaBI dent -->
				<Tabs.Content value="dent">
					<div class="grid gap-10 lg:grid-cols-2 lg:items-center">
						<div>
							<div class="mb-3 flex items-center gap-3">
								<Badge class="border-steel/30 bg-steel/10 text-steel" variant="outline">
									{habiDent.badge}
								</Badge>
								<span class="font-sans text-sm text-steel/60">{habiDent.subtitle}</span>
							</div>
							<h3 class="font-display mb-4 text-3xl font-light text-white md:text-4xl">
								{habiDent.title}
							</h3>
							<p class="font-sans mb-8 text-base font-light leading-relaxed text-steel/80">
								{habiDent.description}
							</p>
							<ul class="space-y-3">
								{#each habiDent.features as feat}
									<li class="flex items-start gap-3">
										<span class="mt-0.5 text-steel/60 text-base flex-shrink-0">→</span>
										<span class="font-sans text-sm font-light text-white/60">{feat}</span>
									</li>
								{/each}
							</ul>
							<div class="mt-8">
								<Button variant="outline" class="border-white/20 text-white hover:bg-white/10">
									Auf dem Laufenden bleiben
								</Button>
							</div>
						</div>
						<div
							class="relative flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/20 bg-navy-dark p-8"
						>
							<div class="text-center">
								<div class="mb-4 text-4xl opacity-30">🦷</div>
								<p class="font-sans text-sm font-light text-steel/40">
									In Entwicklung – bald verfügbar
								</p>
							</div>
						</div>
					</div>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	</section>

	<!-- HaBI med Deep Dive -->
	<section id="habimeddetails" class="border-t border-white/10 bg-navy-dark py-24">
		<div class="container">
			<div class="mx-auto mb-16 max-w-2xl text-center">
				<span class="font-sans mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-gold">
					Im Detail
				</span>
				<h2 class="font-display mb-4 text-4xl font-light tracking-tight text-white md:text-5xl">
					Die Bestandteile von HaBI med<sup class="text-2xl">®</sup>
				</h2>
				<p class="font-sans text-base font-light text-steel/80">
					Ein vollständiges System – von der sicheren Datenübertragung bis zum interaktiven
					Dashboard.
				</p>
			</div>

			<div class="grid gap-6 md:grid-cols-3">
				{#each habiMed.components as component, i}
					<Card.Root
						class="border-white/10 bg-white/5 backdrop-blur-sm"
					>
						<Card.Header class="pb-3">
							<div
								class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 font-display text-lg text-gold"
							>
								{i + 1}
							</div>
							<Card.Title class="font-display text-lg font-light text-white">
								{component.title}
							</Card.Title>
						</Card.Header>
						<Card.Content>
							<ul class="space-y-2.5">
								{#each component.items as item}
									<li class="flex items-start gap-2.5">
										<span class="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/60"></span>
										<span class="font-sans text-sm font-light leading-relaxed text-steel/70"
											>{item}</span
										>
									</li>
								{/each}
							</ul>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Banner -->
	<section class="py-24">
		<div class="container">
			<div
				class="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-dark px-8 py-16 text-center"
			>
				<div
					class="pointer-events-none absolute inset-0"
					aria-hidden="true"
					style="background: radial-gradient(ellipse at 50% 0%, rgba(196,151,58,0.12) 0%, transparent 60%)"
				></div>
				<div class="relative">
					<h2
						class="font-display mb-4 text-4xl font-light tracking-tight text-white md:text-5xl"
					>
						Bereit für digitale Transparenz?
					</h2>
					<p
						class="mx-auto mb-8 max-w-xl font-sans text-base font-light text-steel/80"
					>
						Lernen Sie HaBI® kennen und entdecken Sie, wie Ihre unternehmerischen Daten lebendig
						werden. Wir freuen uns auf Ihre Anfrage.
					</p>
					<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Button
							size="lg"
							class="bg-gold text-navy-dark font-medium hover:bg-gold-light border-0 px-8 text-base"
						>
							Demo anfragen
						</Button>
						<Button
							size="lg"
							variant="outline"
							class="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 text-base"
						>
							Kontakt aufnehmen
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="border-t border-white/10 bg-navy-dark py-24">
		<div class="container">
			<div class="mx-auto max-w-3xl">
				<div class="mb-16 text-center">
					<span
						class="font-sans mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-gold"
					>
						Häufige Fragen
					</span>
					<h2
						class="font-display mb-4 text-4xl font-light tracking-tight text-white md:text-5xl"
					>
						FAQ
					</h2>
				</div>

				<Accordion.Root type="multiple" class="space-y-3">
					{#each faqItems as item}
						<Accordion.Item
							value={item.id}
							class="rounded-xl border border-white/10 bg-white/5 px-6"
						>
							<Accordion.Trigger
								class="w-full py-5 text-left font-sans text-base font-light text-white hover:text-gold transition-colors hover:no-underline"
							>
								{item.question}
							</Accordion.Trigger>
							<Accordion.Content
								class="pb-5 font-sans text-sm font-light leading-relaxed text-steel/70"
							>
								{item.answer}
							</Accordion.Content>
						</Accordion.Item>
					{/each}
				</Accordion.Root>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-white/10 py-12">
		<div class="container">
			<div class="grid gap-8 md:grid-cols-3">
				<div>
					<div class="mb-3 flex flex-col leading-none">
						<span class="font-display text-xl font-light text-white"
							>HaBI<sup class="text-xs text-gold">®</sup></span
						>
						<span class="font-sans text-[10px] font-light tracking-widest text-steel/60 uppercase"
							>Hammer Business Intelligence</span
						>
					</div>
					<p class="font-sans text-sm font-light text-steel/50 max-w-xs">
						Digitale Reporting-Lösungen für das Gesundheitswesen und darüber hinaus.
					</p>
				</div>

				<div>
					<h4 class="font-sans text-xs font-medium uppercase tracking-widest text-steel/40 mb-4">Lösungen</h4>
					<ul class="space-y-2">
						<li><a href="#loesungen" class="font-sans text-sm text-steel/60 no-underline hover:text-white transition-colors">HaBI fin</a></li>
						<li><a href="#loesungen" class="font-sans text-sm text-steel/60 no-underline hover:text-white transition-colors">HaBI med®</a></li>
						<li><a href="#loesungen" class="font-sans text-sm text-steel/60 no-underline hover:text-white transition-colors">HaBI dent (in Entwicklung)</a></li>
					</ul>
				</div>

				<div>
					<h4 class="font-sans text-xs font-medium uppercase tracking-widest text-steel/40 mb-4">Unternehmen</h4>
					<ul class="space-y-2">
						<li><a href="https://hammer.partners" class="font-sans text-sm text-steel/60 no-underline hover:text-white transition-colors">Hammer & Partner</a></li>
						<li><a href="#faq" class="font-sans text-sm text-steel/60 no-underline hover:text-white transition-colors">FAQ</a></li>
						<li><a href="mailto:info@hammer.partners" class="font-sans text-sm text-steel/60 no-underline hover:text-white transition-colors">Kontakt</a></li>
					</ul>
				</div>
			</div>

			<Separator class="bg-white/10 my-8" />

			<div class="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
				<p class="font-sans text-xs font-light text-steel/40">
					© {new Date().getFullYear()} Hammer & Partner IT GmbH. Alle Rechte vorbehalten.
				</p>
				<div class="flex gap-6">
					<a href="/impressum" class="font-sans text-xs text-steel/40 no-underline hover:text-steel transition-colors">Impressum</a>
					<a href="/datenschutz" class="font-sans text-xs text-steel/40 no-underline hover:text-steel transition-colors">Datenschutz</a>
				</div>
			</div>
		</div>
	</footer>
</div>

