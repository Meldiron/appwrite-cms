<script>
	import Navbar from '$lib/components/navbar.svelte';
	import { configStore } from '$lib/stores/config';
</script>

<Navbar title="Welcome" icon="👋" description="Are you ready to change the world today? 😏" />

<div class="p-4 text-base">
	{$configStore.dashboard.motd}
</div>
