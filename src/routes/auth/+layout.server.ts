import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const apiKey = locals.session.data.apiKey;

	if (apiKey) {
		throw redirect(307, '/');
	}

	return {};
};
