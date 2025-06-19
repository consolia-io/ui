[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / ICalendarMonths

# Interface: ICalendarMonths

Defined in: [types.ts:246](https://github.com/consolia-io/ui/blob/main/src/types.ts#L246)

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

Defined in: [types.ts:248](https://github.com/consolia-io/ui/blob/main/src/types.ts#L248)

Maximum selectable date (ISO string)

***

### minDate?

> `optional` **minDate**: `string`

Defined in: [types.ts:250](https://github.com/consolia-io/ui/blob/main/src/types.ts#L250)

Minimum selectable date (ISO string)

***

### onSelection()

> **onSelection**: (`date`) => `void`

Defined in: [types.ts:252](https://github.com/consolia-io/ui/blob/main/src/types.ts#L252)

Callback when a month/year is selected

#### Parameters

##### date

`string`

#### Returns

`void`

***

### selectedDate?

> `optional` **selectedDate**: `string`

Defined in: [types.ts:254](https://github.com/consolia-io/ui/blob/main/src/types.ts#L254)

Currently selected date (ISO string)

***

### viewDate?

> `optional` **viewDate**: `string`

Defined in: [types.ts:256](https://github.com/consolia-io/ui/blob/main/src/types.ts#L256)

Currently viewed date for navigation (ISO string)
