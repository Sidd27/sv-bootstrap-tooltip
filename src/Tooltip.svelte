<script>
  import { createPopper } from '@popperjs/core';

  let {
    open = $bindable(false),
    triggerElement = null,
    flip = true,
    placement = 'top',
    trigger = 'hover|focus',
    offset = [0, 4],
    onOpened = () => {},
    onClosed = () => {},
    children,
  } = $props();

  let tooltipEl = $state(null);
  let arrowEl = $state(null);

  function attachEvent(target, ...args) {
    target.addEventListener(...args);
    return { remove: () => target.removeEventListener(...args) };
  }

  $effect(() => {
    if (!open || !tooltipEl) return;

    const instance = createPopper(triggerElement, tooltipEl, {
      placement,
      modifiers: [
        { name: 'arrow', options: { element: arrowEl } },
        { name: 'flip', enabled: flip },
        { name: 'offset', options: { offset } },
        { name: 'preventOverflow', options: { altBoundary: true } },
      ],
    });
    onOpened();

    return () => {
      instance.destroy();
      onClosed();
    };
  });

  $effect(() => {
    if (!triggerElement) return;

    const triggers = trigger.split('|');
    const events = [];

    if (triggers.includes('hover')) {
      events.push(
        attachEvent(triggerElement, 'mouseenter', () => {
          open = true;
        })
      );
      events.push(
        attachEvent(triggerElement, 'mouseleave', () => {
          open = false;
        })
      );
    }
    if (triggers.includes('focus')) {
      events.push(
        attachEvent(triggerElement, 'focus', () => {
          open = true;
        })
      );
      events.push(
        attachEvent(triggerElement, 'blur', () => {
          open = false;
        })
      );
    }
    if (triggers.includes('click')) {
      events.push(
        attachEvent(triggerElement, 'click', () => {
          open = !open;
        })
      );
    }

    return () => events.forEach((e) => e.remove());
  });
</script>

{#if open}
  <div
    class="tooltip bs-tooltip-{placement} fade show"
    role="tooltip"
    bind:this={tooltipEl}
  >
    <div class="tooltip-arrow" bind:this={arrowEl}></div>
    <div class="tooltip-inner">
      {@render children?.()}
    </div>
  </div>
{/if}
