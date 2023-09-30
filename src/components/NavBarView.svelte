<script>
	import { Tabs } from '@svelteuidev/core';

	let active = 0;

	function onActiveChange(event) {
		const { index, key } = event.detail;
		console.log('Tab active', index, key);
	}
</script>

<Tabs bind:active on:change={onActiveChange}>
	<Tabs.Tab label="First" tabKey="first">First tab content</Tabs.Tab>
	<Tabs.Tab label="Second" tabKey="second">Second tab content</Tabs.Tab>
	<Tabs.Tab label="Third" tabKey="third">Third tab content</Tabs.Tab>
</Tabs>