<!-- loginview.svelte -->
<script lang="ts">
    import type { ActionData } from './$types';
    import { PasswordInput, TextInput } from '@svelteuidev/core';
    import { Button } from '@svelteuidev/core';
  
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


:global(body) {
    font-family: 'Gabarito', sans-serif; 
    margin: 0;
    padding: 0;
}
    /* Center the container contents */
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 80vh;
      background-color: #fff;
      
    }
  
    /* Style the login box */
    .signup-box {
      background-color: #ffffff;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      padding:20px;
      text-align: center;
      color: #000;
      max-width: 400px;
     
    }
  
    /* Style the form elements */
    .form-element {
      margin-bottom: 16px;
    }
  
    /* Style the Log In button */
    .signup-button {
      display: inline-block;
      background-color: #4c956c; /* Primary color */
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
  
    /* Media query for mobile responsiveness */
    @media (max-width: 768px) {
      /* Adjust styles for smaller screens if needed */
    }
  </style>
  
  <div class="container">
    <div class="signup-box">
      <h2 class="mt-4 text-2xl font-bold leading-9 tracking-tight">Create an Account</h2>
      <form method="POST">
        <div class="form-element">
          <TextInput placeholder="User Name"  name="email" label="" />
        </div>
        <div class="form-element">
          <PasswordInput placeholder="Password" name="password" bind:value />
        </div>
        <div class="form-element">
          <!-- Add a button to trigger form submission -->
          <Button color = #4c956c type="submit" class="signup-box-button">Sign Up</Button>
        </div>
      </form>
    </div>
  </div>