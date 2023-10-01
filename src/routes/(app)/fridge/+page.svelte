<script lang="ts">
  import { Grid } from '@svelteuidev/core';
  import Fooddisplayer from '../../../components/fooddisplayer.svelte';
  import AddFoodButton from '../../../components/AddFoodButton.svelte';
  import type { PageData } from './$types';
  export let data : PageData
  export let form: ActionData
  import type { ActionData } from './$types';
  
  $: {
    console.log(data.session.user_id)
    console.log(form?.food)
  }
  console.log(data)

  const apiUrl = "/api/item";
  async function addToFridge() {
    try {
      // Send the POST request with the data
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send the PageData object
      });
  
      if (response.ok) {
        // Request was successful, handle the response
        // You can show a success message or update the UI here
        alert("Item added to fridge!");
      } else {
        // Handle errors if the request was not successful
        console.error("Error adding item to fridge.");
      }
    } catch (error) {
      // Handle any exceptions or network errors
      console.error("An error occurred:", error);
    }
  }
</script>
 
<AddFoodButton {form}/>

{#if form?.food}
  <Grid>
    {#each form.food as food, i}
      <Grid.Col span={4}>
        <Fooddisplayer on:click={() => addToFridge(food)} {food} />
      </Grid.Col>
    {/each}
  </Grid>
  {:else}
    <p1>Start searching for food!</p1>
{/if}


