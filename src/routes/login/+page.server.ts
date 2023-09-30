import type { Actions } from './$types'
import { login } from '$lib/database';
import { redirect } from '@sveltejs/kit';

export const actions  = {
   default: async ({ cookies, request })  => {
       const formData = await request.formData();
       const email = formData.get("email"),
             password  = formData.get("password");
             
    
    const authentication = login(email, password);
    if(authentication.success) {
        cookies.set('access', 'true', { path: "/", sameSite: 'strict' })
        throw redirect(302, "/fridge");
    }

    return {
        email,
        message: authentication.message
    };
   }
} satisfies Actions;
