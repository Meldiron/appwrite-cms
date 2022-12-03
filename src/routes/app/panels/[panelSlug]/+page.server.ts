import { AppwriteService } from '$lib/appwrite.server';
import type { Group, Panel } from '$lib/config.builder';
import { configStore } from '$lib/stores/config';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import type { PageServerLoad } from './$types';
import { invalid, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	deleteDocument: async ({ cookies, request }) => {
		const apiKey = cookies.get('apiKey');

		if (!apiKey) {
			throw redirect(307, '/');
		}

		const config = get(configStore);

		AppwriteService.setClient(config.endpoint, config.projectId, apiKey);

		const data = await request.formData();

		const databaseId = data.get('databaseId');
		const collectionId = data.get('collectionId');
		const documentId = data.get('documentId');

		if (!databaseId || !collectionId || !documentId) {
			return invalid(400, { msg: 'Invalid payload.' });
		}

		try {
			await AppwriteService.deleteDocument(
				databaseId.toString(),
				collectionId.toString(),
				documentId.toString()
			);

			return { success: true };
		} catch (err: any) {
			throw error(500, { message: 'Could not delete document: ' + err.message });
		}
	}
};

export const load: PageServerLoad = async ({ params, url }) => {
	let group: Group | null = null;
	let panel: Panel | null = null;

	for (const xgroup of get(configStore).groups) {
		for (const xpanel of xgroup.panels) {
			if (xpanel.slug === params.panelSlug) {
				group = xgroup;
				panel = xpanel;
			}
		}
	}

	if (!group || !panel) {
		throw error(404, { message: 'Panel not found.' });
	}

	try {
		const limit = +(url.searchParams.get('limit') ?? '10');
		const page = +(url.searchParams.get('page') ?? '1');
		const documents = await AppwriteService.listDocuments<any>(
			panel.databaseId,
			panel.collectionId,
			limit,
			(page - 1) * limit
		);

		return {
			panelSlug: params.panelSlug,
			panelDocuments: documents,
			panelLimit: limit,
			panelPage: page
		};
	} catch (err: any) {
		throw error(500, { message: 'Could not load documents: ' + err.message });
	}
};
