<script lang="ts">
    import { Grid } from '@svelteuidev/core';
    import type { PageData } from './$types';
  import RecipeCard from '../../../../components/RecipeCard.svelte';
  import Fooddisplayer from '../../../../components/fooddisplayer.svelte';
    export let data : PageData
</script>

<div id="page">
    <div id="sideBar">
        {#if data.food.length == 0}
        <div>
            No food :(
        </div>
      {:else}
        {#each data.food as food}
            <Fooddisplayer food={food}/>
        {/each}
      {/if}

    </div>
    <div id="content">
      {#if data.recipes.length == 0}
        <div>
            No recipes :(
        </div>
      {:else}
        {#each data.recipes as recipe}
            <div>
                <RecipeCard 
                    recipe_name={recipe.recipe_name}
                />
            </div>
        {/each}
      {/if}

    </div>
  </div>

<style>
    #page {
        display: flex;
        height: calc( 100vh - 30px);
  /* calculate the height. Header is 30px */
    }
    #sideBar {
        width: 100px;
        /* background: red; */
    }

    #content {
        /*background: blue;*/
        flex: 1 0 auto;
  /* enable grow, disable shrink */
    }
</style>