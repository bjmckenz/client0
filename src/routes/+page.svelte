<script>
    export let containers = [];

    function showContainers() {
        containers = [
            { id: 1, name: 'Container 1' },
            { id: 2, name: 'Container 2' },
        ] ;
    }
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click="{showContainers}">Show Containers</button>

{#each containers as container}
    <div>
        <span class="id">{container.id}</span>
        <span class="name">{container.name}</span></div>
{/each}

<a href="/fromapi">Fetch from API</a>

<style>
    .id {
        margin-right: 10px;
        font-weight: bold;
    }
    .name {
        color: #999;
    }
</style>
