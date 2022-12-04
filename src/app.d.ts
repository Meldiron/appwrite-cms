// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		session: import('svelte-kit-cookie-session').Session<SessionData>;
	}

	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}
