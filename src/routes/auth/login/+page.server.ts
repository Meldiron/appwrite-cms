import type { Actions } from './$types';
import { invalid, redirect } from '@sveltejs/kit';
import { SECRET_AUTH_USERS } from '$env/static/private';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();

		const inputNickname = data.get('nickname');
		const inputPassword = data.get('password');

		if (!inputNickname || !inputPassword) {
			return invalid(400, { msg: 'Please enter nickname and password.' });
		}

		const users = SECRET_AUTH_USERS;

		for (const user of users.split(',')) {
			const [auth, key] = user.split('@');
			const [nickname, password] = auth.split(':');

			if (nickname === inputNickname && password === inputPassword) {
				await locals.session.set({
					apiKey: key
				});

				throw redirect(303, '/');
			}
		}

		return invalid(400, { msg: 'Wrong nickname or password.' });
	}
};
