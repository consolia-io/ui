[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / ICalendar

# Interface: ICalendar

Defined in: [types.ts:191](https://github.com/consolia-io/ui/blob/main/src/types.ts#L191)

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

Defined in: [types.ts:193](https://github.com/consolia-io/ui/blob/main/src/types.ts#L193)

Array of date strings that should be disabled/blocked

***

### description?

> `optional` **description**: `string`

Defined in: [types.ts:195](https://github.com/consolia-io/ui/blob/main/src/types.ts#L195)

Description text to display below the calendar

***

### endDate?

> `optional` **endDate**: `string`

Defined in: [types.ts:197](https://github.com/consolia-io/ui/blob/main/src/types.ts#L197)

End date for range selection (ISO string)

***

### maxDate?

> `optional` **maxDate**: `string`

Defined in: [types.ts:199](https://github.com/consolia-io/ui/blob/main/src/types.ts#L199)

Maximum selectable date (ISO string)

***

### maxLength?

> `optional` **maxLength**: `number`

Defined in: [types.ts:201](https://github.com/consolia-io/ui/blob/main/src/types.ts#L201)

Maximum number of days that can be selected in range mode

***

### minDate?

> `optional` **minDate**: `string`

Defined in: [types.ts:203](https://github.com/consolia-io/ui/blob/main/src/types.ts#L203)

Minimum selectable date (ISO string)

***

### minLength?

> `optional` **minLength**: `number`

Defined in: [types.ts:205](https://github.com/consolia-io/ui/blob/main/src/types.ts#L205)

Minimum number of days that must be selected in range mode

***

### mode?

> `optional` **mode**: `"range"` \| `"single"`

Defined in: [types.ts:207](https://github.com/consolia-io/ui/blob/main/src/types.ts#L207)

Calendar selection mode

***

### onSelection()

> **onSelection**: (`dates`) => `void`

Defined in: [types.ts:209](https://github.com/consolia-io/ui/blob/main/src/types.ts#L209)

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

Defined in: [types.ts:211](https://github.com/consolia-io/ui/blob/main/src/types.ts#L211)

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

Defined in: [types.ts:213](https://github.com/consolia-io/ui/blob/main/src/types.ts#L213)

Start date for range selection (ISO string)

***

### viewDate?

> `optional` **viewDate**: `string`

Defined in: [types.ts:215](https://github.com/consolia-io/ui/blob/main/src/types.ts#L215)

Currently viewed date (ISO string)
