<script>
  import Tooltip from "../src/Tooltip.svelte";
  let referenceEle;
</script>

<main class="container">
  <div class="jumbotron">
    <h1 class="display-4">Tooltip</h1>
  </div>
  <button type="button" class="btn btn-secondary" bind:this={referenceEle}>
    Tooltip on top
  </button>
  <Tooltip triggerElement={referenceEle}>
    <em>Tooltip</em>
    <u>with</u>
    <b>HTML</b>
  </Tooltip>
</main>
