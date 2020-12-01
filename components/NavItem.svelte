<script>
  import { getContext } from "svelte";

  export let segment = null;
  export let link = null;
  export let external = null;
  export let blank = false;
  export let title = null;

  const current = getContext("nav");

  let href = link || segment;

  $: active = $current === segment;
</script>

{#if external}
  <li>
    <a target={blank ? '_blank' : ''} href={external} {title}><slot /></a>
  </li>
{:else}
  <li class:active>
    <a rel="prefetch" {href} {title}><slot /></a>
  </li>
{/if}
