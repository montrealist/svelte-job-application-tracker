<script>
  import { Router, Link } from "svelte-routing";

  export let to = "";
  export let classes = "";

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    return { class: classes };
  }
</script>

<Router>
  <Link to="{to}" getProps="{getProps}">
  <slot />
  </Link>
</Router>