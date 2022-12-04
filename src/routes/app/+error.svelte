<script lang="ts">
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<Navbar title={'Whoops!'} icon="🚨" description="We came across an error." />

<div class="p-4 text-base">
	<div class="bg-slate-200 border-2 border-slate-200 rounded-md p-6">
		<p class="text-slate-600 text-center">{$page.error?.message || 'Unknown error.'}</p>
	</div>
</div>
