<script>
	export let name;
	export let applications;
	import './tachyons.css';
</script>

<main>
	<section class="pv6-ns">
		<div class="f3 list pl0 mt0 measure-wide-ns center">
			{#if applications.length === 0}
				Loading...
			{:else}
				{#each applications as app}
					<li class="flex items-center lh-title pa3 ph0-l bb b--black-10">
                        <div class="pl3 flex-auto">
                            <span class="f5 db black-70">{app.company}</span>
                            <span class="f4 db black-70">{app.position}</span>
                            <span class="f5 db black-70">{app.notes}</span>
                        </div>
                        <div class="flex flex-column">
                            <a class="w4 f5 tc link dim br3 ba bw1 ph3 pv2 ml2 mb2 dib navy" href="!#">edit</a>
                            <button class="w4 f5 link dim br3 ba bw1 ph3 pv2 ml2 mb2 dib dark-pink">delete</button>
                        </div>
                    </li>
				{/each}
			{/if}
			<!-- <ItemList onDelete={onDelete} items={currentItems} /> -->
		</div>
	</section>
</main>

<style>
</style>