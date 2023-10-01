<script lang="ts">
	import { Badge, Button, Card, Group, Image, Text } from '@svelteuidev/core';
    export let recipe_name: string
</script>

<Card shadow='sm' padding='lg'>
	<Card.Section first padding='lg'>
		<Image
			src='https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?auto=format&fit=crop&w=640&q=80'
			height={160}
			alt='Portugal'
		/>
	</Card.Section>

	<Group position='apart'>
		<Text weight={500}>${recipe_name}</Text>
		<Badge color='pink' variant='light'>
			On Sale
		</Badge>
	</Group>

	<Text size='sm'>
		With Portugal Porto Adventures you can explore more of the beautiful portuguese cities,
		by walking on food, meeting the locals and eat excellent food and wine
	</Text>

	<Button variant='light' color='blue' fullSize>
		Book classic tour now
	</Button>
</Card>