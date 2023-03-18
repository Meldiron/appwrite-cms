<script lang="ts">
	import { browser } from '$app/environment';
	import { AppwriteService } from '$lib/appwrite';
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { ViewFile } from '$lib/config.interfaces';
	import type { Models } from 'appwrite';
	import { onMount } from 'svelte';

	export let config: ViewFile;
	export let document: any & Models.Document;
	export let value: any;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
	export let ready = true;
	
	// Prevents compilation errors
	config; document; value; panel; group; block; ready;

	let src = '';

	onMount(async () => {
		if (browser) {
			const file = await AppwriteService.getFilePreview(config.bucketId, value);

			var blob = new Blob([file], { type: 'image/jpeg' });

			var urlCreator = window.URL || window.webkitURL;
			var imageUrl = urlCreator.createObjectURL(blob);
			src = imageUrl;
		}
	});
</script>

{#if src}
	<img {src} alt="Preview" class="max-w-[500px]" />
{:else}
	<p>Loading...</p>
{/if}
