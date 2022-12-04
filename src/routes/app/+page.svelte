<script>
	import Navbar from '$lib/components/navbar.svelte';
	import { configStore } from '$lib/stores/config';
</script>

<Navbar title="Welcome" icon="👋" description="Are you ready to change the world today? 😏" />

<div class="p-4 text-base">
	<div class="bg-slate-200 border-2 border-slate-200 rounded-md p-6">
		<p class="text-slate-600 text-center">{$configStore.dashboard.motd}</p>
	</div>
</div>
