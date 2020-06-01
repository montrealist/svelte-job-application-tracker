<script>
    import { onMount } from 'svelte';

    export let message = {
        msg: '',
        error: false
    };

    onMount(async () => {
        console.log('message', message);
    });

    let hiddenClass = '';
    $: if (message.msg === '') {
        hiddenClass = 'dn';
    }

</script>

<div class="{hiddenClass}">
    <div class="flex f4 mv3 items-center justify-center pa2 navy bg-washed-red">
        <span class="lh-title ml3">{message.msg}</span>
    </div>
</div>