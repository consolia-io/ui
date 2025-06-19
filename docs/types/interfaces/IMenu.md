[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IMenu

# Interface: IMenu

Defined in: [types.ts:600](https://github.com/consolia-io/ui/blob/main/src/types.ts#L600)

Menu component props - dropdown menu with nested options

## Example

```tsx
<Menu
  trigger={<Button>Menu</Button>}
  options={[
    { label: "Edit", value: "edit", icon: <EditIcon /> },
    { label: "Delete", value: "delete", icon: <DeleteIcon /> }
  ]}
  onSelection={(value, label) => console.log(value, label)}
/>
```

## Properties

### children?

> `optional` **children**: `ReactNode`

Defined in: [types.ts:602](https://github.com/consolia-io/ui/blob/main/src/types.ts#L602)

Additional content to render in the menu

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:604](https://github.com/consolia-io/ui/blob/main/src/types.ts#L604)

Custom CSS styles

***

### initial?

> `optional` **initial**: `string`

Defined in: [types.ts:606](https://github.com/consolia-io/ui/blob/main/src/types.ts#L606)

Initially selected option value

***

### onSelection()?

> `optional` **onSelection**: (`value`, `label`) => `void`

Defined in: [types.ts:608](https://github.com/consolia-io/ui/blob/main/src/types.ts#L608)

Callback when menu option is selected

#### Parameters

##### value

`string`

##### label

`string`

#### Returns

`void`

***

### options

> **options**: `object`[]

Defined in: [types.ts:610](https://github.com/consolia-io/ui/blob/main/src/types.ts#L610)

Array of menu options with optional sub-menus

#### icon?

> `optional` **icon**: `ReactNode`

#### label

> **label**: `string`

#### sub?

> `optional` **sub**: `object`[]

#### value

> **value**: `string`

***

### trigger

> **trigger**: `ReactNode`

Defined in: [types.ts:621](https://github.com/consolia-io/ui/blob/main/src/types.ts#L621)

Element that triggers the menu
