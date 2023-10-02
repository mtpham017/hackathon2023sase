<script lang="ts">
    import { Grid } from '@svelteuidev/core';
    import PantryDisplayView from '../../../components/PantryDisplay.svelte';
    import type { PageData } from './$types';
    import type { ActionData } from './$types';

    export let data : PageData
    export let form: ActionData
    $: {
        console.log(data)     
    }
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
