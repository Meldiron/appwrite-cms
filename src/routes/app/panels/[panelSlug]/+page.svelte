<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import { Group, Panel } from '$lib/config.builder';
	import { configStore } from '$lib/stores/config';
	import type { PageData } from './$types';

	export let data: PageData;

	let group: Group;
	let panel: Panel;

	$: {
		for (const xgroup of $configStore.groups) {
			for (const xpanel of xgroup.panels) {
				if (xpanel.slug === data.panelSlug) {
					group = xgroup;
					panel = xpanel;
				}
			}
		}
	}
</script>

<Navbar
	subtitle={panel.subtitle}
	title={panel.name}
	icon={panel.icon}
	description={panel.description}
>
	<div class="flex items-center justify-end space-x-4">
		<div class="flex items-center justify-center group">
			<div class="p-3 rounded-l-md bg-slate-100 text-slate-700">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</div>
			<div class="p-1 pl-0 rounded-r-md bg-slate-100 text-slate-700">
				<!-- TODO: Make it work -->
				<input
					placeholder="I am looking for ..."
					class="bg-white p-0 m-0 h-[2.25rem] rounded-md px-2 text-sm focus:outline-none focus:ring focus:ring-slate-300 focus:ring-inset"
					type="text"
				/>
			</div>
		</div>

		{#if panel.createEnabled}
			<a href={`/app/panels/${panel.slug}/create`} class="flex items-center justify-center group">
				<div class="p-3 text-sm text-white  rounded-l-md bg-slate-800 group-hover:bg-slate-900">
					Create
				</div>
				<div class="p-3 text-white  group-hover:bg-black rounded-r-md bg-slate-900">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 4v16m8-8H4"
						/>
					</svg>
				</div>
			</a>
		{/if}
	</div>
</Navbar>

<div class="p-4 text-base">
	<div class="w-full text-md">
		<div
			class="
			flex
			w-[fit-content]
			overflow-x-auto
			flex-nowrap
			space-x-3
		  "
		>
			{#each panel.labels as label (label.slug)}
				<!-- TODO: Design if active -->
				<!-- TODO: If label active, use queries  -->
				<a
					href={`/app/panels/${panel.slug}?label=${label.slug}`}
					class="flex-shrink-0 px-4 text-slate-600 rounded-md py-2 bg-slate-200 hover:bg-slate-300"
				>
					{label.icon}
					{label.name}
				</a>
			{/each}
		</div>
	</div>

	<!-- TODO: Make it work -->
	<div>
		<p class="mb-2 text-sm text-right text-slate-500 my-2">TODO: 5000+ documents found</p>
		<div class="overflow-y-auto border-2 rounded-md  bg-slate-900 border-slate-900">
			<table class="relative w-full overflow-hidden border-collapse table-fixed">
				<thead class="border-b-2 border-slate-800">
					<tr>
						<td
							class="
					  border-r-2 border-slate-800
					  bg-slate-900
					  py-2
					  px-4
					  text-white
					  font-semibold
					  w-[130px]
					"
						>
							Actions
						</td>

						<td
							style="width: 69px"
							class="px-4 py-2 font-semibold text-white border-r-2  border-slate-800 bg-slate-900"
						>
							Name1
						</td>
						<td
							style="width: 69px"
							class="px-4 py-2 font-semibold text-white border-r-2  border-slate-800 bg-slate-900"
						>
							Name2
						</td>
						<td
							style="width: 69px"
							class="px-4 py-2 font-semibold text-white border-r-2  border-slate-800 bg-slate-900"
						>
							Name3
						</td>
					</tr>
				</thead>
				<tbody>
					<!-- TODO: Every second: bg-slate-100 -->
					<tr class="bg-white">
						<td class="flex items-center justify-start px-4 py-4 space-x-1">
							<a href="#"
								><button class="p-2 rounded-md  bg-slate-200 text-slate-800 hover:bg-slate-300 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-4 h-4"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
										<path
											fill-rule="evenodd"
											d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
											clip-rule="evenodd"
										/>
									</svg></button
								></a
							>

							{#if panel.editEnabled}
								<a href="#">
									<button class="p-2 rounded-md  bg-slate-900 text-slate-50 hover:bg-black">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="w-4 h-4"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
											/>
										</svg></button
									></a
								>
							{/if}

							{#if panel.deleteEnabled}
								<button class="p-2 rounded-md text-red-800 bg-red-200 rounded-mdp hover:bg-red-300">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-4 h-4"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							{/if}
						</td>
						<td class="px-4 py-4">
							<p>Daco</p>
						</td>
						<td class="px-4 py-4">
							<p>Daco</p>
						</td>
						<td class="px-4 py-4">
							<p>Daco</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<div class="flex items-start justify-between mt-6">
		<div class="flex items-center justify-start space-x-2">
			<!-- TODO: Add to config js -->
			<p class="text-sm text-slate-500">Results per page</p>

			<select
				class="px-2 bg-white border-2 rounded-md  focus:outline-none focus:ring ring-slate-500 border-slate-300"
			>
				<option value="25"> 25 </option>
				<option value="50"> 50 </option>
			</select>
		</div>

		<div class="overflow-hidden rounded-md">
			<div class="flex items-end justify-center space-x-2">
				<!-- TODO: Inactive: bg-slate-200 text-slate-900 -->
				<button class="text-white bg-slate-900 hover:bg-black  w-40 px-8 py-2 rounded-md">
					Previous
				</button>

				<!-- TODO: Inactive: bg-slate-200 text-slate-900 -->
				<button class="text-white bg-slate-900 hover:bg-black  w-40 px-8 py-2 rounded-md">
					Next
				</button>
			</div>
		</div>
	</div>
</div>
