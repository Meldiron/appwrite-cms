<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { ListPlaintext } from '$lib/config.interfaces';
	import type { Models } from 'node-appwrite';

	export let config: ListPlaintext;
	export let document: any & Models.Document;
	export let value: any;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
</script>

<p style={`color: ${config.color};`}>{value}</p>
