[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IInput

# Interface: IInput

Defined in: [types.ts:474](https://github.com/consolia-io/ui/blob/main/src/types.ts#L474)

Input component props - form input field with validation and actions

## Example

```tsx
<Input
  name="email"
  type="email"
  placeholder="Enter your email"
  error={hasError}
  errorMessage="Please enter a valid email"
  submitFunction={handleSubmit}
/>
```

## Extends

- `ComponentPropsWithRef`\<`"input"`\>

## Properties

### copy?

> `optional` **copy**: `boolean`

Defined in: [types.ts:476](https://github.com/consolia-io/ui/blob/main/src/types.ts#L476)

Whether to show a copy button for the input value

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:478](https://github.com/consolia-io/ui/blob/main/src/types.ts#L478)

Custom CSS styles

***

### error?

> `optional` **error**: `boolean`

Defined in: [types.ts:480](https://github.com/consolia-io/ui/blob/main/src/types.ts#L480)

Whether the input is in an error state

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [types.ts:482](https://github.com/consolia-io/ui/blob/main/src/types.ts#L482)

Error message to display below the input

***

### id?

> `optional` **id**: `string`

Defined in: [types.ts:484](https://github.com/consolia-io/ui/blob/main/src/types.ts#L484)

HTML id attribute for the input

#### Overrides

`ComponentPropsWithRef.id`

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [types.ts:486](https://github.com/consolia-io/ui/blob/main/src/types.ts#L486)

Whether to listen for form validation events

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:488](https://github.com/consolia-io/ui/blob/main/src/types.ts#L488)

Whether to show a loading state

***

### mustRef?

> `optional` **mustRef**: `RefObject`\<`null` \| `HTMLInputElement`\>

Defined in: [types.ts:490](https://github.com/consolia-io/ui/blob/main/src/types.ts#L490)

Ref object to access the input element directly

***

### name

> **name**: `string`

Defined in: [types.ts:492](https://github.com/consolia-io/ui/blob/main/src/types.ts#L492)

Name attribute for the input (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [types.ts:494](https://github.com/consolia-io/ui/blob/main/src/types.ts#L494)

Whether to show a reset button

***

### resetFunction()?

> `optional` **resetFunction**: () => `void`

Defined in: [types.ts:496](https://github.com/consolia-io/ui/blob/main/src/types.ts#L496)

Function to call when reset button is clicked

#### Returns

`void`

***

### reveal?

> `optional` **reveal**: `boolean`

Defined in: [types.ts:498](https://github.com/consolia-io/ui/blob/main/src/types.ts#L498)

Whether to show/hide toggle for password inputs

***

### submit?

> `optional` **submit**: `string`

Defined in: [types.ts:500](https://github.com/consolia-io/ui/blob/main/src/types.ts#L500)

Text for the submit button

***

### submitFunction()?

> `optional` **submitFunction**: (`value`) => `unknown`

Defined in: [types.ts:502](https://github.com/consolia-io/ui/blob/main/src/types.ts#L502)

Function to call when submit action is triggered

#### Parameters

##### value

`string`

#### Returns

`unknown`

***

### submitValid()?

> `optional` **submitValid**: (`value`) => `boolean`

Defined in: [types.ts:504](https://github.com/consolia-io/ui/blob/main/src/types.ts#L504)

Function to validate input value before submit

#### Parameters

##### value

`string`

#### Returns

`boolean`

***

### success?

> `optional` **success**: `boolean`

Defined in: [types.ts:506](https://github.com/consolia-io/ui/blob/main/src/types.ts#L506)

Whether the input is in a success state

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [types.ts:508](https://github.com/consolia-io/ui/blob/main/src/types.ts#L508)

Success message to display below the input

***

### warning?

> `optional` **warning**: `boolean`

Defined in: [types.ts:510](https://github.com/consolia-io/ui/blob/main/src/types.ts#L510)

Whether the input is in a warning state

***

### warningMessage?

> `optional` **warningMessage**: `string`

Defined in: [types.ts:512](https://github.com/consolia-io/ui/blob/main/src/types.ts#L512)

Warning message to display below the input

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [types.ts:514](https://github.com/consolia-io/ui/blob/main/src/types.ts#L514)

Width of the input field

#### Overrides

`ComponentPropsWithRef.width`
