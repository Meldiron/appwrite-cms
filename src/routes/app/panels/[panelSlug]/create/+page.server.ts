import { PageUtils } from '$lib/utils';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { AppwriteService } from '$lib/appwrite';

export const actions: Actions = {
	default: async ({ params, locals, request }) => {
		PageUtils.parseAuth(locals.session.data);

		const { panel } = PageUtils.parseParams(params);

		const data = await request.formData();
		const json: any = {};

		for (const pair of data.entries()) {
			let value: any = pair[1];

			if (value === 'xtrue') {
				value = true;
			}

			if (value === 'xfalse') {
				value = false;
			}

			if (value !== 'xempty') {
				json[pair[0]] = value;
			}
		}

		let document;
		try {
			document = await AppwriteService.createDocument(panel.databaseId, panel.collectionId, json);
		} catch (err: any) {
			throw error(500, { message: 'Could not create document: ' + err.message });
		}

		throw redirect(307, `/app/panels/${params.panelSlug}/view/${document.$id}`);
	}
};

export const load: PageServerLoad = async ({ params }) => {
	const { panel, group } = PageUtils.parseParams(params);

	return {
		panelSlug: params.panelSlug,
		group,
		panel
	};
};
