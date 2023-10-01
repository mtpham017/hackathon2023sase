import { getItemsByUserId, getRecipeById, getRecipesByUserId } from '$lib/database'
import type { PageServerLoad } from './$types'

interface Recipe { 
   recipe_name: string
   
}
export const load = (async ({parent} ) => {
   const { user_id, email } = (await parent()).session

   const food = getItemsByUserId(user_id) as App.FoodData[]
   const recipes = getRecipesByUserId(user_id) as Recipe[]
   return {
      food,
      user_id,
      email,
      recipes
   }
}) satisfies PageServerLoad


export const actions = {

   default : () => {
      console.log('hello')
   }
}