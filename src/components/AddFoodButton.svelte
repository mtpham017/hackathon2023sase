<script lang="ts">
    import { TextInput } from '@svelteuidev/core';

    export let form;
    
    export let searchQuery = ''; // Initialize search query

</script>
<form method="POST" action="?/search"> 
    <TextInput
        input type="text" name="query" bind:value={searchQuery} placeholder="Enter ingredients" 
     />
</form>

