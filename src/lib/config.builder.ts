export class Config {
	icon = '🚧';
	name = 'Unkonown';
	projectId = 'unknown';
	endpoint = 'https://cloud.appwrite.io/v1';
	groups: Group[] = [];
	dashboard: Dashboard = new Dashboard();

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
	icon = '🚧';
	name = 'Unknown';
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
	icon = '🚧';
	name = 'Unknown';
	slug = 'unknown';
	description = 'Panel with no description.';
	subtitle = 'No Subtitle';
	labels: Label[] = [];
	collectionId: string = 'unknown';
	singletonId: string = '';
	deleteEnabled = true;
	createEnabled = true;
	editEnabled = true;

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

	addLabel(label: Label) {
		this.labels.push(label);
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

	setSingletonId(singletonId: string) {
		this.singletonId = singletonId;
		this.setCreateEnabled(false);
		this.setDeleteEnabled(false);
		return this;
	}
}

export class Label {
	icon = '🚧';
	name = 'Unknown';
	slug = 'unknown';
	queries: string[] = [];

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

export function createConfig() {
	return new Config();
}

export function createGroup() {
	return new Group();
}

export function createDashboard() {
	return new Dashboard();
}

export function createPanel() {
	return new Panel();
}

export function createLabel() {
	return new Label();
}
