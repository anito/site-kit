<script>

    export let segment;
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
    .wrapper {
        display: grid;
        grid-gap: 5px;
        grid-template-rows: 10fr 1fr 1fr;
        grid-template-columns: 1fr;
        grid-template-areas:
            "content"
            "footer"
            "ad";
        height: calc(100vh - var(--nav-h));
    }
    .wrapper.full-grid {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "content"
    }

    .wrapper :global(.content) {
        grid-area: content
    }
    .wrapper :global(.side) {
        grid-area: side
    }
    .wrapper :global(.footer) {
        grid-area: footer
    }
    .wrapper :global(.ad) {
        grid-area: ad
    }

    @media (min-width: 900px) {

        .wrapper {
            grid-template-columns: var(--sidebar-w) 3fr;
            grid-template-rows: auto 60px;
            grid-template-areas:
                "content content"
                "ad footer"
        }
    }
    @media (min-width: 1200px) {

        .wrapper {
            grid-template-columns: 1fr 4fr 1fr 1fr;

            grid-template-areas:
                "content content content content"
                "ad footer footer footer"
        }
    }

</style>

<main>
    <div class:full-grid={!segment} class="wrapper">
        <slot></slot>
    </div>
</main>