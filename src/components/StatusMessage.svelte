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
        <span class="lh-title ml3">{message.text}</span>
    </div>
</div>