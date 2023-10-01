<script>
	import { Modal, Group, Button } from '@svelteuidev/core';

	let opened = false;
	const closeModal = () =>{}
</script>

 
<Modal {opened} on:close={closeModal} title="Introduce yourself!">
	 
</Modal>

<Group position="center">
	<!--
		this is breaking with errors
	<Button on:click={() => (opened = true)}>Open Modal</Button>

	-->
</Group>