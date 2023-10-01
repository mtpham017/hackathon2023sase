import { redirect, type Actions, type RequestHandler } from "@sveltejs/kit";

export const GET = (async ({ locals }) => {
	await locals.session.destroy();
        throw redirect(302, "/");
}) satisfies RequestHandler
