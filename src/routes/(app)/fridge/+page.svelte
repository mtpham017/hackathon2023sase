<script lang="ts">
  import { Grid } from '@svelteuidev/core';
  import Fooddisplayer from '../../../components/fooddisplayer.svelte';
  import AddFoodButton from '../../../components/AddFoodButton.svelte';
  import type { PageData } from './$types';
  export let data : PageData
  export let form: ActionData
  import type { ActionData } from './$types';
  import { insertItem } from '$lib/database';
  
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
    <p1>Start searching for food!</p1>
{/if}


