<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import type { Group, Panel } from '$lib/config.builder';
	import { configStore } from '$lib/stores/config';
	import type { PageData } from './$types';

	export let data: PageData;

	let group: Group;
	let panel: Panel;
	$: {
		for (const xgroup of $configStore.groups) {
			for (const xpanel of xgroup.panels) {
				if (xpanel.slug === data.panelSlug) {
					group = xgroup;
					panel = xpanel;
				}
			}
		}
	}
</script>

<Navbar
	title={data.panelDocument[panel.idAttribute]}
	description={panel.idAttribute === '$id' ? '' : data.panelDocument.$id}
	subtitle={panel.idAttribute}
	icon="👀"
>
	<div class="flex items-center justify-end space-x-4">
		{#if !panel.singletonId}
			<a href={`/app/panels/${panel.slug}`} class="flex items-center justify-center group">
				<div class="p-3 text-sm  text-slate-800 rounded-l-md group-hover:bg-slate-200 bg-slate-100">
					Close
				</div>
				<div class="p-3  text-slate-800 rounded-r-md group-hover:bg-slate-300 bg-slate-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>
			</a>
		{/if}

		{#if panel.editEnabled}
			<a
				href={`/app/panels/${panel.slug}/edit/${data.panelDocument.$id}`}
				class="flex items-center justify-center group"
			>
				<div class="p-3 text-sm text-white  group-hover:bg-slate-900 rounded-l-md bg-slate-800">
					Edit
				</div>
				<div class="p-3 text-white  rounded-r-md group-hover:bg-black bg-slate-900">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
						/>
					</svg>
				</div>
			</a>
		{/if}
	</div>
</Navbar>

<div class="p-4 text-base">
	<div class="bg-white p-4 rounded-md flex flex-col space-y-4">
		{#each panel.blocks as block}
			{#if block.viewInterface}
				{@const value = data.panelDocument[block.attribute]}

				<div>
					<p class="text-sm text-slate-400 mb-2">{block.viewInterface.name}:</p>
					<svelte:component
						this={block.viewInterface.element}
						config={block.viewInterface}
						{panel}
						{group}
						{block}
						document={data.panelDocument}
						{value}
					/>
				</div>
			{/if}
		{/each}
	</div>
</div>
