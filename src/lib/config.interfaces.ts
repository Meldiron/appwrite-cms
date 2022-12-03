import Plaintext from '$lib/components/blocks/list/plaintext.svelte';

export abstract class ListInterface {
	name = 'Unknown';
	width = 'auto';
	element: any; // TODO: Use svelte type

	setName(name: string) {
		this.name = name;
		return this;
	}

	setWidth(width: string) {
		this.width = width;
		return this;
	}
}

export class ListPlaintext extends ListInterface {
	static create() {
		return new ListPlaintext();
	}

	constructor() {
		super();
		this.element = Plaintext;
	}

	color = '#000000';

	setColor(color: string) {
		this.color = color;
		return this;
	}
}
