<script lang="ts">
import LoginView from '../../components/signupView.svelte'
import type { ActionData } from './$types';

export let form: ActionData

</script>

{#if form?.message}
 <p class="red"> {form.message} </p> 
{/if}

<LoginView {form}/>


