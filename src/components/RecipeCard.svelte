<script lang="ts">
	import { Button, Card, Grid, Group, Image, Text } from '@svelteuidev/core';
    export let recipe_name: string;
    export let items: App.FoodData[]
</script>

{#if recipe_name}
    <Grid.Col md={4} lg={2}>
        <Card shadow='sm' padding='lg'>
            <Text size='xl'>{recipe_name}</Text>
            <Card.Section last padding ="lg">
                <ul>
                    {#each items as item}
                        <li>
                            <Text>{item.name}</Text>
                        </li>    
                    {/each}
                </ul>
            </Card.Section>
        </Card>
    </Grid.Col> 
{/if}

