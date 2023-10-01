<script lang="ts">
    import { Html5Qrcode } from 'html5-qrcode'
    import { onMount } from 'svelte'
    import BarcodeModalIngredientPopUp from './barcodeModalIngredientPopUp.svelte';
    export let onSuccess
    export let modalMessage
    export let modalVisible
    let scanning = false

    let html5Qrcode

    onMount(init)

    function init() {
        html5Qrcode = new Html5Qrcode('reader')
    }

    function start() {
        html5Qrcode.start(
            { facingMode: 'environment' },
            {
                fps: 10,
                qrbox: { width: 250, height: 250 },
            },
            onScanSuccess,
            onScanFailure
        )
        scanning = true
    }

    async function stop() {
        await html5Qrcode.stop()
        scanning = false
    }
    //@ts-ignore
    function onScanSuccess(decodedText, result) {
        modalVisible = true;
        modalMessage = `Code matched = ${decodedText}`;
        //@ts-ignore
        onSuccess("071828009018")
    }

    function onScanFailure(error) {
        console.warn(`Code scan error = ${error}`)
    }
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    reader {
        width: 100%;
        min-height: 500px;
        background-color: black;
    }
</style>

<main>
    <reader id="reader"/>
    {#if scanning}
        <button on:click={stop}>stop</button>
    {:else}
        <button on:click={onScanSuccess}>start</button>
    {/if}

  
</main>
