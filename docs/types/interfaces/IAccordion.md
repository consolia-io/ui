[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IAccordion

# Interface: IAccordion

Defined in: [types.ts:1143](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1143)

Accordion component props - collapsible content sections with optional multiple expansion

## Example

```tsx
<Accordion
  allowMultiple
  options={[
    {
      label: "Section 1",
      value: "section1",
      children: <Text>Content for section 1</Text>,
      icon: <ChevronIcon />
    },
    {
      label: "Section 2",
      value: "section2",
      children: <Text>Content for section 2</Text>,
      large: true
    }
  ]}
  onToggle={(value, isOpen) => console.log(value, isOpen)}
/>
```

## Properties

### allowMultiple?

> `optional` **allowMultiple**: `boolean`

Defined in: [types.ts:1145](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1145)

Whether multiple sections can be open simultaneously

***

### initial?

> `optional` **initial**: `string`

Defined in: [types.ts:1147](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1147)

Initially opened section value

***

### onToggle()?

> `optional` **onToggle**: (`value`, `isOpen`) => `void`

Defined in: [types.ts:1149](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1149)

Callback when section is toggled

#### Parameters

##### value

`string`

##### isOpen

`boolean`

#### Returns

`void`

***

### options

> **options**: `object`[]

Defined in: [types.ts:1151](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1151)

Array of accordion sections

#### children

> **children**: `ReactNode`

#### icon?

> `optional` **icon**: `ReactNode`

#### label

> **label**: `string`

#### value

> **value**: `string`

#### large?

> `optional` **large**: `boolean`

***

### mode?

> `optional` **mode**: `"grid"` \| `"list"`

Defined in: [types.ts:1159](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1159)

Display mode: 'list' (default) or 'grid'
