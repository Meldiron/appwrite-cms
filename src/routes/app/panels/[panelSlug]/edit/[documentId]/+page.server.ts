import { PageUtils } from '$lib/utils';
import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { error, redirect } from '@sveltejs/kit';
import type { Models } from 'node-appwrite';
import { AppwriteService } from '$lib/appwrite.server';

export const actions: Actions = {
	default: async ({ params, cookies, request }) => {
		PageUtils.parseAuth(cookies);

		const { panel } = PageUtils.parseParams(params);
		const documentId = params.documentId;

		if (!documentId) {
			throw error(404, { message: 'Document not found.' });
		}

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
			document = await AppwriteService.updateDocument(
				panel.databaseId,
				panel.collectionId,
				documentId,
				json
			);
		} catch (err: any) {
			throw error(500, { message: 'Could not update document: ' + err.message });
		}

		throw redirect(307, `/app/panels/${params.panelSlug}/view/${documentId}`);
	}
};

export const load: PageServerLoad = async ({ cookies, params }) => {
	PageUtils.parseAuth(cookies);
	const { panel, group } = PageUtils.parseParams(params);

	const id = params.documentId;

	if (!id) {
		throw error(404, { message: 'Document not found.' });
	}

	try {
		const document = await AppwriteService.getDocument<any & Models.Document>(
			panel.databaseId,
			panel.collectionId,
			id
		);

		return {
			panelDocument: document,

			panelSlug: params.panelSlug,
			group,
			panel
		};
	} catch (err: any) {
		throw error(500, { message: 'Could not load document: ' + err.message });
	}
};
