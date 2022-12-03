import Plaintext from '$lib/components/blocks/view/plaintext.svelte';

export abstract class ViewInterface {
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

export class ViewPlaintext extends ViewInterface {
	static create() {
		return new ViewPlaintext();
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
