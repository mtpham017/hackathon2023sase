<script>
	import { Badge, Button, Card, Group, Image, Text } from '@svelteuidev/core';
	import {onMount} from 'svelte';
 

	/**
     * @type {{ image_url: any; product_name: any; description: any; protein: any; carbohydrates: any; fat: any; }}
     */
	let foodData;
 
	// Function to fetch food data from the Open Food Repo API
	async function fetchFoodData() {
		try {
			const response = await fetch('https://api.openfoodrepo.org/v1/products');  
			if (response.ok) {
				foodData = await response.json();
			} else {
				console.error('Failed to fetch food data');
			}
		} catch (error) {
			console.error('An error occurred while fetching food data:', error);
		}
	}

	// Call the fetchFoodData function when the component is mounted
	onMount(() => {
		fetchFoodData();
	});
</script>

{#if foodData}
	<Card shadow='sm' padding='lg'>
		<Card.Section first padding='lg'>
			<Image
				src={foodData.image_url}  
				height={160}
				alt={foodData.product_name}
			/>
		</Card.Section>

		<Group position='apart'>
			<Text weight={500}>{foodData.product_name}</Text>
			<Badge color='pink' variant='light'>
				On Sale
			</Badge>
		</Group>

		<Text size='sm'>
			{foodData.description}
		</Text>

		<Text size='sm'>
			Nutritional Information:
		</Text>

		<!-- Render nutritional information, replace with actual keys from your data -->
		<Text size='sm'>
			Protein: {foodData.protein}g
		</Text>
		<Text size='sm'>
			Carbohydrates: {foodData.carbohydrates}g
		</Text>
		<Text size='sm'>
			Fat: {foodData.fat}g
		</Text>

		<Button variant='light' color='blue' fullSize>
			Book classic tour now
		</Button>
	</Card>
{:else}
	<p>Loading food data...</p>
{/if}