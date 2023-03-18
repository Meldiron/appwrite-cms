import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { authStore } from '$lib/stores/auth';
import { get } from 'svelte/store';

export const ssr = false;

export const load: PageLoad = async ({ parent }) => {
	await parent();
	if (get(authStore) === null) {
		throw redirect(307, `/auth/login`);
	} else {
		throw redirect(307, `/app`);
	}
};
