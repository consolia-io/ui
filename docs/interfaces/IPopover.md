[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IPopover

# Interface: IPopover

Defined in: [types.ts:649](https://github.com/consolia-io/ui/blob/main/src/types.ts#L649)

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

Defined in: [types.ts:651](https://github.com/consolia-io/ui/blob/main/src/types.ts#L651)

Content to display in the popover

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:653](https://github.com/consolia-io/ui/blob/main/src/types.ts#L653)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:655](https://github.com/consolia-io/ui/blob/main/src/types.ts#L655)

Whether the popover trigger is disabled

***

### minimal?

> `optional` **minimal**: `boolean`

Defined in: [types.ts:657](https://github.com/consolia-io/ui/blob/main/src/types.ts#L657)

Whether to use minimal styling

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:659](https://github.com/consolia-io/ui/blob/main/src/types.ts#L659)

Whether to render a smaller popover

***

### trigger

> **trigger**: `ReactNode`

Defined in: [types.ts:661](https://github.com/consolia-io/ui/blob/main/src/types.ts#L661)

Element that triggers the popover

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [types.ts:663](https://github.com/consolia-io/ui/blob/main/src/types.ts#L663)

Custom CSS styles for the trigger

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [types.ts:665](https://github.com/consolia-io/ui/blob/main/src/types.ts#L665)

Custom CSS styles for the popover wrapper
