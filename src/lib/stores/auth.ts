import { writable } from 'svelte/store';
import type { Models } from 'appwrite';

export const authStore = writable<Models.Account<any> | null>(null);
