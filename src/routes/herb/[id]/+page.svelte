<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import { currentLang, t } from '$lib/i18n';
	import { getHerbTranslation } from '$lib/i18n/herbTranslations';

	let { data }: { data: PageData } = $props();
	let herb = $derived(data.herb);

	let activeTab = $state<'overview' | 'evidence' | 'usage' | 'safety'>('overview');

	// Get translated herb info
	let herbName = $derived(getHerbTranslation(herb.id, $currentLang)?.name || herb.name);
	let herbDescription = $derived(getHerbTranslation(herb.id, $currentLang)?.description || herb.description);
	let herbMechanism = $derived(getHerbTranslation(herb.id, $currentLang)?.mechanism || herb.mechanism);
	let herbKeyOutcome = $derived(getHerbTranslation(herb.id, $currentLang)?.keyOutcome || herb.keyOutcome);
	let herbDosage = $derived(getHerbTranslation(herb.id, $currentLang)?.dosage || herb.dosage);
	let herbSafetyNote = $derived(getHerbTranslation(herb.id, $currentLang)?.safetyNote || herb.safetyNote);
	let herbDiseases = $derived(getHerbTranslation(herb.id, $currentLang)?.diseases || herb.diseases);
	let herbDetailedInfo = $derived(getHerbTranslation(herb.id, $currentLang)?.detailedInfo || herb.detailedInfo);
</script>

<svelte:head>
	<title>{herbName} | {$t.appName}</title>
	<meta name="description" content="{herbDescription}" />
</svelte:head>

