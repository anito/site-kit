<script>

    export let segment = '';
    export let sidebar = false;
    export let stretch = false;
    export {className as class};

    let className = '';
    
</script>

<style>
    main {
		position: relative;
		margin: 0 auto;
		overflow-x: hidden;
        padding: var(--nav-h) 0 0 0;
    }
    :global(main main) {
        padding: 0 !important;
    }
    :global(.grid .grid) {
		background: var(--back);
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
    :global(.ismobile) .grid {
        height: -webkit-fill-available;
    }
    .grid {
        display: grid;
        grid-gap: var(--grid-gap);
        grid-template-rows: repeat(2, auto) repeat(2, 3rem);
        grid-template-columns: 1fr;
        grid-template-areas:
            "content"
            "content"
            "ad"
            "footer";
        height: var(--main-h);
    }
    .grid.sidebar {
        grid-template-columns: 1fr;
        grid-template-areas:
            "content"
            "side"
            "ad"
            "footer";
        grid-template-rows: auto 3rem var(--footer-section-h) var(--footer-section-h);
    }
    .grid.full-grid {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "content";
    }
    .grid :global(.content) {
        grid-area: content;
        overflow: auto;
    }
    .grid :global(.side) {
        grid-area: side;
        overflow: auto;
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
            grid-template-rows: auto var(--footer-section-h);
            grid-template-areas:
                "content content"
                "ad footer";
        }
        .grid.sidebar {
            grid-template-columns: minmax(auto, var(--sidebar-w)) 8fr;
            grid-template-rows: auto var(--footer-section-h);
            grid-template-areas:
                "side content"
                "ad footer";
        }
    }
    @media (min-width: 1200px) {

        .grid {
            grid-template-columns: var(--sidebar-w) 6fr;
            grid-template-areas:
                "content content"
                "ad footer";
        }
        .grid.sidebar {
            grid-template-areas:
                "side content"
                "ad footer";
        }
    }

</style>

<main>
    <div class:full-grid={!segment} class:sidebar class:stretch class="
        {segment}
        grid
        {className}"
    >
        <slot></slot>
    </div>
</main>