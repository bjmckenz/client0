<script>
    import { goto } from '$app/navigation';
</script>


<h1>Welcome to simple Client/API site</h1>
<p>Bits and pieces to get started in Svelte and API</p>

<p>Step 1: Display data from an API</p>
<button on:click={() => {goto('/fromapi')}}>Show Containers via API</button>

<p>Step 2: Use Svelte MUI to display data</p>
<button on:click={() => {goto('/fromapi_mui')}}>Show Containers in nice table</button>

<p>Step 3: Use a "form" to collect user data and make an API request</p>
<button on:click={() => {goto('/fetchContainer')}}>Fetch A Container</button>

<p>Step 4: See how to collect data and make a POST request</p>
<button on:click={() => {goto('/createContainer')}}>Create A Container</button>



<style>
    .note {
        font-style: italic;
    }
</style>
