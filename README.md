# sv-bootstrap-tooltip (Svelte Bootstrap Tooltip)
Svelte Tooltip Component for Bootstrap (Bootstrap’s dropdown plugin in svlete applications), can be used with sapper or standalone with svelte.Just like Vainilla bootstrap this plugin too is built on a third party library, [Popper.js](https://popper.js.org/), which provides dynamic positioning and viewport detection. But Unlike Vainilla bootstrap we are using PopperJs V2 instead of V1

## How to install
1. ```npm install --save-dev sv-bootstrap-tooltip @rollup/plugin-replace```
2. Add below code in your rollup config

```js
import replace from '@rollup/plugin-replace';
..
..
..
plugins: [
  ..., // Other Plugins
  ..., // Other Plugins
replace({
	  'process.env.NODE_ENV': JSON.stringify('production'),
	   include: '**/node_modules/**',
    })
]
```

### Requirements
Bootstrap CSS needs to be present globally in project

## Usage

### Simple

```html
<script>
  import Tooltip from "sv-bootstrap-tooltip";
  let referenceEle;
</script>

<button type="button" class="btn btn-secondary" bind:this={referenceEle}>
Tooltip on top
</button>
<Tooltip triggerElement={referenceEle}>Tooltip</Tooltip>

```

### Flip

This option should tell the `Tooltip` to filp side if there is no space on the prefered side

### Example

```html
<script>
    import Tooltip from "sv-bootstrap-tooltip";
    let referenceEle;
</script>

  <button type="button" class="btn btn-secondary" bind:this={referenceEle}>
    Tooltip on top
  </button>
 <Tooltip flip="false" triggerElement={referenceEle}>
 </Tooltip>
```