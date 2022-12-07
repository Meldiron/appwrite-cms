import { error, redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { AppwriteService } from './appwrite';
import type { Group, Panel } from './config.builder';
import { configStore } from './stores/config';

export const PageUtils = {
	parseAuth: (session: any) => {
		const apiKey = session.apiKey;

		if (!apiKey) {
			throw redirect(307, '/');
		}

		const config = get(configStore);

		AppwriteService.setClient(config.endpoint, config.projectId, apiKey);
	},
	parseParams: (params: any) => {
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

		const groupCopy: Group = JSON.parse(JSON.stringify(group));
		const panelCopy: Panel = JSON.parse(JSON.stringify(panel));

		groupCopy.panels = [];
		panelCopy.blocks = [];

		return {
			group: groupCopy,
			panel: panelCopy
		};
	}
};
