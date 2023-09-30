//<!-- registration.svelte -->
<script lang="ts">
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import type { ActionData } from './$types';
    import { TextInput } from '@svelteuidev/core';
    import { Button } from '@svelteuidev/core';
  
    export let form: ActionData;
    export let isSuccess: boolean = false;
    let username = '';
    let password = '';
  
    async function handleSubmit(event: any) {
      event.preventDefault();
  
      // Send the registration data (username and password) to the server
      // You will need to implement a server route for handling user registration
  
      // Example of sending data to a server using fetch:
      const registrationData = { username, password };
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationData),
        });
  
        if (response.ok) {
          // Registration successful, set isSuccess to true
          isSuccess = true;
  
          // Optionally, redirect the user to a login page or any other page
          // using goto('/login') or another appropriate route
        } else {
          // Registration failed, handle errors here
          console.error('Registration failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  </script>
  
  <style>
    /* Styles here remain the same as in loginview.svelte */
    /* You can reuse the same styles */
  </style>
  
  <div class="container">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register an account</h2>
    <div class="form">
      <form on:submit="{handleSubmit}">
        <div class="form-element">
          <TextInput placeholder="User Name" label="" bind:value="{username}" />
        </div>
        <div class="form-element">
          <TextInput placeholder="Password" type="password" bind:value="{password}" />
        </div>
        <div class="form-element">
          <Button type="submit" class="login-button">Register</Button>
        </div>
      </form>
    </div>
  </div>
  