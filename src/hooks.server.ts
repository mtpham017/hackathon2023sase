import { env } from '$env/dynamic/private'
import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleSession } from 'svelte-kit-cookie-session';

const cookiesHandler = handleSession({ 
    secret: env.KEY!
})

export const handle = sequence(cookiesHandler, ({ resolve, event }) => {
    const { user_id } = event.locals.session.data
    
    if(!user_id && event.route.id?.startsWith("/(app)") || event.route.id?.startsWith("/api")) {
        throw redirect(302, "/login");
    }  
    return resolve(event);
})
