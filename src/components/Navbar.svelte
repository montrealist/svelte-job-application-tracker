<script>
    import { Link, navigate } from 'svelte-routing';
    import NavLink from "./NavLink.svelte";

    const handleNavigate = () => {
        navigate('/seed.html');
    };

</script>


<header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
    <nav class="f6 fw6 ttu tracked db dt-l w-100 border-box">
        <NavLink classes="link dim white dib mr3" to="/">List</NavLink>
        <NavLink classes="link dim white dib mr3" to="/add">Add Item</NavLink>
        <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <!--TODO: maybe make link mid-gray instead of white if there are entries -->
            <a href="/seed.html" class="link tr-l dim dib mr3 white" onClick={handleNavigate}>Seed some list entries</a>
        </div>
    </nav>
</header>