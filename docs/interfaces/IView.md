[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IView

# Interface: IView

Defined in: [types.ts:997](https://github.com/consolia-io/ui/blob/main/src/types.ts#L997)

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

Defined in: [types.ts:999](https://github.com/consolia-io/ui/blob/main/src/types.ts#L999)

Whether this is an app-level view

***

### as?

> `optional` **as**: keyof IntrinsicElements

Defined in: [types.ts:1001](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1001)

HTML element type to render as

***

### bottom?

> `optional` **bottom**: `"small"` \| `"large"` \| `"medium"` \| `"excess"` \| `"larger"` \| `"largest"` \| `"none"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:1003](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1003)

Bottom margin/spacing

***

### children

> **children**: `ReactNode`

Defined in: [types.ts:1005](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1005)

Content to display in the view

***

### container?

> `optional` **container**: `boolean`

Defined in: [types.ts:1007](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1007)

Whether to use container width constraints

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:1009](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1009)

Custom CSS styles

***

### hero?

> `optional` **hero**: `boolean`

Defined in: [types.ts:1011](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1011)

Whether to use hero section styling

***

### id?

> `optional` **id**: `string`

Defined in: [types.ts:1013](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1013)

HTML id attribute

***

### inverted?

> `optional` **inverted**: `boolean`

Defined in: [types.ts:1015](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1015)

Whether to invert colors

***

### noPrint?

> `optional` **noPrint**: `boolean`

Defined in: [types.ts:1017](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1017)

Whether to hide when printing

***

### top?

> `optional` **top**: `"small"` \| `"large"` \| `"medium"` \| `"excess"` \| `"larger"` \| `"largest"` \| `"none"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:1019](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1019)

Top margin/spacing
