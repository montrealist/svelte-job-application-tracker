<script>
	import { Router, Route } from 'svelte-routing';

	import Home from './components/Home.svelte';
	import AddEditForm from './components/AddEditForm.svelte';
	import Navbar from './components/Navbar.svelte';

</script>

<Router>
	<Navbar />
	<Route path="/edit" component={AddEditForm} />
	<Route path="/"><Home /></Route>
</Router>

<style>
</style>