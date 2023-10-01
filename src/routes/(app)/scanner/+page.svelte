<script lang="ts">
    import BarcodeScanner from "../../../components/barcodeScanner.svelte";
</script>

<div id="the-div"> 
    <BarcodeScanner/>
</div>



<style>
	div {
		display: flex;
		/* vertical */
		align-items: center;
		/* horizontal */
		justify-content: center;
	}

  #the-div {
		flex-grow: 1;
	}

  pre {
    background: white;
		padding: 2em;
		box-shadow: 100px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
		flex: 1;
	}
</style>
