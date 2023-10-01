
<script lang='ts'>
import { applyAction } from '$app/forms';
import { Badge, Button, Card, Group, Image, Text } from '@svelteuidev/core';
export let food : App.FoodData

</script>


<Card shadow="sm" padding="lg">
  <Card.Section first padding="lg">
    <Image src={Food} height={160} alt={name} />
  </Card.Section>

  <Group position="apart">
    <Text weight={500}>{name}</Text>
  </Group>

  <Text size="sm">
    {description}
  </Text>

  <Text size="sm">
    Nutritional Information:
  </Text>

  <Text size="sm">
    Protein: {nutrient.protein}
  </Text>
  <Text size="sm">
    Carbohydrates: {nutrient.carbs}
  </Text>
  <Text size="sm">
    Sodium: {nutrient.sodium}
  </Text>
  <Text size="sm">
    Fiber: {nutrient.fiber}
  </Text>
  <Text size="sm">
    Calories: {nutrient.calories}
  </Text>

  <Button variant="light" color="blue" fullSize>
    Book classic tour now
  </Button>
</Card>

 