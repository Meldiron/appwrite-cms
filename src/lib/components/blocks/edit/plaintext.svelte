<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { EditPlaintext } from '$lib/config.interfaces';
	import type { Models } from 'appwrite';

	export let config: EditPlaintext;
	export let document: (any & Models.Document) | null;
	export let value: any | null;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
	export let ready = true;

	// Prevents compilation errors
	config; document; value; panel; group; block; ready;

	let inputValue = value;
	function onInput(e: any) {
		inputValue = e.target.value;
	}

	if(document === null && config.createValue) {
		inputValue = config.createValue;
	}
</script>

<input
	class="disabled:opacity-25 w-full p-3 bg-white border-2 rounded-md border-slate-200 focus:outline-none focus:ring ring-gray-600"
	type={config.type}
	disabled={document !== null && config.editDisabled}
	name={block.attribute}
	value={inputValue}
	on:input={onInput}
	placeholder={config.placeholder}
/>
