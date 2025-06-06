[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IDrawer

# Interface: IDrawer

Defined in: [types.ts:258](https://github.com/consolia-io/ui/blob/main/src/types.ts#L258)

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

Defined in: [types.ts:260](https://github.com/consolia-io/ui/blob/main/src/types.ts#L260)

Content to display inside the drawer

***

### close()?

> `optional` **close**: () => `void`

Defined in: [types.ts:262](https://github.com/consolia-io/ui/blob/main/src/types.ts#L262)

Function to close the drawer programmatically

#### Returns

`void`

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:264](https://github.com/consolia-io/ui/blob/main/src/types.ts#L264)

Custom CSS styles for the drawer

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:266](https://github.com/consolia-io/ui/blob/main/src/types.ts#L266)

Whether the drawer trigger is disabled

***

### forceHeight?

> `optional` **forceHeight**: `number`

Defined in: [types.ts:268](https://github.com/consolia-io/ui/blob/main/src/types.ts#L268)

Force a specific height for the drawer in pixels

***

### portal?

> `optional` **portal**: `boolean`

Defined in: [types.ts:270](https://github.com/consolia-io/ui/blob/main/src/types.ts#L270)

Whether to render the drawer in a portal

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:272](https://github.com/consolia-io/ui/blob/main/src/types.ts#L272)

Whether to render a smaller version of the drawer

***

### title

> **title**: `string`

Defined in: [types.ts:274](https://github.com/consolia-io/ui/blob/main/src/types.ts#L274)

Title text displayed in the drawer header

***

### trigger?

> `optional` **trigger**: `ReactNode`

Defined in: [types.ts:276](https://github.com/consolia-io/ui/blob/main/src/types.ts#L276)

Element that triggers the drawer to open

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [types.ts:278](https://github.com/consolia-io/ui/blob/main/src/types.ts#L278)

Custom CSS styles for the trigger element

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [types.ts:280](https://github.com/consolia-io/ui/blob/main/src/types.ts#L280)

Custom CSS styles for the drawer wrapper
