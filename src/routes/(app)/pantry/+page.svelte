<script lang="ts">
    import { Grid } from '@svelteuidev/core';
    import Fooddisplayer from '../../../components/fooddisplayer.svelte';
    import type { PageData } from './$types';
    export let data : PageData
    export let form: ActionData
    import type { ActionData } from './$types';
    
  </script>
     
  {#if form?.food}
    <Grid>
      {#each form.food as food, i}
        <Grid.Col span={4}>
          <Fooddisplayer {food} />
        </Grid.Col>
      {/each}
    </Grid>
    {:else}
      <p1>Start searching for food!</p1>
  {/if}