<script>
    import { goto } from '$app/navigation';
</script>


<h1>Welcome to simple Client/API site</h1>
<p>Bits and pieces to get started in Svelte and API</p>

<p>Step 1: Understand how this route works.</p>
<button on:click={() => {goto('/fromstatic')}}>Show hard-coded Containers</button>

<p>Step 2: Display data from an API</p>
<button on:click={() => {goto('/fromapi')}}>Show Containers via API</button>

<p>Step 3: Set up site-wide layout</p>
<p class=note>(go look at +layout.svelte)</p>

<style>
    .note {
        font-style: italic;
    }
</style>
