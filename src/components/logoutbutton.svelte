<script lang="ts">
    import { goto } from '$app/navigation';
    import {Button} from '@svelteuidev/core'
  
    const handleLogout = async () => {
      try {
        const response = await fetch('/logout', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // You might need to include authentication headers here
          },
          body: JSON.stringify({ token: REFRESH_TOKEN_SECRET }), // Replace with actual refresh token
        });
  
        if (response.ok) {
           goto('/');
        } else {
           console.error('Logout failed');
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };
  </script>
  
  <Button
    on:click={handleLogout}
  >
    Logout
  </Button>