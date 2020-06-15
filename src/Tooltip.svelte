<script>
  import { onMount, onDestroy, tick } from "svelte";
  import { createPopper } from "@popperjs/core";

  const noop = () => {};

  export let open = false;
  export let triggerElement;
  export let flip = true;
  export let placement = "top";
  export let trigger = "hover|focus";
  export let offset = [0, 4];
  export let onOpened = noop;
  export let onClosed = noop;

  let _triggerEvent;
  let _tooltipElement;
  let _arrowElement;
  let _placementClass;
  let _popperInstance;
  let _isHover;
  let _isFocus;
  let _isClick;

  let _eventsArray = [];

  const TRIGGER_HOVER = "hover";
  const TRIGGER_FOCUS = "focus";
  const TRIGGER_CLICK = "click";

  $: {
    if (open) {
      onTooltipOpened();
    } else {
      onTooltipClosed();
    }
  }

  function _setEvents(event) {
    _eventsArray.push(event);
  }

  function attachEvent(target, ...args) {
    target.addEventListener(...args);
    return {
      remove: () => target.removeEventListener(...args)
    };
  }

  function _setTriggersTypes() {
    const tiggerArray = trigger.split("|");
    _isHover = tiggerArray.includes(TRIGGER_HOVER);
    _isFocus = tiggerArray.includes(TRIGGER_FOCUS);
    _isClick = tiggerArray.includes(TRIGGER_CLICK);
  }

  async function _createPopperInstance() {
    await tick();
    _popperInstance = createPopper(triggerElement, _tooltipElement, {
      placement,
      modifiers: [
        {
          name: "arrow",
          options: {
            element: _arrowElement
          }
        },
        {
          name: "flip",
          enabled: flip
        },
        {
          name: "offset",
          options: {
            offset
          }
        },
        {
          name: "preventOverflow",
          options: {
            altBoundary: true
          }
        }
      ]
    });
  }

  function onTooltipOpened() {
    _createPopperInstance();
    onOpened();
  }

  function _hoverEvent() {
    const mouseEnterInstance = attachEvent(
      triggerElement,
      "mouseenter",
      event => {
        open = true;
      }
    );
    const mouseLeaveInstance = attachEvent(
      triggerElement,
      "mouseleave",
      event => {
        open = false;
      }
    );
    _setEvents(mouseEnterInstance);
    _setEvents(mouseLeaveInstance);
  }

  function _focusEvent() {
    const focusInstance = attachEvent(triggerElement, "focus", event => {
      open = true;
    });
    const blurInstance = attachEvent(triggerElement, "blur", event => {
      open = false;
    });
    _setEvents(focusInstance);
    _setEvents(blurInstance);
  }

  function _clickEvent() {
    const clickEventInstance = attachEvent(triggerElement, "click", event => {
      open = !open;
    });
    _setEvents(clickEventInstance);
  }

  function _setTriggers() {
    if (_isHover) {
      _hoverEvent();
    }
    if (_isClick) {
      _clickEvent();
    }
    if (_isFocus) {
      _focusEvent();
    }
  }

  function _destroyPopperInstance() {
    if (_popperInstance) {
      _popperInstance.destroy();
      _popperInstance = null;
    }
  }

  function _removeTiggers() {
    _eventsArray.forEach(event => event.remove());
  }

  function onTooltipClosed() {
    _destroyPopperInstance();
    onClosed();
  }

  onMount(async () => {
    _setTriggersTypes();
    await tick();
    _setTriggers();
  });

  onDestroy(() => {
    _removeTiggers();
    _destroyPopperInstance();
  });
</script>

{#if open}
  <div
    class="tooltip fade bs-tooltip-{placement} show"
    role="tooltip"
    bind:this={_tooltipElement}>
    <div class="arrow" bind:this={_arrowElement} />
    <div class="tooltip-inner">
      <slot />
    </div>
  </div>
{/if}
