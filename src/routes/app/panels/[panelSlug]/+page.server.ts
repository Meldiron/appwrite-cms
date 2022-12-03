import { AppwriteService } from '$lib/appwrite.server';
import type { Group, Panel } from '$lib/config.builder';
import { configStore } from '$lib/stores/config';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import type { PageServerLoad } from './$types';

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
