import {
	createBlock,
	createConfig,
	createDashboard,
	createGroup,
	createPanel
} from './config.builder';
import { ViewPlaintext } from './config.interfaces';

export default createConfig()
	.setEndpoint('https://appwrite.raneurope.eu/v1')
	.setProjectId('638a59bd6c71bc4cf787')
	.setName('Almost Blog')
	.setIcon('✏️')
	.setDashboard(createDashboard().setMotd('Welcome to the CMS 👋'))
	.addGroup(
		createGroup()
			.setName('Default')
			.setIcon('🧱')
			.setOpened(true)
			.addPanel(
				createPanel()
					.setName('Articles')
					.setSlug('articles')
					.setDatabaseId('638a5b81243ac70c90e7')
					.setCollectionId('638a5b91a39e545d9cf5')
					.addBlock(
						createBlock()
							.setAttribute('author')
							.setViewInterface(ViewPlaintext.create().setWidth('150px').setName('Autor'))
					)
					.addBlock(
						createBlock()
							.setAttribute('title')
							.setViewInterface(ViewPlaintext.create().setName('Nadpis'))
					)
			)
	);
/*	
// TODO: setSingletonId in settings
// TODO: Finish
			.setListInterface(Plain().create())
			.setEditInterface(
				Select()
					.create()
					.addOption('published', 'Published')
					.addOption('draft', 'Draft (not published)')
			)
			.setViewInterface(Icon().create().addIcon('published', '💚').addIcon('draft', '🧡'))
	)
*/
