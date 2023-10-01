<script>
  import { goto } from '$app/navigation';
	import { Tabs } from '@svelteuidev/core';

	let active = 0;

	async function onActiveChange(event) {
		const { index, key } = event.detail;
		await goto(key)
	}
</script>

<Tabs bind:active on:change={onActiveChange}>
	<Tabs.Tab label="Fridge" tabKey="/fridge"></Tabs.Tab>
	<Tabs.Tab label="Recipes" tabKey="/fridge/recipe"></Tabs.Tab>
	<Tabs.Tab label="Scanner" tabKey="/scanner"></Tabs.Tab>
</Tabs>