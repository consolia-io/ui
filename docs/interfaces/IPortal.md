[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IPortal

# Interface: IPortal

Defined in: [types.ts:1032](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1032)

Portal component props - renders children in a portal (outside normal DOM tree)

## Example

```tsx
<Portal disabled={false}>
  <Modal>Content rendered in portal</Modal>
</Portal>
```

## Properties

### children?

> `optional` **children**: `ReactNode`

Defined in: [types.ts:1034](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1034)

Content to render in the portal

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:1036](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1036)

Whether to disable portal rendering
