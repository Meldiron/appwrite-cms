<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { ViewBoolean } from '$lib/config.interfaces';
	import type { Models } from 'node-appwrite';

	export let config: ViewBoolean;
	export let document: any & Models.Document;
	export let value: any;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
	export let ready = true;
</script>

<p>{value === true ? 'Yes' : value === false ? 'No' : 'None'}</p>
