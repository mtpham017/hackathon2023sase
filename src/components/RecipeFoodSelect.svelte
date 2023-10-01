<script lang="ts">
  import { NativeSelect } from '@svelteuidev/core';
  export let food : unknown[]  
  export let id: number
</script>

<NativeSelect 
    type="select"
    data={food.map(
      d => ({ label: d.name, value: d.item_id })
    )} 
    placeholder="Pick"
    name="{id}"
    value={id}
 />
