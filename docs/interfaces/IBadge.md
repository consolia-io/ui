[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IBadge

# Interface: IBadge

Defined in: [types.ts:60](https://github.com/consolia-io/ui/blob/main/src/types.ts#L60)

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

Defined in: [types.ts:62](https://github.com/consolia-io/ui/blob/main/src/types.ts#L62)

Whether the badge should take full width

***

### children?

> `optional` **children**: `ReactNode`

Defined in: [types.ts:64](https://github.com/consolia-io/ui/blob/main/src/types.ts#L64)

Content to display inside the badge

***

### closable?

> `optional` **closable**: `boolean`

Defined in: [types.ts:66](https://github.com/consolia-io/ui/blob/main/src/types.ts#L66)

Whether the badge can be closed/dismissed

***

### copy?

> `optional` **copy**: `string` \| `number`

Defined in: [types.ts:68](https://github.com/consolia-io/ui/blob/main/src/types.ts#L68)

Text or number to display in the badge

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:70](https://github.com/consolia-io/ui/blob/main/src/types.ts#L70)

Custom CSS styles

***

### icon?

> `optional` **icon**: `ReactNode`

Defined in: [types.ts:72](https://github.com/consolia-io/ui/blob/main/src/types.ts#L72)

Icon to display alongside the badge content

***

### iconPosition?

> `optional` **iconPosition**: `"left"` \| `"right"`

Defined in: [types.ts:74](https://github.com/consolia-io/ui/blob/main/src/types.ts#L74)

Position of the icon relative to the content

***

### inline?

> `optional` **inline**: `"small"` \| `"large"` \| `"medium"` \| `"excess"` \| `"larger"` \| `"largest"` \| `"none"` \| `"smaller"` \| `"smallest"` \| `"auto"`

Defined in: [types.ts:76](https://github.com/consolia-io/ui/blob/main/src/types.ts#L76)

Inline spacing around the badge

***

### link?

> `optional` **link**: `boolean`

Defined in: [types.ts:78](https://github.com/consolia-io/ui/blob/main/src/types.ts#L78)

Whether the badge should appear as a clickable link

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:80](https://github.com/consolia-io/ui/blob/main/src/types.ts#L80)

Whether to show a loading state

***

### onClick?

> `optional` **onClick**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: [types.ts:82](https://github.com/consolia-io/ui/blob/main/src/types.ts#L82)

Click handler for interactive badges

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:84](https://github.com/consolia-io/ui/blob/main/src/types.ts#L84)

Whether to render a smaller version of the badge

***

### theme?

> `optional` **theme**: `"blue"` \| `"orange"` \| `"purple"` \| `"yellow"` \| `"default"` \| `"solid"`

Defined in: [types.ts:86](https://github.com/consolia-io/ui/blob/main/src/types.ts#L86)

Visual theme/color scheme for the badge
