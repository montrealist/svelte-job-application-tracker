<script>
    import {Link} from 'svelte-routing';
    import NavLink from "./NavLink.svelte";
</script>


<header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
    <nav class="f6 fw6 ttu tracked db dt-l w-100 border-box">
        <NavLink classes="link dim white dib mr3" to="/">List</NavLink>
        <NavLink classes="link dim white dib mr3" to="/add">Add Item</NavLink>
        <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <!--TODO: maybe make link mid-gray instead of white if there are entries -->
            <NavLink classes="link tr-l dim dib mr3 white" to="/seed.html">Seed some list entries</NavLink>
        </div>
    </nav>
</header>