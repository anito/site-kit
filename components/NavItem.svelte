<script>
  import { getContext } from "svelte";

  export let segment = null;
  export let external = null;
  export let blank = false;
  export let title = null;
  export let slug = "";

  const current = getContext("nav");

  $: href = segment && slug ? `${segment}/${slug}` : segment || slug;
</script>

{#if external}
  <li>
    <a target={blank ? '_blank' : ''} href={external} {title}><slot /></a>
  </li>
{:else}
  <li class:active={$current === segment}>
    <a rel="prefetch" {href} {title}><slot /></a>
  </li>
{/if}
