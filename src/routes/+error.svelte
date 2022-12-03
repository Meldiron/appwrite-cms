<script lang="ts">
	import { page } from '$app/stores';
</script>

<div
	class="flex items-center justify-center w-screen h-screen overflow-y-auto  from-slate-900 via-slate-900 to-black bg-gradient-to-b"
>
	<div class="container flex flex-col items-center justify-center mx-auto space-y-4 ">
		<div class="relative w-full max-w-lg p-8 bg-white rounded-md  text-slate-900">
			<div class="mt-14">
				<h1 class="text-3xl font-semibold text-center text-black">Whoops!</h1>

				<div class="flex flex-col my-8 space-y-4">
					<p class="text-red-500 text-center">{$page.error?.message || 'Unknown error.'}</p>
				</div>
			</div>
		</div>

		<div class="text-center text-slate-600">
			<p>
				Copyright © 2023
				<a
					href="https://github.com/Meldiron/appwrite-cms"
					rel="noreferrer"
					class="text-slate-300 hover:underline"
					target="_blank">Appwrite CMS</a
				>
				v0.1.0
			</p>
		</div>
	</div>
</div>
