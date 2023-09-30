//  import { insertItem } from '$lib/database';

// // Function to fetch food data from the Open Food Repo API
// export async function fetchFoodData(searchQuery, apiKey) {
//   try {
//     const apiUrl = 'https://api.openfoodrepo.org/v1/products';

//     // Include the search query in the API URL
//     const apiUrlWithQuery = `${apiUrl}?query=${searchQuery}`;

//     // Create headers and include the API key
//     const headers = new Headers({
//       'Authorization': `Bearer ${apiKey}`,
//       'Content-Type': 'application/json', // Include content type if required
//     });

//     const response = await fetch(apiUrlWithQuery, {
//       method: 'GET',
//       headers: headers,
//     });

//     if (response.ok) {
//       const apiData = await response.json();

//       // Iterate through the API data and insert each item into the database
//       apiData.forEach((apiItem) => {
//         // Convert API data to the format expected by the database
//         const insertItemData = {
//           name: apiItem.name,
//           barcode: apiItem.barcode,
//           expirationDate: apiItem.expiration_date,
//           categoryId: apiItem.category_id,
//           userId: apiItem.user_id,
//           image: Buffer.from(apiItem.image, 'base64'), // Assuming the API returns image data as base64
//         };

//         // Insert the item into the database
//         insertItem(insertItemData);
//       });

//       return { success: true, message: 'Data inserted successfully' };
//     } else {
//       return { success: false, message: 'Failed to fetch food data' };
//     }
//   } catch (error) {
//     console.error('An error occurred while fetching food data:', error);
//     return { success: false, message: 'An error occurred while fetching food data' };
//   }
// }
