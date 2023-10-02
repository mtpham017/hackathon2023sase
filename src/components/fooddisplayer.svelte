
<script lang='ts'>
import { applyAction } from '$app/forms';
import { Badge, Button, Card, Group, Image, Text } from '@svelteuidev/core';
export let food : App.FoodData

</script>


<Card shadow="sm" padding="lg">
  <!--
     <Card.Section first padding="lg">
        <Image src={food.image} height={160} alt={food.name} />
    </Card.Section>

  -->
 
  <Group position="apart">
    <Text weight={500} style = "font-size: 24px; font-family:'Gabarito', sans-serif;text-align:center; width:100%; padding-top:1rem; padding-bottom:1rem">{food.name}</Text>
  </Group>

  <Text size="sm">
    Nutritional Information:
  </Text>

  <Text size="sm">
    Protein: {food.nutrients.protein}
  </Text>
  <Text size="sm">
    Carbohydrates: {food.nutrients.carbs}
  </Text>
  <Text size="sm">
    Sodium: {food.nutrients.sodium}
  </Text>
  <Text size="sm">
    Fiber: {food.nutrients.fiber}
  </Text>
  <Text size="sm">
    Calories: {food.nutrients.calories}
  </Text>

  <Button on:click variant="outline" color="#2c6e49" style="margin-top:1rem" fullSize>
    Add
  </Button>
</Card>

 
