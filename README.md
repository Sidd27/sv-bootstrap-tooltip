# sv-bootstrap-tooltip (Svelte Bootstrap Tooltip)
Svelte Tooltip Component for Bootstrap (Bootstrap’s tooltip plugin in svlete applications), can be used with sapper or standalone with svelte.Just like Vainilla bootstrap this plugin too is built on a third party library, [Popper.js](https://popper.js.org/), which provides dynamic positioning and viewport detection. But Unlike Vainilla bootstrap we are using PopperJs V2 instead of V1

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

#### Example

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

### HTML inside Tooltip

You can pass the any html between opening and closing tag of `Tooltip` Element

#### Example

```html
<script>
  import Tooltip from "sv-bootstrap-tooltip";
  let referenceEle;
</script>

<button type="button" class="btn btn-secondary" bind:this={referenceEle}>
Tooltip on top
</button>
<Tooltip triggerElement={referenceEle}>
<em>Tooltip</em>
<u>with</u>
<b>HTML</b>
</Tooltip>
```

### Placement

This option is used to define the placement of tooltip on an `triggerElement`. By default the placement is `top`

#### Example

```html
<script>
  import Tooltip from "sv-bootstrap-tooltip";
  let referenceEle;
</script>

<button type="button" class="btn btn-secondary" bind:this={referenceEle}>
    Tooltip on top
  </button>
<Tooltip triggerElement={referenceEle} placement="left">Tooltip</Tooltip>
```

#### Complete Placement Options

Options are similar to Vanilla Bootstrap

|Placement|Description|
|--- |--- |
|auto|Placements will choose the side with most space and arrow will be in the center of trigger element|
|top|Placements will be on top and arrow will be in the center of trigger element|
|bottom|Placements will be bottom and arrow will be in the center of trigger element|
|right|Placements will be right and arrow will be in the center of trigger element|
|left|Placements will be left and arrow will be in the center of trigger element|

### Flip

This option should tell the `Tooltip` to filp side if there is no space on the prefered side

#### Example

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


### Component Options


|Name|Type|Default|Description|
|--- |--- |--- |--- |
|open|boolean|false|This option is used to manage the Tooltip manually.|
|flip|boolean|true|This option should tell the `Tooltip` to filp side if there is no space on the prefered side.|
|trigger|string|`hover|focus`|How tooltip is triggered - `click|hover|focus`. You may pass multiple triggers; separate them with a `|`.
|offset|[?number, ?number] or Function([Definition](https://popper.js.org/docs/v2/modifiers/offset/#options))|[0, 4]|The offset modifier lets you displace tooltip element from triggerElement element.|
|placement|string|top|This option is used to define the placement of tooltip on an `triggerElement`.|
|onOpened|function|Empty function(noop)|Can be used for callbacks after the tooltip is opened.|
|onClosed|function|Empty function(noop)|Can be used for callbacks after the tooltip is closed.|

___
**NOTE**

> For only manual triggering just pass empty string `""` to this option and use open option to handle the tooltip manually

### Todo
- [ ] Animation
- [ ] Adding More Placement options

### License
[MIT](https://github.com/Sidd27/sv-bootstrap-tooltip/blob/master/LICENSE)