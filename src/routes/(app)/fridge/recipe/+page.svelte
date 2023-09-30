<script lang="ts">
    import { Grid } from '@svelteuidev/core';
    import Fooddisplayer from '../../../components/fooddisplayer.svelte';
    import IngredientTextInput from '../../../components/IngredientTextInput.svelte';
    import GenerateRecipeButton from '../../../components/GenerateRecipeButton.svelte';
  </script>
  <IngredientTextInput></IngredientTextInput>
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
  