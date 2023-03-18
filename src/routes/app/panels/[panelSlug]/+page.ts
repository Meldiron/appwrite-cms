import { AppwriteService } from '$lib/appwrite';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { PageUtils } from '$lib/utils';

export const ssr = false;

export const load: PageLoad = async ({ params, url, parent }) => {
	await parent();
	
	const { panel, group } = PageUtils.parseParams(params.panelSlug);

	if (panel.singletonId) {
		throw redirect(307, `/app/panels/${panel.slug}/view/${panel.singletonId}`);
	}

	try {
		const limit = +(url.searchParams.get('limit') ?? '10');
		const page = +(url.searchParams.get('page') ?? '1');
		const label = url.searchParams.get('label') ?? '';

		const labelObj = panel.labels.find((l) => l.slug === label);

		const documents = await AppwriteService.listDocuments<any>(
			panel.databaseId,
			panel.collectionId,
			limit,
			(page - 1) * limit,
			labelObj ? labelObj.queries : []
		);


		return {
			panelDocuments: documents,
			panelLabel: label,
			panelLimit: limit,
			panelPage: page,

			panelSlug: params.panelSlug,
			group,
			panel
		};
	} catch (err: any) {
		throw error(500, { message: 'Could not load documents: ' + err.message });
	}
};
