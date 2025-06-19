[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IDrawer

# Interface: IDrawer

Defined in: [types.ts:273](https://github.com/consolia-io/ui/blob/main/src/types.ts#L273)

Drawer component props - slide-out panel that overlays content

## Example

```tsx
<Drawer
  title="Settings"
  trigger={<Button>Open Drawer</Button>}
  small
>
  <Text>Drawer content here</Text>
</Drawer>
```

## Properties

### children

> **children**: `ReactNode`

Defined in: [types.ts:275](https://github.com/consolia-io/ui/blob/main/src/types.ts#L275)

Content to display inside the drawer

***

### close()?

> `optional` **close**: () => `void`

Defined in: [types.ts:277](https://github.com/consolia-io/ui/blob/main/src/types.ts#L277)

Function to close the drawer programmatically

#### Returns

`void`

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:279](https://github.com/consolia-io/ui/blob/main/src/types.ts#L279)

Custom CSS styles for the drawer

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:281](https://github.com/consolia-io/ui/blob/main/src/types.ts#L281)

Whether the drawer trigger is disabled

***

### forceHeight?

> `optional` **forceHeight**: `number`

Defined in: [types.ts:283](https://github.com/consolia-io/ui/blob/main/src/types.ts#L283)

Force a specific height for the drawer in pixels

***

### portal?

> `optional` **portal**: `boolean`

Defined in: [types.ts:285](https://github.com/consolia-io/ui/blob/main/src/types.ts#L285)

Whether to render the drawer in a portal

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:287](https://github.com/consolia-io/ui/blob/main/src/types.ts#L287)

Whether to render a smaller version of the drawer

***

### title

> **title**: `string`

Defined in: [types.ts:289](https://github.com/consolia-io/ui/blob/main/src/types.ts#L289)

Title text displayed in the drawer header

***

### trigger?

> `optional` **trigger**: `ReactNode`

Defined in: [types.ts:291](https://github.com/consolia-io/ui/blob/main/src/types.ts#L291)

Element that triggers the drawer to open

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [types.ts:293](https://github.com/consolia-io/ui/blob/main/src/types.ts#L293)

Custom CSS styles for the trigger element

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [types.ts:295](https://github.com/consolia-io/ui/blob/main/src/types.ts#L295)

Custom CSS styles for the drawer wrapper
