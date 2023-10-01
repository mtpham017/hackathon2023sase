<script lang="ts">
  import { Grid } from '@svelteuidev/core';
  import Fooddisplayer from '../../../components/fooddisplayer.svelte';
  import IngredientTextInput from '../../../components/IngredientTextInput.svelte';
  import AddFoodButton from '../../../components/AddFoodButton.svelte';
  import type { PageData } from './$types';
  export let data : PageData
 
  </script>

<AddFoodButton />

<Grid>
  {#each data.food as food, i}
    <Grid.Col span={4}>
      <Fooddisplayer food = {foodData} />
    </Grid.Col>
  {/each}
</Grid>
