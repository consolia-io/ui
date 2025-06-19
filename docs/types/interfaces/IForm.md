[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IForm

# Interface: IForm

Defined in: [types.ts:422](https://github.com/consolia-io/ui/blob/main/src/types.ts#L422)

Form component props - form wrapper with validation and submission handling

## Example

```tsx
<Form
  name="userForm"
  submitFunction={handleFormSubmit}
  submitValid={isFormValid}
  loading={isSubmitting}
>
  <Input name="email" type="email" />
  <Button type="submit">Submit</Button>
</Form>
```

## Extends

- `ComponentPropsWithRef`\<`"form"`\>

## Properties

### children

> **children**: `ReactNode`

Defined in: [types.ts:424](https://github.com/consolia-io/ui/blob/main/src/types.ts#L424)

Form content and input elements

#### Overrides

`ComponentPropsWithRef.children`

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:426](https://github.com/consolia-io/ui/blob/main/src/types.ts#L426)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:428](https://github.com/consolia-io/ui/blob/main/src/types.ts#L428)

Whether the form is disabled

***

### id?

> `optional` **id**: `string`

Defined in: [types.ts:430](https://github.com/consolia-io/ui/blob/main/src/types.ts#L430)

HTML id attribute for the form

#### Overrides

`ComponentPropsWithRef.id`

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [types.ts:432](https://github.com/consolia-io/ui/blob/main/src/types.ts#L432)

Whether to listen for form validation events

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:434](https://github.com/consolia-io/ui/blob/main/src/types.ts#L434)

Whether the form is in a loading/submitting state

***

### name

> **name**: `string`

Defined in: [types.ts:436](https://github.com/consolia-io/ui/blob/main/src/types.ts#L436)

Name attribute for the form (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### submit?

> `optional` **submit**: `string`

Defined in: [types.ts:438](https://github.com/consolia-io/ui/blob/main/src/types.ts#L438)

Text for the submit button

***

### submitFunction()

> **submitFunction**: () => `unknown`

Defined in: [types.ts:440](https://github.com/consolia-io/ui/blob/main/src/types.ts#L440)

Function to call when form is submitted

#### Returns

`unknown`

***

### submitValid?

> `optional` **submitValid**: `boolean`

Defined in: [types.ts:442](https://github.com/consolia-io/ui/blob/main/src/types.ts#L442)

Whether the form is valid and can be submitted
