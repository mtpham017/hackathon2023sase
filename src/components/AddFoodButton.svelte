<script lang="ts">
    import { Button } from '@svelteuidev/core';
    import { TextInput } from '@svelteuidev/core';

    export let form;
    
    export let searchQuery = ''; // Initialize search query

</script>
<form method="POST"> 
    <TextInput
        input type="text" name="query" bind:value={searchQuery} placeholder="Enter ingredients" 
     />
</form>

