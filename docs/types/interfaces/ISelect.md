[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / ISelect

# Interface: ISelect

Defined in: [types.ts:719](https://github.com/consolia-io/ui/blob/main/src/types.ts#L719)

Select component props - dropdown selection with filtering and positioning options

## Example

```tsx
<Select
  trigger={<Button>Select Option</Button>}
  options={[
    { label: "Option 1", value: "opt1", icon: <Icon1 /> },
    { label: "Option 2", value: "opt2", icon: <Icon2 /> }
  ]}
  onSelection={(value, label) => console.log(value, label)}
  filter
  horizontal="left"
/>
```

## Properties

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:721](https://github.com/consolia-io/ui/blob/main/src/types.ts#L721)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:723](https://github.com/consolia-io/ui/blob/main/src/types.ts#L723)

Whether the select is disabled

***

### filter?

> `optional` **filter**: `boolean`

Defined in: [types.ts:725](https://github.com/consolia-io/ui/blob/main/src/types.ts#L725)

Whether to show a filter/search input

***

### height?

> `optional` **height**: `string` \| `number`

Defined in: [types.ts:727](https://github.com/consolia-io/ui/blob/main/src/types.ts#L727)

Height of the dropdown

***

### horizontal?

> `optional` **horizontal**: `"left"` \| `"right"` \| `"center"`

Defined in: [types.ts:729](https://github.com/consolia-io/ui/blob/main/src/types.ts#L729)

Horizontal alignment of the dropdown

***

### initial?

> `optional` **initial**: `string`

Defined in: [types.ts:731](https://github.com/consolia-io/ui/blob/main/src/types.ts#L731)

Initially selected option value

***

### label?

> `optional` **label**: `string`

Defined in: [types.ts:733](https://github.com/consolia-io/ui/blob/main/src/types.ts#L733)

Label for the select component

***

### last?

> `optional` **last**: `boolean`

Defined in: [types.ts:735](https://github.com/consolia-io/ui/blob/main/src/types.ts#L735)

Whether this is the last select in a group (affects styling)

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:737](https://github.com/consolia-io/ui/blob/main/src/types.ts#L737)

Whether to show a loading state

***

### onSelection()?

> `optional` **onSelection**: (`value`, `label`) => `void`

Defined in: [types.ts:739](https://github.com/consolia-io/ui/blob/main/src/types.ts#L739)

Callback when an option is selected

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

Defined in: [types.ts:741](https://github.com/consolia-io/ui/blob/main/src/types.ts#L741)

Array of selectable options

#### icon?

> `optional` **icon**: `ReactNode`

#### iconPosition?

> `optional` **iconPosition**: `"left"` \| `"right"`

#### label

> **label**: `string`

#### value

> **value**: `string`

***

### trigger

> **trigger**: `ReactNode`

Defined in: [types.ts:748](https://github.com/consolia-io/ui/blob/main/src/types.ts#L748)

Element that triggers the dropdown

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [types.ts:750](https://github.com/consolia-io/ui/blob/main/src/types.ts#L750)

Custom CSS styles for the trigger

***

### vertical?

> `optional` **vertical**: `"bottom"` \| `"top"`

Defined in: [types.ts:752](https://github.com/consolia-io/ui/blob/main/src/types.ts#L752)

Vertical positioning of the dropdown

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [types.ts:754](https://github.com/consolia-io/ui/blob/main/src/types.ts#L754)

Width of the dropdown

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [types.ts:756](https://github.com/consolia-io/ui/blob/main/src/types.ts#L756)

Custom CSS styles for the dropdown wrapper
