<script>
  import { onMount } from "svelte";
  import Dropzone from "dropzone";

  export let dropzoneEvents = {};
  export let options = { previewTemplate: "<div/>" };
  export let style = "";
  export let dropzoneClass = "dropzone";
  export let hoveringClass = "dropzone-hovering";
  export let id = "dropId";
  export let autoDiscover = false;

  onMount(() => {
    const dropzoneElement = document.getElementById(id);
    if (!options.previewTemplate) {
      options.previewTemplate = "<div/>";
    }
    if (!options.dictDefaultMessage) {
      options.dictDefaultMessage = "";
    }

    let svDropzone = new Dropzone(`#${id}`, {
      ...options,
    });
    if (autoDiscover !== true) {
      Dropzone.autoDiscover = false;
    }

    svDropzone.on("addedfile", (f) => {
      dropzoneElement.classList.remove(hoveringClass);
    });
    svDropzone.on("dragenter", (e) => {
      dropzoneElement.classList.toggle(hoveringClass);
    });
    svDropzone.on("dragleave", (e) => {
      dropzoneElement.classList.toggle(hoveringClass);
    });
    Object.entries(dropzoneEvents).map(([eventKey, eventFunc]) =>
      svDropzone.on(eventKey, eventFunc)
    );

    if (options.clickable !== false) {
      dropzoneElement.style.cursor = "pointer";
    }
    svDropzone.on("error", (file, errorMessage) => {
      console.log("Error:", errorMessage);
    });
  });
</script>

<style>
  .dropzone {
    position: relative;
    z-index: 1;
    height: 200px;
    border-radius: 5px;
    border: 2px dashed var(--prime);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease-out;
  }

  .dropzone.dropzone-hovering {
    border: 2px solid var(--prime);
    background: rgba(255, 62, 0, 0.05);
  }
</style>

<div class={dropzoneClass} {style}>
  <slot {id} />
  <input hidden name="sites_data" type="file" />
</div>
