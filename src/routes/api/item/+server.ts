import { json, type RequestHandler } from "@sveltejs/kit";
import { insertItem, insertNutrient } from '$lib/database'

export const POST = (async ({ request }) => {
    const { nutrients, item } = await request.json();
    const nutrientInsertion = insertNutrient(nutrients)
    console.log(item)
    //@ts-ignore
    insertItem({ ...item, nutrient_ID: nutrientInsertion.nutrient_ID })
    return json(item, {status: 200 }) 
}) satisfies RequestHandler
