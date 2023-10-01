<script lang="ts">
  import { NativeSelect } from '@svelteuidev/core';
  export let food : unknown[]  
  export let id: number
  console.log(id)
</script>

<NativeSelect 
    type="select"
    data={[   
        { label: 'Svelte', value: '1' },
        { label: 'Vue', value: '2' },
        { label: 'Angular', value: '3' },
        { label: 'React', value: '4' }
    ]} 
    placeholder="Pick"
    name="{id}"
    value={id}
 />
