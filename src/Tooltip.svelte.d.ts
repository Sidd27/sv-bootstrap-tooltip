import type { Component, Snippet } from 'svelte';

export interface TooltipProps {
  /** Controls tooltip visibility. Supports bind:open. */
  open?: boolean;
  /** The DOM element that the tooltip is anchored to. */
  triggerElement?: HTMLElement | null;
  /** Allow Popper to flip placement when there is not enough space. Default: true. */
  flip?: boolean;
  /** Preferred placement relative to the trigger element. Default: 'top'. */
  placement?:
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end';
  /** Pipe-separated trigger types: 'hover', 'focus', 'click'. Default: 'hover|focus'. */
  trigger?: string;
  /** [skidding, distance] offset from the trigger. Default: [0, 4]. */
  offset?: [number, number];
  /** Called when the tooltip opens. */
  onOpened?: () => void;
  /** Called when the tooltip closes. */
  onClosed?: () => void;
  children?: Snippet;
}

declare const Tooltip: Component<TooltipProps, {}, 'open'>;
export default Tooltip;
