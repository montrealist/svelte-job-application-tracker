<script>
	import { onMount } from 'svelte';
	export let id = null;
	export let table;

	import dbInit from '../db';

	const originalItem = {
		id: null,
		company: '',
		position: '',
		notes: ''
	};

	let item = Object.assign({}, originalItem);
	let itemRef;

	let db;

	const updateItemRef = (newItem) => itemRef = Object.assign({}, newItem);
	const resetItem = () => item = Object.assign({}, originalItem);

	onMount(async () => {

		if (id) {
			try {
				const idToGet = parseInt(id, 10);

				db = await dbInit().catch(e => {
					console.warn(e);
				});

				item = await db[table].get(idToGet); // always pass an integer into get()!
				updateItemRef(item);

			} finally {
				db.close();
			}
		}
	});

	const handleSubmit = async (e) => {

		e.preventDefault();

		if (item.company.trim() === '' || item.position.trim() === '') {
			return;
		}

		db = await dbInit().catch(e => {
			console.warn(e);
		});

		try {
			if (id) {
				const idToUpdate = parseInt(id, 10);
				const res = await db[table].update(idToUpdate, item);
				if (res === 1) {
					updateItemRef(item);
				} else {
					// TODO: if res === 0 - show error in UI
				}
			} else {
				delete item.id;
				const insertedId = await db[table].add(item);
				resetItem();
				updateItemRef(originalItem);
			}
		} catch (e) {
			// TODO: show error in UI
			console.warn(e);
		}
	};

	const handleCancel = (e) => {
		e.preventDefault();
		// if editing - set item back to itemRef 
		if (id) {
			item = Object.assign({}, itemRef);
		} else {
			// if new item - reset all fields
			item = Object.assign({}, originalItem);
		}
	}

</script>

<div class="f3 list pl0 mt0 measure-wide-ns center">
	<form class="pa4 black-80" on:submit={handleSubmit} on:reset={handleCancel}>
		<div class="measure">
			<label htmlFor="company" class="f6 b db mb2">Company</label>
			<input id="company" bind:value={item.company} class="input-reset ba b--black-20 pa2 mb2 db w-100"
				type="text" aria-describedby="name-desc" />
		</div>
		<div class="measure">
			<label htmlFor="position" class="f6 b db mb2">Position</label>
			<input id="position" bind:value={item.position} class="input-reset ba b--black-20 pa2 mb2 db w-100"
				type="text" aria-describedby="name-desc" />
		</div>
		<div class="measure">
			<label htmlFor="notes" class="f6 b db mb2">Notes <span class="normal black-60">(optional)</span></label>
			<textarea id="notes" bind:value={item.notes} name="notes"
				class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
				aria-describedby="comment-desc"></textarea>
			<small id="name-desc" class="f6 black-60 db mb2">Any relevant notes about the company or the
				process.</small>
		</div>
		<div class="measure">
			<!-- <StatusMessage {...message} /> -->
		</div>
		<div class="measure tr">
			<button class="f4 link dim br3 ba bw1 ph3 pv2 ml2 mb2 dib dark-green" type="submit">Submit</button>
			<button class="f4 link dim br3 ba bw1 ph3 pv2 ml2 mb2 dib mid-gray" type="reset">{id !== null ? "Cancel" :
				"Clear"}</button>
		</div>

	</form>
</div>

<style>
</style>