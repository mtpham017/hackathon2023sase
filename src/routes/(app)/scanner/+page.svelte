<script>
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/private'

  
	let scanning = false;
	let html5Qrcode;
	let decodedResult = null;
  
	onMount(init);
  
	function init() {
	  html5Qrcode = new Html5Qrcode('reader');
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
	  );
	  scanning = true;
	}
  
	async function stop() {
	  await html5Qrcode.stop();
	  scanning = false;
	}
  
	function onScanSuccess(decodedText) {
	  alert(`Code matched = ${decodedText}`);
	  decodedResult = decodedText;
	  const apiKey = env.OPENFOODREPO_API_KEY;

	  // Create the API URL with the decoded result
	  const apiUrl = 'https://www.foodrepo.org/api/v3/products/?'+"barcode="+decodedResult+"&api_key="+apiKey;  
	  // Make an API call using the updated URL
	  fetch(apiUrl)
		.then((response) => {
		  if (response.ok) {
			return response.json();
		  }
		  throw new Error('API call failed');
		})
		.then((apiData) => {
		  // Handle the API response data
		  console.log(apiData);
		})
		.catch((error) => {
		  console.error('An error occurred while making the API call:', error);
		});
	}
  
	function onScanFailure(error) {
	  console.warn(`Code scan error = ${error}`);
	}
  </script>
  

 
