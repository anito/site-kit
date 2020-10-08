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
        display: flex;
        background: var(--back-grid-item);
        position: relative;
        align-self: normal;
    }

    :global(.home) .grid-item {
        background: var(--back-white);
    }

    :global(.grid-inner) {
        width: 100%;
    }
    .inner {
        display: flex;
        width: 100%;
    }

    .vcenter {
        display: flex;
        align-items: center;
    }

    :global(.hcenter .grid-inner) {
        display: flex;
        justify-content: center;
    }

    @media (min-width: 1024px) {

        .side :global(.grid-inner) {
            display: flex;
            flex: 1;
        }
        .side .inner.vcenter {
            justify-content: initial;
            margin: 0;
        }
        .inner.vcenter {
            justify-content: center;
        }
        .inner.hcenter {
            justify-content: center;
        }
    }

</style>

<div class="grid-item {name} {className}" class:is-item={name}>
    <div class="inner {className}" class:vcenter class:hcenter>
            <slot inner={inner}></slot>
    </div>
</div>