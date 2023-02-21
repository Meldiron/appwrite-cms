<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { EditDropdown } from '$lib/config.interfaces';
	import type { Models } from 'node-appwrite';

	export let config: EditDropdown;
	export let document: (any & Models.Document) | null;
	export let value: any | null;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
	export let ready = true;

    let selected: string;

    let answer = '';

    let options = config.options

	let inputValue = value;
	function onInput(e: any) {
		inputValue = e.target.value;
	}
    
</script>

<div class="flex flex-col space-y-1">
	<div class="w-[fit-content] flex items-center justify-start">
    {#if options}
    <select value={selected} on:change="{() => answer = ''}">
            {#each options as option}
            <option value={option}>{option}</option>
            {/each}
    </select>

    <input type="hidden" bind:value={answer}>
    {:else}
    <input
	class="w-full p-3 bg-white border-2 rounded-md border-slate-200 focus:outline-none focus:ring ring-gray-600"
	type={"text"}
	name={block.attribute}
	value={inputValue}
	on:input={onInput}
	placeholder={config.placeholder}
/>    
    {/if}
	</div>
</div>
