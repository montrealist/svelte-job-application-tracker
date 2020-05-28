<script>
	import { Router, Route } from 'svelte-routing';

	import Home from './components/Home.svelte';
	import AddEditForm from './components/AddEditForm.svelte';
	import Navbar from './components/Navbar.svelte';

</script>

<Router>
	<Navbar />
	<main>
		<section class="pv6-ns">
			<Route path="/add" component={AddEditForm} />
			<Route path="/edit/:id" let:params><AddEditForm id="{params.id}" /></Route>
			<Route path="/"><Home /></Route>
		</section>
	</main>
</Router>

<style>
</style>