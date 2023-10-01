import { insertItem } from '$lib/database.js';
import type { Action } from './$types'
import { env } from '$env/dynamic/private'
import { setContext } from 'svelte';
import type Fooddisplayer from '../../../components/fooddisplayer.svelte';

interface FoodData {
    name: string 
    barcode : string 
    score :number 
    nutrients : number 
    categoryID : number
    userID : number 
    image: string 

}
export const load  = async() => {
    let searchQuery = ''
    const apiKey = env.OPENFOODREPO_API_KEY;
    let food: FoodData[] = [];
    try {
    const apiUrl = 'https://www.foodrepo.org/api/v3/products/_search'+"?api_key="+apiKey;
   // Include the search query in the API URL
    // Create headers and include the API key
   const headers = new Headers({
     'Authorization': `Token token=${apiKey}`,
     'Content-Type': 'application/vnd.api+json', // Include content type if required
     'Accept': 'application/json'
   });

   const requestBody ={
    _source: {
        includes: ["barcode", "name", "images","nutrients", "name_translations.en"]           
    },
    size:20,
    query: {
        query_string: {
            query: searchQuery
        }
      }
   }

   const response = await fetch(apiUrl, {
     method: 'POST',
     headers: headers,
     body: JSON.stringify(requestBody),
   });


   if (response.ok) {

    const apiData = await response.json();
     console.log(apiData.hits.hits)
    // Iterate through the API data and insert each item into the database
    const mapToFoodData = apiData.hits.hits.map((element: any) => {
        const { carbohydrates, sodium, fiber, protein, energy_calories_kcal } = element._source.nutrients
        console.log(element._source.nutrients)
        return {
            name: element?.name_translation?.en,
            score: element._score,
            barcode: element._source.barcode,
            nutrient: {
                carbs: carbohydrates?.per_hundred ? carbohydrates?.per_hundred + carbohydrates.unit : "?", 
                sodium: sodium?.per_hundred ? sodium.per_hundred + sodium.unit : "?", 
                fiber: fiber?.per_hundred ? fiber?.per_hundred + fiber.unit : "?",
                protein: protein?.per_hundred ? protein?.per_hundred + protein.unit : "?",
                calories: energy_calories_kcal?.per_hundred ? energy_calories_kcal?.per_hundred + energy_calories_kcal.unit : "?"
    
            }  ,
            categoryId: null,
            userId: 1,
            image:Buffer.from(element._source.images?.[0]?.medium ?? "", 'base64'),
        };
    })

    food = mapToFoodData(apiData);
    return {
    food
    }
   } else {
    return{
        food: []
    }
  }
} catch (error) {
  console.error('An error occurred while fetching food data:', error)
  return {
    food: []
  };
}
}

