import type { Actions } from './$types'
import { connect, isConnected, login, signup } from '$lib/database';
import { redirect } from '@sveltejs/kit';


export const load = () => {

    if(!isConnected) {
        connect()
    } 

};

export const actions  = {
   default: async ({ cookies, request })  => {
       const formData = await request.formData();
       const email = formData.get("email"),
             password  = formData.get("password");
             
    
    const authentication = signup(email, password);
    if(authentication.success) {
        cookies.set('access', 'true', { 
            path: "/",
            sameSite: 'strict',
            maxAge: 60 * 60 * 24
        })
        throw redirect(302, "/fridge");
    }

    return {
        email,
        message: authentication.message
    };
   }
} satisfies Actions;
