<script lang="ts">
	import { herbs, diseaseCategories, getHerbsByCategory } from '$lib/data/herbs';
	import type { HerbInfo } from '$lib/data/herbs';
	import { currentLang, t } from '$lib/i18n';
	import { getHerbTranslation } from '$lib/i18n/herbTranslations';

	let searchQuery = $state('');
	let selectedCategory = $state<string | null>(null);
	let showAllHerbs = $state(false);
	let showSuggestions = $state(false);
	let selectedSuggestionIndex = $state(-1);

	// Get translated category name
	function getCategoryName(categoryKey: string): string {
		const categoryMap: Record<string, keyof typeof $t.categories> = {
			'Gastrointestinal': 'gastrointestinal',
			'Neuropsychiatric': 'neuropsychiatric',
			'Respiratory': 'respiratory',
			'Cardiovascular': 'cardiovascular',
			'Musculoskeletal': 'musculoskeletal',
			'Metabolic': 'metabolic',
			'Headache & Pain': 'headachePain',
			'Dermatological': 'dermatological',
			"Women's Health": 'womensHealth',
			"Men's Health": 'mensHealth',
			'Pediatric': 'pediatric'
		};
		const key = categoryMap[categoryKey];
		return key ? $t.categories[key] : categoryKey;
	}

	// Get translated herb info
	function getHerbName(herb: HerbInfo): string {
		const translation = getHerbTranslation(herb.id, $currentLang);
		return translation?.name || herb.name;
	}

	function getHerbDescription(herb: HerbInfo): string {
		const translation = getHerbTranslation(herb.id, $currentLang);
		return translation?.description || herb.description;
	}

	function getHerbDiseases(herb: HerbInfo): string[] {
		const translation = getHerbTranslation(herb.id, $currentLang);
		return translation?.diseases || herb.diseases;
	}

	// Build a search index with both English and Persian terms
	interface SearchTerm {
		term: string;
		termLower: string;
		displayTerm: string;
		herbIds: string[];
	}

	let allSearchTerms = $derived.by(() => {
		const termMap = new Map<string, SearchTerm>();
		
		herbs.forEach(herb => {
			// Add English diseases
			herb.diseases.forEach(disease => {
				const key = disease.toLowerCase();
				if (!termMap.has(key)) {
					termMap.set(key, { term: disease, termLower: key, displayTerm: disease, herbIds: [] });
				}
				termMap.get(key)!.herbIds.push(herb.id);
			});
			
			// Add Persian diseases
			const translation = getHerbTranslation(herb.id, $currentLang);
			if (translation) {
				translation.diseases.forEach((disease, index) => {
					const key = disease.toLowerCase();
					if (!termMap.has(key)) {
						// Use both Persian and English for display
						const englishDisease = herb.diseases[index] || disease;
						termMap.set(key, { 
							term: disease, 
							termLower: key, 
							displayTerm: $currentLang === 'fa' ? disease : englishDisease,
							herbIds: [] 
						});
					}
					if (!termMap.get(key)!.herbIds.includes(herb.id)) {
						termMap.get(key)!.herbIds.push(herb.id);
					}
				});
			}
			
			// Add herb names
			const herbNameEn = herb.name.toLowerCase();
			if (!termMap.has(herbNameEn)) {
				termMap.set(herbNameEn, { term: herb.name, termLower: herbNameEn, displayTerm: herb.name, herbIds: [herb.id] });
			}
			
			if (translation) {
				const herbNameFa = translation.name.toLowerCase();
				if (!termMap.has(herbNameFa)) {
					termMap.set(herbNameFa, { 
						term: translation.name, 
						termLower: herbNameFa, 
						displayTerm: $currentLang === 'fa' ? translation.name : herb.name,
						herbIds: [herb.id] 
					});
				}
			}
		});
		
		return Array.from(termMap.values());
	});

	// Autocomplete suggestions
	let suggestions = $derived.by(() => {
		if (!searchQuery.trim() || searchQuery.length < 1) return [];
		
		const query = searchQuery.toLowerCase();
		const matches = allSearchTerms
			.filter(item => item.termLower.includes(query))
			.slice(0, 8);
		
		// Remove duplicates by displayTerm
		const seen = new Set<string>();
		return matches.filter(item => {
			if (seen.has(item.displayTerm)) return false;
			seen.add(item.displayTerm);
			return true;
		});
	});

	// Search function that works with both languages
	function searchHerbsMultilingual(query: string): HerbInfo[] {
		if (!query.trim()) return [];
		
		const queryLower = query.toLowerCase();
		const matchedHerbIds = new Set<string>();
		
		// Search in allSearchTerms
		allSearchTerms.forEach(item => {
			if (item.termLower.includes(queryLower)) {
				item.herbIds.forEach(id => matchedHerbIds.add(id));
			}
		});
		
		return herbs.filter(herb => matchedHerbIds.has(herb.id));
	}

	let searchResults = $derived.by(() => {
		if (searchQuery.trim()) {
			return searchHerbsMultilingual(searchQuery);
		}
		if (selectedCategory) {
			return getHerbsByCategory(selectedCategory);
		}
		if (showAllHerbs) {
			return herbs;
		}
		return [];
	});

	let hasResults = $derived(searchResults.length > 0);
	let isSearching = $derived(searchQuery.trim().length > 0 || selectedCategory !== null || showAllHerbs);
	let isTypingSearch = $derived(searchQuery.trim().length > 0);

	function selectCategory(category: string) {
		if (selectedCategory === category) {
			selectedCategory = null;
		} else {
			selectedCategory = category;
			searchQuery = '';
			showAllHerbs = false;
		}
	}

	function clearSearch() {
		searchQuery = '';
		selectedCategory = null;
		showAllHerbs = false;
		showSuggestions = false;
	}

	function viewAllHerbs() {
		showAllHerbs = true;
		searchQuery = '';
		selectedCategory = null;
	}

	function handleSearchInput() {
		if (searchQuery.trim()) {
			selectedCategory = null;
			showAllHerbs = false;
			showSuggestions = true;
			selectedSuggestionIndex = -1;
		} else {
			showSuggestions = false;
		}
	}

	function selectSuggestion(suggestion: SearchTerm) {
		searchQuery = suggestion.displayTerm;
		showSuggestions = false;
		selectedSuggestionIndex = -1;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!showSuggestions || suggestions.length === 0) return;
		
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, suggestions.length - 1);
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
		} else if (event.key === 'Enter' && selectedSuggestionIndex >= 0) {
			event.preventDefault();
			selectSuggestion(suggestions[selectedSuggestionIndex]);
		} else if (event.key === 'Escape') {
			showSuggestions = false;
		}
	}

	function handleBlur() {
		// Delay to allow click on suggestion
		setTimeout(() => {
			showSuggestions = false;
		}, 200);
	}
