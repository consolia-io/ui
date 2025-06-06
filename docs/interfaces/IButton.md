[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IButton

# Interface: IButton

Defined in: [types.ts:157](https://github.com/consolia-io/ui/blob/main/src/types.ts#L157)

Button component props - interactive element for user actions

## Example

```tsx
<Button theme="solid" icon={<PlusIcon />} loading={isSubmitting}>
  Add Item
</Button>
```

## Extends

- `ComponentPropsWithoutRef`\<`"button"`\>

## Properties

### block?

> `optional` **block**: `boolean`

Defined in: [types.ts:159](https://github.com/consolia-io/ui/blob/main/src/types.ts#L159)

Whether the button should take full width

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:161](https://github.com/consolia-io/ui/blob/main/src/types.ts#L161)

Custom CSS styles

***

### external?

> `optional` **external**: `boolean`

Defined in: [types.ts:163](https://github.com/consolia-io/ui/blob/main/src/types.ts#L163)

Whether the button links to an external URL

***

### icon?

> `optional` **icon**: `ReactNode`

Defined in: [types.ts:165](https://github.com/consolia-io/ui/blob/main/src/types.ts#L165)

Icon to display alongside the button text

***

### iconPosition?

> `optional` **iconPosition**: `"left"` \| `"right"`

Defined in: [types.ts:167](https://github.com/consolia-io/ui/blob/main/src/types.ts#L167)

Position of the icon relative to the text

***

### inline?

> `optional` **inline**: `"small"` \| `"large"` \| `"medium"` \| `"excess"` \| `"larger"` \| `"largest"` \| `"none"` \| `"smaller"` \| `"smallest"` \| `"auto"`

Defined in: [types.ts:169](https://github.com/consolia-io/ui/blob/main/src/types.ts#L169)

Inline spacing around the button

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:171](https://github.com/consolia-io/ui/blob/main/src/types.ts#L171)

Whether to show a loading state with spinner

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:173](https://github.com/consolia-io/ui/blob/main/src/types.ts#L173)

Whether to render a smaller version of the button

***

### theme?

> `optional` **theme**: `"default"` \| `"solid"` \| `"minimal"`

Defined in: [types.ts:175](https://github.com/consolia-io/ui/blob/main/src/types.ts#L175)

Visual theme/style variant for the button
