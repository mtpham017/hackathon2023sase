<script lang="ts">
  import { Grid } from '@svelteuidev/core';
  import Fooddisplayer from '../../../components/fooddisplayer.svelte';
  import AddFoodButton from '../../../components/AddFoodButton.svelte';
  import { applyAction, deserialize, enhance } from '$app/forms'
	import { invalidateAll, goto } from '$app/navigation';
  import type { PageData } from './$types';
  export let data : PageData
  export let form: ActionData
  import type { ActionData } from './$types';
  
 
  async function addToFridge(food, e) {
    const data = new FormData() 
    console.log(food)
    for ( var key in food ) {
      if(typeof food[key] === 'object') {
          const nested = food[key]
          for(const nestKey in nested) {
            console.log(nestKey)
            data.append(key+"-"+nestKey, nested[nestKey])
          }
      } else {
          data.append(key, food[key]);
      }
    }
    try {

          const nutrients = {
            fat: data.get('nutrients-fat') ?? null,
            sodium: data.get('nutrients-sodium'),
            carbs: data.get('nutrients-carbs'),
            fiber: data.get('nutrients-fiber'),
            calories: data.get('nutrients-calories')
        }
        const item = {
          name: data.get('name'),
          barcode: data.get('barcode'),
          image: data.get('image'),
          user_id: data.get('userId')
        }
        const response = await fetch("/api/item", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nutrients,
            item
          })
        })
        if(response.ok) {
          alert("Food added!")
        } else {
          alert("Something went wrong!")
        }
    }
    catch(E) {
      
    } 
  }
</script>
 
<AddFoodButton {form}/>

{#if form?.food}
  <Grid>
    {#each form.food as food, i}
      <Grid.Col span={4}>
        <form method="POST" action="?/add" on:submit|preventDefault={(e) => addToFridge(food, e)}>
          <Fooddisplayer {food} />
        </form>
      </Grid.Col>
    {/each}
  </Grid>
  {:else}
    <p1>Start searching for food!</p1>
{/if}


