<script>
	import { onMount } from 'svelte';

	export let name;
	import './tachyons.css';
	import ItemList from './components/ItemList.svelte';

	import db from './db';

	let applications = [];
	const tableName = 'applications';

	onMount(async () => {
		try {
			// TODO: dexie insists to use the yield keyword instead of await but Svelte is throwing an error
		    applications = await db.table(tableName).toArray();
		} finally {
		    db.close();
		}
	});
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