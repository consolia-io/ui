[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / ICalendarMonths

# Interface: ICalendarMonths

Defined in: [types.ts:231](https://github.com/consolia-io/ui/blob/main/src/types.ts#L231)

CalendarMonths component props - month/year picker interface

## Example

```tsx
<CalendarMonths
  selectedDate="2024-06-01"
  onSelection={(date) => console.log('Selected:', date)}
  minDate="2020-01-01"
  maxDate="2030-12-31"
/>
```

## Properties

### maxDate?

> `optional` **maxDate**: `string`

Defined in: [types.ts:233](https://github.com/consolia-io/ui/blob/main/src/types.ts#L233)

Maximum selectable date (ISO string)

***

### minDate?

> `optional` **minDate**: `string`

Defined in: [types.ts:235](https://github.com/consolia-io/ui/blob/main/src/types.ts#L235)

Minimum selectable date (ISO string)

***

### onSelection()

> **onSelection**: (`date`) => `void`

Defined in: [types.ts:237](https://github.com/consolia-io/ui/blob/main/src/types.ts#L237)

Callback when a month/year is selected

#### Parameters

##### date

`string`

#### Returns

`void`

***

### selectedDate?

> `optional` **selectedDate**: `string`

Defined in: [types.ts:239](https://github.com/consolia-io/ui/blob/main/src/types.ts#L239)

Currently selected date (ISO string)

***

### viewDate?

> `optional` **viewDate**: `string`

Defined in: [types.ts:241](https://github.com/consolia-io/ui/blob/main/src/types.ts#L241)

Currently viewed date for navigation (ISO string)
