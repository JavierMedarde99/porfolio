<script lang="ts">
	import SocialMeta from '$lib/components/seo/SocialMeta.svelte';
	import { pageTitle } from '$lib/utils/seo';
	import AboutPreview from '$lib/components/home/AboutPreview.svelte';
	import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import TechStack from '$lib/components/home/TechStack.svelte';
</script>

<svelte:head>
	<title>{pageTitle()}</title>
	<meta
		name="description"
		content="Portfolio de Javi Med: Java, Spring Boot, microservicios y proyectos full stack."
	/>
</svelte:head>
<SocialMeta
	title="Javi Med | Backend & Full Stack Developer"
	description="Portfolio de Javi Med: Java, Spring Boot, microservicios y proyectos full stack."
	path="/"
/>

<main>
	<Hero />
	<FeaturedProjects />
	<TechStack />
	<AboutPreview />
</main>