</script>

<svelte:head>
	<title>Yasin Herbal | Evidence-Based Herbal Medicine Guide</title>
	<meta name="description" content="Discover scientifically validated herbal medicines for various health conditions. Evidence-based recommendations backed by clinical research." />
</svelte:head>

<div class="min-h-screen bg-botanical-gradient">
	<!-- Decorative background elements -->
	<div class="fixed inset-0 pointer-events-none overflow-hidden">
		<div class="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-accent-glow)] rounded-full blur-3xl opacity-30"></div>
		<div class="absolute top-1/2 -left-40 w-80 h-80 bg-[var(--color-accent-glow)] rounded-full blur-3xl opacity-20"></div>
		<div class="absolute bottom-20 right-1/4 w-64 h-64 bg-[var(--color-earth-sage)] rounded-full blur-3xl opacity-10"></div>
	</div>

	<!-- Header -->
	<header class="relative z-10 pt-8 pb-4 px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<nav class="flex items-center justify-between">
				<button onclick={clearSearch} class="group flex items-center gap-3 cursor-pointer">
					<div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[var(--color-accent-primary)] flex items-center justify-center group-hover:animate-pulse-glow transition-all">
						<span class="text-xl sm:text-2xl">🌿</span>
					</div>
					<div>
						<h1 class="font-serif text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
							{$t.appName}
						</h1>
						<p class="text-xs text-[var(--color-text-muted)] hidden sm:block">{$t.appTagline}</p>
					</div>
				</button>
				
				<div class="flex items-center gap-3">
					<button 
						onclick={viewAllHerbs}
						class="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-accent-muted)] hover:text-[var(--color-text-primary)] transition-all cursor-pointer"
					>
						{$t.browseAllHerbs}
					</button>
					
					<!-- Language Toggle -->
					<button
						onclick={() => currentLang.toggle()}
						class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-[var(--color-bg-card)] border border-[var(--color-accent-muted)]/30 text-[var(--color-text-secondary)] hover:border-[var(--color-accent-primary)]/50 hover:text-[var(--color-text-primary)] transition-all cursor-pointer"
						aria-label="Toggle language"
					>
						<span class="text-base">{$currentLang === 'en' ? '🇺🇸' : '🇮🇷'}</span>
						<span class="hidden sm:inline">{$currentLang === 'en' ? 'EN' : 'فا'}</span>
					</button>
				</div>
			</nav>
		</div>
	</header>

	<!-- Hero Section -->
	<section class="relative z-10 px-4 sm:px-6 lg:px-8 pt-6 pb-6 sm:pt-12 sm:pb-10">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-4 sm:mb-6 animate-fade-in">
				{$t.heroTitle1}
				<span class="text-gradient">{$t.heroTitle2}</span>
			</h2>
			<p class="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in stagger-1 opacity-0">
				{$t.heroDescription}
			</p>

			<!-- Search Bar with Autocomplete -->
			<div class="max-w-2xl mx-auto animate-fade-in stagger-2 opacity-0">
				<div class="relative">
					<input
						type="text"
						bind:value={searchQuery}
						oninput={handleSearchInput}
						onfocus={() => { if (searchQuery.trim()) showSuggestions = true; }}
						onblur={handleBlur}
						onkeydown={handleKeydown}
						placeholder={$t.searchPlaceholder}
						dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}
						class="search-input w-full px-6 py-4 sm:py-5 {$currentLang === 'fa' ? 'pr-14 pl-6' : 'pl-14 pr-6'} rounded-2xl text-[var(--color-text-primary)] text-base sm:text-lg placeholder:text-[var(--color-text-muted)]"
						autocomplete="off"
					/>
					<svg class="absolute {$currentLang === 'fa' ? 'right-5' : 'left-5'} top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
					{#if searchQuery}
						<button
							onclick={clearSearch}
							aria-label={$t.clearSearch}
							class="absolute {$currentLang === 'fa' ? 'left-5' : 'right-5'} top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-[var(--color-bg-tertiary)] transition-colors cursor-pointer"
						>
							<svg class="w-5 h-5 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					{/if}
				</div>
				
				<!-- Autocomplete Suggestions - Pushes content down -->
				{#if showSuggestions && suggestions.length > 0}
					<div 
						class="mt-3 py-2 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-accent-muted)]/30 shadow-lg max-h-64 overflow-y-auto"
						dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}
					>
						{#each suggestions as suggestion, i (suggestion.term)}
							<button
								onclick={() => selectSuggestion(suggestion)}
								class="w-full px-4 py-3 hover:bg-[var(--color-bg-tertiary)] transition-colors cursor-pointer flex items-center gap-3 {$currentLang === 'fa' ? 'flex-row-reverse text-right' : 'text-left'} {selectedSuggestionIndex === i ? 'bg-[var(--color-bg-tertiary)]' : ''}"
							>
								<svg class="w-4 h-4 text-[var(--color-accent-primary)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
								<span class="text-[var(--color-text-primary)] flex-1">{suggestion.displayTerm}</span>
								<span class="text-xs text-[var(--color-text-muted)]">
									{suggestion.herbIds.length} {suggestion.herbIds.length === 1 ? $t.herb : $t.herbs}
								</span>
							</button>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Category Pills - Only show when NOT searching -->
	{#if !isTypingSearch}
		<section class="relative z-10 px-4 sm:px-6 lg:px-8 pb-4">
			<div class="max-w-5xl mx-auto">
				<p class="text-center text-sm text-[var(--color-text-muted)] mb-4">{$t.browseByCategory}</p>
				<div class="flex flex-wrap justify-center gap-2 sm:gap-3">
					{#each diseaseCategories as category, i (category.name)}
						<button
							onclick={() => selectCategory(category.name)}
							class="px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer animate-fade-in opacity-0 {selectedCategory === category.name 
								? 'bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]' 
								: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] hover:text-[var(--color-text-primary)]'}"
							style="animation-delay: {0.1 + i * 0.05}s"
						>
							<span class="{$currentLang === 'fa' ? 'ml-1' : 'mr-1'}">{category.icon}</span>
							{getCategoryName(category.name)}
						</button>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Results Section -->
	{#if isSearching}
		<section class="relative z-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-8" dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}>
			<div class="max-w-7xl mx-auto">
				{#if hasResults}
					<div class="flex items-center justify-between mb-6 sm:mb-8 {$currentLang === 'fa' ? 'flex-row-reverse' : ''}">
						<h3 class="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-text-primary)] {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
							{#if searchQuery}
								{$t.resultsFor} "{searchQuery}"
							{:else if selectedCategory}
								{getCategoryName(selectedCategory)} {$t.remedies}
							{:else}
								{$t.allHerbalMedicines}
							{/if}
						</h3>
						<span class="badge">{searchResults.length} {searchResults.length === 1 ? $t.herb : $t.herbs}</span>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
						{#each searchResults as herb, i (herb.id)}
							<a
								href="/herb/{herb.id}"
								class="herb-card glass rounded-2xl overflow-hidden animate-fade-in opacity-0"
								style="animation-delay: {i * 0.1}s"
								dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}
							>
								<div class="herb-image-container h-40 sm:h-48">
									<img 
										src={herb.image} 
										alt={getHerbName(herb)}
										class="w-full h-full object-cover"
										loading="lazy"
									/>
								</div>
								<div class="p-4 sm:p-5">
									<div class="mb-2">
										<h4 class="font-serif text-xl sm:text-2xl font-semibold text-[var(--color-text-primary)] {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
											{getHerbName(herb)}
										</h4>
										<p class="text-xs sm:text-sm italic text-[var(--color-text-muted)] {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
											{herb.scientificName}
										</p>
									</div>
									
									<p class="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2 {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
										{getHerbDescription(herb)}
									</p>

									<div class="flex flex-wrap gap-2 mb-4 {$currentLang === 'fa' ? 'justify-end' : 'justify-start'}">
										{#each getHerbDiseases(herb).slice(0, 3) as disease (disease)}
											<span class="badge-outline">{disease}</span>
										{/each}
										{#if getHerbDiseases(herb).length > 3}
											<span class="badge-outline">+{getHerbDiseases(herb).length - 3}</span>
										{/if}
									</div>

									<div class="flex items-center text-[var(--color-accent-primary)] text-sm font-medium {$currentLang === 'fa' ? 'justify-end flex-row-reverse' : 'justify-start'}">
										<span>{$t.viewDetails}</span>
										<svg class="w-4 h-4 {$currentLang === 'fa' ? 'mr-1 rotate-180' : 'ml-1'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</div>
							</a>
						{/each}
					</div>
				{:else}
					<div class="text-center py-12 sm:py-20">
						<div class="text-6xl mb-4">🔍</div>
						<h3 class="font-serif text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
							{$t.noResultsTitle}
						</h3>
						<p class="text-[var(--color-text-secondary)] mb-6">
							{$t.noResultsDescription}
						</p>
						<button
							onclick={clearSearch}
							class="px-6 py-3 rounded-xl bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)] font-medium hover:bg-[var(--color-accent-secondary)] transition-colors cursor-pointer"
						>
							{$t.clearSearchButton}
						</button>
					</div>
				{/if}
			</div>
		</section>
		
		<!-- Category Pills - Show below results when searching -->
		<section class="relative z-10 px-4 sm:px-6 lg:px-8 pb-8">
			<div class="max-w-5xl mx-auto">
				<p class="text-center text-sm text-[var(--color-text-muted)] mb-4">{$t.browseByCategory}</p>
				<div class="flex flex-wrap justify-center gap-2 sm:gap-3">
					{#each diseaseCategories as category (category.name)}
						<button
							onclick={() => selectCategory(category.name)}
							class="px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer {selectedCategory === category.name 
								? 'bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]' 
								: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card-hover)] hover:text-[var(--color-text-primary)]'}"
						>
							<span class="{$currentLang === 'fa' ? 'ml-1' : 'mr-1'}">{category.icon}</span>
							{getCategoryName(category.name)}
						</button>
					{/each}
				</div>
			</div>
		</section>
	{:else}
		<!-- Featured Herbs Section (when not searching) -->
		<section class="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
			<div class="max-w-7xl mx-auto">
				<div class="text-center mb-8 sm:mb-12">
					<h3 class="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-text-primary)] mb-2">
						{$t.featuredRemedies}
					</h3>
					<p class="text-[var(--color-text-secondary)]">
						{$t.featuredDescription}
					</p>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{#each herbs.slice(0, 6) as herb, i (herb.id)}
						<a
							href="/herb/{herb.id}"
							class="herb-card glass rounded-2xl overflow-hidden animate-fade-in opacity-0"
							style="animation-delay: {i * 0.1}s"
							dir={$currentLang === 'fa' ? 'rtl' : 'ltr'}
						>
							<div class="herb-image-container h-40 sm:h-48">
								<img 
									src={herb.image} 
									alt={getHerbName(herb)}
									class="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>
							<div class="p-4 sm:p-5">
								<div class="mb-2">
									<h4 class="font-serif text-xl sm:text-2xl font-semibold text-[var(--color-text-primary)] {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
										{getHerbName(herb)}
									</h4>
									<p class="text-xs sm:text-sm italic text-[var(--color-text-muted)] {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
										{herb.scientificName}
									</p>
								</div>
								
								<p class="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2 {$currentLang === 'fa' ? 'text-right' : 'text-left'}">
									{getHerbDescription(herb)}
								</p>

								<div class="flex flex-wrap gap-2 mb-4 {$currentLang === 'fa' ? 'justify-end' : 'justify-start'}">
									{#each getHerbDiseases(herb).slice(0, 3) as disease (disease)}
										<span class="badge-outline">{disease}</span>
									{/each}
									{#if getHerbDiseases(herb).length > 3}
										<span class="badge-outline">+{getHerbDiseases(herb).length - 3}</span>
									{/if}
								</div>

								<div class="flex items-center text-[var(--color-accent-primary)] text-sm font-medium {$currentLang === 'fa' ? 'justify-end flex-row-reverse' : 'justify-start'}">
									<span>{$t.viewDetails}</span>
									<svg class="w-4 h-4 {$currentLang === 'fa' ? 'mr-1 rotate-180' : 'ml-1'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
									</svg>
								</div>
							</div>
						</a>
					{/each}
				</div>

				<div class="text-center mt-8 sm:mt-12">
					<button
						onclick={viewAllHerbs}
						class="px-8 py-4 rounded-xl bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] font-medium hover:bg-[var(--color-accent-muted)] transition-all cursor-pointer border border-[var(--color-accent-muted)]"
					>
						{$t.viewAll} {herbs.length} {$t.herbs}
					</button>
				</div>
			</div>
		</section>
	{/if}

	<!-- About Section -->
	<section class="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
		<div class="max-w-4xl mx-auto">
			<div class="glass rounded-3xl p-6 sm:p-10">
				<h3 class="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-text-primary)] mb-6 text-center">
					{$t.aboutTitle}
				</h3>
				<div class="prose-botanical">
					<p>
						{$t.aboutText1}
					</p>
					<p>
						{$t.aboutText2}
					</p>
					<p class="text-[var(--color-text-muted)] text-sm mt-6">
						{$t.disclaimer}
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="relative z-10 px-4 sm:px-6 lg:px-8 py-8 border-t border-[var(--color-accent-muted)]/20">
		<div class="max-w-7xl mx-auto text-center">
			<div class="flex items-center justify-center gap-2 mb-4">
				<span class="text-2xl">🌿</span>
				<span class="font-serif text-lg font-semibold text-[var(--color-text-primary)]">{$t.appName}</span>
			</div>
			<p class="text-sm text-[var(--color-text-muted)]">
				{$t.footerTagline}
			</p>
			<p class="text-xs text-[var(--color-text-muted)] mt-2">
				{$t.footerSources}
			</p>
		</div>
	</footer>
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
