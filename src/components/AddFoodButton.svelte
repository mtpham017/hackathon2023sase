<script lang="ts">
  import { Button } from '@svelteuidev/core';
  import { TextInput } from '@svelteuidev/core';

  let searchQuery = ''; // Initialize search query

  async function addToFridge() {
    // Trigger the server route to fetch food data and insert into the database
    const response = await fetch('/api'); // Use the server route URL
    if (response.ok) {
      // Handle the response if needed
      const data = await response.json();
      console.log('Data from server route:', data);
    } else {
      console.error('Failed to fetch food data from the server route');
    }
  }
</script>

<TextInput
  type="text"
  bind:value={searchQuery}
  placeholder="Enter ingredients"
/>

<Button on:click={addToFridge}>
  Add to Fridge
</Button>