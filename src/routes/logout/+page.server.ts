import { redirect, type Actions } from "@sveltejs/kit";

export const actions = ({
    default: async ({ locals }) => {
	await locals.session.destroy();
        throw redirect(302, "/");
    }
}) satisfies Actions;
