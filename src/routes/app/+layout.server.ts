import { AppwriteService } from '$lib/appwrite.server';
import { configStore } from '$lib/stores/config';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const apiKey = cookies.get('apiKey');

	if (!apiKey) {
		throw redirect(307, '/');
	}

	const config = get(configStore);

	AppwriteService.setClient(config.endpoint, config.projectId, apiKey);

	return {};
};
