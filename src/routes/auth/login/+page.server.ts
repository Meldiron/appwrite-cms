import type { Actions } from './$types';
import { redirect, json} from '@sveltejs/kit';
import { SECRET_AUTH_USERS } from '$env/static/private';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();

		const inputNickname = data.get('nickname');
		const inputPassword = data.get('password');

		if (!inputNickname || !inputPassword) {
			return json({ msg: 'Please enter nickname and password.' });
		}
		console.log(process.env.SECRET_AUTH_USERS)
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

		return json({ msg: 'Wrong nickname or password.' });
	}
};
