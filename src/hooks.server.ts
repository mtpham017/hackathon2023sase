import { env } from '$env/dynamic/private'
import { handleSession } from 'svelte-kit-cookie-session';

export const handle = handleSession({ 
    secret: env.KEY!
})
