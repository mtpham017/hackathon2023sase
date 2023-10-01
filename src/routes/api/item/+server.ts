import { json, type RequestHandler } from "@sveltejs/kit";
import { getItemsByUserId, insertItem } from '$lib/database'

export const POST = ( async ({ request }) => {
    const body = await request.json();
    return json(insertItem(body)) 

}) satisfies RequestHandler

export const GET: RequestHandler = async ({ request}) => {
    const userId =  await request.json(); // Extract user_id from the request parameters
    const items = getItemsByUserId(userId);
    return json(items);
};