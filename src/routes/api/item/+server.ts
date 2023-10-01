import { json, type RequestHandler } from "@sveltejs/kit";
import { insertItem } from '$lib/database'

export const POST = ( async ({ request }) => {
    const body = await request.json();
    return json(insertItem(body)) 

}) satisfies RequestHandler