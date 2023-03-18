<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { ListPlaintext } from '$lib/config.interfaces';
	import type { Models } from 'appwrite';

	export let config: ListPlaintext;
	export let document: any & Models.Document;
	export let value: any;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
	export let ready = true;

	// Prevents compilation errors
	config; document; value; panel; group; block; ready;
</script>

<p class="max-h-[24px] overflow-hidden">{value}</p>
