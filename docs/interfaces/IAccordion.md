[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IAccordion

# Interface: IAccordion

Defined in: [types.ts:1115](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1115)

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

Defined in: [types.ts:1117](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1117)

Whether multiple sections can be open simultaneously

***

### initial?

> `optional` **initial**: `string`

Defined in: [types.ts:1119](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1119)

Initially opened section value

***

### onToggle()?

> `optional` **onToggle**: (`value`, `isOpen`) => `void`

Defined in: [types.ts:1121](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1121)

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

Defined in: [types.ts:1123](https://github.com/consolia-io/ui/blob/main/src/types.ts#L1123)

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
