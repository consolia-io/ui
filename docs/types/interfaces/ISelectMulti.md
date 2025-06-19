[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / ISelectMulti

# Interface: ISelectMulti

Defined in: [types.ts:777](https://github.com/consolia-io/ui/blob/main/src/types.ts#L777)

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

Defined in: [types.ts:721](https://github.com/consolia-io/ui/blob/main/src/types.ts#L721)

Custom CSS styles

#### Inherited from

`Omit.css`

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:723](https://github.com/consolia-io/ui/blob/main/src/types.ts#L723)

Whether the select is disabled

#### Inherited from

`Omit.disabled`

***

### filter?

> `optional` **filter**: `boolean`

Defined in: [types.ts:725](https://github.com/consolia-io/ui/blob/main/src/types.ts#L725)

Whether to show a filter/search input

#### Inherited from

`Omit.filter`

***

### height?

> `optional` **height**: `string` \| `number`

Defined in: [types.ts:727](https://github.com/consolia-io/ui/blob/main/src/types.ts#L727)

Height of the dropdown

#### Inherited from

`Omit.height`

***

### horizontal?

> `optional` **horizontal**: `"left"` \| `"right"` \| `"center"`

Defined in: [types.ts:729](https://github.com/consolia-io/ui/blob/main/src/types.ts#L729)

Horizontal alignment of the dropdown

#### Inherited from

`Omit.horizontal`

***

### label?

> `optional` **label**: `string`

Defined in: [types.ts:733](https://github.com/consolia-io/ui/blob/main/src/types.ts#L733)

Label for the select component

#### Inherited from

`Omit.label`

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:737](https://github.com/consolia-io/ui/blob/main/src/types.ts#L737)

Whether to show a loading state

#### Inherited from

`Omit.loading`

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

#### Inherited from

`Omit.options`

***

### trigger

> **trigger**: `ReactNode`

Defined in: [types.ts:748](https://github.com/consolia-io/ui/blob/main/src/types.ts#L748)

Element that triggers the dropdown

#### Inherited from

`Omit.trigger`

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [types.ts:750](https://github.com/consolia-io/ui/blob/main/src/types.ts#L750)

Custom CSS styles for the trigger

#### Inherited from

`Omit.triggerCSS`

***

### vertical?

> `optional` **vertical**: `"bottom"` \| `"top"`

Defined in: [types.ts:752](https://github.com/consolia-io/ui/blob/main/src/types.ts#L752)

Vertical positioning of the dropdown

#### Inherited from

`Omit.vertical`

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [types.ts:754](https://github.com/consolia-io/ui/blob/main/src/types.ts#L754)

Width of the dropdown

#### Inherited from

`Omit.width`

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [types.ts:756](https://github.com/consolia-io/ui/blob/main/src/types.ts#L756)

Custom CSS styles for the dropdown wrapper

#### Inherited from

`Omit.wrapperCSS`

***

### initial?

> `optional` **initial**: `object`[]

Defined in: [types.ts:779](https://github.com/consolia-io/ui/blob/main/src/types.ts#L779)

Initially selected options

#### label

> **label**: `string`

#### value

> **value**: `string`

***

### limit?

> `optional` **limit**: `number`

Defined in: [types.ts:781](https://github.com/consolia-io/ui/blob/main/src/types.ts#L781)

Maximum number of selections allowed

***

### onSelection()?

> `optional` **onSelection**: (`value`) => `void`

Defined in: [types.ts:783](https://github.com/consolia-io/ui/blob/main/src/types.ts#L783)

Callback when selections change

#### Parameters

##### value

`object`[]

#### Returns

`void`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [types.ts:785](https://github.com/consolia-io/ui/blob/main/src/types.ts#L785)

Whether to show a reset/clear all button
