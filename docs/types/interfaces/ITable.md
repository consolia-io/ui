[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / ITable

# Interface: ITable

Defined in: [types.ts:882](https://github.com/consolia-io/ui/blob/main/src/types.ts#L882)

Table component props - data table with sorting, pagination, and nested rows

## Example

```tsx
<Table
  columns={[
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", align: "left" }
  ]}
  rows={[
    { id: "1", cells: { name: "John", email: "john@example.com" } },
    { id: "2", cells: { name: "Jane", email: "jane@example.com" } }
  ]}
  pagination
/>
```

## Properties

### columns

> **columns**: `object`[]

Defined in: [types.ts:884](https://github.com/consolia-io/ui/blob/main/src/types.ts#L884)

Column definitions with keys, labels, and options

#### key

> **key**: `string`

#### label

> **label**: `string`

#### align?

> `optional` **align**: `"left"` \| `"right"` \| `"center"`

#### width?

> `optional` **width**: `string`

#### sortable?

> `optional` **sortable**: `boolean`

***

### rows

> **rows**: `object`[]

Defined in: [types.ts:892](https://github.com/consolia-io/ui/blob/main/src/types.ts#L892)

Row data with cells mapped to column keys

#### id

> **id**: `string`

#### cells

> **cells**: `Record`\<`string`, `ReactNode`\>

#### subRows?

> `optional` **subRows**: `object`[]

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:901](https://github.com/consolia-io/ui/blob/main/src/types.ts#L901)

Custom CSS styles

***

### error?

> `optional` **error**: `string`

Defined in: [types.ts:903](https://github.com/consolia-io/ui/blob/main/src/types.ts#L903)

Error message to display

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:905](https://github.com/consolia-io/ui/blob/main/src/types.ts#L905)

Whether the table is in a loading state

***

### pagination?

> `optional` **pagination**: `boolean`

Defined in: [types.ts:907](https://github.com/consolia-io/ui/blob/main/src/types.ts#L907)

Whether to show pagination controls

***

### kbd?

> `optional` **kbd**: `boolean`

Defined in: [types.ts:909](https://github.com/consolia-io/ui/blob/main/src/types.ts#L909)

Whether to enable keyboard navigation
