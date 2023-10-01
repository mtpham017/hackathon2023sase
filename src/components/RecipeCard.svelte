<script lang="ts">
	import { Badge, Button, Card, Grid, Group, Image, Text } from '@svelteuidev/core';
    import img from '$lib/images/galaxy.jpg'
    export let recipe_name: string;
    export let items: App.FoodData[]
</script>

{#if recipe_name}
    <Grid.Col md={4} lg={2}>
        <Card shadow='sm' padding='lg'>
            <Card.Section first padding='lg'>
                <Image
                    src={img}
                    height={160}
                    alt=''
                />
            </Card.Section>
            <Group position='apart'>
                <Text weight={'bold'}>{recipe_name}</Text>
                <Button variant="default" color="#ffc9b9">Remove</Button>
                <Button color="#4c956c">+</Button>
            </Group>
            <Card.Section last padding ="lg">
                {#each items as item}
                    <Text>{item.name}</Text>
                {/each}
            </Card.Section>
        </Card>
    </Grid.Col> 
{:else}
    <Grid.Col md={4} lg={2}>
        <Card shadow='sm' padding='lg'>
            <Group position="apart">
                <Button color="#4c956c" fullSize variant="outline">+</Button>
            </Group>
        </Card>
    </Grid.Col>
{/if}

