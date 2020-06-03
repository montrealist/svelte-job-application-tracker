<script>
	import { onMount } from 'svelte';
    import { Link, navigate } from 'svelte-routing';
	import '../tachyons.css';

	export let table;

	import ItemList from './ItemList.svelte';
	import StatusMessage from './StatusMessage.svelte';

	import dbInit from '../db';

	let items = [];

	let db;

	const message = {
		text: '',
		error: false
	};

	const setError = (msg) => {
		message.text = msg || '';
		message.error = msg || false;
	};

	const setMessage = (msg) => {
		message.text = msg || '';
		message.error = false;
	};

	onMount(async () => {

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

	const onDelete = async (id) => {
		db = await dbInit().catch(e => {
			console.warn(e);
		});
		try {
			if (id) {
				const idToDelete = parseInt(id, 10);
				await db[table].delete(idToDelete);
				items = [...items.filter(item => item.id !== idToDelete)];
				setMessage('Item deleted.');
			}
		} catch (e) {
			setError(`Something did not work when deleting! (${e.message})`);
			console.warn(e);
		}
	};

</script>

<div class="f3 list pl0 mt0 measure-wide-ns center">
	<div>
		<StatusMessage {message} />
	</div>
	{#if items.length}
		<ItemList items={items} onDelete={onDelete} />
	{:else}
		<p className="f4 list pl0 mt0 measure-wide-ns center">No items. <a href="/seed.html" on:click={e => navigate('/seed.html')}>Seed some list entries</a> or <Link to="/add">add an item</Link> manually.</p>
	{/if}

</div>


<style>
</style>