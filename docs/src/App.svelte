<script>
	import User from './User.svelte';
	import {
		onMount
	} from 'svelte';

	let user_data;
	onMount(() => {
		fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then((data) => {
			user_data = data
			console.log(user_data)
		})
	})
</script>
<main>
	<h1>Users</h1>
	<p>Here's an example 🎩 of how you might use Silhouette.js.</p>
	{#if user_data}
    {#each user_data as data}
        <User data={data}></User>
	{/each}  
    {/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #536dfe;
		text-transform: capitalize;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>