import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	logout: async ({ locals }) => {
		locals.session.destroy();
		throw redirect(307, '/');
	}
};


