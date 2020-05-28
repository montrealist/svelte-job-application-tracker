<script>
	import { onMount } from 'svelte';

	import '../tachyons.css';
	import ItemList from './ItemList.svelte';

	import dbInit from '../db';

	let applications = [];
	const tableName = 'applications';

	onMount(async () => {
        let db;
		try {
            db = await dbInit().catch(e => {
                console.error(e);
            });
            // TODO: dexie insists to use the yield keyword instead of await but Svelte is throwing an error
		    applications = await db.table(tableName).toArray();
		} finally {
            // TODO: do we need to close every time?
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