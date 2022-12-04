<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { ViewPlaintext } from '$lib/config.interfaces';
	import type { Models } from 'node-appwrite';

	export let config: ViewPlaintext;
	export let document: any & Models.Document;
	export let value: any;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
</script>

<p>{value}</p>
