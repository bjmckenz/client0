<script>
	export let data;
	//console.log({data});

</script>

<h1>Fetched from Database</h1>

{#each data.containers as container}
	<div>
		<span class="id">{container.containerNumber}</span>
		<span class="name">{container.nameOfShip}</span>
		<span class="size">{container.containerSize}</span>
		<span class="date">{container.dateContainerShipped}</span>
	</div>
{/each}

<span class=i>(database lives in data/containers.db)</span>

<style>
	.id {
		margin-right: 10px;
		font-weight: bold;
	}
	.name {
		color: #999;
	}
	.i {
		font-style: italic;
	}
</style>
