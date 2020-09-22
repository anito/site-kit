<script>

    export let segment;
    export let sidebar = false;
    export let stretch = false;
    export {className as class};

    let className = '';
</script>

<style>
    main {
		position: relative;
		margin: 0 auto;
		/* padding: var(--nav-h) var(--side-nav) 0 var(--side-nav); */
		padding: var(--nav-h) 0 0 0;
		overflow-x: hidden;
    }

    :global(.grid-item.has-background.content) {
        background: var(--prime)
    }
    :global(.grid-item.has-background.side) {
        background: var(--second)
    }
    :global(.grid-item.has-background.footer) {
        background: var(--flash)
    }
    :global(.grid-item.has-background.ad) {
        background: var(--alt)
    }
    .grid {
        display: grid;
        grid-gap: 5px;
        grid-template-rows: 4rem auto 3rem 3rem;
        grid-template-columns: 1fr;
        grid-template-areas:
            "content"
            "content"
            "ad"
            "footer";
        min-height: var(--main-h);
    }
    .grid.sidebar {
        grid-template-columns: 1fr;
        grid-template-areas:
            "side"
            "content"
            "ad"
            "footer";
    }
    .grid.full-grid {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "content"
    }
    .grid :global(.content) {
        grid-area: content
    }
    .grid :global(.side) {
        grid-area: side
    }
    .grid :global(.footer) {
        grid-area: footer
    }
    .grid :global(.ad) {
        grid-area: ad
    }

    @media (min-width: 900px) {

        .grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto 3rem;
            grid-template-areas:
                "content content"
                "ad footer"
        }
        .grid.sidebar {
            grid-template-columns: var(--sidebar-w) 6fr;
            grid-template-areas:
                "side content"
                "ad footer"
        }
    }
    @media (min-width: 1200px) {

        .grid {
            grid-template-columns: var(--sidebar-w) 6fr;
            grid-template-areas:
                "content content"
                "ad footer "
        }
        .grid.sidebar {
            grid-template-areas:
                "side content "
                "ad footer "
        }
    }

</style>

<main>
    <div class:full-grid={!segment} class:sidebar class:stretch class="
        {segment}
        grid
        {className}"
        style="min-height: var(-main-h);"
    >
        <slot></slot>
    </div>
</main>