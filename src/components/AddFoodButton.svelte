<script lang="ts">
    import { Button } from '@svelteuidev/core';
    import { TextInput } from '@svelteuidev/core';
    import type { ActionData } from './$types';

    export let data : PageData

    export let form: ActionData;
    
    export let searchQuery = ''; // Initialize search query

  </script>
<form on:submit={}> 
    <TextInput
        input type="text" name="query" bind:value={searchQuery} placeholder="Enter ingredients" 
     />
</form>

