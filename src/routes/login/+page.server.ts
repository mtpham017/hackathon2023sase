import type { Actions } from './$types'
import { isConnected, login } from '$lib/database';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load = (async ({ parent, locals }) => {

    const { session } = await parent();
    if(session.email) {
	    throw redirect(302, '/fridge')
    }
}) satisfies PageServerLoad;

export const actions  = {
   default: async ({ request, locals })  => {
       const formData = await request.formData();
       const email = formData.get("email"),
             password  = formData.get("password");
             
     
       const authentication = login(email as string, password as string);
       console.log(authentication)
       if(authentication.success) {
           const { email="" } = locals.session.data;
           if(email !== authentication.user?.email) {
               await locals.session.set({ email: authentication.user?.email! });
           }
           throw redirect(302, "/fridge");
       }
       return {
            email,
            message: authentication.message
        };
   }
} satisfies Actions;
