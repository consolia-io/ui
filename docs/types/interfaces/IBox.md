[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IBox

# Interface: IBox

Defined in: [types.ts:106](https://github.com/consolia-io/ui/blob/main/src/types.ts#L106)

Box component props - versatile container with optional image, header, and footer

## Example

```tsx
<Box
  theme="blue"
  header={<Text as="h3">Card Title</Text>}
  image="/hero.jpg"
  expandable
  onClick={() => console.log('Box clicked')}
>
  Card content goes here
</Box>
```

## Properties

### children

> **children**: `ReactNode`

Defined in: [types.ts:108](https://github.com/consolia-io/ui/blob/main/src/types.ts#L108)

Content to display inside the box

***

### closable?

> `optional` **closable**: `boolean`

Defined in: [types.ts:110](https://github.com/consolia-io/ui/blob/main/src/types.ts#L110)

Whether the box can be closed/dismissed

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:112](https://github.com/consolia-io/ui/blob/main/src/types.ts#L112)

Custom CSS styles

***

### cta?

> `optional` **cta**: `string`

Defined in: [types.ts:114](https://github.com/consolia-io/ui/blob/main/src/types.ts#L114)

Call-to-action text for the box

***

### expandable?

> `optional` **expandable**: `boolean`

Defined in: [types.ts:116](https://github.com/consolia-io/ui/blob/main/src/types.ts#L116)

Whether the box can be expanded/collapsed

***

### expandableHeight?

> `optional` **expandableHeight**: `number`

Defined in: [types.ts:118](https://github.com/consolia-io/ui/blob/main/src/types.ts#L118)

Height when expanded in pixels

***

### footer?

> `optional` **footer**: `ReactNode`

Defined in: [types.ts:120](https://github.com/consolia-io/ui/blob/main/src/types.ts#L120)

Footer content to display at the bottom

***

### header?

> `optional` **header**: `ReactNode`

Defined in: [types.ts:122](https://github.com/consolia-io/ui/blob/main/src/types.ts#L122)

Header content to display at the top

***

### image?

> `optional` **image**: `string`

Defined in: [types.ts:124](https://github.com/consolia-io/ui/blob/main/src/types.ts#L124)

Image URL to display in the box

***

### imageAlt?

> `optional` **imageAlt**: `string`

Defined in: [types.ts:126](https://github.com/consolia-io/ui/blob/main/src/types.ts#L126)

Alt text for the image

***

### imageCTA?

> `optional` **imageCTA**: `string`

Defined in: [types.ts:128](https://github.com/consolia-io/ui/blob/main/src/types.ts#L128)

Call-to-action text for the image

***

### imageFit?

> `optional` **imageFit**: `ObjectFit`

Defined in: [types.ts:130](https://github.com/consolia-io/ui/blob/main/src/types.ts#L130)

How the image should fit within its container

***

### imageHeight?

> `optional` **imageHeight**: `string`

Defined in: [types.ts:132](https://github.com/consolia-io/ui/blob/main/src/types.ts#L132)

Height of the image

***

### imagePosition?

> `optional` **imagePosition**: `Position`

Defined in: [types.ts:134](https://github.com/consolia-io/ui/blob/main/src/types.ts#L134)

Position of the image within its container

***

### imageSizes?

> `optional` **imageSizes**: `string`

Defined in: [types.ts:136](https://github.com/consolia-io/ui/blob/main/src/types.ts#L136)

Responsive image sizes

***

### imageTarget?

> `optional` **imageTarget**: `"_blank"` \| `"_self"`

Defined in: [types.ts:138](https://github.com/consolia-io/ui/blob/main/src/types.ts#L138)

Target for image link

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:140](https://github.com/consolia-io/ui/blob/main/src/types.ts#L140)

Whether to show a loading state

***

### minimal?

> `optional` **minimal**: `boolean`

Defined in: [types.ts:142](https://github.com/consolia-io/ui/blob/main/src/types.ts#L142)

Whether to render with minimal styling

***

### onClick?

> `optional` **onClick**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: [types.ts:144](https://github.com/consolia-io/ui/blob/main/src/types.ts#L144)

Click handler for the box

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:146](https://github.com/consolia-io/ui/blob/main/src/types.ts#L146)

Whether to render a smaller version

***

### theme?

> `optional` **theme**: `"fill"` \| `"default"` \| `"solid"` \| `"orange"` \| `"purple"` \| `"yellow"` \| `"blue"` \| `"minimal"` \| `"gradient"`

Defined in: [types.ts:148](https://github.com/consolia-io/ui/blob/main/src/types.ts#L148)

Visual theme/color scheme for the box

***

### border?

> `optional` **border**: `"default"` \| `"solid"` \| `"orange"` \| `"purple"` \| `"yellow"` \| `"blue"`

Defined in: [types.ts:159](https://github.com/consolia-io/ui/blob/main/src/types.ts#L159)

Add colored left border
