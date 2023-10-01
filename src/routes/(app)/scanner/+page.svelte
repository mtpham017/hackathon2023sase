<script lang="ts">
    import BarcodeScanner from "../../../components/barcodeScanner.svelte";
    import type { ActionData } from "./$types";
    
    let decodeResult: string;
    let modalMessage:string
    let modalVisible: boolean
    const onScanSuccess = (result: string) => {
        modalMessage = "Code matched = " + result
        decodeResult = result
        modalVisible = true
    }
</script>

{#if decodeResult}
    <div>
        <p>poo</p>
    </div>
{:else}

    <div id="the-div"> 
        <BarcodeScanner onSuccess={onScanSuccess} modalMessage={modalMessage}, {modalVisible}/>
    </div>

{/if}



