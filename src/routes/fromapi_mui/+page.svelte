<script>
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

	export let data;
</script>

<h1>Fetched from API, Displayed with Material UI</h1>

<a href="https://sveltematerialui.com/demo/data-table/">Svelte Material UI Data Table info</a>
<hr/>
<DataTable stickyHeader table$aria-label="Containers" style="width: 100%;">
	<Head>
		<Row>
			<Cell>ID</Cell>
			<Cell>Ship Name</Cell>
		</Row>
	</Head>
	<Body>
		{#each data.containers as container (container.id)}
			<Row>
				<Cell>{container.id}</Cell>
				<Cell>{container.nameOfShip}</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>

