import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const ssr = false;

export const load: PageLoad = async () => {
	throw redirect(307, `/auth/login`);
};
