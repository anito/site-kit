<script>
	export let src;
	export let alt;

	let sy = 0;
</script>

<svelte:window bind:scrollY={sy}/>

<style>
	.parallax {
		position: absolute;
		top: 7.5rem;
		right: 0rem;
		width: 31.25rem;
		will-change: transform;
		display: none;
	}

	@media (min-width: 800px) {
		.parallax {
			display: block;
		}
	}

	@media (min-width: 1200px) {
		.parallax {
			right: calc(50vw - 37.5rem);
		}
	}
</style>

<img {alt} {src} class="parallax" style="transform: translate(0, {sy * .2}px)">