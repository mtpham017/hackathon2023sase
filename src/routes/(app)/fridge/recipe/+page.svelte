<script lang="ts">
    import { Button, Card, Grid, Group, Text, TextInput } from '@svelteuidev/core';
    import type { PageData } from './$types';
    import RecipeCard from '../../../../components/RecipeCard.svelte';
    import RecipeFoodSelect from '../../../../components/RecipeFoodSelect.svelte';
    export let data : PageData
    $:food = data.food
    let showRecipeBuilder = false
    let newRecipe = (e) => {
        e.preventDefault();
        showRecipeBuilder = true
    }    
    let addNewRecipe = () => {
        
    }
</script>

<div id="page">
    <div id="content">
        <Grid>
            {#if showRecipeBuilder}
                <form method="POST">
                    <Grid.Col>
                        <Card shadow='sm' padding='lg'>
                            <RecipeFoodSelect food={food}/>
                            <Button 
                                color="#4c956c"
                                on:click={newRecipe}
                                fullSize variant="outline">+
                            </Button>
                        </Card>
                    </Grid.Col>
                </form>
            {:else}
                <Grid.Col md={4} lg={2}>
                    <Card shadow='sm' padding='lg'>
                        <Group position="apart">
                            <Button 
                                color="#4c956c"
                                on:click={newRecipe}
                                fullSize variant="outline">+
                            </Button>
                        </Group>
                    </Card>
                </Grid.Col>
            {/if}
            {#each data.recipes as recipe}
            <RecipeCard 
                recipe_name={recipe.recipe_name}
                items={food}
            />
            {/each}
        </Grid>


    </div>
  </div>

<style>
    #page {
        display: flex;
        height: calc( 100vh - 30px);
  /* calculate the height. Header is 30px */
    }

    #content {
        /*background: blue;*/
        flex: 1 0 auto;
  /* enable grow, disable shrink */
    }
</style>