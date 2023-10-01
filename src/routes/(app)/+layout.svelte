<script lang="ts">
    import { SvelteUIProvider } from '@svelteuidev/core';
    import NavBarView from '../../components/NavBarView.svelte';
    import BarcodeModalIngredientPopUp from '../../components/barcodeModalIngredientPopUp.svelte';

</script>

<header>
    <NavBarView />
</header>

<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<BarcodeModalIngredientPopUp />
</SvelteUIProvider>
