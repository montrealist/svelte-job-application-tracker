<script>

    export let message = {
        text: '',
        error: false
    };

    let hiddenClass = '';

    $: if (!message.text) {
        hiddenClass = 'dn';
    } else {
        hiddenClass = '';
    }

    let messageClass = '';

    $: if (message.error) {
        messageClass = 'bg-washed-red';
    } else {
        messageClass = 'bg-lightest-blue';
    }

</script>

<div class="{hiddenClass}">
    <div class="flex f4 mv3 items-center justify-center pa2 navy {messageClass}">
        {#if !message.error}
            <svg class="w1" data-icon="info" viewBox="0 0 32 32">
                <title>info icon</title>
                <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
            </svg>
        {/if}
        <span class="lh-title ml3">{message.text}</span>
    </div>
</div>