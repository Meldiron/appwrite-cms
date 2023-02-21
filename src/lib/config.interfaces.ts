import ListPlaintextEl from '$lib/components/blocks/list/plaintext.svelte';
import ListBooleanEl from '$lib/components/blocks/list/boolean.svelte';
import ViewPlaintextEl from '$lib/components/blocks/view/plaintext.svelte';
import ViewBooleanEl from '$lib/components/blocks/view/boolean.svelte';
import ViewFileEl from '$lib/components/blocks/view/file.svelte';
import EditPlaintextEl from '$lib/components/blocks/edit/plaintext.svelte';
import EditBooleanEl from '$lib/components/blocks/edit/boolean.svelte';
import EditDropdownEl from '$lib/components/blocks/edit/dropdown.svelte';
import EditFileEl from '$lib/components/blocks/edit/file.svelte';

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

export class ViewFile extends ViewInterface {
	constructor(public bucketId: string) {
		super();
		this.element = ViewFileEl;
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

export class EditDropdown extends EditInterface {
	constructor() {
		super();
		this.element = EditDropdownEl;
	}
	options: string[] = []
	placeholder = '';

	setPlaceholder(placeholder: string) {
		this.placeholder = placeholder;
		return this;
	}

	setOptions(options: string[]) {
		this.options = options;
		return this;
	}
}

export class EditFile extends EditInterface {
	constructor(public bucketId: string) {
		super();
		this.element = EditFileEl;
	}
}
