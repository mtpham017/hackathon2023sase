<script lang="ts">
    import { Grid, Text } from '@svelteuidev/core';
    import type { PageData } from './$types';
    import RecipeCard from '../../../../components/RecipeCard.svelte';
    import Fooddisplayer from '../../../../components/fooddisplayer.svelte';
    export let data : PageData
    $:food = data.food

    let onClickRecipe = () => {

    }    
</script>

<div id="page">
    <div id="sideBar">
        {#if data.food.length == 0}
        <Text>
            No food :(
        </Text>
      {:else}
        {#each data.food as food}
            <Fooddisplayer food={food}/>
        {/each}
      {/if}

    </div>
    <div id="content">
      {#if data.recipes.length == 0}
        <Grid>
            <RecipeCard
                recipe_name={undefined}
                items={[]}
            />
        </Grid>
      {:else}
        <Grid>
            {#each data.recipes as recipe}
            <RecipeCard 
                recipe_name={recipe.recipe_name}
                items={[]}
            />
            {/each}
        </Grid>
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