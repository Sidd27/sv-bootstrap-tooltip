# sv-bootstrap-tooltip

Bootstrap 5 tooltip component for Svelte 5.

### Demo

[Live demo](https://sidd27.github.io/sv-bootstrap-tooltip/)

## Installation

```bash
npm install sv-bootstrap-tooltip
```

### Requirements

- Node >= 24
- Svelte 5
- Bootstrap 5 CSS included globally in your project

## Usage

### Basic

```svelte
<script>
  import Tooltip from 'sv-bootstrap-tooltip';
  let btnEl = $state(null);
</script>

<button bind:this={btnEl}>Hover me</button>

{#if btnEl}
  <Tooltip triggerElement={btnEl}>Tooltip text</Tooltip>
{/if}
```

### HTML content

Any markup works inside the tooltip:

```svelte
{#if btnEl}
  <Tooltip triggerElement={btnEl}>
    <em>Rich</em> <strong>content</strong>
  </Tooltip>
{/if}
```

### Placement

```svelte
<Tooltip triggerElement={btnEl} placement="bottom">Bottom</Tooltip>
<Tooltip triggerElement={btnEl} placement="right">Right</Tooltip>
<Tooltip triggerElement={btnEl} placement="left">Left</Tooltip>
```

### Trigger

Control how the tooltip opens. Separate multiple triggers with `|`:

```svelte
<Tooltip triggerElement={btnEl} trigger="click">Click to toggle</Tooltip>
<Tooltip triggerElement={btnEl} trigger="hover|focus">Hover or focus</Tooltip>
```

### Manual control

Pass an empty `trigger` and use `bind:open` to control programmatically:

```svelte
<script>
  let open = $state(false);
  let el = $state(null);
</script>

<span bind:this={el}>Target</span>
<button onclick={() => (open = !open)}>Toggle</button>

{#if el}
  <Tooltip triggerElement={el} trigger="" bind:open>Manual tooltip</Tooltip>
{/if}
```

## Props

| Name             | Type                  | Default          | Description                                                                  |
| ---------------- | --------------------- | ---------------- | ---------------------------------------------------------------------------- |
| `open`           | `boolean`             | `false`          | Controls tooltip visibility. Supports `bind:open`.                           |
| `triggerElement` | `HTMLElement \| null` | `null`           | The DOM element the tooltip is anchored to.                                  |
| `placement`      | `string`              | `'top'`          | Popper placement: `top`, `bottom`, `left`, `right`, `auto`, …                |
| `trigger`        | `string`              | `'hover\|focus'` | Pipe-separated triggers: `hover`, `focus`, `click`. Empty string for manual. |
| `flip`           | `boolean`             | `true`           | Allow Popper to flip placement when there is not enough space.               |
| `offset`         | `[number, number]`    | `[0, 4]`         | `[skidding, distance]` offset from the trigger element.                      |
| `onOpened`       | `function`            | `() => {}`       | Callback fired when the tooltip opens.                                       |
| `onClosed`       | `function`            | `() => {}`       | Callback fired when the tooltip closes.                                      |

### License

[MIT](https://github.com/Sidd27/sv-bootstrap-tooltip/blob/master/LICENSE)
