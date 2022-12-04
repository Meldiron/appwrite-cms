import ListPlaintextEl from '$lib/components/blocks/list/plaintext.svelte';
import ListBooleanEl from '$lib/components/blocks/list/boolean.svelte';
import ViewPlaintextEl from '$lib/components/blocks/view/plaintext.svelte';
import ViewBooleanEl from '$lib/components/blocks/view/boolean.svelte';
import EditPlaintextEl from '$lib/components/blocks/edit/plaintext.svelte';
import EditBooleanEl from '$lib/components/blocks/edit/boolean.svelte';

export abstract class ListInterface {
	name = 'Unknown';
	width = 'auto';
	element: any;

	setName(name: string) {
		this.name = name;
		return this;
	}

	setWidth(width: string) {
		this.width = width;
		return this;
	}
}

export abstract class ViewInterface {
	name = 'Unknown';
	element: any;

	setName(name: string) {
		this.name = name;
		return this;
	}
}

export abstract class EditInterface {
	name = 'Unknown';
	element: any;

	setName(name: string) {
		this.name = name;
		return this;
	}
}

export class ListPlaintext extends ListInterface {
	constructor() {
		super();
		this.element = ListPlaintextEl;
	}

	color = '#000000';

	setColor(color: string) {
		this.color = color;
		return this;
	}
}

export class ListBoolean extends ListInterface {
	constructor() {
		super();
		this.element = ListBooleanEl;
	}
}

export class ViewPlaintext extends ViewInterface {
	constructor() {
		super();
		this.element = ViewPlaintextEl;
	}
}

export class ViewBoolean extends ViewInterface {
	constructor() {
		super();
		this.element = ViewBooleanEl;
	}
}

export class EditPlaintext extends EditInterface {
	constructor() {
		super();
		this.element = EditPlaintextEl;
	}

	placeholder = '';
	type = 'text';

	setPlaceholder(placeholder: string) {
		this.placeholder = placeholder;
		return this;
	}

	setType(type: string) {
		this.type = type;
		return this;
	}
}

export class EditBoolean extends EditInterface {
	constructor() {
		super();
		this.element = EditBooleanEl;
	}
}
