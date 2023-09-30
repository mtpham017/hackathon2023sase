<script lang="ts">
    import { Grid } from '@svelteuidev/core';
    import Fooddisplayer from '../../../components/fooddisplayer.svelte';
    import IngredientTextInput from '../../../components/IngredientTextInput.svelte';
    import AddFoodButton from '../../../components/AddFoodButton.svelte';
  </script>

  <IngredientTextInput></IngredientTextInput>
  <AddFoodButton/>
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
  
