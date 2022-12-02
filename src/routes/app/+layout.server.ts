import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const apiKey = cookies.get('apiKey');

	if (!apiKey) {
		throw redirect(307, '/');
	}

	return {};
};
