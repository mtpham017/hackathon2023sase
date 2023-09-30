import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit'

export const handle = (async ({ event, resolve }) => { 

    const access = event.cookies.get("access") === "true";
    if(!access && event.route.id?.startsWith('/(app)')){ 
        throw redirect(302, '/login')
    }
    return resolve(event);    
}) satisfies Handle;
