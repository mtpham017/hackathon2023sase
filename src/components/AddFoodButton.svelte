<script lang="ts">
    import { Button } from '@svelteuidev/core';
    import { TextInput } from '@svelteuidev/core';
    import type { ActionData } from './$types';

 
    export let form: ActionData;

    export let searchQuery = ''; // Initialize search query

  </script>
<form method="POST"> 
    <TextInput
        input type="text" bind:value={searchQuery} placeholder="Enter ingredients" 
     />
    <Button on:click={() => {}} form action="/fridge">
        Add to Fridge
    </Button>
</form>

