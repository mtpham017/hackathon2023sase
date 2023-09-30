<script lang="ts">
    import { Button } from '@svelteuidev/core';
    import { TextInput } from '@svelteuidev/core';

    let foodData = null;
    let searchQuery = ''; // Initialize search query

  // Function to fetch food data from the Open Food Repo API
  // Use the API key stored in the environment variable
//  const apiKey = process.env.OPENFOODREPO_API_KEY;
//
//  async function fetchFoodData() {
//  try {
//    const apiUrl = 'https://api.openfoodrepo.org/v1/products';
//    // Include the search query in the API URL
//    const apiUrlWithQuery = `${apiUrl}?query=${searchQuery}`;
//
//    // Create headers and include the API key
//    const headers = new Headers({
//      'Authorization': `Bearer ${apiKey}`,
//      'Content-Type': 'application/json', // Include content type if required
//    });
//
//    const response = await fetch(apiUrlWithQuery, {
//      method: 'GET',
//      headers: headers,
//    });
//
//    if (response.ok) {
//      const apiData = await response.json();
//      
//    } else {
//      console.error('Failed to fetch food data');
//    }
//  } catch (error) {
//    console.error('An error occurred while fetching food data:', error);
//  }
//}

  </script>
<form method="POST"> 
    <TextInput
        input type="text" bind:value={searchQuery} placeholder="Enter ingredients" 
     />
    <Button on:click={() => {}} formaction="?/register">
        Add to Fridge
    </Button>
</form>

