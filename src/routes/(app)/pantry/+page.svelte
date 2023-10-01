<script lang="ts">
    import { Grid } from '@svelteuidev/core';
    import PantryDisplayView from '../../../components/PantryDisplay.svelte';
    import type { PageData } from './$types';
    export let data : PageData
    export let form: ActionData
    import type { ActionData } from './$types';
    
  </script>
     
  {#if data?.food}
    <Grid>
      {#each data.food as food, i}
        <Grid.Col span={4}>
          <PantryDisplayView {food} />
        </Grid.Col>
      {/each}
    </Grid>
    {:else}
      <p1>Start searching for food!</p1>
  {/if}