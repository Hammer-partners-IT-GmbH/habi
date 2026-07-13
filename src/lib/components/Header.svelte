<script>
	import { resolve } from "$app/paths";
	import { Button } from "./ui/button";
	let mobileMenuOpen = $state(false);

</script>
<nav
		class="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md"
	>
		<div class="container">
			<div class="flex h-16 items-center justify-between">
				<!-- Logo -->
				<a href={resolve("/")} class="flex items-center gap-2 no-underline">
					<div class="flex flex-col leading-none">
						<span
							class="font-display text-xl font-light tracking-tight text-white"
							>HaBI</span
						>
						<span class="font-sans text-[10px] font-light tracking-widest text-steel uppercase"
							>Hammer Business Intelligence</span
						>
					</div>
				</a>

				<!-- Desktop Nav -->
				<div class="hidden items-center gap-8 md:flex">
					<a href="#loesungen" class="font-sans text-sm font-light text-white/80 no-underline hover:text-white transition-colors">Lösungen</a>
					<a href="#habimeddetails" class="font-sans text-sm font-light text-white/80 no-underline hover:text-white transition-colors">HaBI med</a>
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