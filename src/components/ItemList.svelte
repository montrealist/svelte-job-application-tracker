<script>
    export let items;
    export let onDelete;

    import {Link} from 'svelte-routing';
    import NavLink from "./NavLink.svelte";

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete(e.target.dataset.id);
    };
</script>

{#if items && items.length === 0}
Loading...<!-- TODO: align this messaging the react app  -->
{:else if items}
    {#each items as item}
        <li class="flex items-center lh-title pa3 ph0-l bb b--black-10">
            <div class="pl3 flex-auto">
                <span class="f5 db black-70">{item.company}</span>
                <span class="f4 db black-70">{item.position}</span>
                <span class="f5 db black-70">{item.notes}</span>
            </div>
            <div class="flex flex-column">
                <NavLink to={"/edit/" + item.id} classes="w4 f5 tc link dim br3 ba bw1 ph3 pv2 ml2 mb2 dib navy">edit</NavLink>
                <button class="w4 f5 link dim br3 ba bw1 ph3 pv2 ml2 mb2 dib dark-pink" data-id={item.id} on:click={handleDelete}>delete</button>
            </div>
        </li>
    {/each}
{/if}