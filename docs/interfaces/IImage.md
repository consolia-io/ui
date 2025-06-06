[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IImage

# Interface: IImage

Defined in: [types.ts:444](https://github.com/consolia-io/ui/blob/main/src/types.ts#L444)

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

> `optional` **borderRadius**: `"small"` \| `"large"` \| `"medium"`

Defined in: [types.ts:446](https://github.com/consolia-io/ui/blob/main/src/types.ts#L446)

Border radius from theme values

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:448](https://github.com/consolia-io/ui/blob/main/src/types.ts#L448)

Custom CSS styles

***

### fill?

> `optional` **fill**: `boolean`

Defined in: [types.ts:450](https://github.com/consolia-io/ui/blob/main/src/types.ts#L450)

Whether the image should fill its container

#### Overrides

`ImageProps.fill`

***

### fillFit?

> `optional` **fillFit**: `ObjectFit`

Defined in: [types.ts:452](https://github.com/consolia-io/ui/blob/main/src/types.ts#L452)

How the image should fit when using fill

***

### fillHeight?

> `optional` **fillHeight**: `string` \| `number`

Defined in: [types.ts:454](https://github.com/consolia-io/ui/blob/main/src/types.ts#L454)

Height when using fill mode

***

### fillPosition?

> `optional` **fillPosition**: `Position`

Defined in: [types.ts:456](https://github.com/consolia-io/ui/blob/main/src/types.ts#L456)

Position of the image when using fill
