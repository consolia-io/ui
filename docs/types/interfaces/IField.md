[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IField

# Interface: IField

Defined in: [types.ts:369](https://github.com/consolia-io/ui/blob/main/src/types.ts#L369)

Field component props - multi-line textarea input with validation

## Example

```tsx
<Field
  name="description"
  placeholder="Enter description..."
  rows={4}
  error={hasError}
  errorMessage="Description is required"
  submitFunction={handleSubmit}
/>
```

## Extends

- `ComponentPropsWithRef`\<`"textarea"`\>

## Properties

### copy?

> `optional` **copy**: `boolean`

Defined in: [types.ts:371](https://github.com/consolia-io/ui/blob/main/src/types.ts#L371)

Whether to show a copy button for the field value

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:373](https://github.com/consolia-io/ui/blob/main/src/types.ts#L373)

Custom CSS styles

***

### error?

> `optional` **error**: `boolean`

Defined in: [types.ts:375](https://github.com/consolia-io/ui/blob/main/src/types.ts#L375)

Whether the field is in an error state

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [types.ts:377](https://github.com/consolia-io/ui/blob/main/src/types.ts#L377)

Error message to display below the field

***

### id?

> `optional` **id**: `string`

Defined in: [types.ts:379](https://github.com/consolia-io/ui/blob/main/src/types.ts#L379)

HTML id attribute for the field

#### Overrides

`ComponentPropsWithRef.id`

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:381](https://github.com/consolia-io/ui/blob/main/src/types.ts#L381)

Whether to show a loading state

***

### name

> **name**: `string`

Defined in: [types.ts:383](https://github.com/consolia-io/ui/blob/main/src/types.ts#L383)

Name attribute for the field (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [types.ts:385](https://github.com/consolia-io/ui/blob/main/src/types.ts#L385)

Whether to show a reset button

***

### resetFunction()?

> `optional` **resetFunction**: () => `void`

Defined in: [types.ts:387](https://github.com/consolia-io/ui/blob/main/src/types.ts#L387)

Function to call when reset button is clicked

#### Returns

`void`

***

### submit?

> `optional` **submit**: `string`

Defined in: [types.ts:389](https://github.com/consolia-io/ui/blob/main/src/types.ts#L389)

Text for the submit button

***

### submitFunction()?

> `optional` **submitFunction**: (`value`) => `unknown`

Defined in: [types.ts:391](https://github.com/consolia-io/ui/blob/main/src/types.ts#L391)

Function to call when submit action is triggered

#### Parameters

##### value

`string`

#### Returns

`unknown`

***

### submitValid()?

> `optional` **submitValid**: (`value`) => `boolean`

Defined in: [types.ts:393](https://github.com/consolia-io/ui/blob/main/src/types.ts#L393)

Function to validate field value before submit

#### Parameters

##### value

`string`

#### Returns

`boolean`

***

### success?

> `optional` **success**: `boolean`

Defined in: [types.ts:395](https://github.com/consolia-io/ui/blob/main/src/types.ts#L395)

Whether the field is in a success state

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [types.ts:397](https://github.com/consolia-io/ui/blob/main/src/types.ts#L397)

Success message to display below the field

***

### warning?

> `optional` **warning**: `boolean`

Defined in: [types.ts:399](https://github.com/consolia-io/ui/blob/main/src/types.ts#L399)

Whether the field is in a warning state

***

### warningMessage?

> `optional` **warningMessage**: `string`

Defined in: [types.ts:401](https://github.com/consolia-io/ui/blob/main/src/types.ts#L401)

Warning message to display below the field

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [types.ts:403](https://github.com/consolia-io/ui/blob/main/src/types.ts#L403)

Width of the field
