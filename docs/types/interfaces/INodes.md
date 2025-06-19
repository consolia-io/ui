[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / INodes

# Interface: INodes

Defined in: [types.ts:639](https://github.com/consolia-io/ui/blob/main/src/types.ts#L639)

Nodes component props - hierarchical node tree visualization

## Example

```tsx
<Nodes
  parent={<Text>Root Node</Text>}
  nodes={[
    { children: <Text>Child 1</Text>, color: "blue" },
    { children: <Text>Child 2</Text>, color: "purple" }
  ]}
  height={300}
/>
```

## Properties

### nodes

> **nodes**: `object`[]

Defined in: [types.ts:641](https://github.com/consolia-io/ui/blob/main/src/types.ts#L641)

Array of child nodes to display

#### children

> **children**: `ReactNode`

#### color?

> `optional` **color**: `"orange"` \| `"purple"` \| `"yellow"` \| `"blue"`

***

### parent

> **parent**: `ReactNode`

Defined in: [types.ts:646](https://github.com/consolia-io/ui/blob/main/src/types.ts#L646)

Parent/root node element

***

### height?

> `optional` **height**: `number`

Defined in: [types.ts:648](https://github.com/consolia-io/ui/blob/main/src/types.ts#L648)

Height of the nodes container in pixels
