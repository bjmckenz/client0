<script>
	export let container;
</script>

<div class="row">
	<div class="id">{container.containerNumber}</div>
	<div class="shipname">{container.nameOfShip}</div>
	<div class="date">{container.dateContainerShipped}</div>
	<div class="size">{container.containerSize}</div>
</div>

<style>
	.row {
		display: flex;
		background-color: #eee;
	}
	.id,
	.shipname,
	.size,
	.date {
		margin: 5px;
	}
	.id {
		font-weight: bold;
		flex: 1;
	}
	.size {
		text-align: right;
		flex: 0 0 50px;
	}
	.date {
		flex: 0 0 100px;
		text-align: center;
	}
	.shipname {
		flex: 1;
		color: #999;
	}
</style>
