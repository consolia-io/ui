[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IPortal

# Interface: IPortal

Defined in: [types.ts:1052](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1052)

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

Defined in: [types.ts:1054](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1054)

Content to render in the portal

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:1056](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1056)

Whether to disable portal rendering
