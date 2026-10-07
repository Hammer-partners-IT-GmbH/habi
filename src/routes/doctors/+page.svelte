<script lang="ts">
	import Doctor from '$lib/assets/doctor.png';
	import Laptop from '$lib/assets/laptop.png';
	import NoIdea from '$lib/assets/no_idea.png';
	import Hammer from '$lib/assets/people/01_hammer.png';
	import Husted from '$lib/assets/people/01_hustedt.png';
	import Schumacher from '$lib/assets/people/01_schumacher.png';
	import Typing from '$lib/assets/typing.png';
	import Hero from '$lib/components/Hero.svelte';
	import PageContainer from '$lib/components/PageContainer.svelte';
	import PersonBanner from '$lib/components/PersonBanner.svelte';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Spinner } from '$lib/components/ui/spinner';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';

	let submitted = $state(false);
</script>

<svelte:head>
	<title>Ärzte - HaBI</title>
</svelte:head>

<div class="min-h-screen">
	<PageContainer>
		<Hero
			title="Wirtschaftliche Sicherheit für eine ausbalancierte Praxis – jederzeit digital abrufbar mit HaBI"
			subtitle="Wir übersetzen Ihre finanziellen und medizinischen Leistungsdaten in klare Entscheidungen: weniger Aufwand mit Zahlen, mehr Ertrag pro Quartal, ruhigere Entscheidungen auf belastbaren Fakten – und die Sicherheit, dass Ihre Praxis sich wirtschaftlich trägt."
			ctaPrimary="Jetzt Beraten lassen"
			ctaSecondary="Mehr über HaBI"
		/>

		<div class="container mx-auto mt-8 max-w-3xl">
			<div class="rounded-2xl border border-white/10 bg-navy-dark p-6">
				<div class="flex flex-col md:flex-row items-center md:items-start gap-3">
					<div class="shrink-0">
						<img
							src={NoIdea}
							alt="No Idea"
							class="w-full max-w-55 md:max-w-[320px] object-contain rounded-lg shadow-sm"
						/>
					</div>
					<div class="flex-1">
						<p class="font-sans text-base font-light text-steel/80 mb-6">
							Personalmangel, Honorarkürzungen, Nachfolge: Als Unternehmer-Arzt müssen Sie heute
							unternehmerische Entscheidungen treffen – oft schneller, als die klassischen
							Auswertungen dies zulassen. Was Ihnen dafür fehlt: aktuelle Zahlen, die Sie sofort
							verstehen.
						</p>
					</div>
				</div>
			</div>

			<div class="mt-6 rounded-2xl border border-white/10 bg-navy-dark p-6">
				<div class="flex flex-col md:flex-row items-center md:items-start gap-3">
					<div class="w-full md:w-1/2">
						<p class="font-sans text-base font-light text-steel/80">
							Ihre Praxiszahlen jederzeit im Griff – mit HaBI und der Beratung von Hammer & Partner.
						</p>
					</div>
					<div class="w-full md:w-1/2 flex md:justify-center">
						<Button variant="outline" class="w-full md:w-auto">Jetzt Beraten lassen</Button>
					</div>
				</div>
			</div>

			<div class="mt-6 rounded-2xl border border-white/10 bg-navy-dark p-6">
				<div class="flex flex-col md:flex-row items-center md:items-start gap-3">
					<div class="flex-1">
						<p class="font-sans text-base font-light text-steel/80">
							HaBI liefert genau das. Ein digitales Auswertungssystem, das Ihre Finanz- und KV-Daten
							auf Knopfdruck sichtbar macht – übersichtlich, tagesaktuell, einfach. Hinter HaBI
							steht die Hammer partners IT GmbH. Sie bündelt das digitale Know-how einer
							Beratergruppe, die seit mehr als 70 Jahren gemeinsam mit Hammer & Partner mbB
							Wirtschaftsprüfer, Steuerberater, Rechtsanwälte und Ärzte in Bremen und Niedersachsen
							ganzheitlich und hoch spezialisiert begleitet.
						</p>
					</div>
					<div class="grow-0">
						<img
							src={Typing}
							alt="Typing"
							class="w-full max-w-55 md:max-w-[320px] object-contain rounded-lg shadow-sm"
						/>
					</div>
				</div>
			</div>

			<PersonBanner
				title="Anamnese, wirtschaftliche Gesundheit, Diagnose, Behandlung."
				description="Gehen Sie den ersten Schritt zu besseren, klaren Entscheidungen in Ihrer Praxis. Mehr zu
						HaBI und Beratung im persönlichen Gespräch."
				email="mailto:idk"
				image={Husted}
				name="Marc-Andreas Hustedt"
				role="Steuerberater & Fachanwalt für Steuerrecht"
			/>

			<div class="mt-6 rounded-2xl border border-white/10 bg-navy-dark p-6">
				<h4 class="text-xl font-semibold mb-2">Was Sie davon haben</h4>
				<p class="font-sans text-base font-light text-steel/80">
					Endlich weniger Papierkram – Schluss mit BWA‑Stapeln. Die relevanten Zahlen sind digital
					im Zugriff und lassen sich auf Knopfdruck abrufen. Was früher wochenlang in Auswertungen
					lag, sehen Sie mit HaBI sofort.
				</p>
			</div>

			<div class="mt-8">
				<ol class="grid gap-6 md:grid-cols-2">
					<li class="relative rounded-2xl bg-navy-dark/60 p-6 overflow-hidden pl-14">
						<span
							class="absolute left-6 -top-6 text-[5.5rem] font-extrabold leading-none text-white/5 z-0 pointer-events-none"
							>1</span
						>
						<h4 class="relative z-10 text-lg font-semibold">Schneller entscheiden</h4>
						<p class="relative z-10 mt-2 text-steel/80">
							Investitionen in Geräte oder Personal absichern – auf Knopfdruck, statt wochen-lang
							auf die nächste BWA zu warten.
						</p>
					</li>

					<li class="relative rounded-2xl bg-navy-dark/60 p-6 overflow-hidden pl-14">
						<span
							class="absolute left-6 -top-6 text-[5.5rem] font-extrabold leading-none text-white/5 z-0 pointer-events-none"
							>2</span
						>
						<h4 class="relative z-10 text-lg font-semibold">Volle Transparenz</h4>
						<p class="relative z-10 mt-2 text-steel/80">
							Honorarkürzungen und Ertrags-verschiebungen erkennen, bevor sie Monate später auf
							Ihrem Konto ankommen.
						</p>
					</li>

					<li class="relative rounded-2xl bg-navy-dark/60 p-6 overflow-hidden pl-14">
						<span
							class="absolute left-6 -top-6 text-[5.5rem] font-extrabold leading-none text-white/5 z-0 pointer-events-none"
							>3</span
						>
						<h4 class="relative z-10 text-lg font-semibold">Frühwarnsystem</h4>
						<p class="relative z-10 mt-2 text-steel/80">
							Gebuchte Leistungen und Personalkosten jederzeit im Blick. Bis in die Details der
							einzelnen Mitarbeiter- und Leistungsebenen.
						</p>
					</li>

					<li class="relative rounded-2xl bg-navy-dark/60 p-6 overflow-hidden pl-14">
						<span
							class="absolute left-6 -top-6 text-[5.5rem] font-extrabold leading-none text-white/5 z-0 pointer-events-none"
							>4</span
						>
						<h4 class="relative z-10 text-lg font-semibold">Zahlenpaket für die Nachfolge</h4>
						<p class="relative z-10 mt-2 text-steel/80">
							Eine saubere digitale Datenbasis erleichtert es spürbar, die Praxis zu bewerten und zu
							übergeben.
						</p>
					</li>
				</ol>
			</div>

			<div class="mt-6 rounded-2xl border border-white/10 bg-navy-dark p-6">
				<div class="flex flex-col md:flex-row items-center md:items-start gap-3">
					<div class="shrink-0">
						<img
							src={Laptop}
							alt="Laptop"
							class="w-full max-w-55 md:max-w-[320px] object-contain rounded-lg shadow-sm"
						/>
					</div>
					<div class="flex-1">
						<h4 class="text-xl font-semibold mb-2">
							HaBI zeigt Ihnen, wo Sie stehen. Hammer & Partner zeigen Ihnen, was zu tun ist.
						</h4>
						<p class="font-sans text-base font-light text-steel/80">
							Erst die Verbindung aus dem digitalen Cockpit und persönlicher Beratung macht Ihre
							Zahlen wirklich nutzbar
						</p>
						<div
							class="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-center sm:justify-start"
						>
							<Button
								class="w-full sm:w-auto px-5 py-2 rounded-md transition-transform hover:scale-105"
								>Jetzt Beraten lassen</Button
							>
							<Button
								class="w-full sm:w-auto px-5 py-2 rounded-md transition-transform hover:scale-105"
								variant="secondary"
								href="https://hammer.partners"
								target="_blank"
								rel="noopener">Hammer & Partner</Button
							>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-6 rounded-2xl border border-white/10 bg-navy-dark p-6">
				<div class="grid gap-6 md:grid-cols-3">
					<div class="flex items-start gap-4">
						<div class="shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="44"
								height="40"
								viewBox="0 0 44 40"
								fill="none"
								class="w-11 h-10"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M15.7482 1.07478e-06H28.2519C31.0507 -3.99509e-05 33.3066 -8.11235e-05 35.0809 0.239016C36.923 0.487262 38.4738 1.01832 39.7058 2.25303C40.9376 3.48773 41.4674 5.04234 41.7151 6.88872C41.9535 8.66712 41.9535 10.9283 41.9535 13.7336V24.2092C41.9535 26.0523 41.9537 27.5891 41.79 28.8092C41.6172 30.097 41.2372 31.2597 40.305 32.1939C39.373 33.1282 38.2131 33.5091 36.9283 33.6823C35.711 33.8464 34.1778 33.8462 32.339 33.8462H11.661C9.82227 33.8462 8.28899 33.8464 7.07176 33.6823C5.78698 33.5091 4.62702 33.1282 3.69489 32.1939C2.76277 31.2597 2.38279 30.097 2.21005 28.8092C2.04639 27.5891 2.04645 26.0523 2.04651 24.2092V13.7336C2.04647 10.9283 2.04643 8.66712 2.28497 6.88872C2.53264 5.04234 3.06246 3.48773 4.2943 2.25303C5.52613 1.01832 7.07712 0.487262 8.91921 0.239016C10.6935 -8.11235e-05 12.9494 -3.99509e-05 15.7482 1.07478e-06ZM9.32825 3.28851C7.82656 3.49087 7.03134 3.86103 6.46495 4.42874C5.89856 4.99645 5.52926 5.79354 5.32738 7.29871C5.11953 8.84814 5.11628 10.9017 5.11628 13.8462V24.1026C5.11628 26.08 5.11953 27.4084 5.25245 28.3992C5.37942 29.3459 5.59885 29.751 5.86555 30.0183C6.13223 30.2855 6.53641 30.5054 7.4808 30.6328C8.46935 30.766 9.79458 30.7692 11.7674 30.7692H32.2326C34.2054 30.7692 35.5307 30.766 36.5192 30.6328C37.4636 30.5054 37.8678 30.2855 38.1345 30.0183C38.4012 29.751 38.6205 29.3459 38.7476 28.3992C38.8804 27.4084 38.8837 26.08 38.8837 24.1026V13.8462C38.8837 10.9017 38.8804 8.84814 38.6727 7.29871C38.4707 5.79354 38.1015 4.99645 37.5351 4.42874C36.9686 3.86103 36.1735 3.49087 34.6718 3.28851C33.1259 3.08019 31.0771 3.07692 28.1395 3.07692H15.8605C12.9229 3.07692 10.8741 3.08019 9.32825 3.28851ZM14.3256 26.1538C14.3256 25.3042 15.0128 24.6154 15.8605 24.6154H28.1395C28.9872 24.6154 29.6744 25.3042 29.6744 26.1538C29.6744 27.0035 28.9872 27.6923 28.1395 27.6923H15.8605C15.0128 27.6923 14.3256 27.0035 14.3256 26.1538ZM0 38.4615C0 37.6119 0.687198 36.9231 1.53488 36.9231H42.4651C43.3128 36.9231 44 37.6119 44 38.4615C44 39.3112 43.3128 40 42.4651 40H1.53488C0.687198 40 0 39.3112 0 38.4615Z"
									fill="#9FC0DE"
								/>
							</svg>
						</div>
						<p class="text-steel/80">
							Mit HaBI rufen Sie Finanz- und KV-Daten Ihrer Praxis jederzeit übersichtlich ab – ohne
							Wartezeit auf die nächste BWA.
						</p>
					</div>

					<div class="flex items-start gap-4">
						<div class="shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="37"
								height="40"
								viewBox="0 0 37 40"
								fill="none"
								class="w-10 h-10"
							>
								<path
									d="M23.8316 17.2085C24.3448 16.6336 24.2949 15.7516 23.72 15.2383C23.1451 14.7251 22.2631 14.775 21.7498 15.3498L16.1462 21.6259L14.5293 19.815C14.016 19.2401 13.1339 19.1902 12.5591 19.7033C11.9842 20.2166 11.9343 21.0987 12.4475 21.6736L15.1053 24.6503C15.3701 24.9469 15.7487 25.1164 16.1462 25.1164C16.5436 25.1164 16.9222 24.9469 17.187 24.6503L23.8316 17.2085Z"
									fill="#9FC0DE"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M18.1395 0C16.3953 0 14.7299 0.570381 12.0435 1.49046L10.6901 1.95375C7.93418 2.89712 5.80726 3.62515 4.28471 4.2437C3.51773 4.55527 2.85836 4.85706 2.3274 5.16541C1.81645 5.46214 1.30385 5.83226 0.95559 6.32845C0.611349 6.8189 0.433358 7.42184 0.321507 8.00227C0.205228 8.60569 0.135107 9.32956 0.0898605 10.1607C4.85154e-08 11.8109 0 14.0716 0 17.0039V19.984C0 31.3347 8.57308 36.7767 13.6713 39.0039L13.7217 39.0259C14.3539 39.3021 14.9481 39.5617 15.6309 39.7366C16.3518 39.9211 17.1176 40 18.1395 40C19.1615 40 19.9273 39.9211 20.6482 39.7366C21.331 39.5617 21.9252 39.3021 22.5572 39.0259L22.6078 39.0039C27.706 36.7767 36.2791 31.3347 36.2791 19.984V17.0043C36.2791 14.0718 36.2791 11.811 36.1892 10.1607C36.144 9.32956 36.0739 8.60569 35.9576 8.00227C35.8458 7.42184 35.6677 6.8189 35.3235 6.32845C34.9753 5.83226 34.4627 5.46214 33.9516 5.16541C33.4207 4.85706 32.7613 4.55527 31.9944 4.2437C30.4718 3.62515 28.3449 2.89712 25.5888 1.95373L24.2355 1.49046C21.5492 0.570381 19.8837 0 18.1395 0ZM12.7081 4.21265C15.7118 3.18445 16.9159 2.7907 18.1395 2.7907C19.3632 2.7907 20.5673 3.18445 23.571 4.21265L24.6367 4.57743C27.4508 5.54073 29.5031 6.24381 30.944 6.82919C31.6633 7.12138 32.1844 7.36623 32.5501 7.57866C32.7308 7.68354 32.8553 7.77008 32.9382 7.83764C33.0087 7.89487 33.0355 7.92729 33.0394 7.93206C33.043 7.93786 33.0662 7.9765 33.0988 8.06798C33.136 8.17237 33.1771 8.32203 33.2173 8.53034C33.2986 8.95198 33.3602 9.53118 33.4026 10.3124C33.4878 11.8774 33.4884 14.062 33.4884 17.0543V19.984C33.4884 29.6121 26.2886 34.3507 21.4906 36.4465C20.7994 36.7485 20.4004 36.9193 19.9561 37.0329C19.5317 37.1416 19.014 37.2093 18.1395 37.2093C17.2651 37.2093 16.7473 37.1416 16.323 37.0329C15.8787 36.9193 15.4796 36.7485 14.7885 36.4465C9.99051 34.3507 2.7907 29.6121 2.7907 19.984V17.0543C2.7907 14.062 2.79122 11.8774 2.87643 10.3124C2.91896 9.53118 2.98054 8.95198 3.06179 8.53034C3.10193 8.32203 3.14314 8.17237 3.18033 8.06798C3.21289 7.97656 3.23602 7.93792 3.23961 7.93208C3.24346 7.92735 3.27033 7.8949 3.34078 7.83764C3.42389 7.77008 3.54832 7.68354 3.72891 7.57866C4.0947 7.36623 4.61581 7.12138 5.33505 6.82919C6.776 6.24381 8.8283 5.54073 11.6424 4.57743L12.7081 4.21265Z"
									fill="#9FC0DE"
								/>
							</svg>
						</div>
						<p class="text-steel/80">
							Im Austausch mit den Beratern von Hammer & Partner besprechen Sie die Zahlen im
							Kontext Ihrer Praxis.
						</p>
					</div>

					<div class="flex items-start gap-4">
						<div class="shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none"
								class="w-10 h-10"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M22.2282 2.08301H26.1063C28.0978 2.08299 29.6817 2.08299 30.9517 2.20374C32.254 2.32757 33.3552 2.58712 34.336 3.18821C35.3451 3.80664 36.1936 4.65511 36.812 5.66427C37.4132 6.64517 37.6726 7.74627 37.7965 9.04859C37.9173 10.3187 37.9173 11.9024 37.9172 13.8939V15.2534C37.9173 16.671 37.9173 17.7987 37.8548 18.7128C37.791 19.6482 37.6578 20.4512 37.3463 21.2032C36.5852 23.0408 35.125 24.501 33.2873 25.2622C32.6555 25.524 31.9818 25.6613 31.2187 25.7362C31.2098 25.9683 31.1986 26.1892 31.1843 26.3992C31.1165 27.3925 30.9753 28.239 30.648 29.0293C29.8445 30.9692 28.3033 32.5103 26.3635 33.3138C25.3688 33.7258 24.2715 33.8465 22.8917 33.8907C22.1493 33.9145 21.6747 33.9308 21.3142 33.9747C20.9735 34.0163 20.8455 34.0718 20.7763 34.1128C20.6995 34.1582 20.5935 34.2415 20.4085 34.4962C20.2088 34.7713 19.9825 35.1508 19.6243 35.7562L19.1918 36.4867C18.0637 38.3928 15.2709 38.3928 14.1427 36.4867L13.7103 35.7562C13.352 35.1508 13.1258 34.7713 12.9261 34.4962C12.7411 34.2415 12.6351 34.1582 12.5582 34.1128C12.4891 34.0718 12.3612 34.0163 12.0204 33.9748C11.6599 33.9308 11.1853 33.9145 10.4429 33.8907C9.06307 33.8465 7.96585 33.7258 6.97107 33.3138C5.03127 32.5103 3.4901 30.9692 2.6866 29.0293C2.35927 28.239 2.2181 27.3925 2.15032 26.3992C2.08397 25.4268 2.08398 24.2265 2.08398 22.712V21.2685C2.08397 19.141 2.08397 17.455 2.2124 16.1042C2.3439 14.7211 2.6188 13.5609 3.25058 12.5299C3.90335 11.4647 4.79897 10.5691 5.8642 9.91627C6.89518 9.28449 8.05543 9.00959 9.43847 8.87809C9.79003 8.84466 10.1643 8.81994 10.5632 8.80164C10.6966 7.60191 10.9625 6.57807 11.5224 5.66429C12.1409 4.65511 12.9893 3.80664 13.9985 3.18821C14.9794 2.58712 16.0805 2.32757 17.3828 2.20374C18.6528 2.08299 20.2367 2.08299 22.2282 2.08301ZM13.0895 8.75167C13.5675 8.74967 14.0714 8.74967 14.6028 8.74967H18.7318C20.8595 8.74966 22.5453 8.74966 23.8962 8.87809C25.2792 9.00959 26.4395 9.28449 27.4705 9.91627C28.5356 10.5691 29.4313 11.4647 30.084 12.5299C30.7158 13.5609 30.9908 14.7211 31.1223 16.1042C31.2507 17.455 31.2507 19.1408 31.2507 21.2685V22.712C31.2507 22.8842 31.2507 23.0523 31.2505 23.2165C31.7095 23.157 32.0443 23.071 32.3307 22.9525C33.5558 22.445 34.5292 21.4717 35.0367 20.2465C35.2008 19.8498 35.3055 19.3507 35.3606 18.5427C35.4165 17.7235 35.4172 16.6812 35.4172 15.2081V13.9581C35.4172 11.8879 35.416 10.4231 35.3077 9.28522C35.2013 8.16589 35.0003 7.49257 34.6805 6.97052C34.2682 6.29774 33.7025 5.73209 33.0296 5.31981C32.5077 4.99989 31.8343 4.79894 30.715 4.69252C29.5772 4.58432 28.1123 4.58301 26.0422 4.58301H22.2922C20.2222 4.58301 18.7573 4.58432 17.6195 4.69252C16.5001 4.79894 15.8268 4.99989 15.3047 5.31981C14.632 5.73209 14.0663 6.29774 13.654 6.97052C13.3864 7.40722 13.2045 7.94446 13.0895 8.75167ZM9.6751 11.3669C8.47507 11.481 7.7426 11.6973 7.17045 12.0479C6.44162 12.4945 5.82882 13.1073 5.38218 13.8362C5.03157 14.4083 4.81527 15.1408 4.70117 16.3408C4.5853 17.5595 4.58398 19.1265 4.58398 21.333V22.6663C4.58398 24.2367 4.58467 25.3517 4.64452 26.229C4.70362 27.0952 4.81617 27.6377 4.9963 28.0727C5.54607 29.3998 6.60055 30.4543 7.92778 31.0042C8.48475 31.2348 9.20235 31.3497 10.5228 31.392L10.5746 31.3937C11.2503 31.4152 11.838 31.434 12.3231 31.4932C12.8402 31.5562 13.3482 31.6755 13.831 31.961C14.3061 32.242 14.6493 32.6147 14.9488 33.027C15.2259 33.4085 15.5114 33.8908 15.835 34.4378L16.2941 35.2133C16.3698 35.3412 16.5019 35.4163 16.6673 35.4163C16.8327 35.4163 16.9648 35.3412 17.0405 35.2133L17.4997 34.4377C17.8232 33.8908 18.1087 33.4085 18.3858 33.027C18.6853 32.6147 19.0285 32.242 19.5037 31.961C19.9863 31.6755 20.4945 31.5562 21.0115 31.4932C21.4967 31.434 22.0843 31.4152 22.76 31.3937L22.8118 31.392C24.1323 31.3497 24.8498 31.2348 25.4068 31.0042C26.7341 30.4543 27.7887 29.3998 28.3383 28.0727C28.5185 27.6377 28.631 27.0952 28.6901 26.229C28.75 25.3517 28.7507 24.2367 28.7507 22.6663V21.333C28.7507 19.1265 28.7493 17.5595 28.6335 16.3408C28.5193 15.1408 28.303 14.4083 27.9525 13.8362C27.5058 13.1073 26.893 12.4945 26.1642 12.0479C25.592 11.6973 24.8597 11.481 23.6595 11.3669C22.4408 11.251 20.8738 11.2497 18.6673 11.2497H14.6673C12.4608 11.2497 10.8937 11.251 9.6751 11.3669Z"
									fill="#9FC0DE"
								/>
							</svg>
						</div>
						<p class="text-steel/80">
							Ob Personalaufbau, Investition oder Nachfolge: Sie entscheiden immer auf einer
							aktuellen, belastbaren Datenbasis.
						</p>
					</div>
				</div>
			</div>

			<div class="mt-8 rounded-2xl border border-white/10 bg-navy-dark p-6">
				<h4 class="text-lg font-semibold mb-2">HaBI im Detail</h4>
				<p class="font-sans text-sm text-steel/80 mb-6">
					HaBI ist ein interaktives Praxis-Cockpit auf Power-BI-Basis. Hammer partners IT GmbH hat
					es speziell zur finanziellen Steuerung medizinischer Praxen und Kliniken entwickelt. HaBI
					unterscheidet in zwei Kernbereichen:
				</p>

				<div class="grid gap-6 md:grid-cols-2">
					<div
						class="flex items-start gap-4 bg-navy-dark/50 p-4 rounded-lg hover:bg-navy-dark/70 transition"
					>
						<div class="shrink-0 bg-navy-dark/60 p-3 rounded-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 40 40"
								fill="none"
								class="w-10 h-10"
							>
								<path
									d="M1.39535 0C2.16597 0 2.7907 0.624726 2.7907 1.39535V32.093C2.7907 34.9187 5.08134 37.2093 7.90698 37.2093H38.6046C39.3753 37.2093 40 37.834 40 38.6046C40 39.3753 39.3753 40 38.6046 40H7.90698C3.54007 40 0 36.4599 0 32.093V1.39535C0 0.624726 0.624726 0 1.39535 0Z"
									fill="#79A5C8"
								/>
								<path
									d="M9.30206 31.1626V28.3719C9.30206 27.6013 9.92679 26.9766 10.6974 26.9766C11.468 26.9766 12.0928 27.6013 12.0928 28.3719V31.1626C12.0928 31.9332 11.468 32.558 10.6974 32.558C9.92679 32.558 9.30206 31.9332 9.30206 31.1626Z"
									fill="#79A5C8"
								/>
								<path
									d="M16.7448 24.9305V31.1631C16.7448 31.9337 17.3696 32.5584 18.1402 32.5584C18.9108 32.5584 19.5355 31.9337 19.5355 31.1631V24.9305C19.5355 24.1599 18.9108 23.5352 18.1402 23.5352C17.3696 23.5352 16.7448 24.1599 16.7448 24.9305Z"
									fill="#79A5C8"
								/>
								<path
									d="M25.5816 32.5589C24.811 32.5589 24.1862 31.9341 24.1862 31.1635V21.4891C24.1862 20.7185 24.811 20.0938 25.5816 20.0938C26.3522 20.0938 26.9769 20.7185 26.9769 21.4891V31.1635C26.9769 31.9341 26.3522 32.5589 25.5816 32.5589Z"
									fill="#79A5C8"
								/>
								<path
									d="M31.6276 31.1627C31.6276 31.9333 32.2524 32.5581 33.023 32.5581C33.7936 32.5581 34.4183 31.9333 34.4183 31.1627V18.1395C34.4183 17.3689 33.7936 16.7441 33.023 16.7441C32.2524 16.7441 31.6276 17.3689 31.6276 18.1395V31.1627Z"
									fill="#79A5C8"
								/>
								<path
									d="M26.5112 3.2557C26.5112 2.48508 27.1359 1.86035 27.9065 1.86035H34.8833C35.6539 1.86035 36.2786 2.48508 36.2786 3.2557V10.2324C36.2786 11.0031 35.6539 11.6278 34.8833 11.6278C34.1127 11.6278 33.4879 11.0031 33.4879 10.2324V6.74986C29.8304 10.6207 26.4183 13.4833 22.7733 15.5203C18.6161 17.8434 14.2326 19.0499 8.96317 19.529C8.19571 19.5988 7.51699 19.0332 7.44723 18.2657C7.37746 17.4983 7.94304 16.8196 8.71052 16.7498C13.6737 16.2987 17.6622 15.1796 21.412 13.0842C24.7843 11.1997 28.0245 8.4915 31.631 4.65105H27.9065C27.1359 4.65105 26.5112 4.02632 26.5112 3.2557Z"
									fill="#79A5C8"
								/>
							</svg>
						</div>
						<div>
							<h5 class="font-semibold mb-1">FinReports</h5>
							<p class="text-steel/80 text-sm">
								Finanz- und Lohnbuchhaltung: Einnahmen, Ausgaben, Personalkosten, Gewinn/Verlust im
								Zeitverlauf, drill-down-fähig bis auf einzelne Mitarbeiter.
							</p>
						</div>
					</div>

					<div
						class="flex items-start gap-4 bg-navy-dark/50 p-4 rounded-lg hover:bg-navy-dark/70 transition"
					>
						<div class="shrink-0 bg-navy-dark/60 p-3 rounded-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 40 40"
								fill="none"
								class="w-10 h-10"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M20 0C20.7706 0 21.3954 0.624723 21.3954 1.39534V1.86312C21.6022 1.86624 21.7788 1.87301 21.9434 1.88758C25.3113 2.18539 27.9807 4.85492 28.2785 8.22262C28.3057 8.53042 28.3057 8.87914 28.3057 9.39131V11.6669C28.3057 18.8656 22.8283 24.7848 15.814 25.4847V29.3024C15.814 33.6692 19.354 37.2093 23.7209 37.2093H25.3626C27.6884 37.2093 29.7204 35.941 30.8013 34.0571C28.0376 33.1293 26.0465 30.518 26.0465 27.4417C26.0465 23.5885 29.17 20.465 33.0233 20.465C36.8765 20.465 40 23.5885 40 27.4417C40 31.052 37.2579 34.0216 33.7429 34.3818C32.3892 37.6776 29.1487 40 25.3626 40H23.7209C17.8128 40 13.0233 35.2104 13.0233 29.3024V25.4873C5.71479 24.7854 2.35703e-05 18.6278 2.35703e-05 11.1354L4.94037e-06 9.39142C-5.08736e-05 8.8792 -8.80624e-05 8.53045 0.0271305 8.22262C0.324935 4.85492 2.9945 2.18539 6.36222 1.88758C6.65184 1.86196 6.9777 1.86049 7.44188 1.86044V1.39534C7.44188 0.624723 8.06659 0 8.83723 0C9.60786 0 10.2326 0.624723 10.2326 1.39534V5.11626C10.2326 5.88688 9.60786 6.5116 8.83723 6.5116C8.06659 6.5116 7.44188 5.88688 7.44188 5.11626V4.65118C6.95182 4.65151 6.7608 4.65389 6.60802 4.66742C4.58741 4.8461 2.98566 6.44782 2.80698 8.46844C2.79208 8.63698 2.79072 8.85209 2.79072 9.46396V11.1354C2.79072 17.5573 7.99671 22.7632 14.4186 22.7632C20.547 22.7632 25.515 17.7953 25.515 11.6669V9.46396C25.515 8.85209 25.5137 8.63698 25.4986 8.46844C25.32 6.44782 23.7183 4.8461 21.6977 4.66742C21.619 4.66044 21.5301 4.65644 21.3954 4.65416V5.11626C21.3954 5.88688 20.7706 6.5116 20 6.5116C19.2294 6.5116 18.6047 5.88688 18.6047 5.11626V1.39534C18.6047 0.624723 19.2294 0 20 0ZM28.8372 27.4417C28.8372 25.1299 30.7114 23.2557 33.0233 23.2557C35.3351 23.2557 37.2093 25.1299 37.2093 27.4417C37.2093 29.7535 35.3351 31.6278 33.0233 31.6278C30.7114 31.6278 28.8372 29.7535 28.8372 27.4417Z"
									fill="#79A5C8"
								/>
							</svg>
						</div>
						<div>
							<h5 class="font-semibold mb-1">MedReports</h5>
							<p class="text-steel/80 text-sm">
								KV-Abrechnungsdaten: Umsätze, Honorarkürzungen, Fallwerte und Leistungsvergleich
								zwischen Ärzten in der Praxis.
							</p>
						</div>
					</div>
				</div>
			</div>

			<PersonBanner
				title="HaBI zeigt, wo Sie stehen. Hammer & Partner mbB Wirtschaftsprüfer, Steuerberater, Rechtsanwälte zeigt, was zu tun ist."
				description="HaBI ersetzt keine Beratung – HaBI macht sichtbar, wie datenbasiert Hammer & Partner mbB Wirtschaftsprüfer, Steuerberater, Rechtsanwälte arbeiten."
				email="mailto:idk"
				image={Hammer}
				name="Thorsten Hammer"
				role="Wirtschaftsprüfer & Steuerberater"
			/>

			<div class="mt-6 grid gap-6 md:grid-cols-3">
				<div
					class="flex flex-col items-start gap-3 p-4 rounded-lg bg-navy-dark/40 hover:shadow-lg transition-shadow"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M22.4865 4.29544e-07H26.8157C29.0387 -1.81751e-05 30.8067 -1.81171e-05 32.2244 0.134773C33.6782 0.273005 34.9074 0.562736 36.0023 1.23371C37.1288 1.92406 38.076 2.87119 38.7662 3.9977C39.4373 5.09266 39.7269 6.32179 39.8652 7.77554C40 9.19333 40 10.9612 39.9999 13.1843V14.7019C40 16.2843 40 17.5431 39.9303 18.5636C39.859 19.6077 39.7104 20.504 39.3626 21.3435C38.513 23.3948 36.883 25.0248 34.8317 25.8744C34.1264 26.1667 33.3744 26.32 32.5225 26.4036C32.5126 26.6627 32.5001 26.9092 32.4841 27.1437C32.4084 28.2525 32.2508 29.1974 31.8854 30.0797C30.9885 32.2451 29.2681 33.9654 27.1027 34.8624C25.9924 35.3223 24.7675 35.457 23.2272 35.5063C22.3985 35.5329 21.8687 35.5511 21.4663 35.6C21.086 35.6466 20.9431 35.7085 20.8659 35.7543C20.7801 35.8049 20.6618 35.8979 20.4553 36.1822C20.2324 36.4893 19.9797 36.913 19.5799 37.5887L19.0971 38.4041C17.8378 40.532 14.7203 40.532 13.4609 38.4041L12.9782 37.5887C12.5783 36.913 12.3258 36.4893 12.1028 36.1822C11.8963 35.8979 11.7779 35.8049 11.6922 35.7543C11.615 35.7085 11.4722 35.6466 11.0918 35.6002C10.6894 35.5511 10.1596 35.5329 9.33086 35.5063C7.79061 35.457 6.56581 35.3223 5.45536 34.8624C3.28999 33.9654 1.56962 32.2451 0.67269 30.0797C0.307294 29.1974 0.149712 28.2525 0.0740471 27.1437C-1.81032e-05 26.0583 4.1676e-07 24.7184 4.1676e-07 23.0277V21.4164C-1.81879e-05 19.0415 -1.82418e-05 17.1595 0.143349 15.6516C0.29014 14.1077 0.597006 12.8125 1.30225 11.6617C2.03092 10.4726 3.03068 9.47281 4.21978 8.74412C5.37065 8.03887 6.66581 7.73201 8.20967 7.58522C8.60211 7.5479 9.01992 7.52031 9.46515 7.49988C9.61404 6.16064 9.91086 5.01776 10.536 3.99772C11.2263 2.87119 12.1734 1.92406 13.2999 1.23371C14.3949 0.562736 15.624 0.273005 17.0778 0.134773C18.4955 -1.81171e-05 20.2635 -1.81751e-05 22.4865 4.29544e-07ZM12.2852 7.4441C12.8188 7.44187 13.3813 7.44187 13.9745 7.44187H18.5836C20.9587 7.44185 22.8406 7.44185 24.3485 7.58522C25.8923 7.73201 27.1876 8.03887 28.3384 8.74412C29.5275 9.47281 30.5273 10.4726 31.2558 11.6617C31.9612 12.8125 32.2681 14.1077 32.4149 15.6516C32.5582 17.1595 32.5582 19.0413 32.5582 21.4164V23.0277C32.5582 23.2199 32.5582 23.4077 32.558 23.5909C33.0704 23.5245 33.4441 23.4285 33.7638 23.2962C35.1314 22.7297 36.2179 21.6432 36.7844 20.2756C36.9677 19.8328 37.0845 19.2756 37.1461 18.3736C37.2084 17.4592 37.2092 16.2956 37.2092 14.6512V13.2559C37.2092 10.9451 37.2079 9.30993 37.0869 8.03969C36.9682 6.7902 36.7439 6.03859 36.3868 5.45584C35.9266 4.70482 35.2951 4.0734 34.544 3.61318C33.9613 3.25606 33.2097 3.03174 31.9602 2.91295C30.6901 2.79217 29.0549 2.7907 26.744 2.7907H22.558C20.2473 2.7907 18.6121 2.79217 17.342 2.91295C16.0924 3.03174 15.3408 3.25606 14.7581 3.61318C14.0071 4.0734 13.3756 4.70482 12.9154 5.45584C12.6167 5.94332 12.4136 6.54302 12.2852 7.4441ZM8.47381 10.3634C7.13424 10.4907 6.3166 10.7322 5.67792 11.1236C4.86434 11.6222 4.18028 12.3062 3.68172 13.1198C3.29033 13.7585 3.04888 14.5761 2.92151 15.9157C2.79217 17.2761 2.7907 19.0253 2.7907 21.4884V22.9768C2.7907 24.7297 2.79146 25.9744 2.85827 26.9537C2.92425 27.9206 3.04988 28.5262 3.25096 29.0118C3.86466 30.4932 5.04175 31.6704 6.52332 32.2841C7.14505 32.5416 7.94609 32.6698 9.42007 32.7171L9.47793 32.7189C10.2322 32.7429 10.8882 32.7639 11.4297 32.83C12.0069 32.9003 12.574 33.0335 13.113 33.3522C13.6433 33.6659 14.0264 34.0819 14.3607 34.5422C14.67 34.968 14.9887 35.5065 15.35 36.1171L15.8625 36.9827C15.9469 37.1254 16.0944 37.2093 16.2791 37.2093C16.4636 37.2093 16.6112 37.1254 16.6956 36.9827L17.2082 36.1169C17.5693 35.5065 17.888 34.968 18.1974 34.5422C18.5317 34.0819 18.9148 33.6659 19.4452 33.3522C19.984 33.0335 20.5513 32.9003 21.1284 32.83C21.67 32.7639 22.326 32.7429 23.0802 32.7189L23.1381 32.7171C24.6121 32.6698 25.4131 32.5416 26.0348 32.2841C27.5165 31.6704 28.6936 30.4932 29.3072 29.0118C29.5083 28.5262 29.6339 27.9206 29.6999 26.9537C29.7667 25.9744 29.7675 24.7297 29.7675 22.9768V21.4884C29.7675 19.0253 29.766 17.2761 29.6367 15.9157C29.5092 14.5761 29.2678 13.7585 28.8765 13.1198C28.3779 12.3062 27.6938 11.6222 26.8802 11.1236C26.2415 10.7322 25.424 10.4907 24.0843 10.3634C22.7239 10.234 20.9747 10.2326 18.5116 10.2326H14.0465C11.5835 10.2326 9.83415 10.234 8.47381 10.3634Z"
							fill="#9FC0DE"
						/>
						<path
							d="M11.6279 21.8605C11.6279 22.888 10.795 23.7209 9.76745 23.7209C8.73995 23.7209 7.90698 22.888 7.90698 21.8605C7.90698 20.8329 8.73995 20 9.76745 20C10.795 20 11.6279 20.8329 11.6279 21.8605Z"
							fill="#9FC0DE"
						/>
						<path
							d="M18.1396 21.8605C18.1396 22.888 17.3066 23.7209 16.2791 23.7209C15.2516 23.7209 14.4186 22.888 14.4186 21.8605C14.4186 20.8329 15.2516 20 16.2791 20C17.3066 20 18.1396 20.8329 18.1396 21.8605Z"
							fill="#9FC0DE"
						/>
						<path
							d="M24.6512 21.8605C24.6512 22.888 23.8182 23.7209 22.7907 23.7209C21.7632 23.7209 20.9302 22.888 20.9302 21.8605C20.9302 20.8329 21.7632 20 22.7907 20C23.8182 20 24.6512 20.8329 24.6512 21.8605Z"
							fill="#9FC0DE"
						/>
					</svg>
					<h5 class="font-semibold mb-1 text-white">Steuerliche Beratung</h5>
					<p class="text-steel/80 text-sm">
						Steueroptimierung und Jahresabschluss speziell für Arztpraxen.
					</p>
				</div>
				<div class="flex flex-col items-start gap-3 p-4 rounded-lg bg-navy-dark/40">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M19.258 0.840519C18.1256 0.0897757 17.0205 -0.127342 15.8033 0.0676851C14.7651 0.234058 13.6411 0.709569 12.435 1.21983L12.3087 1.27325C11.1433 1.766 10.0214 2.36967 8.9593 3.0793C5.64417 5.29442 3.06032 8.44284 1.53453 12.1264C0.0087411 15.81 -0.390484 19.8633 0.387357 23.7738C1.1652 27.6843 3.08517 31.2763 5.90448 34.0956C8.72377 36.9149 12.3158 38.8348 16.2262 39.6126C20.1368 40.3905 24.19 39.9912 27.8735 38.4655C31.5573 36.9398 34.7057 34.3559 36.9208 31.0408C37.6304 29.9786 38.234 28.8569 38.7268 27.6914L38.7803 27.5652C39.2905 26.359 39.7659 25.235 39.9324 24.1968C40.1275 22.9796 39.9103 21.8745 39.1596 20.742C38.3533 19.5259 37.2561 18.9378 35.9235 18.6716C34.7357 18.4342 33.2509 18.4343 31.544 18.4345H27.6601C25.8524 18.4345 24.638 18.4315 23.7322 18.3098C22.8668 18.1934 22.4964 17.9923 22.2521 17.748C22.0077 17.5036 21.8067 17.1333 21.6902 16.2678C21.5685 15.362 21.5655 14.1477 21.5655 12.3399V8.45608C21.5657 6.74916 21.5659 5.26438 21.3285 4.07664C21.0622 2.7441 20.4741 1.64671 19.258 0.840519ZM13.4041 3.8641C14.7809 3.28202 15.5878 2.951 16.2484 2.84516C16.7662 2.76218 17.1579 2.82325 17.7038 3.18503C18.1659 3.49135 18.4168 3.86093 18.5702 4.62788C18.7463 5.50882 18.7526 6.70966 18.7526 8.58939V12.4374C18.7526 14.1223 18.7525 15.5273 18.9025 16.6427C19.0607 17.82 19.409 18.8829 20.2632 19.7369C21.1172 20.5911 22.1801 20.9393 23.3573 21.0976C24.4728 21.2476 25.8777 21.2474 27.5626 21.2474H31.4107C33.2904 21.2474 34.4912 21.2538 35.3722 21.4299C36.1391 21.5833 36.5088 21.8342 36.815 22.2963C37.1767 22.8421 37.2379 23.2339 37.155 23.7516C37.049 24.4123 36.718 25.2192 36.136 26.596C35.712 27.5988 35.1925 28.5641 34.5819 29.478C32.6759 32.3306 29.9667 34.5539 26.7971 35.8668C23.6276 37.1797 20.1398 37.5232 16.775 36.8539C13.4102 36.1845 10.3194 34.5325 7.89349 32.1065C5.46758 29.6807 3.81551 26.5899 3.14621 23.2251C2.47691 19.8603 2.82042 16.3725 4.13331 13.2029C5.4462 10.0333 7.66949 7.32417 10.5221 5.41815C11.436 4.80749 12.4013 4.28808 13.4041 3.8641Z"
							fill="#9FC0DE"
						/>
						<path
							d="M25.1981 0.317188C24.4459 0.123586 23.6791 0.576443 23.4856 1.32869C23.2919 2.08093 23.7447 2.84769 24.4971 3.04131C30.5904 4.60965 35.3909 9.41004 36.9591 15.5035C37.1529 16.2558 37.9197 16.7087 38.6718 16.515C39.424 16.3215 39.8769 15.5546 39.6833 14.8024C37.8595 7.71642 32.2841 2.14099 25.1981 0.317188Z"
							fill="#9FC0DE"
						/>
					</svg>
					<h5 class="font-semibold mb-1 text-white">Wirtschaftliche Beratung</h5>
					<p class="text-steel/80 text-sm">
						Personalkosten, Investitionen und Ertragslage im Blick behalten.
					</p>
				</div>
				<div
					class="flex flex-col items-start gap-3 p-4 rounded-lg bg-navy-dark/40 hover:shadow-lg transition-shadow"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M19.8932 2.70113e-07C15.5986 -1.83345e-05 12.2329 -3.70103e-05 9.60688 0.353023C6.91901 0.7144 4.79805 1.46852 3.13328 3.13328C1.46852 4.79805 0.714401 6.91901 0.353024 9.6069C-3.64004e-05 12.2329 -1.77225e-05 15.5986 8.82134e-07 19.8932V20.1068C-1.77225e-05 22.0112 -1.76527e-05 23.733 0.0307544 25.2886C0.0106056 25.3831 8.82134e-07 25.4809 8.82134e-07 25.5814C8.82134e-07 25.7042 0.0158892 25.8234 0.0457125 25.9369C0.0903637 27.618 0.178605 29.0958 0.353024 30.3931C0.714401 33.0809 1.46852 35.202 3.13328 36.8668C4.79805 38.5315 6.91901 39.2856 9.60688 39.6471C12.2329 40 15.5986 40 19.8932 40H20.1068C24.4015 40 27.7671 40 30.3931 39.6471C33.0809 39.2856 35.202 38.5315 36.8668 36.8668C38.5315 35.202 39.2856 33.0809 39.6471 30.3931C39.8214 29.0958 39.9096 27.618 39.9542 25.9369C39.9842 25.8234 40 25.7042 40 25.5814C40 25.4809 39.9894 25.3831 39.9693 25.2887C40 23.733 40 22.0112 40 20.1068V19.8932C40 15.5986 40 12.2329 39.6471 9.6069C39.2856 6.91901 38.5315 4.79805 36.8668 3.13328C35.202 1.46852 33.0809 0.7144 30.3931 0.353023C27.7671 -3.70103e-05 24.4015 -1.83345e-05 20.1068 2.70113e-07H19.8932ZM37.1948 24.186C37.2089 22.928 37.2093 21.5393 37.2093 20C37.2093 15.5754 37.2063 12.3973 36.8811 9.97875C36.5615 7.60032 35.9533 6.16642 34.8934 5.10661C33.8335 4.04677 32.3996 3.4386 30.0212 3.11883C27.6026 2.79366 24.4246 2.7907 20 2.7907C15.5754 2.7907 12.3973 2.79366 9.97875 3.11883C7.60032 3.4386 6.16642 4.04677 5.10661 5.10661C4.04677 6.16642 3.43861 7.60032 3.11883 9.97875C2.79366 12.3973 2.7907 15.5754 2.7907 20C2.7907 21.5393 2.79105 22.928 2.80523 24.186H6.97675L7.17717 24.1859C8.15583 24.1844 9.02465 24.1829 9.82173 24.5245C10.6188 24.866 11.217 25.4962 11.8908 26.206L12.0289 26.3513L14.1528 28.5814C14.3045 28.7407 14.4286 28.8709 14.538 28.9818C14.6316 28.8571 14.7372 28.7116 14.8663 28.5334L21.664 19.1507C21.9408 18.7682 22.2298 18.3689 22.515 18.075C22.8413 17.7384 23.3473 17.341 24.0813 17.3074C24.8153 17.2737 25.3557 17.6229 25.7114 17.928C26.0225 18.1948 26.3468 18.5656 26.6577 18.9211L30.0136 22.7565C30.9172 23.7894 31.1103 23.9658 31.3209 24.0614C31.5315 24.1568 31.7914 24.186 33.1639 24.186H37.1948ZM2.87306 26.9767C2.92127 28.1139 2.99769 29.1202 3.11883 30.0212C3.43861 32.3996 4.04677 33.8335 5.10661 34.8934C6.16642 35.9533 7.60032 36.5615 9.97875 36.8811C12.3973 37.2063 15.5754 37.2093 20 37.2093C24.4246 37.2093 27.6026 37.2063 30.0212 36.8811C32.3996 36.5615 33.8335 35.9533 34.8934 34.8934C35.9533 33.8335 36.5615 32.3996 36.8811 30.0212C37.0022 29.1202 37.0787 28.1139 37.1269 26.9767H33.1639L32.9516 26.9769C31.918 26.9786 31 26.9803 30.1678 26.6026C29.3356 26.2251 28.7323 25.5332 28.053 24.754L27.9133 24.5942L24.6067 20.8153C24.4558 20.6426 24.3319 20.5012 24.2227 20.3807C24.1248 20.5109 24.0145 20.6629 23.88 20.8486L17.0835 30.2296C16.8175 30.5972 16.5379 30.9833 16.2611 31.2696C15.9425 31.5991 15.4534 31.9844 14.7427 32.032C14.0321 32.0798 13.4959 31.7632 13.1361 31.4793C12.8235 31.2326 12.4949 30.8873 12.1821 30.5587L10.008 28.2759C9.11327 27.3364 8.92435 27.1762 8.72242 27.0895C8.52048 27.003 8.27412 26.9767 6.97675 26.9767H2.87306Z"
							fill="#9FC0DE"
						/>
					</svg>
					<h5 class="font-semibold mb-1 text-white">Arzt-/ Medizinrecht</h5>
					<p class="text-steel/80 text-sm">
						Vertrags-, Gesellschafts- und Kooperationsfragen rund um die Praxis.
					</p>
				</div>
			</div>

			<div class="mt-8 rounded-2xl border border-white/10 bg-navy-dark p-6">
				<div class="grid gap-4 md:grid-cols-2 items-start">
					<h4 class="text-lg font-semibold">
						Die Zahlen aus HaBI sind der Startpunkt – die Beratung entscheidet, was daraus wird.
					</h4>
					<p class="text-steel/80">
						Genau hier setzt die Erfahrung von Hammer & Partner mbB Wirtschaftsprüfer,
						Steuerberater, Rechtsanwälte mit Arztpraxen an: bei den Themen, die im Praxisalltag
						wirklich zählen.
					</p>
				</div>
			</div>

			<div class="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-3">
				<div
					class="flex flex-col items-start gap-3 p-4 rounded-lg bg-navy-dark/40 hover:shadow-xl transition-shadow hover:-translate-y-0.5"
				>
					<h5 class="font-semibold text-white">Hoch spezialisiert</h5>
					<p class="text-steel/80 text-sm">KV, BAG, MVZ, Nachfolge</p>
				</div>

				<div
					class="flex flex-col items-start gap-3 p-4 rounded-lg bg-navy-dark/40 hover:shadow-xl transition-shadow hover:-translate-y-0.5"
				>
					<h5 class="font-semibold text-white">Ganzheitlich</h5>
					<p class="text-steel/80 text-sm">Steuer, Wirtschaft, Recht aus einer Hand</p>
				</div>

				<div
					class="flex flex-col items-start gap-3 p-4 rounded-lg bg-navy-dark/40 hover:shadow-xl transition-shadow hover:-translate-y-0.5"
				>
					<h5 class="font-semibold text-white">Digital aufgestellt</h5>
					<p class="text-steel/80 text-sm">„Digitale Steuerkanzlei“ von Wolters Kluwer.</p>
				</div>
			</div>

			<div class="mt-8 rounded-2xl border border-white/10 bg-navy-dark p-6">
				<h3 class="text-lg font-semibold mb-2 text-center">
					Hammer & Partner: Übersetzer zwischen Medizin und Wirtschaft
				</h3>
				<div class="flex justify-center">
					<Button
						class="w-full sm:w-auto px-5 py-2 rounded-md transition-transform hover:scale-105"
						variant="secondary"
						href="https://hammer.partners"
						target="_blank"
						rel="noopener">Hammer & Partner</Button
					>
				</div>
			</div>

			<div>
				<div class="mt-8 rounded-2xl border border-white/10 bg-navy-dark p-6">
					<h3 class="text-lg font-semibold mb-2">
						Beratend stehen Ihnen Hammer & Partner mbB mit Wirtschaftsprüfern, Steuerberatern und
						Rechtsanwälten zur Seite – seit über 70 Jahren spezialisiert auf Ärzte. So arbeiten wir
						zusammen:
					</h3>

					<div class="mt-8">
						<ol class="grid gap-6 md:grid-cols-2">
							<li class="relative rounded-2xl bg-navy/60 p-6 overflow-hidden pl-14">
								<span
									class="absolute left-6 -top-6 text-[5.5rem] font-extrabold leading-none text-white/5 z-0 pointer-events-none"
									>1</span
								>
								<h4 class="relative z-10 text-lg font-semibold">Kennenlernen von HaBI</h4>
								<p class="relative z-10 mt-2 text-steel/80">
									Kurzer Live-Einblick in HaBI. Abstimmung, wie das System zu Ihrer Praxis passt –
									für neue Interessenten wie für bestehende Mandanten.
								</p>
							</li>

							<li class="relative rounded-2xl bg-navy/60 p-6 overflow-hidden pl-14">
								<span
									class="absolute left-6 -top-6 text-[5.5rem] font-extrabold leading-none text-white/5 z-0 pointer-events-none"
									>2</span
								>
								<h4 class="relative z-10 text-lg font-semibold">Analyse Ihrer Praxiszahlen</h4>
								<p class="relative z-10 mt-2 text-steel/80">
									Bei bestehenden Mandanten bauen wir auf den Zahlen auf, die wir bereits kennen.
									Bei neuen Interessenten sichten wir deren vor-handene Auswertungen. Dann
									identifizieren wir die Kennzahlen mit dem größten Hebel für Ihre Entscheidungen.
								</p>
							</li>

							<li class="relative rounded-2xl bg-navy/60 p-6 overflow-hidden pl-14">
								<span
									class="absolute left-6 -top-6 text-[5.5rem] font-extrabold leading-none text-white/5 z-0 pointer-events-none"
									>3</span
								>
								<h4 class="relative z-10 text-lg font-semibold">
									Individuelles Konzept & HaBI-Set-up
								</h4>
								<p class="relative z-10 mt-2 text-steel/80">
									Wir richten HaBI passgenau für Ihre Praxisein und begleiten die Einführung – von
									der Datenanbindung bis zum ersten Report. Sie sind sofort auskunftsfähig, ohne
									technischen Aufwand auf Ihrer Seite.
								</p>
							</li>

							<li class="relative rounded-2xl bg-navy/60 p-6 overflow-hidden pl-14">
								<span
									class="absolute left-6 -top-6 text-[5.5rem] font-extrabold leading-none text-white/5 z-0 pointer-events-none"
									>4</span
								>
								<h4 class="relative z-10 text-lg font-semibold">Laufende Beratung & Sparring</h4>
								<p class="relative z-10 mt-2 text-steel/80">
									In Ihrem Rhythmus – ob quartalsweise, monatlich oder anlassbezogen. Sie sehen Ihre
									Zahlen jederzeit in HaBI, wir sind für die Einordnung und Entscheidung an Ihrer
									Seite.
								</p>
							</li>
						</ol>
					</div>
				</div>
			</div>

			<div class="mt-8 rounded-2xl border border-white/10 bg-navy-dark p-6">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="flex justify-center items-center">
						<img src={Doctor} alt="Doctor" class="w-full h-auto rounded-2xl" />
					</div>
					<div class="flex flex-col justify-center">
						<h3>Bereit, Ihre Praxiszahlen anders zu sehen?</h3>
						<p>
							Vereinbaren Sie ein unverbindliches Erstgespräch – wir zeigen Ihnen HaBI live und
							besprechen, wie Reporting und Beratung für Ihre Praxis konkret aussehen können.
							Kostenfrei, rund 30 Minuten, ohne Verpflichtung.
						</p>
					</div>
				</div>

				<div class="mt-6 flex flex-col md:flex-row gap-4 justify-center">
					<div class="flex flex-col items-center md:items-start">
						<Button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="84"
								height="80"
								viewBox="0 0 84 80"
								fill="none"
							>
								<path
									opacity="0.8"
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M10.6938 3.43123C15.9374 -1.8029 24.571 -0.87121 28.9615 5.01659L34.3932 12.3003C37.9657 17.0911 37.6504 23.7868 33.4098 28.0198L32.3812 29.0465C32.3364 29.1775 32.2274 29.5892 32.3484 30.3717C32.6207 32.1338 34.0865 35.8717 40.2396 42.0138C46.3905 48.1538 50.1401 49.624 51.9203 49.8982C52.7271 50.0223 53.1492 49.9064 53.2797 49.8606L55.0371 48.1062C58.807 44.3433 64.6 43.6397 69.2674 46.1871L77.4967 50.6783C84.5432 54.5238 86.3238 64.1396 80.5502 69.9026L74.4316 76.0105C72.5036 77.9348 69.911 79.5396 66.7468 79.8358C58.9547 80.5653 40.7853 79.6347 21.6945 60.5778C3.87095 42.7861 0.450627 27.2708 0.0178639 19.6262C-0.200951 15.7608 1.61853 12.4903 3.93298 10.18L10.6938 3.43123ZM23.7893 8.90382C21.607 5.97743 17.5397 5.74474 15.2495 8.03084L8.48863 14.7796C7.06754 16.1982 6.38379 17.7615 6.46851 19.2582C6.81237 25.332 9.5747 39.3324 26.2502 55.9781C43.7445 73.4411 59.9023 73.9621 66.1472 73.3775C67.423 73.2582 68.692 72.5927 69.8761 71.4108L75.9947 65.3029C78.4822 62.8203 77.9335 58.2993 74.4109 56.3768L66.1816 51.886C63.9091 50.6459 61.2467 51.0549 59.5926 52.7059L57.6311 54.6644L55.3533 52.3643C57.6311 54.6644 57.628 54.6674 57.625 54.6704L57.6186 54.6765L57.6052 54.6894L57.5772 54.7167L57.5143 54.7755C57.4691 54.817 57.417 54.8624 57.3588 54.9113C57.2417 55.0086 57.0978 55.1184 56.9259 55.2343C56.5809 55.4661 56.1256 55.7186 55.5532 55.9322C54.3867 56.3686 52.8481 56.6029 50.9408 56.3093C47.2072 55.7346 42.2614 53.179 35.6841 46.6135C29.1089 40.0502 26.5418 35.1077 25.9636 31.3661C25.6679 29.4528 25.9038 27.9078 26.3437 26.7356C26.5593 26.1612 26.8133 25.7044 27.0465 25.359C27.1628 25.1867 27.2734 25.0427 27.3711 24.9256C27.4199 24.8671 27.4656 24.8153 27.5071 24.7701L27.5662 24.707L27.5933 24.6791L27.6062 24.666L27.6125 24.6597C27.6156 24.6566 27.6187 24.6535 29.8967 26.9533L27.6187 24.6535L28.8541 23.4203C30.7004 21.5774 30.9589 18.5182 29.2208 16.1876L23.7893 8.90382Z"
									fill="currentColor"
								/>
							</svg>
							<span>Jetzt Anrufen</span>
						</Button>
					</div>
					<div class="flex flex-col items-center md:items-start">
						<Button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="74"
								height="80"
								viewBox="0 0 74 80"
								fill="none"
							>
								<g opacity="0.8">
									<path
										d="M50.3172 46.0615C51.3143 45.0644 51.3143 43.4481 50.3172 42.451C49.3201 41.4538 47.7037 41.4538 46.7066 42.451L33.1927 55.9645L26.4875 49.2595C25.4904 48.2624 23.8738 48.2624 22.8767 49.2595C21.8796 50.2566 21.8796 51.8729 22.8767 52.87L31.3875 61.3807C32.3846 62.3778 34.0009 62.3778 34.998 61.3807L50.3172 46.0615Z"
										fill="currentColor"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M22.9787 0C24.3888 0 25.5319 1.1431 25.5319 2.55319V6.80851H47.6596V2.55319C47.6596 1.1431 48.8027 0 50.2128 0C51.6228 0 52.766 1.1431 52.766 2.55319V6.80875C55.5101 6.81069 57.7546 6.82788 59.6082 6.97934C61.7528 7.15455 63.5976 7.52214 65.2919 8.38543C68.014 9.77253 70.2274 11.9859 71.6146 14.7082C72.478 16.4025 72.8453 18.2472 73.0206 20.3919C73.1915 22.483 73.1915 25.072 73.1915 28.3142V58.494C73.1915 61.7362 73.1915 64.3254 73.0206 66.4167C72.8453 68.5614 72.478 70.4061 71.6146 72.1004C70.2274 74.8225 68.014 77.0359 65.2919 78.4231C63.5976 79.2865 61.7528 79.6538 59.6082 79.8291C57.5169 80 54.928 80 51.6858 80H21.5059C18.2637 80 15.6745 80 13.5834 79.8291C11.4387 79.6538 9.59401 79.2865 7.89971 78.4231C5.17736 77.0359 2.96402 74.8225 1.57692 72.1004C0.713635 70.4061 0.346043 68.5614 0.170826 66.4167C-3.32518e-05 64.3254 -3.31014e-05 61.7365 9.41158e-07 58.494V28.3145C-3.31014e-05 25.0722 -3.32518e-05 22.483 0.170826 20.3919C0.346043 18.2472 0.713635 16.4025 1.57692 14.7082C2.96402 11.9859 5.17736 9.77253 7.89971 8.38543C9.59401 7.52214 11.4387 7.15455 13.5834 6.97934C15.4369 6.82788 17.6815 6.81069 20.4255 6.80875V2.55319C20.4255 1.1431 21.5686 0 22.9787 0ZM21.617 11.9149C18.2384 11.9149 15.858 11.9169 13.9993 12.0687C12.1703 12.2182 11.0724 12.4999 10.218 12.9353C8.45644 13.8328 7.02427 15.265 6.12674 17.0265C5.69137 17.8809 5.40967 18.9788 5.26022 20.8078C5.15592 22.0848 5.12232 23.608 5.11149 25.5319H68.08C68.0691 23.608 68.0357 22.0848 67.9312 20.8078C67.7818 18.9788 67.5003 17.8809 67.0648 17.0265C66.1672 15.265 64.735 13.8328 62.9736 12.9353C62.1192 12.4999 61.0213 12.2182 59.1922 12.0687C57.3334 11.9169 54.9532 11.9149 51.5745 11.9149H21.617ZM5.10638 58.383V30.6383H68.0851V58.383C68.0851 61.7617 68.0831 64.142 67.9312 66.0007C67.7818 67.8298 67.5003 68.9277 67.0648 69.7821C66.1672 71.5435 64.735 72.9757 62.9736 73.8734C62.1192 74.3088 61.0213 74.5903 59.1922 74.7397C57.3334 74.8916 54.9532 74.8936 51.5745 74.8936H21.617C18.2384 74.8936 15.858 74.8916 13.9993 74.7397C12.1703 74.5903 11.0724 74.3088 10.218 73.8734C8.45644 72.9757 7.02427 71.5435 6.12674 69.7821C5.69137 68.9277 5.40967 67.8298 5.26022 66.0007C5.10836 64.142 5.10638 61.7617 5.10638 58.383Z"
										fill="currentColor"
									/>
								</g>
							</svg>
							<span>Termin Auswählen</span>
						</Button>
					</div>
				</div>
			</div>

			<div class="mt-8 rounded-2xl border border-white/10 bg-navy-dark p-6">
				<h3 class="text-lg font-semibold">Oder schreiben Sie uns!</h3>
				<form
					method="POST"
					action="?/contact"
					class="flex flex-col gap-4"
					onsubmit={() => (submitted = true)}
				>
					<Input placeholder="Name" name="name" id="name" type="text" required />
					<Input placeholder="E-Mail" name="email" id="email" type="email" required />
					<Input placeholder="Firma" name="company" id="company" type="text" required />
					<Textarea placeholder="Nachricht" name="message" id="message" required />
					<Button type="submit">
						{#if submitted}
							<Spinner />
						{/if}
						Absenden</Button
					>
				</form>
			</div>

			<PersonBanner
				title="Anamnese, wirtschaftliche Gesundheit, Diagnose, Behandlung."
				description="Gehen Sie den 1. Schritt zu besseren, klaren Entscheidungen in Ihrer Praxis. Mehr zu HaBI und Beratung im persönlichen Gespräch."
				email="mailto:idk"
				image={Schumacher}
				name="Oliver Schumacher"
				role="Wirtschaftsprüfer & Steuerberater"
			/>

			<div class="mt-8 mb-4">
				<h2 class="text-xl font-semibold">FAQ</h2>
				<Accordion.Root type="single">
					<Accordion.Item value="item-1">
						<Accordion.Trigger>Von wem ist die HaBI-APP?</Accordion.Trigger>
						<Accordion.Content>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum inventore
							deserunt nesciunt a eius minus deleniti officia laborum eligendi odio, reiciendis
							impedit animi, harum facere. Dignissimos cumque explicabo atque!
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-2">
						<Accordion.Trigger>Wie ist der Datenschutz geregelt?</Accordion.Trigger>
						<Accordion.Content
							>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos harum maiores
							accusantium sint repellendus itaque maxime nisi quas. Sapiente commodi recusandae,
							eius voluptatum itaque omnis voluptate animi aliquid aliquam voluptates?</Accordion.Content
						>
					</Accordion.Item>
					<Accordion.Item value="item-3">
						<Accordion.Trigger>Was kostet HaBI und wie läuft die Einführung ab?</Accordion.Trigger>
						<Accordion.Content>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ea fugiat ipsum odit
							dolore, unde corrupti, aliquam aspernatur quisquam omnis sequi! Fuga, repudiandae ab.
							Atque ea consequatur consectetur obcaecati iste.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-4">
						<Accordion.Trigger>
							Muss ich meinen aktuellen Steuerberater wechseln, um HaBI zu nutzen?
						</Accordion.Trigger>
						<Accordion.Content>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eum non ratione facere
							officiis voluptatem dolorum temporibus quod explicabo, id ipsa molestiae laborum sed
							tempora veniam hic accusamus inventore cumque?
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-5">
						<Accordion.Trigger>Welche Daten braucht HaBI – und woher kommen sie?</Accordion.Trigger>
						<Accordion.Content>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ratione impedit
							adipisci explicabo optio culpa nam consequuntur eligendi, temporibus voluptate
							distinctio voluptas sit. Doloribus suscipit praesentium beatae delectus, quis
							obcaecati.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-6">
						<Accordion.Trigger>
							Bekomme ich konkrete Handlungsempfehlungen oder nur eine Analyse?
						</Accordion.Trigger>
						<Accordion.Content>
							Bekomme ich konkrete Handlungsempfehlungen oder nur eine Analyse?
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</div>
		</div>
	</PageContainer>
</div>
