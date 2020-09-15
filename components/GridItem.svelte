<script>
    export let name = '';
    $: inner = `grid-inner slot-${name}`;
    $: overflow = name === 'content';
</script>

<style>

    .grid-item {
        display: block;
        padding: 20px;
        background: #eee;
        position: relative;
        align-self: normal;
    }

    :global(.home) .grid-item {
        background: var(--back-white);
    }
    .overflow {
        overflow: auto;
    }

</style>

<div class="grid-item {name}" class:is-item={name} class:overflow>
    <slot inner={inner}></slot>
</div>