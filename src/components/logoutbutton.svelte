<script lang="ts">
    import { goto } from '$app/navigation';
    import {Button} from '@svelteuidev/core'
  </script>
  
  <Button 
    on:click={() => { goto("/logout") }}
    color="#4c956c"
    ripple>
    Logout
  </Button>
