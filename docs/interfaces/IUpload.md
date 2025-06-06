[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IUpload

# Interface: IUpload\<T\>

Defined in: [types.ts:953](https://github.com/consolia-io/ui/blob/main/src/types.ts#L953)

Upload component props - file upload with drag & drop, validation, and multiple file support

## Example

```tsx
<Upload
  multiple={true}
  accept="image/*"
  maxFiles={5}
  maxSize={5000000}
  onUpload={(files) => console.log('Uploaded:', files)}
  error={hasError}
  errorMessage="Please select valid images"
/>
```

## Type Parameters

### T

`T` *extends* `boolean`

## Properties

### accept?

> `optional` **accept**: `string`

Defined in: [types.ts:955](https://github.com/consolia-io/ui/blob/main/src/types.ts#L955)

File type restrictions (MIME types)

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:957](https://github.com/consolia-io/ui/blob/main/src/types.ts#L957)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:959](https://github.com/consolia-io/ui/blob/main/src/types.ts#L959)

Whether the upload is disabled

***

### error?

> `optional` **error**: `boolean`

Defined in: [types.ts:961](https://github.com/consolia-io/ui/blob/main/src/types.ts#L961)

Whether the upload is in an error state

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [types.ts:963](https://github.com/consolia-io/ui/blob/main/src/types.ts#L963)

Error message to display

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:965](https://github.com/consolia-io/ui/blob/main/src/types.ts#L965)

Whether to show a loading state

***

### maxFiles?

> `optional` **maxFiles**: `number`

Defined in: [types.ts:967](https://github.com/consolia-io/ui/blob/main/src/types.ts#L967)

Maximum number of files (for multiple uploads)

***

### maxSize?

> `optional` **maxSize**: `number`

Defined in: [types.ts:969](https://github.com/consolia-io/ui/blob/main/src/types.ts#L969)

Maximum file size in bytes

***

### multiple?

> `optional` **multiple**: `T`

Defined in: [types.ts:971](https://github.com/consolia-io/ui/blob/main/src/types.ts#L971)

Whether to allow multiple file selection

***

### onUpload

> **onUpload**: `T` *extends* `true` ? (`files`) => `void` : (`file`) => `void`

Defined in: [types.ts:973](https://github.com/consolia-io/ui/blob/main/src/types.ts#L973)

Callback when files are uploaded

***

### success?

> `optional` **success**: `boolean`

Defined in: [types.ts:975](https://github.com/consolia-io/ui/blob/main/src/types.ts#L975)

Whether the upload is in a success state

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [types.ts:977](https://github.com/consolia-io/ui/blob/main/src/types.ts#L977)

Success message to display

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [types.ts:979](https://github.com/consolia-io/ui/blob/main/src/types.ts#L979)

Width of the upload component
