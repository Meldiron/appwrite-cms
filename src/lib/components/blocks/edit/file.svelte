<script lang="ts">
	import { browser } from '$app/environment';
	import { AppwriteService } from '$lib/appwrite';
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { EditFile } from '$lib/config.interfaces';
	import type { Models } from 'appwrite';
	import { onMount } from 'svelte';

	export let config: EditFile;
	export let document: (any & Models.Document) | null;
	export let value: any | null;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
	export let ready = true;

	// Prevents compilation errors
	config; document; value; panel; group; block; ready;

	let filePreview: any = '';

	let files: FileList;

	onMount(async () => {
		if (browser && value) {
			const file = await AppwriteService.getFilePreview(config.bucketId, value);
			var blob = new Blob([file], { type: 'image/jpeg' });

			var urlCreator = window.URL || window.webkitURL;
			var imageUrl = urlCreator.createObjectURL(blob);
			filePreview = imageUrl;
		}
	});

	$: {
		if (files) {
			const file = files[0] ?? null;

			if (!file) {
				value = '';
			} else {
				const fr = new FileReader();
				fr.onload = () => {
					filePreview = fr.result;
				};
				fr.readAsDataURL(file);

				upload(file);
			}
		}
	}

	async function upload(file: File) {
		ready = false;
		const appwriteFile = await AppwriteService.createFile(config.bucketId, file);

		value = appwriteFile.$id;
		ready = true;
	}
</script>

<input type="hidden" name={block.attribute} bind:value />

{#if filePreview}
	<img src={filePreview} alt="Preview" class="max-w-[500px] my-2" />
{/if}

<input
	class="w-full p-3 bg-white border-2 rounded-md border-slate-200 focus:outline-none focus:ring ring-gray-600"
	type="file"
	bind:files
/>
