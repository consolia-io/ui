[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IView

# Interface: IView

Defined in: [types.ts:1017](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1017)

View component props - main layout container with optional hero styling

## Example

```tsx
<View hero container top="large" bottom="large">
  <Text as="h1">Welcome to our app</Text>
</View>
```

## Properties

### app?

> `optional` **app**: `boolean`

Defined in: [types.ts:1019](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1019)

Whether this is an app-level view

***

### as?

> `optional` **as**: keyof IntrinsicElements

Defined in: [types.ts:1021](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1021)

HTML element type to render as

***

### bottom?

> `optional` **bottom**: `"auto"` \| `"large"` \| `"larger"` \| `"largest"` \| `"medium"` \| `"none"` \| `"small"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:1023](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1023)

Bottom margin/spacing

***

### children

> **children**: `ReactNode`

Defined in: [types.ts:1025](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1025)

Content to display in the view

***

### container?

> `optional` **container**: `boolean`

Defined in: [types.ts:1027](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1027)

Whether to use container width constraints

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:1029](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1029)

Custom CSS styles

***

### hero?

> `optional` **hero**: `boolean`

Defined in: [types.ts:1031](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1031)

Whether to use hero section styling

***

### id?

> `optional` **id**: `string`

Defined in: [types.ts:1033](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1033)

HTML id attribute

***

### inverted?

> `optional` **inverted**: `boolean`

Defined in: [types.ts:1035](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1035)

Whether to invert colors

***

### noPrint?

> `optional` **noPrint**: `boolean`

Defined in: [types.ts:1037](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1037)

Whether to hide when printing

***

### top?

> `optional` **top**: `"auto"` \| `"large"` \| `"larger"` \| `"largest"` \| `"medium"` \| `"none"` \| `"small"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:1039](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1039)

Top margin/spacing
