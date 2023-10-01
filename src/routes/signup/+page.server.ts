import type { Actions } from './$types'
import { isConnected, signup } from '$lib/database';
import { redirect } from '@sveltejs/kit';


export const actions  = {
   default: async ({ request, locals })  => {
             const formData = await request.formData();
       const email = formData.get("email"),
             password  = formData.get("password");
             
       if(!email || !password) {
            return {
                email,
                message: "Need to fill out the form: missing fields"
            };
       };
       const { email: sessionEmail, user_id } = locals.session.data
       if(sessionEmail && user_id) {
            throw redirect(302, "/fridge");
       };
       const authentication = signup(email as string, password as string);
       if(authentication.success) {
           const { email } = locals.session.data;
           if(!email) {
               throw redirect(302, "/login");
           } else {
                throw redirect(302, "/fridge");
           }
       }
        return {
            email,
            message: authentication.message
        };
   }
} satisfies Actions;
