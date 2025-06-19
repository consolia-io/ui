[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IImage

# Interface: IImage

Defined in: [types.ts:459](https://github.com/consolia-io/ui/blob/main/src/types.ts#L459)

Image component props - enhanced Next.js Image with additional styling options

## Example

```tsx
<Image
  src="/hero.jpg"
  alt="Hero image"
  fill
  fillFit="cover"
  borderRadius="medium"
/>
```

## Extends

- `ImageProps`

## Properties

### borderRadius?

> `optional` **borderRadius**: `"large"` \| `"medium"` \| `"small"`

Defined in: [types.ts:461](https://github.com/consolia-io/ui/blob/main/src/types.ts#L461)

Border radius from theme values

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:463](https://github.com/consolia-io/ui/blob/main/src/types.ts#L463)

Custom CSS styles

***

### fill?

> `optional` **fill**: `boolean`

Defined in: [types.ts:465](https://github.com/consolia-io/ui/blob/main/src/types.ts#L465)

Whether the image should fill its container

#### Overrides

`ImageProps.fill`

***

### fillFit?

> `optional` **fillFit**: `ObjectFit`

Defined in: [types.ts:467](https://github.com/consolia-io/ui/blob/main/src/types.ts#L467)

How the image should fit when using fill

***

### fillHeight?

> `optional` **fillHeight**: `string` \| `number`

Defined in: [types.ts:469](https://github.com/consolia-io/ui/blob/main/src/types.ts#L469)

Height when using fill mode

***

### fillPosition?

> `optional` **fillPosition**: `Position`

Defined in: [types.ts:471](https://github.com/consolia-io/ui/blob/main/src/types.ts#L471)

Position of the image when using fill
