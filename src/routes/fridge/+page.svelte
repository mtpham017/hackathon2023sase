<script lang="ts">
    import { Grid } from '@svelteuidev/core';
    import Fooddisplayer from '../../components/fooddisplayer.svelte';
    import IngredientTextInput from '../../components/IngredientTextInput.svelte';
    import GenerateRecipeButton from '../../components/GenerateRecipeButton.svelte';
  </script>
  
  <style>
    /* Style the container to add padding */
    .container {
      padding: 20px; /* Adjust the padding as needed */
    }
  
    /* Style the IngredientTextInput */
    .input-container {
      margin-bottom: 60px; /* Add space below the input */
    }
  </style>
  
  <div class="container">
    <IngredientTextInput class="input-container "></IngredientTextInput>
    <GenerateRecipeButton></GenerateRecipeButton>
    <Grid>
      <Grid.Col span={4}>
        <Fooddisplayer />
      </Grid.Col>
      <Grid.Col span={4}>
        <Fooddisplayer />
      </Grid.Col>
      <Grid.Col span={4}>
        <Fooddisplayer />
      </Grid.Col>
      <!-- Add more Grid.Col elements as needed -->
    </Grid>
  </div>
  