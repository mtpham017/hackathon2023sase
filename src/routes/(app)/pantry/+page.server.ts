import { getItemsByUserId, insertItem } from '$lib/database.js';
import type { Action, PageServerLoad } from './$types'
import { env } from '$env/dynamic/private'
import { setContext } from 'svelte';
import type { Actions } from '@sveltejs/kit';
 
export const load  = (async ({ locals }) => {
  const session = locals.session.data
  const food = getItemsByUserId(session.user_id)
  console.log(food)
  return {
    food
  };
}) satisfies PageServerLoad
