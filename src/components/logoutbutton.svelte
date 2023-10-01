<script lang="ts">
    import { goto } from '$app/navigation';
    import {Button} from '@svelteuidev/core'
  </script>
  
  <Button
  class = "custom-but"
    on:click={() => { goto("/logout") }}
    color="#2c6e49"
    
    ripple>
    Logout
  </Button>

