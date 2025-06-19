[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [stitches.types](../README.md) / IStitchesUtils

# Interface: IStitchesUtils

Defined in: stitches.types.ts:241

Utility functions available in Stitches CSS-in-JS

## Example

```tsx
const Component = styled('div', {
  // Theme utilities
  darkOnly: {
    backgroundColor: '$purple'
  },
  // Responsive utilities  
  phone: {
    fontSize: '$small'
  },
  // Visibility utilities
  hidden: 'tablet',
  // Dynamic viewport utilities
  dynamicViewport: { property: 'maxHeight', value: '100', unit: 'vh' }
});
```

## Properties

### darkOnly()

> **darkOnly**: (`value`) => `CSS`

Defined in: stitches.types.ts:246

Apply styles only in dark theme

#### Parameters

##### value

`CSS`

CSS styles to apply in dark mode

#### Returns

`CSS`

***

### lightOnly()

> **lightOnly**: (`value`) => `CSS`

Defined in: stitches.types.ts:252

Apply styles only in light theme

#### Parameters

##### value

`CSS`

CSS styles to apply in light mode

#### Returns

`CSS`

***

### wide()

> **wide**: (`value`) => `CSS`

Defined in: stitches.types.ts:258

Apply styles at wide breakpoint (2201px+)

#### Parameters

##### value

`CSS`

CSS styles to apply

#### Returns

`CSS`

***

### desktop()

> **desktop**: (`value`) => `CSS`

Defined in: stitches.types.ts:264

Apply styles at desktop breakpoint (max 2200px)

#### Parameters

##### value

`CSS`

CSS styles to apply

#### Returns

`CSS`

***

### laptop()

> **laptop**: (`value`) => `CSS`

Defined in: stitches.types.ts:270

Apply styles at laptop breakpoint (max 1400px)

#### Parameters

##### value

`CSS`

CSS styles to apply

#### Returns

`CSS`

***

### tablet()

> **tablet**: (`value`) => `CSS`

Defined in: stitches.types.ts:276

Apply styles at tablet breakpoint (max 1100px)

#### Parameters

##### value

`CSS`

CSS styles to apply

#### Returns

`CSS`

***

### phone()

> **phone**: (`value`) => `CSS`

Defined in: stitches.types.ts:282

Apply styles at phone breakpoint (max 800px)

#### Parameters

##### value

`CSS`

CSS styles to apply

#### Returns

`CSS`

***

### micro()

> **micro**: (`value`) => `CSS`

Defined in: stitches.types.ts:288

Apply styles at micro breakpoint (max 375px)

#### Parameters

##### value

`CSS`

CSS styles to apply

#### Returns

`CSS`

***

### retina()

> **retina**: (`value`) => `CSS`

Defined in: stitches.types.ts:294

Apply styles for retina/high-DPI displays

#### Parameters

##### value

`CSS`

CSS styles to apply

#### Returns

`CSS`

***

### print()

> **print**: (`value`) => `CSS`

Defined in: stitches.types.ts:300

Apply styles for print media

#### Parameters

##### value

`CSS`

CSS styles to apply

#### Returns

`CSS`

***

### hidden()

> **hidden**: (`value`) => `CSS`

Defined in: stitches.types.ts:306

Hide element at specific breakpoint

#### Parameters

##### value

Breakpoint name where element should be hidden

`"wide"` | `"desktop"` | `"laptop"` | `"tablet"` | `"phone"`

#### Returns

`CSS`

***

### visible()

> **visible**: (`value`) => `CSS`

Defined in: stitches.types.ts:312

Show element only at specific breakpoint

#### Parameters

##### value

Breakpoint name where element should be visible

`"wide"` | `"desktop"` | `"laptop"` | `"tablet"` | `"phone"`

#### Returns

`CSS`

***

### dynamicViewport()

> **dynamicViewport**: (`config`) => `CSS`

Defined in: stitches.types.ts:321

Apply dynamic viewport units with fallback support

#### Parameters

##### config

Configuration object

###### property

`string`

CSS property name (camelCase)

###### value

`string`

Numeric value (without unit)

###### unit

`"vh"` \| `"vw"` \| `"vi"` \| `"vb"`

Viewport unit ('vh', 'vw', 'vi', 'vb')

#### Returns

`CSS`
