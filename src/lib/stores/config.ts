import { writable } from 'svelte/store';
import type { Config } from '$lib/config.builder';
import store from '$lib/config';

export const configStore = writable<Config>(store);
