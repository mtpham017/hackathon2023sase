<script lang="ts">
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import type { ActionData } from './$types';
    import { PasswordInput, TextInput } from '@svelteuidev/core';
    import {Button} from '@svelteuidev/core'
    

  
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
 <style>
    /* Style the container to center its contents */
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
  
    /* Style the header */
    .header {
      font-size: 28px; /* Increase the font size for the header */
      font-weight: bold;
      margin-bottom: 20px;
    }
  
    /* Style the form */
    .form {
      width: 100%; /* Make the form full-width on mobile devices */
      max-width: 400px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center; /* Center text content within the form */
    }
  
    /* Style the form elements */
    .form-element {
      margin-bottom: 16px;
    }
  
    /* Style the Log In button */
    .login-button {
      display: inline-block; /* Ensure the button doesn't take up the full width */
      align-items: center;

    }
  
    /* Media query for mobile responsiveness */
    @media (max-width: 768px) {
      .header {
        font-size: 24px; /* Reduce the font size for smaller screens */
      }
      .form {
        padding: 10px; /* Decrease the padding for smaller screens */
      }
    }
  </style>
  
  <div class="container">
    <div class="header">Log In Here</div>
    <div class="form">
      <form on:submit="{handleSubmit}">
        <div class="form-element">
          <TextInput placeholder="User Name" label="" />
        </div>
        <div class="form-element">
          <PasswordInput placeholder="Password" bind:value />
        </div>
        <div class="form-element">
          <!-- Add a button to trigger form submission -->
          <Button type="submit" class="login-button">Log in</Button>
        </div>
      </form>
    </div>
  </div>
  
  
  
   
  