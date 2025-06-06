[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IForm

# Interface: IForm

Defined in: [types.ts:407](https://github.com/consolia-io/ui/blob/main/src/types.ts#L407)

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

Defined in: [types.ts:409](https://github.com/consolia-io/ui/blob/main/src/types.ts#L409)

Form content and input elements

#### Overrides

`ComponentPropsWithRef.children`

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:411](https://github.com/consolia-io/ui/blob/main/src/types.ts#L411)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:413](https://github.com/consolia-io/ui/blob/main/src/types.ts#L413)

Whether the form is disabled

***

### id?

> `optional` **id**: `string`

Defined in: [types.ts:415](https://github.com/consolia-io/ui/blob/main/src/types.ts#L415)

HTML id attribute for the form

#### Overrides

`ComponentPropsWithRef.id`

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [types.ts:417](https://github.com/consolia-io/ui/blob/main/src/types.ts#L417)

Whether to listen for form validation events

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:419](https://github.com/consolia-io/ui/blob/main/src/types.ts#L419)

Whether the form is in a loading/submitting state

***

### name

> **name**: `string`

Defined in: [types.ts:421](https://github.com/consolia-io/ui/blob/main/src/types.ts#L421)

Name attribute for the form (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### submit?

> `optional` **submit**: `string`

Defined in: [types.ts:423](https://github.com/consolia-io/ui/blob/main/src/types.ts#L423)

Text for the submit button

***

### submitFunction()

> **submitFunction**: () => `unknown`

Defined in: [types.ts:425](https://github.com/consolia-io/ui/blob/main/src/types.ts#L425)

Function to call when form is submitted

#### Returns

`unknown`

***

### submitValid?

> `optional` **submitValid**: `boolean`

Defined in: [types.ts:427](https://github.com/consolia-io/ui/blob/main/src/types.ts#L427)

Whether the form is valid and can be submitted
