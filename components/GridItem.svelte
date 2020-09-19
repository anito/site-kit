<script>
    export let name = '';
    export let hcenter = false;
    export let vcenter = false;
    export {className as class};

    let className = '';
    $: inner = `grid-inner slot-${name}`;
</script>

<style>

    .grid-item {
        display: block;
        background: #eee;
        position: relative;
        align-self: normal;
    }

    :global(.home) .grid-item {
        background: var(--back-white);
    }

    .hcenter {
        display: flex !important;
        justify-content: center;
        
    }

    .vcenter {
        display: flex !important;
        flex-direction: column;
        justify-content: center;
    }

</style>

<div class="grid-item {name}" class:is-item={name} class:vcenter>
    <div class="{className}" class:hcenter>
        <slot inner={inner}></slot>
    </div>
</div>