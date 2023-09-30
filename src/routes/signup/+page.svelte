<script lang="ts">
import LoginView from '../../components/loginview.svelte'
import type { ActionData } from './$types';

export let form: ActionData

</script>

{#if form?.message}
 <p class="red"> {form.message} </p> 
{/if}

<LoginView {form}/>


