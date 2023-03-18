import { get } from 'svelte/store';
import type { Group, Panel } from './config.builder';
import { configStore } from './stores/config';

export const PageUtils = {
	parseParams: (slug: string) => {
		let group: Group | null = null;
		let panel: Panel | null = null;

		for (const xgroup of get(configStore).groups) {
			for (const xpanel of xgroup.panels) {
				if (xpanel.slug === slug) {
					group = xgroup;
					panel = xpanel;
				}
			}
		}

		if (!group || !panel) {
			throw new Error('Panel not found.');
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
