import { env } from "$env/dynamic/private";   
export async function load() {    
    const apiKey = env.OPENFOODREPO_API_KEY;
    let food: App.FoodData[] = [];
    try {
      const apiUrl = `https://www.foodrepo.org/api/v3/products/?barcode=${barcode}&api_key=${apiKey}`;
      // Include the search query in the API URL
    // Create headers and include the API key
   const headers = new Headers({
     'Authorization': `Token token=${apiKey}`,
     'Content-Type': 'application/vnd.api+json', // Include content type if required
     'Accept': 'application/json'
   });


   const response = await fetch(apiUrl, {
     method: 'GET',
     headers: headers,
    });
 
   if (response.ok) {

    const apiData = await response.json();
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
   
    food = mapToFoodData;
    return {
    food
    }
   }  
} catch (error) {
  console.error('An error occurred while fetching food data:', error)
  return {
    food: []
  };
}
}

export const actions  = {
    default: async ({ request, locals })  => {
        const formData = await request.formData();
        const searchQuery = formData.get("")
     }
}
