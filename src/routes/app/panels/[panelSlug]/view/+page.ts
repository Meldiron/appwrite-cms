import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
	throw redirect(307, `/app/panels/` + params.panelSlug);
};
