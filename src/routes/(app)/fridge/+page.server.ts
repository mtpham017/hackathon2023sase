import { redirect, type Actions } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load = (async ({ parent, locals }) => {
    const { user_id=null } = await parent().then(s => s.session)
    if(!user_id) {
        throw redirect(302, "/")
    } 
}) satisfies PageServerLoad

export const actions = { 

    register: () => {
        return {}
    }
} satisfies Actions
