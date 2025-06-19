[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / ITabs

# Interface: ITabs

Defined in: [types.ts:1101](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1101)

Tabs component props - tabbed interface for switching between content panels

## Example

```tsx
<Tabs
  options={[
    { label: "Home", value: "home", icon: <HomeIcon /> },
    { label: "Profile", value: "profile", icon: <UserIcon /> }
  ]}
  initial="home"
  onSelection={(value) => console.log('Selected tab:', value)}
/>
```

## Properties

### initial?

> `optional` **initial**: `string`

Defined in: [types.ts:1103](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1103)

Initially selected tab value

***

### small?

> `optional` **small**: `boolean`

Defined in: [types.ts:1105](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1105)

Whether to use small tabs

***

### onSelection()?

> `optional` **onSelection**: (`value`) => `void`

Defined in: [types.ts:1107](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1107)

Callback when tab is selected

#### Parameters

##### value

`string`

#### Returns

`void`

***

### options

> **options**: `object`[]

Defined in: [types.ts:1109](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1109)

Array of tab options

#### icon?

> `optional` **icon**: `ReactNode`

#### label

> **label**: `string`

#### value

> **value**: `string`

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:1115](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1115)

Custom CSS styles
