<script>
	import { Chip } from '@svelteuidev/core';

	let checked = false;
</script>

<Chip
	{checked}
	on:change={() => {
		checked = !checked;
	}}>I'm a chip</Chip
>