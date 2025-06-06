[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / ILoadingOverlay

# Interface: ILoadingOverlay

Defined in: [types.ts:542](https://github.com/consolia-io/ui/blob/main/src/types.ts#L542)

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

Defined in: [types.ts:527](https://github.com/consolia-io/ui/blob/main/src/types.ts#L527)

Custom CSS styles

#### Inherited from

[`ILoading`](ILoading.md).[`css`](ILoading.md#css)

***

### stroke?

> `optional` **stroke**: `string`

Defined in: [types.ts:529](https://github.com/consolia-io/ui/blob/main/src/types.ts#L529)

Color of the loading spinner stroke

#### Inherited from

[`ILoading`](ILoading.md).[`stroke`](ILoading.md#stroke)

***

### theme?

> `optional` **theme**: `"default"` \| `"colored"`

Defined in: [types.ts:531](https://github.com/consolia-io/ui/blob/main/src/types.ts#L531)

Visual theme for the loading spinner

#### Inherited from

[`ILoading`](ILoading.md).[`theme`](ILoading.md#theme)

***

### title

> **title**: `string`

Defined in: [types.ts:544](https://github.com/consolia-io/ui/blob/main/src/types.ts#L544)

Title/message to display with the loading spinner
