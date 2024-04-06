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

<p>Step 4: Use Svelte MUI to display data</p>
<button on:click={() => {goto('/fromapi_mui')}}>Show Containers in nice table</button>

<p>Step 5: Use a "form" to collect user data and make an API request</p>
<button on:click={() => {goto('/fetchContainer')}}>Fetch A Container</button>

<p>Step 6: See how to collect data and make a POST request</p>
<button on:click={() => {goto('/createContainer')}}>Create A Container</button>


<p>Step 7: See how to use a SQLITE3 database</p>
<span class=note>(For this to work, you MUST create a file called .env at the project root, and it must have the following line in it: "DB_FILE=./data/containers.db")</span>
<br/>
<button on:click={() => {goto('/fromDB')}}>Use Database</button>


<p>Step 8: See how to create Svelte components</p>
<span class=note>(uses db, so create the .env file as above)</span>
<br/>
<button on:click={() => {goto('/fromDBandComponents')}}>Use Components</button>


<style>
    .note {
        font-style: italic;
    }
</style>
