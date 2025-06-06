[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / ISelect

# Interface: ISelect

Defined in: [types.ts:704](https://github.com/consolia-io/ui/blob/main/src/types.ts#L704)

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

Defined in: [types.ts:706](https://github.com/consolia-io/ui/blob/main/src/types.ts#L706)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:708](https://github.com/consolia-io/ui/blob/main/src/types.ts#L708)

Whether the select is disabled

***

### filter?

> `optional` **filter**: `boolean`

Defined in: [types.ts:710](https://github.com/consolia-io/ui/blob/main/src/types.ts#L710)

Whether to show a filter/search input

***

### height?

> `optional` **height**: `string` \| `number`

Defined in: [types.ts:712](https://github.com/consolia-io/ui/blob/main/src/types.ts#L712)

Height of the dropdown

***

### horizontal?

> `optional` **horizontal**: `"left"` \| `"right"` \| `"center"`

Defined in: [types.ts:714](https://github.com/consolia-io/ui/blob/main/src/types.ts#L714)

Horizontal alignment of the dropdown

***

### initial?

> `optional` **initial**: `string`

Defined in: [types.ts:716](https://github.com/consolia-io/ui/blob/main/src/types.ts#L716)

Initially selected option value

***

### label?

> `optional` **label**: `string`

Defined in: [types.ts:718](https://github.com/consolia-io/ui/blob/main/src/types.ts#L718)

Label for the select component

***

### last?

> `optional` **last**: `boolean`

Defined in: [types.ts:720](https://github.com/consolia-io/ui/blob/main/src/types.ts#L720)

Whether this is the last select in a group (affects styling)

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:722](https://github.com/consolia-io/ui/blob/main/src/types.ts#L722)

Whether to show a loading state

***

### onSelection()?

> `optional` **onSelection**: (`value`, `label`) => `void`

Defined in: [types.ts:724](https://github.com/consolia-io/ui/blob/main/src/types.ts#L724)

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

Defined in: [types.ts:726](https://github.com/consolia-io/ui/blob/main/src/types.ts#L726)

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

Defined in: [types.ts:733](https://github.com/consolia-io/ui/blob/main/src/types.ts#L733)

Element that triggers the dropdown

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [types.ts:735](https://github.com/consolia-io/ui/blob/main/src/types.ts#L735)

Custom CSS styles for the trigger

***

### vertical?

> `optional` **vertical**: `"bottom"` \| `"top"`

Defined in: [types.ts:737](https://github.com/consolia-io/ui/blob/main/src/types.ts#L737)

Vertical positioning of the dropdown

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [types.ts:739](https://github.com/consolia-io/ui/blob/main/src/types.ts#L739)

Width of the dropdown

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [types.ts:741](https://github.com/consolia-io/ui/blob/main/src/types.ts#L741)

Custom CSS styles for the dropdown wrapper
