<script lang="ts">
	import SocialMeta from '$lib/components/seo/SocialMeta.svelte';
	import { pageTitle, SITE } from '$lib/utils/seo';
	import AboutPreview from '$lib/components/home/AboutPreview.svelte';
	import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import TechMarquee from '$lib/components/home/TechMarquee.svelte';
	import TechStack from '$lib/components/home/TechStack.svelte';
</script>

<svelte:head>
	<title>{pageTitle()}</title>
	<meta
		name="description"
		content="Portfolio de Javier Medarde Mata: Java, Spring Boot, microservicios y proyectos full stack."
	/>
	<link rel="canonical" href={SITE.url + '/'} />
</svelte:head>
<SocialMeta
	title="Javier Medarde Mata | Backend & Full Stack Developer"
	description="Portfolio de Javier Medarde Mata: Java, Spring Boot, microservicios y proyectos full stack."
	path="/"
/>

<main>
	<Hero />
	<TechMarquee />
	<FeaturedProjects />
	<TechStack />
	<AboutPreview />
</main>
