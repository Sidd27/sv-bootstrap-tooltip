<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Tooltip from 'sv-bootstrap-tooltip';

  let topEl = $state(null);
  let bottomEl = $state(null);
  let startEl = $state(null);
  let endEl = $state(null);
  let hoverEl = $state(null);
  let focusEl = $state(null);
  let clickEl = $state(null);
  let manualEl = $state(null);
  let manualOpen = $state(false);
  let htmlEl = $state(null);
</script>

<div class="container py-5">
  <div class="mb-5">
    <h1 class="mb-1">sv-bootstrap-tooltip</h1>
    <p class="text-muted">Bootstrap 5 tooltip component for Svelte 5</p>
  </div>

  <div class="row g-4">
    <div class="col-md-6">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Placement</h5>
          <p class="card-text text-muted">
            Control position with the <code>placement</code> prop.
          </p>
          <div class="d-flex gap-2 flex-wrap">
            <button class="btn btn-outline-secondary" bind:this={topEl}
              >Top</button
            >
            <button class="btn btn-outline-secondary" bind:this={bottomEl}
              >Bottom</button
            >
            <button class="btn btn-outline-secondary" bind:this={startEl}
              >Start</button
            >
            <button class="btn btn-outline-secondary" bind:this={endEl}
              >End</button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Triggers</h5>
          <p class="card-text text-muted">
            Set <code>trigger</code> to <code>hover</code>, <code>focus</code>,
            or <code>click</code>.
          </p>
          <div class="d-flex gap-2 flex-wrap">
            <button class="btn btn-outline-secondary" bind:this={hoverEl}
              >Hover</button
            >
            <button class="btn btn-outline-secondary" bind:this={focusEl}
              >Focus</button
            >
            <button class="btn btn-outline-secondary" bind:this={clickEl}
              >Click</button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Manual control</h5>
          <p class="card-text text-muted">
            Use <code>bind:open</code> with <code>trigger=""</code> to control the
            tooltip programmatically.
          </p>
          <div class="d-flex gap-2 align-items-center flex-wrap">
            <span bind:this={manualEl} class="badge bg-primary fs-6 px-3 py-2"
              >Target</span
            >
            <button
              class="btn btn-sm btn-outline-primary"
              onclick={() => (manualOpen = !manualOpen)}
            >
              {manualOpen ? 'Hide' : 'Show'} tooltip
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">HTML content</h5>
          <p class="card-text text-muted">
            Tooltip content is a Svelte snippet — any markup is supported.
          </p>
          <div class="d-inline-block">
            <button class="btn btn-outline-secondary" bind:this={htmlEl}
              >Hover me</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Placement tooltips -->
{#if topEl}
  <Tooltip triggerElement={topEl} placement="top"><em>Top</em> tooltip</Tooltip>
{/if}
{#if bottomEl}
  <Tooltip triggerElement={bottomEl} placement="bottom">Bottom tooltip</Tooltip>
{/if}
{#if startEl}
  <Tooltip triggerElement={startEl} placement="left">Start tooltip</Tooltip>
{/if}
{#if endEl}
  <Tooltip triggerElement={endEl} placement="right">End tooltip</Tooltip>
{/if}

<!-- Trigger tooltips -->
{#if hoverEl}
  <Tooltip triggerElement={hoverEl} trigger="hover">Hover trigger</Tooltip>
{/if}
{#if focusEl}
  <Tooltip triggerElement={focusEl} trigger="focus">Focus trigger</Tooltip>
{/if}
{#if clickEl}
  <Tooltip triggerElement={clickEl} trigger="click">Click to toggle</Tooltip>
{/if}

<!-- HTML content tooltip -->
{#if htmlEl}
  <Tooltip triggerElement={htmlEl}>
    <em>Rich</em> <u>HTML</u> <strong>content</strong>
  </Tooltip>
{/if}

<!-- Manual tooltip -->
{#if manualEl}
  <Tooltip triggerElement={manualEl} trigger="" bind:open={manualOpen}>
    Controlled programmatically
  </Tooltip>
{/if}
