import { writable } from 'svelte/store';
import store from '$lib/config';
import type { Config } from '$lib/config.builder';

export const configStore = writable<Config>(store);
