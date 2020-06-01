<script>
	import { Router, Route } from 'svelte-routing';

	import Home from './components/Home.svelte';
	import AddEditForm from './components/AddEditForm.svelte';
	import Navbar from './components/Navbar.svelte';

	const table = 'applications';

</script>

<Router>
	<Navbar />
	<main>
		<section class="pv6-ns">
			<Route path="/add"><AddEditForm table={table} /></Route>
			<Route path="/edit/:id" let:params><AddEditForm id="{params.id}" table={table} /></Route>
			<Route path="/"><Home table={table} /></Route>
		</section>
	</main>
</Router>

<style>
</style>