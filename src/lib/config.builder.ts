import {
	EditPlaintext,
	EditInterface,
	ListPlaintext,
	ViewInterface,
	ViewPlaintext,
	type ListInterface
} from './config.interfaces';

export class Config {
	icon = '💫';
	name = 'Unnamed CMS';
	groups: Group[] = [];
	dashboard: Dashboard = new Dashboard();

	constructor(public endpoint: string, public projectId: string) {}

	setIcon(icon: string) {
		this.icon = icon;
		return this;
	}

	setName(name: string) {
		this.name = name;
		return this;
	}

	setProjectId(projectId: string) {
		this.projectId = projectId;
		return this;
	}

	setEndpoint(endpoint: string) {
		this.endpoint = endpoint;
		return this;
	}

	addGroup(group: Group) {
		this.groups.push(group);
		return this;
	}

	setDashboard(dashboard: Dashboard) {
		this.dashboard = dashboard;
		return this;
	}
}

export class Group {
	opened = false;
	icon = '';
	name = 'Unnamed Group';
	panels: Panel[] = [];

	setOpened(opened: boolean) {
		this.opened = opened;
		return this;
	}

	setIcon(icon: string) {
		this.icon = icon;
		return this;
	}

	setName(name: string) {
		this.name = name;
		return this;
	}

	addPanel(panel: Panel) {
		this.panels.push(panel);
		return this;
	}
}

export class Panel {
	name;
	icon = '';
	description = '';
	subtitle = '';
	labels: Label[] = [];
	blocks: Block[] = [];
	singletonId: string = '';
	idAttribute: string = '$id';
	deleteEnabled = true;
	createEnabled = true;
	editEnabled = true;

	constructor(public databaseId: string, public collectionId: string, public slug: string) {
		this.name = slug;
	}

	setIcon(icon: string) {
		this.icon = icon;
		return this;
	}

	setName(name: string) {
		this.name = name;
		return this;
	}

	setSlug(slug: string) {
		this.slug = slug;
		return this;
	}

	setSubtitle(subtitle: string) {
		this.subtitle = subtitle;
		return this;
	}

	setDescription(description: string) {
		this.description = description;
		return this;
	}

	addDefaultLabel() {
		this.labels.push(createLabel('').setIcon('🗄️').setName('All').setQueries([]));
		return this;
	}

	addLabel(label: Label) {
		this.labels.push(label);
		return this;
	}

	addBlock(block: Block) {
		this.blocks.push(block);
		return this;
	}

	setDeleteEnabled(deleteEnabled: boolean) {
		this.deleteEnabled = deleteEnabled;
		return this;
	}

	setEditEnabled(editEnabled: boolean) {
		this.editEnabled = editEnabled;
		return this;
	}

	setCreateEnabled(createEnabled: boolean) {
		this.createEnabled = createEnabled;
		return this;
	}

	setCollectionId(collectionId: string) {
		this.collectionId = collectionId;
		return this;
	}

	setDatabaseId(databaseId: string) {
		this.databaseId = databaseId;
		return this;
	}

	setSingletonId(singletonId: string) {
		this.singletonId = singletonId;
		this.setCreateEnabled(false);
		this.setDeleteEnabled(false);
		return this;
	}

	setIdAttribute(idAttribute: string) {
		this.idAttribute = idAttribute;
		return this;
	}
}

export class Label {
	name;
	icon = '';
	queries: string[] = [];

	constructor(public slug: string) {
		this.name = slug;
	}

	setIcon(icon: string) {
		this.icon = icon;
		return this;
	}

	setName(name: string) {
		this.name = name;
		return this;
	}

	setSlug(slug: string) {
		this.slug = slug;
		return this;
	}

	setQueries(queries: string[]) {
		this.queries = queries;
		return this;
	}
}

export class Dashboard {
	motd = '"Today is your opportunity to build the tomorrow you want." - Ken Poirot';

	setMotd(motd: string) {
		this.motd = motd;
		return this;
	}
}

export class Block {
	listInterface: ListInterface = new ListPlaintext();
	viewInterface: ViewInterface = new ViewPlaintext();
	editInterface: EditInterface = new EditPlaintext();

	constructor(public attribute: string) {
		this.listInterface.setName(attribute);
		this.viewInterface.setName(attribute);
		this.editInterface.setName(attribute);
	}

	setAttribute(attribute: string) {
		this.attribute = attribute;
		this.listInterface.setName(attribute);
		this.viewInterface.setName(attribute);
		this.editInterface.setName(attribute);
		return this;
	}

	setListInterface(listInterface: ListInterface) {
		listInterface.setName(this.attribute);

		this.listInterface = listInterface;
		return this;
	}

	setViewInterface(viewInterface: ViewInterface) {
		viewInterface.setName(this.attribute);

		this.viewInterface = viewInterface;
		return this;
	}

	setEditInterface(editInterface: EditInterface) {
		editInterface.setName(this.attribute);

		this.editInterface = editInterface;
		return this;
	}
}

export function createConfig(endpoint: string, projectId: string) {
	return new Config(endpoint, projectId);
}

export function createGroup() {
	return new Group();
}

export function createDashboard() {
	return new Dashboard();
}

export function createPanel(databaseId: string, collectionId: string, slug: string) {
	return new Panel(databaseId, collectionId, slug);
}

export function createLabel(slug: string) {
	return new Label(slug);
}

export function createBlock(attribute: string) {
	return new Block(attribute);
}
