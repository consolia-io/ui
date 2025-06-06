[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / ITabs

# Interface: ITabs

Defined in: [types.ts:1077](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1077)

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

Defined in: [types.ts:1079](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1079)

Initially selected tab value

***

### onSelection()?

> `optional` **onSelection**: (`value`) => `void`

Defined in: [types.ts:1081](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1081)

Callback when tab is selected

#### Parameters

##### value

`string`

#### Returns

`void`

***

### options

> **options**: `object`[]

Defined in: [types.ts:1083](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1083)

Array of tab options

#### icon?

> `optional` **icon**: `ReactNode`

#### label

> **label**: `string`

#### value

> **value**: `string`
