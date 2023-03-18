import { createBlock, createConfig, createGroup, createPanel } from './config.builder';

export default createConfig('https://cloud.appwrite.io/v1', 'techCrunchs').addGroup(
	createGroup().addPanel(
		createPanel('default', 'categories')
			.addIdBlock()
			.addBlock(createBlock('name'))
			.addBlock(createBlock('description'))
	)
);