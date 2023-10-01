<script>
	import { Modal, Group, Button } from '@svelteuidev/core';

	let opened = false;
</script>

 
<Modal {opened} on:close={closeModal} title="Introduce yourself!">
	 
</Modal>

<Group position="center">
	<Button on:click={() => (opened = true)}>Open Modal</Button>
</Group>