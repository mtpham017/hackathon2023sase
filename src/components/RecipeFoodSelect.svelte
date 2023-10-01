<script lang="ts">
  import { NativeSelect } from '@svelteuidev/core';
  export let food : unknown[]  
</script>

<NativeSelect data={food} 
  placeholder="Pick"
  label="Pick some food"
 />
