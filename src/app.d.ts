import type { Session } from 'svelte-kit-cookie-session';

type SessionData = {
    email: string
    user_id: number
};


// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface FoodData {
			item_id: number,
			name: string 
			barcode : string 
			score :number 
			nutrients : {
				carbs : number
				sodium: number
				fiber: number
				protein: number
				calories: number
			}
			categoryID : null
			userID : number 
			image: string 
		}
		
		// interface Error {}
		interface Locals {
                    session: Session<SessionData>
                }
		interface PageData {
                    session: SessionData
                }

		interface GetRecipeData {
			recipe_name: string
			item_ids: number[]
		}
		// interface Platform {}
	}
}

export {};
