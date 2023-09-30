import type { Actions } from "@sveltejs/kit";

export const actions = ({
	default: async ({ locals }) => {
		await locals.session.destroy();
		return {};
	}
}) satisfies Actions;
