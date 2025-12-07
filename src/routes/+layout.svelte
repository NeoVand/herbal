<script lang="ts">
	import './layout.css';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	// For production, construct the full URL
	const siteUrl = 'https://yasinmiran.github.io/herbal';
	const ogImageUrl = `${siteUrl}/og-image.svg`;
</script>

<svelte:head>
	<!-- Favicon -->
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="apple-touch-icon" href={favicon} />
	
	<!-- Primary Meta Tags -->
	<title>Yasin Herbal | Evidence-Based Herbal Medicine Guide</title>
	<meta name="title" content="Yasin Herbal | Evidence-Based Herbal Medicine Guide" />
	<meta name="description" content="Discover evidence-based herbal medicines with clinical trials, proper dosages, and safety information. Natural healing, backed by science." />
	<meta name="keywords" content="herbal medicine, natural remedies, evidence-based, clinical trials, herbs, botanical medicine, alternative medicine" />
	<meta name="author" content="Yasin Herbal" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content="Yasin Herbal | Evidence-Based Herbal Medicine Guide" />
	<meta property="og:description" content="Discover evidence-based herbal medicines with clinical trials, proper dosages, and safety information. Natural healing, backed by science." />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="Yasin Herbal" />
	<meta property="og:locale" content="en_US" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={siteUrl} />
	<meta name="twitter:title" content="Yasin Herbal | Evidence-Based Herbal Medicine Guide" />
	<meta name="twitter:description" content="Discover evidence-based herbal medicines with clinical trials, proper dosages, and safety information. Natural healing, backed by science." />
	<meta name="twitter:image" content={ogImageUrl} />
	
	<!-- Theme Color -->
	<meta name="theme-color" content="#0c1a14" />
	<meta name="msapplication-TileColor" content="#0c1a14" />
</svelte:head>

{@render children()}
