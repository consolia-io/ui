[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IField

# Interface: IField

Defined in: [types.ts:354](https://github.com/consolia-io/ui/blob/main/src/types.ts#L354)

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

Defined in: [types.ts:356](https://github.com/consolia-io/ui/blob/main/src/types.ts#L356)

Whether to show a copy button for the field value

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:358](https://github.com/consolia-io/ui/blob/main/src/types.ts#L358)

Custom CSS styles

***

### error?

> `optional` **error**: `boolean`

Defined in: [types.ts:360](https://github.com/consolia-io/ui/blob/main/src/types.ts#L360)

Whether the field is in an error state

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [types.ts:362](https://github.com/consolia-io/ui/blob/main/src/types.ts#L362)

Error message to display below the field

***

### id?

> `optional` **id**: `string`

Defined in: [types.ts:364](https://github.com/consolia-io/ui/blob/main/src/types.ts#L364)

HTML id attribute for the field

#### Overrides

`ComponentPropsWithRef.id`

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:366](https://github.com/consolia-io/ui/blob/main/src/types.ts#L366)

Whether to show a loading state

***

### name

> **name**: `string`

Defined in: [types.ts:368](https://github.com/consolia-io/ui/blob/main/src/types.ts#L368)

Name attribute for the field (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [types.ts:370](https://github.com/consolia-io/ui/blob/main/src/types.ts#L370)

Whether to show a reset button

***

### resetFunction()?

> `optional` **resetFunction**: () => `void`

Defined in: [types.ts:372](https://github.com/consolia-io/ui/blob/main/src/types.ts#L372)

Function to call when reset button is clicked

#### Returns

`void`

***

### submit?

> `optional` **submit**: `string`

Defined in: [types.ts:374](https://github.com/consolia-io/ui/blob/main/src/types.ts#L374)

Text for the submit button

***

### submitFunction()?

> `optional` **submitFunction**: (`value`) => `unknown`

Defined in: [types.ts:376](https://github.com/consolia-io/ui/blob/main/src/types.ts#L376)

Function to call when submit action is triggered

#### Parameters

##### value

`string`

#### Returns

`unknown`

***

### submitValid()?

> `optional` **submitValid**: (`value`) => `boolean`

Defined in: [types.ts:378](https://github.com/consolia-io/ui/blob/main/src/types.ts#L378)

Function to validate field value before submit

#### Parameters

##### value

`string`

#### Returns

`boolean`

***

### success?

> `optional` **success**: `boolean`

Defined in: [types.ts:380](https://github.com/consolia-io/ui/blob/main/src/types.ts#L380)

Whether the field is in a success state

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [types.ts:382](https://github.com/consolia-io/ui/blob/main/src/types.ts#L382)

Success message to display below the field

***

### warning?

> `optional` **warning**: `boolean`

Defined in: [types.ts:384](https://github.com/consolia-io/ui/blob/main/src/types.ts#L384)

Whether the field is in a warning state

***

### warningMessage?

> `optional` **warningMessage**: `string`

Defined in: [types.ts:386](https://github.com/consolia-io/ui/blob/main/src/types.ts#L386)

Warning message to display below the field

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [types.ts:388](https://github.com/consolia-io/ui/blob/main/src/types.ts#L388)

Width of the field
