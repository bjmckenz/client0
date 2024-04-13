<script>
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

	export let data;
</script>

<h1>Fetched from API, Displayed with Material UI</h1>

<a href="https://sveltematerialui.com/demo/data-table/">Svelte Material UI Data Table info</a>
<p>Be sure to read how to install SMUI, specifically that
	you must run "npm run prepare" after you add SMUI themes.</p>

<hr/>
<DataTable stickyHeader table$aria-label="Containers" style="width: 100%;">
	<Head>
		<Row>
			<Cell>ID</Cell>
			<Cell>Ship Name</Cell>
		</Row>
	</Head>
	<Body>
		{#each data.containers as container (container.containerNumber)}
			<Row>
				<Cell>{container.containerNumber}</Cell>
				<Cell>{container.nameOfShip}</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>

