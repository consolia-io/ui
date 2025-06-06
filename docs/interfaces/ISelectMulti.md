[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / ISelectMulti

# Interface: ISelectMulti

Defined in: [types.ts:762](https://github.com/consolia-io/ui/blob/main/src/types.ts#L762)

SelectMulti component props - multi-selection dropdown with limit and reset options

## Example

```tsx
<SelectMulti
  trigger={<Button>Select Multiple</Button>}
  options={[
    { label: "Tag 1", value: "tag1" },
    { label: "Tag 2", value: "tag2" },
    { label: "Tag 3", value: "tag3" }
  ]}
  onSelection={(selections) => console.log(selections)}
  limit={3}
  reset
/>
```

## Extends

- `Omit`\<[`ISelect`](ISelect.md), `"onSelection"` \| `"initial"` \| `"last"`\>

## Properties

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:706](https://github.com/consolia-io/ui/blob/main/src/types.ts#L706)

Custom CSS styles

#### Inherited from

`Omit.css`

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:708](https://github.com/consolia-io/ui/blob/main/src/types.ts#L708)

Whether the select is disabled

#### Inherited from

`Omit.disabled`

***

### filter?

> `optional` **filter**: `boolean`

Defined in: [types.ts:710](https://github.com/consolia-io/ui/blob/main/src/types.ts#L710)

Whether to show a filter/search input

#### Inherited from

`Omit.filter`

***

### height?

> `optional` **height**: `string` \| `number`

Defined in: [types.ts:712](https://github.com/consolia-io/ui/blob/main/src/types.ts#L712)

Height of the dropdown

#### Inherited from

`Omit.height`

***

### horizontal?

> `optional` **horizontal**: `"left"` \| `"right"` \| `"center"`

Defined in: [types.ts:714](https://github.com/consolia-io/ui/blob/main/src/types.ts#L714)

Horizontal alignment of the dropdown

#### Inherited from

`Omit.horizontal`

***

### label?

> `optional` **label**: `string`

Defined in: [types.ts:718](https://github.com/consolia-io/ui/blob/main/src/types.ts#L718)

Label for the select component

#### Inherited from

`Omit.label`

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:722](https://github.com/consolia-io/ui/blob/main/src/types.ts#L722)

Whether to show a loading state

#### Inherited from

`Omit.loading`

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

#### Inherited from

`Omit.options`

***

### trigger

> **trigger**: `ReactNode`

Defined in: [types.ts:733](https://github.com/consolia-io/ui/blob/main/src/types.ts#L733)

Element that triggers the dropdown

#### Inherited from

`Omit.trigger`

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [types.ts:735](https://github.com/consolia-io/ui/blob/main/src/types.ts#L735)

Custom CSS styles for the trigger

#### Inherited from

`Omit.triggerCSS`

***

### vertical?

> `optional` **vertical**: `"bottom"` \| `"top"`

Defined in: [types.ts:737](https://github.com/consolia-io/ui/blob/main/src/types.ts#L737)

Vertical positioning of the dropdown

#### Inherited from

`Omit.vertical`

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [types.ts:739](https://github.com/consolia-io/ui/blob/main/src/types.ts#L739)

Width of the dropdown

#### Inherited from

`Omit.width`

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [types.ts:741](https://github.com/consolia-io/ui/blob/main/src/types.ts#L741)

Custom CSS styles for the dropdown wrapper

#### Inherited from

`Omit.wrapperCSS`

***

### initial?

> `optional` **initial**: `object`[]

Defined in: [types.ts:764](https://github.com/consolia-io/ui/blob/main/src/types.ts#L764)

Initially selected options

#### label

> **label**: `string`

#### value

> **value**: `string`

***

### limit?

> `optional` **limit**: `number`

Defined in: [types.ts:766](https://github.com/consolia-io/ui/blob/main/src/types.ts#L766)

Maximum number of selections allowed

***

### onSelection()?

> `optional` **onSelection**: (`value`) => `void`

Defined in: [types.ts:768](https://github.com/consolia-io/ui/blob/main/src/types.ts#L768)

Callback when selections change

#### Parameters

##### value

`object`[]

#### Returns

`void`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [types.ts:770](https://github.com/consolia-io/ui/blob/main/src/types.ts#L770)

Whether to show a reset/clear all button
