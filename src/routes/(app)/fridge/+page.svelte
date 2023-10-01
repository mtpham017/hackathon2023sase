<script lang="ts">
  import { Grid } from '@svelteuidev/core';
  import Fooddisplayer from '../../../components/fooddisplayer.svelte';
<<<<<<< HEAD
=======
  import IngredientTextInput from '../../../components/IngredientTextInput.svelte';
  import AddFoodButton from '../../../components/AddFoodButton.svelte';
>>>>>>> a5b8089 (database, rm navbar)
  import type { PageData } from './$types';
  import AddFoodButton from '../../../components/AddFoodButton.svelte';
  export let data : PageData
  export let form: ActionData
  import type { ActionData } from './$types';
  
  $: {
    console.log(data.session.user_id)
    console.log(form?.food)
  }
  const addToFridge = (food: any) => {
      console.log(food)
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
    <p1>Start searhing for food!</p1>
{/if}

