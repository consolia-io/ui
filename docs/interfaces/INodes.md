[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / INodes

# Interface: INodes

Defined in: [types.ts:624](https://github.com/consolia-io/ui/blob/main/src/types.ts#L624)

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

Defined in: [types.ts:626](https://github.com/consolia-io/ui/blob/main/src/types.ts#L626)

Array of child nodes to display

#### children

> **children**: `ReactNode`

#### color?

> `optional` **color**: `"blue"` \| `"orange"` \| `"purple"` \| `"yellow"`

***

### parent

> **parent**: `ReactNode`

Defined in: [types.ts:631](https://github.com/consolia-io/ui/blob/main/src/types.ts#L631)

Parent/root node element

***

### height?

> `optional` **height**: `number`

Defined in: [types.ts:633](https://github.com/consolia-io/ui/blob/main/src/types.ts#L633)

Height of the nodes container in pixels
