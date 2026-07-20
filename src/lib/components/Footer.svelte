<script>
	import { Separator } from "./ui/separator";

</script>
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
					© {new Date().getFullYear()} Hammer partners IT GmbH. Alle Rechte vorbehalten.
				</p>
				<div class="flex gap-6">
					<a href="/impressum" class="font-sans text-xs text-steel/40 no-underline hover:text-steel transition-colors">Impressum</a>
					<a href="/datenschutz" class="font-sans text-xs text-steel/40 no-underline hover:text-steel transition-colors">Datenschutz</a>
				</div>
			</div>
		</div>
	</footer>