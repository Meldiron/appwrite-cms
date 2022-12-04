<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { EditBoolean } from '$lib/config.interfaces';
	import type { Models } from 'node-appwrite';

	export let config: EditBoolean;
	export let document: (any & Models.Document) | null;
	export let value: any | null;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
</script>

<div class="flex flex-col space-y-1">
	<button type="button" class="w-[fit-content] flex items-center justify-start">
		<div class="bg-slate-900 text-slate-50 hover:bg-slate-800 px-6 py-2 border-r rounded-l-md">
			Yes
		</div>
		<div class="bg-slate-200 text-slate-900 hover:bg-slate-300 px-6 py-2 rounded-r-md">No</div>
	</button>
</div>
