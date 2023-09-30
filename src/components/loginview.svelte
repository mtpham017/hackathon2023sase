<script lang="ts">
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import type { ActionData } from './$types';
    import { PasswordInput, TextInput } from '@svelteuidev/core';
  
    export let value = '';
    export let form: ActionData;
    export let isSuccess: boolean = false;

        // Function to handle form submission
        function handleSubmit(event: any) {
      event.preventDefault();
  
      // You can add your form submission logic here
      // Example: Send data to the server, perform validation, etc.
  
      // If the form submission is successful, set isSuccess to true
      isSuccess = true;
    }
  </script>
  
  <form on:submit="{handleSubmit}">
    <PasswordInput bind:value />
    <TextInput placeholder="User Name" label="Full name" />
  
    <!-- Add a button to trigger form submission -->
    <button type="submit">Submit</button>
  </form>
   
  