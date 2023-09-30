<script lang="ts">
    import { Button } from '@svelteuidev/core';
    import { TextInput } from '@svelteuidev/core';

    let foodData = null;
    let searchQuery = ''; // Initialize search query

  // Function to fetch food data from the Open Food Repo API
  async function fetchFoodData() {
    try {
      // Set up the base API URL
      const apiUrl = 'https://api.openfoodrepo.org/v1/products';

      // Include the search query in the API URL
      const apiUrlWithQuery = `${apiUrl}?query=${searchQuery}`;

      const response = await fetch(apiUrlWithQuery);
      if (response.ok) {
        foodData = await response.json();
      } else {
        console.error('Failed to fetch food data');
      }
    } catch (error) {
      console.error('An error occurred while fetching food data:', error);
    }
  }
  </script>
<TextInput
input type="text" bind:value={searchQuery} placeholder="Enter ingredients" 
 />
  <Button on:click={fetchFoodData}>
    Add to Fridge
  </Button>