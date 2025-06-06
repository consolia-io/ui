[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IModal

# Interface: IModal

Defined in: [types.ts:297](https://github.com/consolia-io/ui/blob/main/src/types.ts#L297)

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

Defined in: [types.ts:299](https://github.com/consolia-io/ui/blob/main/src/types.ts#L299)

Content to display inside the modal

***

### close()?

> `optional` **close**: () => `void`

Defined in: [types.ts:301](https://github.com/consolia-io/ui/blob/main/src/types.ts#L301)

Function to close the modal programmatically

#### Returns

`void`

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:303](https://github.com/consolia-io/ui/blob/main/src/types.ts#L303)

Custom CSS styles for the modal

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:305](https://github.com/consolia-io/ui/blob/main/src/types.ts#L305)

Whether the modal trigger is disabled

***

### forceHeight?

> `optional` **forceHeight**: `number`

Defined in: [types.ts:307](https://github.com/consolia-io/ui/blob/main/src/types.ts#L307)

Force a specific height for the modal in pixels

***

### portal?

> `optional` **portal**: `boolean`

Defined in: [types.ts:309](https://github.com/consolia-io/ui/blob/main/src/types.ts#L309)

Whether to render the modal in a portal

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:311](https://github.com/consolia-io/ui/blob/main/src/types.ts#L311)

Whether to render a smaller version of the modal

***

### title

> **title**: `string`

Defined in: [types.ts:313](https://github.com/consolia-io/ui/blob/main/src/types.ts#L313)

Title text displayed in the modal header

***

### trigger?

> `optional` **trigger**: `ReactNode`

Defined in: [types.ts:315](https://github.com/consolia-io/ui/blob/main/src/types.ts#L315)

Element that triggers the modal to open

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [types.ts:317](https://github.com/consolia-io/ui/blob/main/src/types.ts#L317)

Custom CSS styles for the trigger element

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [types.ts:319](https://github.com/consolia-io/ui/blob/main/src/types.ts#L319)

Custom CSS styles for the modal wrapper
