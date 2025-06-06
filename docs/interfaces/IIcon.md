[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IIcon

# Interface: IIcon

Defined in: [types.ts:1049](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1049)

Icon component props - wrapper for icon elements with consistent sizing and theming

## Example

```tsx
<Icon forceColor="blue" forceSize={24} inline="small">
  <PhosphorIcon />
</Icon>
```

## Properties

### children

> **children**: `ReactNode`

Defined in: [types.ts:1051](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1051)

Icon element to render

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:1053](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1053)

Custom CSS styles

***

### forceColor?

> `optional` **forceColor**: `"background"` \| `"border"` \| `"blue"` \| `"borderLight"` \| `"orange"` \| `"overlay"` \| `"purple"` \| `"surface"` \| `"surfaceHover"` \| `"surfaceLight"` \| `"text"` \| `"yellow"`

Defined in: [types.ts:1055](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1055)

Force a specific color from theme

***

### forceSize?

> `optional` **forceSize**: `number`

Defined in: [types.ts:1057](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1057)

Force a specific size in pixels

***

### inline?

> `optional` **inline**: `"small"` \| `"large"` \| `"medium"` \| `"excess"` \| `"larger"` \| `"largest"` \| `"none"` \| `"smaller"` \| `"smallest"` \| `"auto"`

Defined in: [types.ts:1059](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1059)

Inline spacing around the icon
