import { getRecipesByUserId, insertRecipe } from '$lib/database'
import type { PageServerLoad } from './$types'
import type { Actions } from '@sveltejs/kit';
interface Recipe { 
   recipe_name: string
   
}
export const load = (async ({parent} ) => {
   const { user_id, email } = (await parent()).session

   const food = getRecipesByUserId(user_id) as App.FoodData[]
   const recipes = getRecipesByUserId(user_id) as Recipe[]
   return {
      food,
      user_id,
      email,
      recipes
   }
}) satisfies PageServerLoad


export const actions = {
   default : async ({ request, locals }) => {
      const usr_id = locals.session.data.user_id
      const frmdata = await request.formData()
      const select = Object.fromEntries(frmdata.entries());
      const { name, ...ids } = select;
      insertRecipe(select.name as string, Object.values(ids).map(Number) as number[], usr_id)
   }
} satisfies Actions