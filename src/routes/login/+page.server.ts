import type { Actions } from './$types'
import { connect, isConnected, login } from '$lib/database';
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
             
    
    const authentication = login(email, password);
    if(authentication.success) {
        cookies.set('access', 'Bearer <token>', { 
               path: "/",
               sameSite: 'strict',
               maxAge: 60 * 60 * 24,
               httpOnly: true,
               secure: true
        });
        throw redirect(302, "/fridge");
    }

    return {
        email,
        message: authentication.message
    };
   }
} satisfies Actions;
