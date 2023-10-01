<script lang="ts">
  import { Grid } from '@svelteuidev/core';
  import Fooddisplayer from '../../../components/fooddisplayer.svelte';
  import type { PageData } from './$types';
  import AddFoodButton from '../../../components/AddFoodButton.svelte';
  export let data : PageData
  export let form: ActionData
  import type { ActionData } from './$types';
 
</script>
 
<AddFoodButton {form}/>

<Grid>
  {#each data.food as food, i}
    <Grid.Col span={4}>
      <Fooddisplayer {food} />
    </Grid.Col>
  {/each}
</Grid>
