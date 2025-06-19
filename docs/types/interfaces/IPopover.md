[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IPopover

# Interface: IPopover

Defined in: [types.ts:664](https://github.com/consolia-io/ui/blob/main/src/types.ts#L664)

Popover component props - floating content overlay

## Example

```tsx
<Popover
  trigger={<Button>Show Info</Button>}
  minimal
>
  <Text>Additional information here</Text>
</Popover>
```

## Properties

### children

> **children**: `ReactNode`

Defined in: [types.ts:666](https://github.com/consolia-io/ui/blob/main/src/types.ts#L666)

Content to display in the popover

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:668](https://github.com/consolia-io/ui/blob/main/src/types.ts#L668)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:670](https://github.com/consolia-io/ui/blob/main/src/types.ts#L670)

Whether the popover trigger is disabled

***

### minimal?

> `optional` **minimal**: `boolean`

Defined in: [types.ts:672](https://github.com/consolia-io/ui/blob/main/src/types.ts#L672)

Whether to use minimal styling

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:674](https://github.com/consolia-io/ui/blob/main/src/types.ts#L674)

Whether to render a smaller popover

***

### trigger

> **trigger**: `ReactNode`

Defined in: [types.ts:676](https://github.com/consolia-io/ui/blob/main/src/types.ts#L676)

Element that triggers the popover

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [types.ts:678](https://github.com/consolia-io/ui/blob/main/src/types.ts#L678)

Custom CSS styles for the trigger

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [types.ts:680](https://github.com/consolia-io/ui/blob/main/src/types.ts#L680)

Custom CSS styles for the popover wrapper
