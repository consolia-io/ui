[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IButton

# Interface: IButton

Defined in: [types.ts:172](https://github.com/consolia-io/ui/blob/main/src/types.ts#L172)

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

Defined in: [types.ts:174](https://github.com/consolia-io/ui/blob/main/src/types.ts#L174)

Whether the button should take full width

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:176](https://github.com/consolia-io/ui/blob/main/src/types.ts#L176)

Custom CSS styles

***

### external?

> `optional` **external**: `boolean`

Defined in: [types.ts:178](https://github.com/consolia-io/ui/blob/main/src/types.ts#L178)

Whether the button links to an external URL

***

### icon?

> `optional` **icon**: `ReactNode`

Defined in: [types.ts:180](https://github.com/consolia-io/ui/blob/main/src/types.ts#L180)

Icon to display alongside the button text

***

### iconPosition?

> `optional` **iconPosition**: `"left"` \| `"right"`

Defined in: [types.ts:182](https://github.com/consolia-io/ui/blob/main/src/types.ts#L182)

Position of the icon relative to the text

***

### inline?

> `optional` **inline**: `"auto"` \| `"large"` \| `"larger"` \| `"largest"` \| `"medium"` \| `"none"` \| `"small"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:184](https://github.com/consolia-io/ui/blob/main/src/types.ts#L184)

Inline spacing around the button

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:186](https://github.com/consolia-io/ui/blob/main/src/types.ts#L186)

Whether to show a loading state with spinner

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:188](https://github.com/consolia-io/ui/blob/main/src/types.ts#L188)

Whether to render a smaller version of the button

***

### theme?

> `optional` **theme**: `"default"` \| `"solid"` \| `"minimal"`

Defined in: [types.ts:190](https://github.com/consolia-io/ui/blob/main/src/types.ts#L190)

Visual theme/style variant for the button
