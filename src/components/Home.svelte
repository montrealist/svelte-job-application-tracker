<script>
	import { onMount } from 'svelte';
	export let table;
	import '../tachyons.css';
	import ItemList from './ItemList.svelte';

	import dbInit from '../db';

	let items = [];

	onMount(async () => {
        let db;
		try {
            db = await dbInit().catch(e => {
                console.error(e);
            });
            // TODO: dexie insists to use the yield keyword instead of await but Svelte is throwing an error
		    items = await db.table(table).toArray();
		} finally {
            // TODO: do we need to close every time?
		    db.close();
		}
	});
</script>

<div class="f3 list pl0 mt0 measure-wide-ns center">
    <ItemList {items} />
</div>


<style>
</style>