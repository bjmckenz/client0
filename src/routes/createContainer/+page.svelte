<script>
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';

	let newContainerNumber = '';
	let newDateContainerShipped = '';
	let newContainerSize = '';
	let newNameOfShip = '';

	const createContainer = async (newContainer) => {
		const res = await fetch('http://localhost:3000/container', {
			method: 'POST',
			body: JSON.stringify(newContainer),
			headers: {
				'content-type': 'application/json'
			}
		});
		const data = await res.json();
		return data.containers[0];
	};
</script>

<h1>Create a Container</h1>

<Textfield variant="filled" bind:value={newContainerNumber} label="Container Number">
	<HelperText slot="helper">May include letters</HelperText>
</Textfield><br />
<Textfield variant="filled" bind:value={newContainerSize} label="Size">
	<HelperText slot="helper">Tons</HelperText>
</Textfield>
<br />
<Textfield variant="filled" bind:value={newDateContainerShipped} label="Date Shipped"></Textfield>
<br /><Textfield variant="filled" bind:value={newNameOfShip} label="Name of Ship"></Textfield>
<br />
<Button
	variant="raised"
	on:click={async () => {
		const newContainer = {
			containerNumber: newContainerNumber,
			dateContainerShipped: newDateContainerShipped,
			containerSize: newContainerSize,
			nameOfShip: newNameOfShip
		};
		const container = await createContainer(newContainer);
		console.log(container['containerNumber']);
	}}
	><Label>Add Container</Label></Button
>
