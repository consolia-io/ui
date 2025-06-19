[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [stitches.types](../README.md) / IBreakpoints

# Interface: IBreakpoints

Defined in: stitches.types.ts:21

Responsive breakpoints configuration for media queries

## Example

```tsx
// Usage in styled components
const Component = styled('div', {
  fontSize: '16px',
  phone: {
    fontSize: '14px'
  },
  tablet: {
    fontSize: '15px'
  }
});
```

## Properties

### desktop

> **desktop**: `string`

Defined in: stitches.types.ts:23

Desktop screens (max-width: 2200px)

***

### desktopX

> **desktopX**: `string`

Defined in: stitches.types.ts:25

Desktop X-large screens (1401px - 2200px)

***

### laptop

> **laptop**: `string`

Defined in: stitches.types.ts:27

Laptop screens (max-width: 1400px)

***

### laptopX

> **laptopX**: `string`

Defined in: stitches.types.ts:29

Laptop X-large screens (1101px - 1400px)

***

### phone

> **phone**: `string`

Defined in: stitches.types.ts:31

Phone screens (max-width: 800px)

***

### phoneX

> **phoneX**: `string`

Defined in: stitches.types.ts:33

Phone X-large screens (376px - 800px)

***

### tablet

> **tablet**: `string`

Defined in: stitches.types.ts:35

Tablet screens (max-width: 1100px)

***

### tabletX

> **tabletX**: `string`

Defined in: stitches.types.ts:37

Tablet X-large screens (801px - 1100px)

***

### wide

> **wide**: `string`

Defined in: stitches.types.ts:39

Wide screens (min-width: 2201px)

***

### special

> **special**: `object`

Defined in: stitches.types.ts:41

Special breakpoint configurations

#### micro

> **micro**: `string`

Micro screens (max-width: 375px)

#### print

> **print**: `string`

Print media query

#### retina

> **retina**: `string`

Retina/High-DPI screens
