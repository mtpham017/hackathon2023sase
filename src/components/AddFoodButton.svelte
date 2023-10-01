<script lang="ts">
    import { Button } from '@svelteuidev/core';
    import { TextInput } from '@svelteuidev/core';

    export let searchQuery = ''; // Initialize search query

  </script>
<form method="POST"> 
    <TextInput
        input type="text" bind:value={searchQuery} placeholder="Enter ingredients" 
     />
    <Button on:click={() => {}} formaction="?/register">
        Add to Fridge
    </Button>
</form>

