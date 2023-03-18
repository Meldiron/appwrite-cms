import { PageUtils } from '$lib/utils';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { panel, group } = PageUtils.parseParams(params.panelSlug);

	return {
		panelSlug: params.panelSlug,
		group,
		panel
	};
};
