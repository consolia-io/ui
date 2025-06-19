[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / ICalendar

# Interface: ICalendar

Defined in: [types.ts:206](https://github.com/consolia-io/ui/blob/main/src/types.ts#L206)

Calendar component props - date picker with range and single selection modes

## Example

```tsx
<Calendar
  mode="range"
  minDate="2024-01-01"
  maxDate="2024-12-31"
  onSelection={({ startDate, endDate }) => console.log(startDate, endDate)}
/>
```

## Properties

### blockedDates?

> `optional` **blockedDates**: `string`[]

Defined in: [types.ts:208](https://github.com/consolia-io/ui/blob/main/src/types.ts#L208)

Array of date strings that should be disabled/blocked

***

### description?

> `optional` **description**: `string`

Defined in: [types.ts:210](https://github.com/consolia-io/ui/blob/main/src/types.ts#L210)

Description text to display below the calendar

***

### endDate?

> `optional` **endDate**: `string`

Defined in: [types.ts:212](https://github.com/consolia-io/ui/blob/main/src/types.ts#L212)

End date for range selection (ISO string)

***

### maxDate?

> `optional` **maxDate**: `string`

Defined in: [types.ts:214](https://github.com/consolia-io/ui/blob/main/src/types.ts#L214)

Maximum selectable date (ISO string)

***

### maxLength?

> `optional` **maxLength**: `number`

Defined in: [types.ts:216](https://github.com/consolia-io/ui/blob/main/src/types.ts#L216)

Maximum number of days that can be selected in range mode

***

### minDate?

> `optional` **minDate**: `string`

Defined in: [types.ts:218](https://github.com/consolia-io/ui/blob/main/src/types.ts#L218)

Minimum selectable date (ISO string)

***

### minLength?

> `optional` **minLength**: `number`

Defined in: [types.ts:220](https://github.com/consolia-io/ui/blob/main/src/types.ts#L220)

Minimum number of days that must be selected in range mode

***

### mode?

> `optional` **mode**: `"range"` \| `"single"`

Defined in: [types.ts:222](https://github.com/consolia-io/ui/blob/main/src/types.ts#L222)

Calendar selection mode

***

### onSelection()

> **onSelection**: (`dates`) => `void`

Defined in: [types.ts:224](https://github.com/consolia-io/ui/blob/main/src/types.ts#L224)

Callback when dates are selected

#### Parameters

##### dates

###### endDate

`string`

###### startDate

`string`

#### Returns

`void`

***

### onViewChange()?

> `optional` **onViewChange**: (`dates`) => `void`

Defined in: [types.ts:226](https://github.com/consolia-io/ui/blob/main/src/types.ts#L226)

Callback when the calendar view changes

#### Parameters

##### dates

###### endDate

`string`

###### startDate

`string`

#### Returns

`void`

***

### startDate?

> `optional` **startDate**: `string`

Defined in: [types.ts:228](https://github.com/consolia-io/ui/blob/main/src/types.ts#L228)

Start date for range selection (ISO string)

***

### viewDate?

> `optional` **viewDate**: `string`

Defined in: [types.ts:230](https://github.com/consolia-io/ui/blob/main/src/types.ts#L230)

Currently viewed date (ISO string)
