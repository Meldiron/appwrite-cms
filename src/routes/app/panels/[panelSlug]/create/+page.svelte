<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import type { Group, Panel } from '$lib/config.builder';
	import { configStore } from '$lib/stores/config';
	import { set_input_type } from 'svelte/internal';
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

<form method="POST">
	<Navbar title={'New Record'} icon="🖋️">
		<div class="flex items-center justify-end space-x-4">
			<a href={`/app/panels/${panel.slug}`} class="flex items-center justify-center group">
				<div class="p-3 text-sm  text-slate-800 rounded-l-md group-hover:bg-slate-200 bg-slate-100">
					Discard
				</div>
				<div class="p-3  text-slate-800 rounded-r-md group-hover:bg-slate-300 bg-slate-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</a>

			<button type="submit" class="flex items-center justify-center group">
				<div class="p-3 text-sm text-white  group-hover:bg-slate-900 rounded-l-md bg-slate-800">
					Save
				</div>
				<div class="p-3 text-white  group-hover:bg-black rounded-r-md bg-slate-900">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
						/>
						<path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
						<path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
					</svg>
				</div>
			</button>
		</div>
	</Navbar>

	<div class="p-4 text-base">
		<div class="bg-white p-4 rounded-md flex flex-col space-y-4">
			{#each panel.blocks as block}
				{#if block.editInterface}
					<div>
						<p class="text-sm text-slate-400 mb-2">{block.editInterface.name}:</p>
						<svelte:component
							this={block.editInterface.element}
							config={block.editInterface}
							{panel}
							{group}
							{block}
							document={null}
							value={null}
						/>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</form>
