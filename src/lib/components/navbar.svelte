<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
	export let icon: string = '';
	export let description: string = '';
</script>

<div class="w-full h-[4.5rem] bg-white shadow-md flex items-center justify-between px-6">
	<div>
		<h1 class="text-xl font-semibold text-slate-900">
			{#if icon}
				{icon}
			{/if}

			{title}

			{#if subtitle}
				<span class="text-slate-400">- {subtitle}</span>
			{/if}
		</h1>
		{#if description}
			<p class="text-sm text-slate-500">{description}</p>
		{/if}
	</div>

	<div>
		<slot />
	</div>
</div>
