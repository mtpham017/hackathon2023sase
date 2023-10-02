<script lang="ts">
    import { Button, Card, Grid, Group, Image, Text } from '@svelteuidev/core';
    export let recipe_name: string;
    export let items: App.FoodData[]
    $:{ 
        console.log(items)
    }
        
</script>

{#if recipe_name}
    <Grid.Col md={4} lg={2}>
        <Card shadow='lg' padding='lg'>
            <Group>
                <Text size='xl' underline>{recipe_name}</Text>
            </Group>
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

