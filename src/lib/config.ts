import { Query } from 'node-appwrite';
import {
	createBlock,
	createConfig,
	createDashboard,
	createGroup,
	createLabel,
	createPanel
} from './config.builder';
import {
	EditBoolean,
	EditPlaintext,
	ListBoolean,
	ListPlaintext,
	ViewBoolean
} from './config.interfaces';

export default createConfig()
	.setEndpoint('https://appwrite.raneurope.eu/v1')
	.setProjectId('appwriteCms')
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
					.setDatabaseId('default')
					.setCollectionId('articles')
					.addDefaultLabel()
					.addLabel(
						createLabel()
							.setName('Drafts')
							.setIcon('🖇️')
							.setSlug('drafts')
							.setQueries([Query.equal('status', 'draft')])
					)
					.addLabel(
						createLabel()
							.setName('Published')
							.setIcon('⚡')
							.setSlug('published')
							.setQueries([Query.equal('status', 'published')])
					)
					.addBlock(
						createBlock()
							.setAttribute('author')
							.setListInterface(new ListPlaintext().setWidth('150px').setName('Autor'))
					)
					.addBlock(
						createBlock()
							.setAttribute('title')
							.setListInterface(new ListPlaintext().setName('Nadpis'))
					)
			)
			.addPanel(
				createPanel()
					.setName('Newsletters')
					.setSlug('newsletters')
					.setDatabaseId('default')
					.setCollectionId('newsletters')
					.setIdAttribute('email')
					.addBlock(
						createBlock()
							.setAttribute('email')
							.setEditInterface(
								new EditPlaintext().setName('E-mail').setPlaceholder('Subscriber e-mail')
							)
					)
					.addBlock(
						createBlock()
							.setAttribute('confirmed')
							.setViewInterface(new ViewBoolean().setName('Is Confirmed'))
							.setListInterface(new ListBoolean().setWidth('150px').setName('Confirmed?'))
							.setEditInterface(new EditBoolean().setName('Is Confirmed'))
					)
			)
	);
/*	
// TODO: setSingletonId (used in settings)
*/
