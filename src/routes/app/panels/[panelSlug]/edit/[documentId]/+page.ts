import { PageUtils } from '$lib/utils';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { Models } from 'appwrite';
import { AppwriteService } from '$lib/appwrite';

export const load: PageLoad = async ({ parent, params }) => {
	await parent();

	const { panel, group } = PageUtils.parseParams(params.panelSlug);

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
