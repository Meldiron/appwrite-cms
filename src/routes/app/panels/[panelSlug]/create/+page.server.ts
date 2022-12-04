import { PageUtils } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { panel, group } = PageUtils.parseParams(params);

	return {
		panelSlug: params.panelSlug,
		group,
		panel
	};
};
