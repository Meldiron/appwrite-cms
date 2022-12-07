import { createBlock, createConfig, createGroup, createPanel } from "./config.builder";
import { EditFile, ViewFile } from "./config.interfaces";

export default createConfig('https://cloud.appwrite.io/v1', 'appwrite')
	.addGroup(
		createGroup()
			.addPanel(
				createPanel('main', 'articles', 'my-articles-slug')
					.addBlock(
						createBlock('title')
					)
					.addBlock(
						createBlock('text')
							.setEditInterface(new EditFile('b1'))
							.setViewInterface(new ViewFile('b1'))
					)
			)
	);