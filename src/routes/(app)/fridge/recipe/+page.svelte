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