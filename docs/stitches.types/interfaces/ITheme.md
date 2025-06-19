[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [stitches.types](../README.md) / ITheme

# Interface: ITheme

Defined in: stitches.types.ts:99

Theme configuration interface for colors, typography, and design tokens

## Example

```tsx
const Component = styled('div', {
  backgroundColor: '$surface',
  color: '$text',
  borderRadius: '$medium',
  fontSize: '$default'
});
```

## Properties

### colors

> **colors**: `object`

Defined in: stitches.types.ts:101

Color palette for the design system

#### background

> **background**: `string`

Background color

#### blue

> **blue**: `string`

Blue accent color

#### blueLight

> **blueLight**: `string`

Light blue variant

#### border

> **border**: `string`

Border color

#### borderLight

> **borderLight**: `string`

Light border variant

#### orange

> **orange**: `string`

Orange accent color

#### orangeLight

> **orangeLight**: `string`

Light orange variant

#### overlay

> **overlay**: `string`

Overlay color for modals/dropdowns

#### purple

> **purple**: `string`

Purple accent color

#### purpleLight

> **purpleLight**: `string`

Light purple variant

#### surface

> **surface**: `string`

Surface background color

#### surfaceHover

> **surfaceHover**: `string`

Surface hover state color

#### surfaceLight

> **surfaceLight**: `string`

Light surface variant

#### text

> **text**: `string`

Text color

#### yellow

> **yellow**: `string`

Yellow accent color

#### yellowLight

> **yellowLight**: `string`

Light yellow variant

***

### fonts

> **fonts**: `object`

Defined in: stitches.types.ts:136

Font family configuration

#### default

> **default**: `string`

Default font stack

***

### fontSizes

> **fontSizes**: `object`

Defined in: stitches.types.ts:141

Font size scale with responsive clamp values

#### default

> **default**: `string`

Default text size

#### h1

> **h1**: `string`

Heading 1 size

#### h2

> **h2**: `string`

Heading 2 size

#### h3

> **h3**: `string`

Heading 3 size

#### h4

> **h4**: `string`

Heading 4 size

#### h5

> **h5**: `string`

Heading 5 size

#### h6

> **h6**: `string`

Heading 6 size

#### micro

> **micro**: `string`

Micro text size

#### small

> **small**: `string`

Small text size

***

### lineHeights

> **lineHeights**: `object`

Defined in: stitches.types.ts:162

Line height values

#### default

> **default**: `string`

Default line height

#### small

> **small**: `string`

Small line height

***

### opacities

> **opacities**: `object`

Defined in: stitches.types.ts:169

Opacity values

#### default

> **default**: `number`

Default opacity

#### light

> **light**: `number`

Light opacity

***

### radii

> **radii**: `object`

Defined in: stitches.types.ts:176

Border radius values

#### large

> **large**: `string`

Large radius

#### medium

> **medium**: `string`

Medium radius

#### small

> **small**: `string`

Small radius

***

### shadows

> **shadows**: `object`

Defined in: stitches.types.ts:185

Box shadow configurations

#### large

> **large**: `string`

Large shadow

#### small

> **small**: `string`

Small shadow

***

### sizes

> **sizes**: [`ISpacings`](ISpacings.md)

Defined in: stitches.types.ts:192

Size scale (same as spacings)

***

### space

> **space**: [`ISpacings`](ISpacings.md)

Defined in: stitches.types.ts:194

Space scale (same as spacings)

***

### transitions

> **transitions**: `object`

Defined in: stitches.types.ts:196

Transition configurations

#### default

> **default**: `string`

Default transition

***

### zIndices

> **zIndices**: `object`

Defined in: stitches.types.ts:201

Z-index layering

#### menu

> **menu**: `number`

Menu layer

#### modal

> **modal**: `number`

Modal layer

#### popover

> **popover**: `number`

Popover layer

#### select

> **select**: `number`

Select dropdown layer

#### special

> **special**: `number`

Special layer

#### table

> **table**: `number`

Table layer

#### toast

> **toast**: `number`

Toast layer
