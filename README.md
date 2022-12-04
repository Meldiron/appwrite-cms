## Snippet

    {:else if type === 'edit'}
    	<div class="flex items-center justify-end space-x-4 group">
    		<a href="#" class="flex items-center justify-center">
    			<div class="p-3 text-sm  text-slate-800 group-hover:bg-slate-200 rounded-l-md bg-slate-100">
    				Discard
    			</div>
    			<div class="p-3  text-slate-800 rounded-r-md group-hover:bg-slate-300 bg-slate-200">
    				<svg
    					xmlns="http://www.w3.org/2000/svg"
    					class="w-5 h-5"
    					viewBox="0 0 20 20"
    					fill="currentColor"
    				>
    					<path
    						fill-rule="evenodd"
    						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    						clip-rule="evenodd"
    					/>
    				</svg>
    			</div>
    		</a>

    		<button type="button" class="flex items-center justify-center group">
    			<div class="p-3 text-sm text-white  group-hover:bg-slate-900 rounded-l-md bg-slate-800">
    				Save
    			</div>
    			<div class="p-3 text-white  group-hover:bg-black rounded-r-md bg-slate-900">
    				<svg
    					xmlns="http://www.w3.org/2000/svg"
    					class="w-5 h-5"
    					viewBox="0 0 20 20"
    					fill="currentColor"
    				>
    					<path
    						d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
    					/>
    					<path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
    					<path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
    				</svg>
    			</div>
    		</button>
    	</div>

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
