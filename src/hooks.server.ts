import { handleSession } from 'svelte-kit-cookie-session';
import { SECRET_SESSION_SECRET } from '$env/static/private';

// You can do it like this, without passing a own handle function
export const handle = handleSession({
	secret: SECRET_SESSION_SECRET
});