<div class="min-h-screen bg-botanical-gradient">
	<!-- Decorative background -->
	<div class="fixed inset-0 pointer-events-none overflow-hidden">
		<div class="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-accent-glow)] rounded-full blur-3xl opacity-30"></div>
		<div class="absolute bottom-1/4 -left-40 w-80 h-80 bg-[var(--color-accent-glow)] rounded-full blur-3xl opacity-20"></div>
	</div>

	<!-- Header -->
	<header class="relative z-10 pt-6 pb-4 px-4 sm:px-6 lg:px-8">
		<div class="max-w-5xl mx-auto flex items-center justify-between">
			<a href="{base}/" class="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors group">
				<svg class="w-5 h-5 {$currentLang === 'fa' ? 'group-hover:translate-x-1 rotate-180' : 'group-hover:-translate-x-1'} transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				<span>{$t.backToSearch}</span>
			</a>
			
			<!-- Language Toggle -->
			<button
				onclick={() => currentLang.toggle()}
				class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-[var(--color-bg-card)] border border-[var(--color-accent-muted)]/30 text-[var(--color-text-secondary)] hover:border-[var(--color-accent-primary)]/50 hover:text-[var(--color-text-primary)] transition-all cursor-pointer"
				aria-label="Toggle language"
			>
				<span class="text-base">{$currentLang === 'en' ? '🇺🇸' : '🇮🇷'}</span>
				<span>{$currentLang === 'en' ? 'EN' : 'فا'}</span>
			</button>
		</div>
	</header>

	<!-- Hero Section -->
	<section class="relative z-10 px-4 sm:px-6 lg:px-8 pb-8">
		<div class="max-w-5xl mx-auto">
			<div class="glass rounded-3xl overflow-hidden" dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}>
				<!-- Hero Image -->
				<div class="relative h-56 sm:h-72 lg:h-80">
					<img 
						src="{base}{herb.image}" 
						alt={herbName}
						class="w-full h-full object-cover"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent"></div>
					
					<!-- Tags at Top -->
					<div class="absolute top-0 left-0 right-0 p-4 sm:p-6">
						<div class="flex flex-wrap gap-2 {$currentLang === 'fa' ? 'justify-end' : 'justify-start'}">
							{#each herbDiseases.slice(0, 4) as disease (disease)}
								<span class="badge">{disease}</span>
							{/each}
						</div>
					</div>
					
					<!-- Title Overlay at Bottom -->
					<div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
						<h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-1 {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
							{herbName}
						</h1>
						<p class="text-lg sm:text-xl italic text-[var(--color-text-muted)] {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
							{herb.scientificName}
						</p>
					</div>
				</div>

				<!-- Quick Stats -->
				<div class="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 border-b border-[var(--color-accent-muted)]/20">
					<div class="text-center {$currentLang === 'fa' ? 'sm:text-right' : 'sm:text-left'}">
						<p class="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">{$t.mechanism}</p>
						<p class="text-sm sm:text-base text-[var(--color-text-primary)] font-medium">{herbMechanism}</p>
					</div>
					<div class="text-center {$currentLang === 'fa' ? 'sm:text-right' : 'sm:text-left'}">
						<p class="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">{$t.keyOutcome}</p>
						<p class="text-sm sm:text-base text-[var(--color-accent-primary)] font-medium">{herbKeyOutcome}</p>
					</div>
					<div class="text-center {$currentLang === 'fa' ? 'sm:text-right' : 'sm:text-left'}">
						<p class="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">{$t.dosage}</p>
						<p class="text-sm sm:text-base text-[var(--color-text-primary)] font-medium">{herbDosage}</p>
					</div>
				</div>

				<!-- Description -->
				<div class="p-6 sm:p-8">
					<p class="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
						{herbDescription}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Tab Navigation -->
	<section class="relative z-10 px-4 sm:px-6 lg:px-8 pb-4" dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}>
		<div class="max-w-5xl mx-auto">
			<!-- Mobile: 2x2 Grid -->
			<div class="grid grid-cols-2 gap-2 sm:hidden">
				<button
					onclick={() => activeTab = 'overview'}
					class="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl text-xs font-medium transition-all cursor-pointer {activeTab === 'overview' 
						? 'bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]' 
						: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]'}"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span>{$t.overview}</span>
				</button>
				<button
					onclick={() => activeTab = 'evidence'}
					class="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl text-xs font-medium transition-all cursor-pointer {activeTab === 'evidence' 
						? 'bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]' 
						: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]'}"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span>{$t.clinicalEvidence}</span>
				</button>
				<button
					onclick={() => activeTab = 'usage'}
					class="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl text-xs font-medium transition-all cursor-pointer {activeTab === 'usage' 
						? 'bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]' 
						: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]'}"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
					<span>{$t.howToUse}</span>
				</button>
				<button
					onclick={() => activeTab = 'safety'}
					class="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl text-xs font-medium transition-all cursor-pointer {activeTab === 'safety' 
						? 'bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]' 
						: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]'}"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
					</svg>
					<span>{$t.safetyAndInteractions}</span>
				</button>
			</div>
			
			<!-- Desktop: Horizontal tabs with icons -->
			<div class="hidden sm:flex gap-2">
				<button
					onclick={() => activeTab = 'overview'}
					class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer {activeTab === 'overview' 
						? 'bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]' 
						: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]'}"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span>{$t.overview}</span>
				</button>
				<button
					onclick={() => activeTab = 'evidence'}
					class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer {activeTab === 'evidence' 
						? 'bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]' 
						: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]'}"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span>{$t.clinicalEvidence}</span>
				</button>
				<button
					onclick={() => activeTab = 'usage'}
					class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer {activeTab === 'usage' 
						? 'bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]' 
						: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]'}"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
					<span>{$t.howToUse}</span>
				</button>
				<button
					onclick={() => activeTab = 'safety'}
					class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer {activeTab === 'safety' 
						? 'bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]' 
						: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)]'}"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
					</svg>
					<span>{$t.safetyAndInteractions}</span>
				</button>
			</div>
		</div>
	</section>

	<!-- Tab Content -->
	<section class="relative z-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-8" dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}>
		<div class="max-w-5xl mx-auto">
			{#if activeTab === 'overview'}
				<div class="glass rounded-2xl p-6 sm:p-8 animate-fade-in">
					<h2 class="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-text-primary)] mb-6 {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
						{$t.overview}
					</h2>
					<div class="prose-botanical {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
						<p>{herbDetailedInfo.overview}</p>
						
						<h3 class="text-xl font-serif mt-8 mb-4">{$t.howItWorks}</h3>
						<p>{herbDetailedInfo.howItWorks}</p>
					</div>
				</div>
			{:else if activeTab === 'evidence'}
				<div class="glass rounded-2xl p-6 sm:p-8 animate-fade-in">
					<h2 class="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-text-primary)] mb-6 {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
						{$t.clinicalEvidence}
					</h2>
					<div class="prose-botanical {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
						<p>{herbDetailedInfo.clinicalEvidence}</p>
						
						<!-- Key Outcome Highlight -->
						<div class="my-8 p-6 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-muted)]/30">
							<p class="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{$t.keyResearchFinding}</p>
							<p class="text-lg sm:text-xl font-medium text-[var(--color-accent-primary)]">
								{herbKeyOutcome}
							</p>
						</div>
						
						<!-- References -->
						<h3 class="text-xl font-serif mt-8 mb-4">{$t.scientificReferences}</h3>
						<ul class="space-y-3">
							{#each herb.references as ref (ref.id)}
								<li class="flex items-start gap-3 {$currentLang === 'fa' ? 'flex-row-reverse' : ''}">
									<svg class="w-4 h-4 text-[var(--color-accent-primary)] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
									</svg>
									<a 
										href={ref.url}
										target="_blank"
										rel="noopener noreferrer"
										class="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] underline underline-offset-2"
									>
										{ref.title}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{:else if activeTab === 'usage'}
				<div class="glass rounded-2xl p-6 sm:p-8 animate-fade-in">
					<h2 class="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-text-primary)] mb-6 {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
						{$t.howToUse}
					</h2>
					<div class="prose-botanical {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
						<!-- Dosage Highlight -->
						<div class="mb-8 p-6 rounded-xl bg-[var(--color-accent-primary)]/10 border border-[var(--color-accent-primary)]/30">
							<p class="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-2">{$t.recommendedDosage}</p>
							<p class="text-lg sm:text-xl font-medium text-[var(--color-text-primary)]">
								{herbDosage}
							</p>
						</div>
						
						<h3 class="text-xl font-serif mb-4">{$t.usageGuidelines}</h3>
						<p>{herbDetailedInfo.usage}</p>

						<!-- All Conditions -->
						<h3 class="text-xl font-serif mt-8 mb-4">{$t.conditionsThisHerbMayHelp}</h3>
						<div class="flex flex-wrap gap-2 {$currentLang === 'fa' ? 'justify-end' : 'justify-start'}">
							{#each herbDiseases as disease (disease)}
								<span class="badge">{disease}</span>
							{/each}
						</div>
					</div>
				</div>
			{:else if activeTab === 'safety'}
				<div class="space-y-6 animate-fade-in">
					<!-- Safety Note -->
					<div class="glass rounded-2xl p-6 sm:p-8" dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}>
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 rounded-full bg-[var(--color-earth-amber)]/20 flex items-center justify-center shrink-0">
								<svg class="w-5 h-5 text-[var(--color-earth-amber)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
								</svg>
							</div>
							<div class="flex-1">
								<h3 class="font-serif text-xl font-semibold text-[var(--color-text-primary)] mb-2">{$t.importantSafetyNote}</h3>
								<p class="text-[var(--color-text-secondary)]">{herbSafetyNote}</p>
							</div>
						</div>
					</div>

					<!-- Contraindications -->
					<div class="glass rounded-2xl p-6 sm:p-8" dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}>
						<h2 class="font-serif text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
							{$t.contraindications}
						</h2>
						<p class="text-[var(--color-text-muted)] mb-4">{$t.doNotUseIf}</p>
						<ul class="space-y-2">
							{#each herbDetailedInfo.contraindications as contra (contra)}
								<li class="flex items-start gap-3">
									<svg class="w-5 h-5 text-[var(--color-earth-copper)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
									<span class="text-[var(--color-text-secondary)] flex-1">{contra}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Interactions -->
					<div class="glass rounded-2xl p-6 sm:p-8" dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}>
						<h2 class="font-serif text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
							{$t.drugInteractions}
						</h2>
						<p class="text-[var(--color-text-muted)] mb-4">{$t.mayInteractWith}</p>
						<ul class="space-y-2">
							{#each herbDetailedInfo.interactions as interaction (interaction)}
								<li class="flex items-start gap-3">
									<svg class="w-5 h-5 text-[var(--color-earth-amber)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
									</svg>
									<span class="text-[var(--color-text-secondary)] flex-1">{interaction}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Disclaimer -->
					<div class="glass rounded-2xl p-6 sm:p-8 bg-[var(--color-bg-tertiary)]/50" dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}>
						<p class="text-sm text-[var(--color-text-muted)]">
							<strong class="text-[var(--color-text-primary)]">{$t.medicalDisclaimer}</strong> {$t.medicalDisclaimerText}
						</p>
					</div>
				</div>
			{/if}
		</div>
	</section>

	<!-- Footer -->
	<footer class="relative z-10 px-4 sm:px-6 lg:px-8 py-8 mt-8 border-t border-[var(--color-accent-muted)]/20">
		<div class="max-w-5xl mx-auto text-center">
			<a href="{base}/" class="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent-primary)] transition-colors">
				<svg class="w-4 h-4 {$currentLang === 'fa' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				<span>{$t.backToAllHerbs}</span>
			</a>
			<p class="text-sm text-[var(--color-text-muted)] mt-4">
				🌿 {$t.appName} | {$t.appTagline}
			</p>
		</div>
	</footer>
</div>

