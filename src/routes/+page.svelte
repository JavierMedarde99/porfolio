<script lang="ts">
	import { SITE } from '$lib/utils/seo';
	import AboutPreview from '$lib/components/home/AboutPreview.svelte';
	import FeaturedProjects from '$lib/components/home/FeaturedProjects.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import TechStack from '$lib/components/home/TechStack.svelte';
</script>

<svelte:head>
	<title>Javi Med | Backend & Full Stack Developer</title>
	<meta
		name="description"
		content="Portfolio de Javi Med: Java, Spring Boot, microservicios y proyectos full stack."
	/>
	<link rel="canonical" href={SITE.url + '/'} />
</svelte:head>

<Hero />
<FeaturedProjects />
<TechStack />
<AboutPreview />
