import type { LayoutData } from './$types';
import { redirect } from '@sveltejs/kit';
import { AppwriteService } from '$lib/appwrite';
import config from '$lib/config';
import { authStore } from '$lib/stores/auth';
import { get } from 'svelte/store';

export const ssr = false;

export const load: LayoutData = async () => {
	AppwriteService.setClient(config.endpoint, config.projectId);

	try {
		const account = await AppwriteService.getAccount();
		authStore.set(account);
	} catch(err) {
		authStore.set(null);
	}
};
