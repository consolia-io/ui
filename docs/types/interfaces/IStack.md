[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IStack

# Interface: IStack

Defined in: [types.ts:807](https://github.com/consolia-io/ui/blob/main/src/types.ts#L807)

Stack component props - responsive layout container with flexible spacing and alignment

## Example

```tsx
<Stack
  direction="column"
  align="center"
  width={80}
  widthPhone={100}
  top="large"
  bottom="medium"
  onClick={() => console.log('Stack clicked')}
>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Stack>
```

## Properties

### align?

> `optional` **align**: `TextAlign`

Defined in: [types.ts:809](https://github.com/consolia-io/ui/blob/main/src/types.ts#L809)

Text alignment within the stack

***

### as?

> `optional` **as**: keyof IntrinsicElements

Defined in: [types.ts:811](https://github.com/consolia-io/ui/blob/main/src/types.ts#L811)

HTML element type to render as

***

### bottom?

> `optional` **bottom**: `"auto"` \| `"large"` \| `"larger"` \| `"largest"` \| `"medium"` \| `"none"` \| `"small"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:813](https://github.com/consolia-io/ui/blob/main/src/types.ts#L813)

Bottom margin/spacing

***

### children?

> `optional` **children**: `ReactNode`

Defined in: [types.ts:815](https://github.com/consolia-io/ui/blob/main/src/types.ts#L815)

Content to display in the stack

***

### className?

> `optional` **className**: `string`

Defined in: [types.ts:817](https://github.com/consolia-io/ui/blob/main/src/types.ts#L817)

CSS class name

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:819](https://github.com/consolia-io/ui/blob/main/src/types.ts#L819)

Custom CSS styles

***

### direction?

> `optional` **direction**: `"row"` \| `"column"`

Defined in: [types.ts:821](https://github.com/consolia-io/ui/blob/main/src/types.ts#L821)

Direction of the flex layout

***

### inline?

> `optional` **inline**: `boolean`

Defined in: [types.ts:823](https://github.com/consolia-io/ui/blob/main/src/types.ts#L823)

Whether to remove text margins and align items

***

### minimal?

> `optional` **minimal**: `boolean`

Defined in: [types.ts:825](https://github.com/consolia-io/ui/blob/main/src/types.ts#L825)

Whether to use minimal styling

***

### onClick()?

> `optional` **onClick**: () => `void`

Defined in: [types.ts:827](https://github.com/consolia-io/ui/blob/main/src/types.ts#L827)

Click handler for the stack

#### Returns

`void`

***

### top?

> `optional` **top**: `"auto"` \| `"large"` \| `"larger"` \| `"largest"` \| `"medium"` \| `"none"` \| `"small"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:829](https://github.com/consolia-io/ui/blob/main/src/types.ts#L829)

Top margin/spacing

***

### width?

> `optional` **width**: `number`

Defined in: [types.ts:831](https://github.com/consolia-io/ui/blob/main/src/types.ts#L831)

Default width percentage

***

### widthResponsive?

> `optional` **widthResponsive**: `object`

Defined in: [types.ts:833](https://github.com/consolia-io/ui/blob/main/src/types.ts#L833)

Responsive width percentages

#### desktopX?

> `optional` **desktopX**: `number`

#### laptopX?

> `optional` **laptopX**: `number`

#### phone?

> `optional` **phone**: `number`

#### tabletX?

> `optional` **tabletX**: `number`

#### wide?

> `optional` **wide**: `number`

***

### justify?

> `optional` **justify**: `JustifyContent`

Defined in: [types.ts:841](https://github.com/consolia-io/ui/blob/main/src/types.ts#L841)

Main axis alignment

***

### gap?

> `optional` **gap**: `"auto"` \| `"large"` \| `"larger"` \| `"largest"` \| `"medium"` \| `"none"` \| `"small"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:843](https://github.com/consolia-io/ui/blob/main/src/types.ts#L843)

Gap between items

***

### wrap?

> `optional` **wrap**: `boolean`

Defined in: [types.ts:845](https://github.com/consolia-io/ui/blob/main/src/types.ts#L845)

Whether to wrap items

***

### id?

> `optional` **id**: `string`

Defined in: [types.ts:847](https://github.com/consolia-io/ui/blob/main/src/types.ts#L847)

HTML id attribute

***

### inverted?

> `optional` **inverted**: `boolean`

Defined in: [types.ts:849](https://github.com/consolia-io/ui/blob/main/src/types.ts#L849)

Whether to use dark theme

***

### alignItems?

> `optional` **alignItems**: `AlignItems`

Defined in: [types.ts:851](https://github.com/consolia-io/ui/blob/main/src/types.ts#L851)

Cross-axis alignment

***

### alignContent?

> `optional` **alignContent**: `AlignContent`

Defined in: [types.ts:853](https://github.com/consolia-io/ui/blob/main/src/types.ts#L853)

Content alignment

***

### basis?

> `optional` **basis**: `FlexBasis`

Defined in: [types.ts:855](https://github.com/consolia-io/ui/blob/main/src/types.ts#L855)

Flex basis

***

### grow?

> `optional` **grow**: `OnlyStringNumeric`

Defined in: [types.ts:857](https://github.com/consolia-io/ui/blob/main/src/types.ts#L857)

Flex grow

***

### shrink?

> `optional` **shrink**: `OnlyNumber`

Defined in: [types.ts:859](https://github.com/consolia-io/ui/blob/main/src/types.ts#L859)

Flex shrink

***

### order?

> `optional` **order**: `OnlyNumber`

Defined in: [types.ts:861](https://github.com/consolia-io/ui/blob/main/src/types.ts#L861)

Flex order
