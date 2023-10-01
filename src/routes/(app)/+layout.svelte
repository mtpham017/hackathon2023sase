<script lang="ts">
    import { SvelteUIProvider } from '@svelteuidev/core';
    import BarcodeModalIngredientPopUp from '../../components/barcodeModalIngredientPopUp.svelte';

</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles>
<slot/>
</SvelteUIProvider>
