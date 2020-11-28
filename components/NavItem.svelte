<script>
  import { getContext, onMount } from "svelte";

  export let segment = null;
  export let link = null;
  export let external = null;
  export let blank = false;
  export let title = null;

  const current = getContext("nav");

  let anchor;
  let href;

  onMount(() => {
    anchor.addEventListener("mouseover", createRef);

    return () => anchor.removeEventListener("mouseover", createRef);
  });

  function createRef() {
    href = link || (active && window.location.href) || segment;
  }

  $: active = $current === segment;
</script>

{#if external}
  <li>
    <a
      bind:this={anchor}
      target={blank ? '_blank' : ''}
      href={external}
      {title}><slot /></a>
  </li>
{:else}
  <li class:active>
    <a bind:this={anchor} rel="prefetch" {href} {title}><slot /></a>
  </li>
{/if}
