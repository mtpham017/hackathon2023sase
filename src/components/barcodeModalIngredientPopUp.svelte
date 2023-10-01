<script>
	import { Modal, Group, Button } from '@svelteuidev/core';

	let opened = false;
<<<<<<< HEAD
    export let closeModal; // Function to close the modal
    export let itemInfo; // Information about the identified item


=======
	const closeModal = () =>{}
>>>>>>> b256c18 (scanner)
</script>

 
<Modal {opened} on:close={closeModal} title="Introduce yourself!">
	 
</Modal>

<Group position="center">
	<!--
		this is breaking with errors
	<Button on:click={() => (opened = true)}>Open Modal</Button>

	-->
</Group>