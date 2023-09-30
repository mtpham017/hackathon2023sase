<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
    import NavBarView from '../../components/NavBarView.svelte';

</script>

<header>
    <NavBarView />
</header>

<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<slot />
</SvelteUIProvider>