<script>
    import ContainerSummaryRow from './ContainerSummaryRow.svelte';
	export let containers = [];
    export let onContainerClicked = () => {};
</script>

<h3>A PseudoTable Component</h3>

<p>This is an example of Svelte containers, NOT the best way to create a simple table. It probably should be done in the ContainerTable component so that it it is easy to add callbacks for people clicking the shipname or id or...</p>

<p>Notice that tab order is set correctly with the index into the container object.</p>
{#each containers as container, ix}
	<div
        role="button"
		tabindex={ix+1}
		on:keydown={(e) => e.key === 'Enter' && onContainerClicked(container, e)}
		on:click={(e) => onContainerClicked(container, e)}>

        <div class=row>
            <ContainerSummaryRow {container}/>
        </div>
	</div>
{/each}

<style>
    .row {
        margin: 5px;
        border: 1px solid black;
    }
</style>
