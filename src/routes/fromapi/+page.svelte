<script>
	export let data;
	//console.log({data});
</script>

<h1>Fetched from API</h1>

{#each data.containers as container}
	<div>
		<span class="id">{container.id}</span>
		<span class="name">{container.nameOfShip}</span>
	</div>
{/each}

<style>
	.id {
		margin-right: 10px;
		font-weight: bold;
	}
	.name {
		color: #999;
	}
</style>
