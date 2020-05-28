<script>
	export let name;
	export let applications;
	import './tachyons.css';
	import ItemList from './components/ItemList.svelte';
</script>

<main>
	<section class="pv6-ns">
		<div class="f3 list pl0 mt0 measure-wide-ns center">
			<ItemList items={applications} />
		</div>
	</section>
</main>

<style>
</style>