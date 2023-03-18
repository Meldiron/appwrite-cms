import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { authStore } from '$lib/stores/auth';
import { get } from 'svelte/store';

export const ssr = false;

export const load: LayoutLoad = async ({ parent }) => {
	await parent();

	if (get(authStore) !== null) {
		throw redirect(307, `/app`);
	}

	return {};
};
