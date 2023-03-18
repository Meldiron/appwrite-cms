<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { EditBoolean } from '$lib/config.interfaces';
	import type { Models } from 'appwrite';

	export let config: EditBoolean;
	export let document: (any & Models.Document) | null;
	export let value: any | null;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
	export let ready = true;

	// Prevents compilation errors
	config; document; value; panel; group; block; ready;

	$: formValue = value === true ? 'xtrue' : value === false ? 'xfalse' : 'xempty';
</script>

<div class="flex flex-col space-y-1">
	<div class="w-[fit-content] flex items-center justify-start">
		<button
			on:click={() => (value = true)}
			type="button"
			class={`${
				value === true
					? 'bg-slate-900 text-slate-50 hover:bg-slate-800'
					: 'bg-slate-200 text-slate-900 hover:bg-slate-300'
			} px-6 py-2 border-r rounded-l-md`}
		>
			Yes
		</button>
		<button
			on:click={() => (value = false)}
			type="button"
			class={`${
				value === false
					? 'bg-slate-900 text-slate-50 hover:bg-slate-800'
					: 'bg-slate-200 text-slate-900 hover:bg-slate-300'
			} px-6 py-2 rounded-r-md`}
		>
			No
		</button>
	</div>

	<input type="hidden" name={block.attribute} value={formValue} />
</div>
