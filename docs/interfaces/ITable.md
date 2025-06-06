[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / ITable

# Interface: ITable

Defined in: [types.ts:866](https://github.com/consolia-io/ui/blob/main/src/types.ts#L866)

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

Defined in: [types.ts:868](https://github.com/consolia-io/ui/blob/main/src/types.ts#L868)

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

Defined in: [types.ts:876](https://github.com/consolia-io/ui/blob/main/src/types.ts#L876)

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

Defined in: [types.ts:885](https://github.com/consolia-io/ui/blob/main/src/types.ts#L885)

Custom CSS styles

***

### error?

> `optional` **error**: `string`

Defined in: [types.ts:887](https://github.com/consolia-io/ui/blob/main/src/types.ts#L887)

Error message to display

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:889](https://github.com/consolia-io/ui/blob/main/src/types.ts#L889)

Whether the table is in a loading state

***

### pagination?

> `optional` **pagination**: `boolean`

Defined in: [types.ts:891](https://github.com/consolia-io/ui/blob/main/src/types.ts#L891)

Whether to show pagination controls

***

### kbd?

> `optional` **kbd**: `boolean`

Defined in: [types.ts:893](https://github.com/consolia-io/ui/blob/main/src/types.ts#L893)

Whether to enable keyboard navigation
