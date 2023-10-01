
<script lang='ts'>
import { applyAction } from '$app/forms';
import { Badge, Button, Card, Group, Image, Text } from '@svelteuidev/core';
export let food : App.FoodData

</script>


<Card shadow="sm" padding="lg">
  <Card.Section first padding="lg">
    <Image src={food.image} height={160} alt={food.name} />
  </Card.Section>

  <Group position="apart">
    <Text weight={500}>{food.name}</Text>
  </Group>

  <Text size="sm">
    {food.score}
  </Text>

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

  <Button variant="light" color="blue" fullSize>
    Book classic tour now
  </Button>
</Card>

 