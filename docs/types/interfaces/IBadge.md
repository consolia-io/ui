[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IBadge

# Interface: IBadge

Defined in: [types.ts:59](https://github.com/consolia-io/ui/blob/main/src/types.ts#L59)

Badge component props - displays small status or informational labels

## Example

```tsx
<Badge theme="blue" icon={<CheckIcon />}>
  Active
</Badge>
```

## Properties

### block?

> `optional` **block**: `boolean`

Defined in: [types.ts:61](https://github.com/consolia-io/ui/blob/main/src/types.ts#L61)

Whether the badge should take full width

***

### children?

> `optional` **children**: `ReactNode`

Defined in: [types.ts:63](https://github.com/consolia-io/ui/blob/main/src/types.ts#L63)

Content to display inside the badge

***

### closable?

> `optional` **closable**: `boolean`

Defined in: [types.ts:65](https://github.com/consolia-io/ui/blob/main/src/types.ts#L65)

Whether the badge can be closed/dismissed

***

### copy?

> `optional` **copy**: `string` \| `number`

Defined in: [types.ts:67](https://github.com/consolia-io/ui/blob/main/src/types.ts#L67)

Text or number to display in the badge

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:69](https://github.com/consolia-io/ui/blob/main/src/types.ts#L69)

Custom CSS styles

***

### icon?

> `optional` **icon**: `ReactNode`

Defined in: [types.ts:71](https://github.com/consolia-io/ui/blob/main/src/types.ts#L71)

Icon to display alongside the badge content

***

### iconPosition?

> `optional` **iconPosition**: `"left"` \| `"right"`

Defined in: [types.ts:73](https://github.com/consolia-io/ui/blob/main/src/types.ts#L73)

Position of the icon relative to the content

***

### inline?

> `optional` **inline**: `"auto"` \| `"large"` \| `"larger"` \| `"largest"` \| `"medium"` \| `"none"` \| `"small"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:75](https://github.com/consolia-io/ui/blob/main/src/types.ts#L75)

Inline spacing around the badge

***

### link?

> `optional` **link**: `boolean`

Defined in: [types.ts:77](https://github.com/consolia-io/ui/blob/main/src/types.ts#L77)

Whether the badge should appear as a clickable link

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:79](https://github.com/consolia-io/ui/blob/main/src/types.ts#L79)

Whether to show a loading state

***

### onClick?

> `optional` **onClick**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: [types.ts:81](https://github.com/consolia-io/ui/blob/main/src/types.ts#L81)

Click handler for interactive badges

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:83](https://github.com/consolia-io/ui/blob/main/src/types.ts#L83)

Whether to render a smaller version of the badge

***

### theme?

> `optional` **theme**: `"default"` \| `"solid"` \| `"orange"` \| `"purple"` \| `"yellow"` \| `"blue"`

Defined in: [types.ts:85](https://github.com/consolia-io/ui/blob/main/src/types.ts#L85)

Visual theme/color scheme for the badge

***

### variant?

> `optional` **variant**: `"border"` \| `"theme"`

Defined in: [types.ts:87](https://github.com/consolia-io/ui/blob/main/src/types.ts#L87)

Badge display variant - border adds left border, theme fills with color
