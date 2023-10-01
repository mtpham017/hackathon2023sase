import { getItemsByUserId, getRecipeById, getRecipesByUserId } from '$lib/database'
import type { PageServerLoad } from './$types'

export const load = (async ({parent} ) => {
   const { user_id, email } = (await parent()).session

   const food = getItemsByUserId(user_id)

   const recipes = getRecipesByUserId(user_id)
   console.log(food)
   console.log(recipes)
   return {
      food,
      user_id,
      email
   }
}) satisfies PageServerLoad

