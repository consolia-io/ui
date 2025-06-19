[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IUpload

# Interface: IUpload\<T\>

Defined in: [types.ts:973](https://github.com/consolia-io/ui/blob/main/src/types.ts#L973)

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

Defined in: [types.ts:975](https://github.com/consolia-io/ui/blob/main/src/types.ts#L975)

File type restrictions (MIME types)

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:977](https://github.com/consolia-io/ui/blob/main/src/types.ts#L977)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [types.ts:979](https://github.com/consolia-io/ui/blob/main/src/types.ts#L979)

Whether the upload is disabled

***

### error?

> `optional` **error**: `boolean`

Defined in: [types.ts:981](https://github.com/consolia-io/ui/blob/main/src/types.ts#L981)

Whether the upload is in an error state

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [types.ts:983](https://github.com/consolia-io/ui/blob/main/src/types.ts#L983)

Error message to display

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [types.ts:985](https://github.com/consolia-io/ui/blob/main/src/types.ts#L985)

Whether to show a loading state

***

### maxFiles?

> `optional` **maxFiles**: `number`

Defined in: [types.ts:987](https://github.com/consolia-io/ui/blob/main/src/types.ts#L987)

Maximum number of files (for multiple uploads)

***

### maxSize?

> `optional` **maxSize**: `number`

Defined in: [types.ts:989](https://github.com/consolia-io/ui/blob/main/src/types.ts#L989)

Maximum file size in bytes

***

### multiple?

> `optional` **multiple**: `T`

Defined in: [types.ts:991](https://github.com/consolia-io/ui/blob/main/src/types.ts#L991)

Whether to allow multiple file selection

***

### onUpload

> **onUpload**: `T` *extends* `true` ? (`files`) => `void` : (`file`) => `void`

Defined in: [types.ts:993](https://github.com/consolia-io/ui/blob/main/src/types.ts#L993)

Callback when files are uploaded

***

### success?

> `optional` **success**: `boolean`

Defined in: [types.ts:995](https://github.com/consolia-io/ui/blob/main/src/types.ts#L995)

Whether the upload is in a success state

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [types.ts:997](https://github.com/consolia-io/ui/blob/main/src/types.ts#L997)

Success message to display

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [types.ts:999](https://github.com/consolia-io/ui/blob/main/src/types.ts#L999)

Width of the upload component
