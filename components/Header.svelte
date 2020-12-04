<script>
  import { onMount } from "svelte";

  let container;
  let match;
  let className = "";

  const regex = /[1-6]/g;
  const DEFAULT_LEVEL = "1";
  export let h = DEFAULT_LEVEL;
  export { className as class };
  export let mdc = false;

  onMount(() => {
    h = h.toString();
    h = (match = h.match(regex)) && match.length && match[0];

    if (!h) h = LEVEL;

    const header = document.createElement(`h${h}`);
    mdc && (className = className.concat(` mdc-typography--headline${h}`));
    className
      .trim()
      .split(/\s+/g)
      .map((cls) => cls && header.classList.add(cls));
    header.append(container.childNodes[0]);
    container.prepend(header);
  });
</script>

<style>
  :global([class*="mdc-typography--headline"]) {
    color: inherit;
  }
</style>

<div bind:this={container} class="svelte-header">
  <slot />
</div>
