[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [stitches.types](../README.md) / IAnimations

# Interface: IAnimations

Defined in: stitches.types.ts:342

Animation keyframes available in the design system

## Example

```tsx
const Component = styled('div', {
  animation: `${fadeIn} 0.3s ease-in-out`,
  '&:hover': {
    animation: `${slideInScale} 0.2s ease-out`
  }
});
```

## Properties

### fadeIn

> **fadeIn**: `string`

Defined in: stitches.types.ts:344

Fade in animation from 0 to 1 opacity

***

### fadeOut

> **fadeOut**: `string`

Defined in: stitches.types.ts:346

Fade out animation from 1 to 0 opacity

***

### slideInScale

> **slideInScale**: `string`

Defined in: stitches.types.ts:348

Modal/menu slide in with scale effect

***

### slideOutScale

> **slideOutScale**: `string`

Defined in: stitches.types.ts:350

Modal/menu slide out with scale effect

***

### slideInUp

> **slideInUp**: `string`

Defined in: stitches.types.ts:352

Drawer slide in from bottom

***

### slideOutDown

> **slideOutDown**: `string`

Defined in: stitches.types.ts:354

Drawer slide out to bottom
