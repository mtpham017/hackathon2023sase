import { generateToken } from '$lib/gentoken';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST = (async () => {
    const token = generateToken() ;
    return json({ token }, { status: 201 });
}) satisfies RequestHandler;
