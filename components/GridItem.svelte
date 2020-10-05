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

    :global(.content) .inner {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    :global(.content) .outer {
        margin: 0;
        width: 100%;
    }

    :global(.home) .grid-item {
        background: var(--back-white);
    }

    .outer {
        margin: 0 1.25rem 0 1.25rem;
        width: 100%;
    }

    .inner {
        display: flex;
        justify-content: center;
        flex: 1;
    }

    .vcenter {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hcenter {
        display: flex;
        justify-content: center;
    }

    @media (min-width: 1024px) {

        .side :global(.grid-inner) {
            display: flex;
            flex: 1;
        }
        .side .outer.vcenter {
            justify-content: initial;
            margin: 0;
        }
        .inner {
            justify-content: initial;
        }
        .inner.hcenter {
            justify-content: center;
            
        }
    }

</style>

<div class="grid-item {name} {className}" class:is-item={name}>
    <div class="outer {className}" class:vcenter>
        <div class="inner" class:hcenter>
            <slot inner={inner}></slot>
        </div>
    </div>
</div>