[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IStack

# Interface: IStack

Defined in: [types.ts:791](https://github.com/consolia-io/ui/blob/main/src/types.ts#L791)

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
>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Stack>
```

## Properties

### align?

> `optional` **align**: `TextAlign`

Defined in: [types.ts:793](https://github.com/consolia-io/ui/blob/main/src/types.ts#L793)

Text alignment within the stack

***

### as?

> `optional` **as**: keyof IntrinsicElements

Defined in: [types.ts:795](https://github.com/consolia-io/ui/blob/main/src/types.ts#L795)

HTML element type to render as

***

### bottom?

> `optional` **bottom**: `"small"` \| `"large"` \| `"medium"` \| `"excess"` \| `"larger"` \| `"largest"` \| `"none"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:797](https://github.com/consolia-io/ui/blob/main/src/types.ts#L797)

Bottom margin/spacing

***

### children

> **children**: `ReactNode`

Defined in: [types.ts:799](https://github.com/consolia-io/ui/blob/main/src/types.ts#L799)

Content to display in the stack

***

### className?

> `optional` **className**: `string`

Defined in: [types.ts:801](https://github.com/consolia-io/ui/blob/main/src/types.ts#L801)

CSS class name

***

### collapseduo?

> `optional` **collapseduo**: `boolean`

Defined in: [types.ts:803](https://github.com/consolia-io/ui/blob/main/src/types.ts#L803)

Whether to collapse on duo screens

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:805](https://github.com/consolia-io/ui/blob/main/src/types.ts#L805)

Custom CSS styles

***

### direction?

> `optional` **direction**: `"row"` \| `"column"`

Defined in: [types.ts:807](https://github.com/consolia-io/ui/blob/main/src/types.ts#L807)

Direction of the flex layout

***

### flex?

> `optional` **flex**: `AlignItems`

Defined in: [types.ts:809](https://github.com/consolia-io/ui/blob/main/src/types.ts#L809)

Flex alignment for items

***

### flexduo?

> `optional` **flexduo**: `boolean`

Defined in: [types.ts:811](https://github.com/consolia-io/ui/blob/main/src/types.ts#L811)

Whether to use flex layout on duo screens

***

### id?

> `optional` **id**: `string`

Defined in: [types.ts:813](https://github.com/consolia-io/ui/blob/main/src/types.ts#L813)

HTML id attribute

***

### inverted?

> `optional` **inverted**: `boolean`

Defined in: [types.ts:815](https://github.com/consolia-io/ui/blob/main/src/types.ts#L815)

Whether to invert colors

***

### minimal?

> `optional` **minimal**: `boolean`

Defined in: [types.ts:817](https://github.com/consolia-io/ui/blob/main/src/types.ts#L817)

Whether to use minimal styling

***

### noPrint?

> `optional` **noPrint**: `boolean`

Defined in: [types.ts:819](https://github.com/consolia-io/ui/blob/main/src/types.ts#L819)

Whether to hide when printing

***

### offset?

> `optional` **offset**: `number`

Defined in: [types.ts:821](https://github.com/consolia-io/ui/blob/main/src/types.ts#L821)

Default offset percentage

***

### offsetDesktop?

> `optional` **offsetDesktop**: `number`

Defined in: [types.ts:823](https://github.com/consolia-io/ui/blob/main/src/types.ts#L823)

Desktop offset percentage

***

### offsetLaptop?

> `optional` **offsetLaptop**: `number`

Defined in: [types.ts:825](https://github.com/consolia-io/ui/blob/main/src/types.ts#L825)

Laptop offset percentage

***

### offsetPhone?

> `optional` **offsetPhone**: `number`

Defined in: [types.ts:827](https://github.com/consolia-io/ui/blob/main/src/types.ts#L827)

Phone offset percentage

***

### offsetTablet?

> `optional` **offsetTablet**: `number`

Defined in: [types.ts:829](https://github.com/consolia-io/ui/blob/main/src/types.ts#L829)

Tablet offset percentage

***

### offsetWide?

> `optional` **offsetWide**: `number`

Defined in: [types.ts:831](https://github.com/consolia-io/ui/blob/main/src/types.ts#L831)

Wide screen offset percentage

***

### top?

> `optional` **top**: `"small"` \| `"large"` \| `"medium"` \| `"excess"` \| `"larger"` \| `"largest"` \| `"none"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:833](https://github.com/consolia-io/ui/blob/main/src/types.ts#L833)

Top margin/spacing

***

### width?

> `optional` **width**: `number`

Defined in: [types.ts:835](https://github.com/consolia-io/ui/blob/main/src/types.ts#L835)

Default width percentage

***

### widthDesktop?

> `optional` **widthDesktop**: `number`

Defined in: [types.ts:837](https://github.com/consolia-io/ui/blob/main/src/types.ts#L837)

Desktop width percentage

***

### widthLaptop?

> `optional` **widthLaptop**: `number`

Defined in: [types.ts:839](https://github.com/consolia-io/ui/blob/main/src/types.ts#L839)

Laptop width percentage

***

### widthPhone?

> `optional` **widthPhone**: `number`

Defined in: [types.ts:841](https://github.com/consolia-io/ui/blob/main/src/types.ts#L841)

Phone width percentage

***

### widthTablet?

> `optional` **widthTablet**: `number`

Defined in: [types.ts:843](https://github.com/consolia-io/ui/blob/main/src/types.ts#L843)

Tablet width percentage

***

### widthWide?

> `optional` **widthWide**: `number`

Defined in: [types.ts:845](https://github.com/consolia-io/ui/blob/main/src/types.ts#L845)

Wide screen width percentage
