<script lang="ts">
	import { AppwriteService } from '$lib/appwrite';
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { ViewPlaintext } from '$lib/config.interfaces';
	import type { Models } from 'appwrite';

	export let config: ViewPlaintext;
	export let document: any & Models.Document;
	export let value: any;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
	export let ready = true;

	// Prevents compilation errors
	config; document; value; panel; group; block; ready;
</script>

<p>{value}</p>
