<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { ListBoolean } from '$lib/config.interfaces';
	import type { Models } from 'appwrite';

	export let config: ListBoolean;
	export let document: any & Models.Document;
	export let value: any;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
	export let ready = true;

	// Prevents compilation errors
	config; document; value; panel; group; block; ready;
</script>

<p>{value === true ? 'Yes' : value === false ? 'No' : 'None'}</p>
