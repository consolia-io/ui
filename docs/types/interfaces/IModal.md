[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IModal

# Interface: IModal

Defined in: [types.ts:312](https://github.com/consolia-io/ui/blob/main/src/types.ts#L312)

Modal component props - centered overlay dialog

## Example

```tsx
<Modal
  title="Confirm Action"
  trigger={<Button>Open Modal</Button>}
  small
>
  <Text>Are you sure you want to continue?</Text>
</Modal>
```

## Properties

### children

> **children**: `ReactNode`

Defined in: [types.ts:314](https://github.com/consolia-io/ui/blob/main/src/types.ts#L314)

Content to display inside the modal

***

### close()?

> `optional` **close**: () => `void`

Defined in: [types.ts:316](https://github.com/consolia-io/ui/blob/main/src/types.ts#L316)

Function to close the modal programmatically

#### Returns

`void`

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:318](https://github.com/consolia-io/ui/blob/main/src/types.ts#L318)

Custom CSS styles for the modal

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:320](https://github.com/consolia-io/ui/blob/main/src/types.ts#L320)

Whether the modal trigger is disabled

***

### forceHeight?

> `optional` **forceHeight**: `number`

Defined in: [types.ts:322](https://github.com/consolia-io/ui/blob/main/src/types.ts#L322)

Force a specific height for the modal in pixels

***

### portal?

> `optional` **portal**: `boolean`

Defined in: [types.ts:324](https://github.com/consolia-io/ui/blob/main/src/types.ts#L324)

Whether to render the modal in a portal

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:326](https://github.com/consolia-io/ui/blob/main/src/types.ts#L326)

Whether to render a smaller version of the modal

***

### title

> **title**: `string`

Defined in: [types.ts:328](https://github.com/consolia-io/ui/blob/main/src/types.ts#L328)

Title text displayed in the modal header

***

### trigger?

> `optional` **trigger**: `ReactNode`

Defined in: [types.ts:330](https://github.com/consolia-io/ui/blob/main/src/types.ts#L330)

Element that triggers the modal to open

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [types.ts:332](https://github.com/consolia-io/ui/blob/main/src/types.ts#L332)

Custom CSS styles for the trigger element

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [types.ts:334](https://github.com/consolia-io/ui/blob/main/src/types.ts#L334)

Custom CSS styles for the modal wrapper
