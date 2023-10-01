<script>
	import { Modal, Group, Button } from '@svelteuidev/core';

	let opened = false;
    export let closeModal; // Function to close the modal
    export let itemInfo; // Information about the identified item


</script>

 
<Modal {opened} on:close={closeModal} title="Introduce yourself!">
	 
</Modal>

<Group position="center">
	<Button on:click={() => (opened = true)}>Open Modal</Button>
</Group>