[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IInput

# Interface: IInput

Defined in: [types.ts:489](https://github.com/consolia-io/ui/blob/main/src/types.ts#L489)

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

Defined in: [types.ts:491](https://github.com/consolia-io/ui/blob/main/src/types.ts#L491)

Whether to show a copy button for the input value

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:493](https://github.com/consolia-io/ui/blob/main/src/types.ts#L493)

Custom CSS styles

***

### error?

> `optional` **error**: `boolean`

Defined in: [types.ts:495](https://github.com/consolia-io/ui/blob/main/src/types.ts#L495)

Whether the input is in an error state

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [types.ts:497](https://github.com/consolia-io/ui/blob/main/src/types.ts#L497)

Error message to display below the input

***

### id?

> `optional` **id**: `string`

Defined in: [types.ts:499](https://github.com/consolia-io/ui/blob/main/src/types.ts#L499)

HTML id attribute for the input

#### Overrides

`ComponentPropsWithRef.id`

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [types.ts:501](https://github.com/consolia-io/ui/blob/main/src/types.ts#L501)

Whether to listen for form validation events

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:503](https://github.com/consolia-io/ui/blob/main/src/types.ts#L503)

Whether to show a loading state

***

### mustRef?

> `optional` **mustRef**: `RefObject`\<`null` \| `HTMLInputElement`\>

Defined in: [types.ts:505](https://github.com/consolia-io/ui/blob/main/src/types.ts#L505)

Ref object to access the input element directly

***

### name

> **name**: `string`

Defined in: [types.ts:507](https://github.com/consolia-io/ui/blob/main/src/types.ts#L507)

Name attribute for the input (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [types.ts:509](https://github.com/consolia-io/ui/blob/main/src/types.ts#L509)

Whether to show a reset button

***

### resetFunction()?

> `optional` **resetFunction**: () => `void`

Defined in: [types.ts:511](https://github.com/consolia-io/ui/blob/main/src/types.ts#L511)

Function to call when reset button is clicked

#### Returns

`void`

***

### reveal?

> `optional` **reveal**: `boolean`

Defined in: [types.ts:513](https://github.com/consolia-io/ui/blob/main/src/types.ts#L513)

Whether to show/hide toggle for password inputs

***

### submit?

> `optional` **submit**: `string`

Defined in: [types.ts:515](https://github.com/consolia-io/ui/blob/main/src/types.ts#L515)

Text for the submit button

***

### submitFunction()?

> `optional` **submitFunction**: (`value`) => `unknown`

Defined in: [types.ts:517](https://github.com/consolia-io/ui/blob/main/src/types.ts#L517)

Function to call when submit action is triggered

#### Parameters

##### value

`string`

#### Returns

`unknown`

***

### submitValid()?

> `optional` **submitValid**: (`value`) => `boolean`

Defined in: [types.ts:519](https://github.com/consolia-io/ui/blob/main/src/types.ts#L519)

Function to validate input value before submit

#### Parameters

##### value

`string`

#### Returns

`boolean`

***

### success?

> `optional` **success**: `boolean`

Defined in: [types.ts:521](https://github.com/consolia-io/ui/blob/main/src/types.ts#L521)

Whether the input is in a success state

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [types.ts:523](https://github.com/consolia-io/ui/blob/main/src/types.ts#L523)

Success message to display below the input

***

### warning?

> `optional` **warning**: `boolean`

Defined in: [types.ts:525](https://github.com/consolia-io/ui/blob/main/src/types.ts#L525)

Whether the input is in a warning state

***

### warningMessage?

> `optional` **warningMessage**: `string`

Defined in: [types.ts:527](https://github.com/consolia-io/ui/blob/main/src/types.ts#L527)

Warning message to display below the input

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [types.ts:529](https://github.com/consolia-io/ui/blob/main/src/types.ts#L529)

Width of the input field

#### Overrides

`ComponentPropsWithRef.width`
