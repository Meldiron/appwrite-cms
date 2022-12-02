import {
	createConfig,
	createDashboard,
	createGroup,
	createLabel,
	createPanel
} from './config.builder';

export default createConfig()
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProjectId('6382433737a5f2062e09')
	.setName('Almost Blog')
	.setIcon('✏️')
	.setDashboard(createDashboard().setMotd('Welcome to the CMS 👋'))
	.addGroup(
		createGroup()
			.setName('Marketing')
			.setIcon('📖')
			.setOpened(true)
			.addPanel(
				createPanel()
					.setName('News')
					.setSlug('news')
					.setDescription('Weekly news.')
					.setSubtitle('Public')
					.setIcon('📰')
					.setCollectionId('news') // TODO: Use
					.setEditEnabled(true)
					.setCreateEnabled(true)
					.setDeleteEnabled(true)
					.addLabel(
						createLabel()
							.setName('Only Drafts')
							.setSlug('only-drafts')
							.setIcon('🗞️')
							.setQueries(['equals("status", "draft")'])
					)
					.addLabel(
						createLabel()
							.setName('All Drafts')
							.setSlug('all-drafts')
							.setIcon('🗞️')
							.setQueries(['equals("status", "draft")'])
					)
			)
			.addPanel(
				createPanel()
					.setName('Settings')
					.setSlug('settings')
					.setDescription('')
					.setSubtitle('')
					.setIcon('⚙️')
					.setCollectionId('settings')
					.setSingletonId('default') // TODO: Use
					.setEditEnabled(true)
			)
	)
	.addGroup(createGroup().setName('Settings').setIcon('⚙️').setOpened(false));

/*	
// TODO: Finish
panel
	.addBlock(
		createBlock()
			.setAttribute('status')
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
