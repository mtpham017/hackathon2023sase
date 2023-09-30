import type { LayoutServerLoad } from "./$types";

/** @type {import('@sveltejs/kit').LayoutServerLoad} */
export const load = ( async ({ locals, request }) => {
    return {
	    session: locals.session.data
    };
}) satisfies LayoutServerLoad;
