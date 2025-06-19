[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / ILoadingOverlay

# Interface: ILoadingOverlay

Defined in: [types.ts:557](https://github.com/consolia-io/ui/blob/main/src/types.ts#L557)

LoadingOverlay component props - full-screen loading overlay with message

## Example

```tsx
<LoadingOverlay title="Saving changes..." theme="colored" />
```

## Extends

- [`ILoading`](ILoading.md)

## Properties

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:542](https://github.com/consolia-io/ui/blob/main/src/types.ts#L542)

Custom CSS styles

#### Inherited from

[`ILoading`](ILoading.md).[`css`](ILoading.md#css)

***

### stroke?

> `optional` **stroke**: `string`

Defined in: [types.ts:544](https://github.com/consolia-io/ui/blob/main/src/types.ts#L544)

Color of the loading spinner stroke

#### Inherited from

[`ILoading`](ILoading.md).[`stroke`](ILoading.md#stroke)

***

### theme?

> `optional` **theme**: `"default"` \| `"colored"`

Defined in: [types.ts:546](https://github.com/consolia-io/ui/blob/main/src/types.ts#L546)

Visual theme for the loading spinner

#### Inherited from

[`ILoading`](ILoading.md).[`theme`](ILoading.md#theme)

***

### title

> **title**: `string`

Defined in: [types.ts:559](https://github.com/consolia-io/ui/blob/main/src/types.ts#L559)

Title/message to display with the loading spinner
