<script>
    export let containers = [];

    function showContainers() {
        containers = [
            { id: 1, name: 'Container 1' },
            { id: 2, name: 'Container 2' },
        ] ;
    }
</script>


<button on:click={showContainers}>Show Containers</button>


{#each containers as container}
    <div>
        <span class="id">{container.id}</span>
        <span class="name">{container.name}</span></div>
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
