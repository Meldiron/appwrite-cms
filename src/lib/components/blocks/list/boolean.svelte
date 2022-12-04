<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { ListBoolean } from '$lib/config.interfaces';
	import type { Models } from 'node-appwrite';

	export let config: ListBoolean;
	export let document: any & Models.Document;
	export let value: any;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
</script>

<p>{value === true ? 'Yes' : 'No'}</p>
