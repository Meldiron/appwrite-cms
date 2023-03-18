<script lang="ts">
	import { goto } from '$app/navigation';
	import { AppwriteService } from '$lib/appwrite';
	import { authStore } from '$lib/stores/auth';
	import { configStore } from '$lib/stores/config';
	import { slide } from 'svelte/transition';

	async function onLogout() {
		await AppwriteService.logout();
		authStore.set(null);
		goto('/auth/login');
	}
</script>

<div class="flex w-screen h-screen">
	<div class=" flex-shrink-0 w-[300px] h-full flex flex-col bg-slate-900">
		<a
			href="/app"
			class="flex items-center w-full p-3 space-x-3 text-white shadow-md  group bg-slate-800"
		>
			<div
				class="flex items-center justify-center w-12 h-12 text-center text-white rounded-md  bg-slate-900"
			>
				{$configStore.icon}
			</div>

			<div class="flex-1 w-20 overflow-x-hidden text-lg font-semibold  whitespace-nowrap">
				<p class="group-hover:underline text-ellipsis">{$configStore.name}</p>
			</div>
		</a>

		<div class="h-full p-3 overflow-y-auto">
			<div class="flex flex-col h-full py-1 space-y-3 overflow-y-auto text-sm">
				{#if $configStore.groups.length <= 0}
					<p class="font-light text-slate-600">There are no groups.</p>
				{:else}
					{#each $configStore.groups as group (group.name)}
						<div class="flex flex-col space-y-1">
							<button
								on:click={() => (group.opened = !group.opened)}
								class="relative flex items-center justify-start p-3 px-3 space-x-3 rounded-md  group menu-button text-slate-300"
							>
								<div class="flex items-center justify-between w-full">
									<div class="text-slate-600 flex items-center justify-start space-x-3">
										<div class="flex items-center justify-start space-x-2">
											<span class="text-sm">{group.icon}</span>
										</div>
										<p class="text-sm font-light uppercase group-hover:underline">{group.name}</p>
									</div>

									<svg
										xmlns="http://www.w3.org/2000/svg"
										class={`w-5 h-5 text-slate-400 transition ${
											group.opened ? 'transform rotate-180' : ''
										}`}
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</div>
							</button>

							{#if group.opened}
								<div transition:slide>
									<div class="ml-10 flex flex-col space-y-4">
										{#if group.panels.length <= 0}
											<p class="font-light text-slate-600">This group has no panels.</p>
										{:else}
											{#each group.panels as panel (group.name + panel.slug)}
												<a
													href={`/app/panels/${panel.slug}`}
													class="group text-white flex items-center justify-start space-x-3"
												>
													<div class="flex items-center justify-start space-x-2">
														<span class="text-sm">{panel.icon}</span>
													</div>
													<p class="text-sm font-light uppercase group-hover:underline">
														{panel.name}
													</p>
												</a>
											{/each}
										{/if}
									</div>
								</div>
							{/if}
						</div>
					{/each}
				{/if}
			</div>
		</div>

		<div class="p-3">
			<button
				type="button"
				on:click={onLogout}
				class="flex items-center justify-center w-full p-3 space-x-3 text-center text-red-500 hover:text-red-400"
			>
				<span> Logout </span>
			</button>
		</div>
	</div>

	<div class="w-full h-full overflow-y-auto from-slate-100 to-slate-50 bg-gradient-to-b">
		<slot />
	</div>
</div>
