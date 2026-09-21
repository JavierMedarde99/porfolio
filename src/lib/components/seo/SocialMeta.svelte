<script lang="ts">
	import { SITE } from '$lib/utils/seo';

	interface Props {
		title: string;
		description: string;
		path: string;
		image?: string;
	}

	let { title, description, path, image = `${SITE.url}/social-share.png` }: Props = $props();
	const url = $derived(`${SITE.url}${path}`);
</script>

<svelte:head>
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
