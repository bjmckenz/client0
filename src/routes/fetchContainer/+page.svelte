<script>
	import Button, { Label } from '@smui/button';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';

	let container;
	let containerNumber = '';

	const fetchContainer = async (containerName) => {
		const res = await fetch(`http://localhost:3000/container/${containerName}`);
		const data = await res.json();
		return data.containers[0];
	};
</script>

<h1>View a Container</h1>

<Textfield variant="filled" bind:value={containerNumber} label="Container Number to View">
	<HelperText slot="helper">May include letters</HelperText>
</Textfield>

<Button
	variant="raised"
	on:click={async () => {
		container = await fetchContainer(containerNumber);
		console.log(container);
	}}><Label>Fetch Container {containerNumber}</Label></Button
>
<br />
{#if container}
	<DataTable table$aria-label="Container Details" style="max-width: 100%;">
		<Head>
			<Row>
				<Cell>Attribute</Cell>
				<Cell>Value</Cell>
			</Row>
		</Head>
		<Body>
			<Row>
				<Cell>Container Number</Cell>
				<Cell>{container.containerNumber}</Cell>
			</Row>
			<Row>
				<Cell>Container Size</Cell>
				<Cell numeric>{container.containerSize}</Cell>
			</Row>
			<Row>
				<Cell>Date of Shipment</Cell>
				<Cell>{container.dateContainerShipped}</Cell>
			</Row>
			<Row>
				<Cell>Name of Ship</Cell>
				<Cell>{container.nameOfShip}</Cell>
			</Row>
		</Body>
	</DataTable>
{:else}
	<p>No container fetched</p>
{/if}
