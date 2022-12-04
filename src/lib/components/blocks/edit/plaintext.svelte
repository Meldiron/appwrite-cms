<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { EditPlaintext } from '$lib/config.interfaces';
	import type { Models } from 'node-appwrite';

	export let config: EditPlaintext;
	export let document: (any & Models.Document) | null;
	export let value: any | null;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;

	let inputValue = value;
	function onInput(e: any) {
		// TODO: Type properly
		inputValue = e.target.value;
	}
</script>

<input
	class="w-full p-3 bg-white border-2 rounded-md border-slate-200 focus:outline-none focus:ring ring-gray-600"
	type={config.type}
	name={block.attribute}
	value={inputValue}
	on:input={onInput}
	placeholder={config.placeholder}
/>
