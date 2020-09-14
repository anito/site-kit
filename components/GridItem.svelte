<script>
    export let name = '';
    $: inner = `grid-inner slot-${name}`;
</script>

<style>

    .grid-item {
        display: none;
        padding: 20px;
        background: #eee;
        position: relative;
        align-self: normal;
    }

    :global(.home) .grid-item {
        background: var(--back-white);
    }

    .is-item {
        display: block;
    }

</style>

<div class="grid-item {name}" class:is-item={name}>
    <slot inner={inner}></slot>
</div>