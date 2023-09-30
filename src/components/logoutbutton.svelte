<script lang="ts">
    import { goto } from '$app/navigation';
  
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
  
  <button
    type="button"
    class="flex w-full justify-center rounded-md bg-secondary-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    on:click={handleLogout}
  >
    Logout
  </button>