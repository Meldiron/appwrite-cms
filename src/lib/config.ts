	import { EditFile, ViewFile, EditDropdown } from '$lib/config.interfaces';
	import {
	  createBlock,
	  createConfig,
	  createGroup,
	  createPanel
	} from './config.builder';
	

	export default createConfig(
	  'https://api.kantin.shop/v1',
	  '6383d2113a051df427b3',
	)
	  .setName('Kantin')
	  .addGroup(
		createGroup()
		  .setName('My Store')
		  .addPanel(
			createPanel('Store', 'Products', 'Products')
			.setIcon('🍩')
			  .addBlock(createBlock('title'))
			  .addBlock(createBlock('price'))
			  .addBlock(createBlock('description'))
			  .addBlock(createBlock('category').setEditInterface(new EditDropdown().setOptions(['drinks', 'health', 'snacks', 'other'])))
			  .addBlock(
				createBlock('image').setEditInterface(
				  new EditFile('ProductImages')
				)
							.setViewInterface(new ViewFile('ProductImages'))
			  ),
		  )
		  .addPanel(
			createPanel('Store', 'Discounts', 'Discounts')
			.setIcon('🏷️')
			  .addBlock(createBlock('userId'))
			  .addBlock(createBlock('email'))
			  .addBlock(createBlock('discount')),
		  ),
	  );
	