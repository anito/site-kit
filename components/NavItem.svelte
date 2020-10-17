<script>
	import { getContext } from 'svelte';

	export let segment = null;
	export let external = null;
	export let blank = false;
	export let title = null;
	export let slug = '';

	const current = getContext('nav');

	$: href = slug ? `${segment}/${slug}` : segment;
</script>

{#if external}
	<li><a target={blank ? '_blank' : ''} href={external} {title}><slot></slot></a></li>
{:else}
	<li class:active="{$current === segment}"><a rel="prefetch" {href} {title}><slot></slot></a></li>
{/if}
