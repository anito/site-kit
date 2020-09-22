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

    :global(.content) .outer {
        margin: 0;
    }

    :global(.home) .grid-item {
        background: var(--back-white);
    }

    .outer {
        display: flex;
        margin: 0 1.25rem 0 1.25rem;
        justify-content: center;
    }

    .inner {
        width: 100%;
    }

    .vcenter {
        display: flex !important;
        flex-direction: column;
        justify-content: center;
    }

    @media (min-width: 1024px) {
        .outer {
            justify-content: initial;
        }
        .outer.hcenter {
            justify-content: center;
            
        }
    }

</style>

<div class="grid-item {name}" class:is-item={name} class:vcenter>
    <div class="outer {className}" class:hcenter>
        <div class="inner">
            <slot inner={inner}></slot>
        </div>
    </div>
</div>