[**@consolia/ui v0.2.19**](../../README.md)

***

[@consolia/ui](../../README.md) / [types](../README.md) / IText

# Interface: IText

Defined in: [types.ts:922](https://github.com/consolia-io/ui/blob/main/src/types.ts#L922)

Text component props - versatile text element with styling and link options

## Example

```tsx
<Text as="h2" highlight="blue" href="/link" target="_blank">
  This is a highlighted heading that links somewhere
</Text>
```

## Extends

- `ComponentPropsWithRef`\<`"p"`\>

## Properties

### accent?

> `optional` **accent**: `boolean`

Defined in: [types.ts:924](https://github.com/consolia-io/ui/blob/main/src/types.ts#L924)

Whether to use accent styling

***

### as?

> `optional` **as**: `"small"` \| `"a"` \| `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` \| `"label"` \| `"li"` \| `"ol"` \| `"p"` \| `"span"` \| `"strong"` \| `"ul"` \| `"micro"`

Defined in: [types.ts:926](https://github.com/consolia-io/ui/blob/main/src/types.ts#L926)

HTML element type and text size

***

### balanced?

> `optional` **balanced**: `boolean`

Defined in: [types.ts:928](https://github.com/consolia-io/ui/blob/main/src/types.ts#L928)

Whether to use balanced text wrapping

***

### bottom?

> `optional` **bottom**: `"auto"` \| `"large"` \| `"larger"` \| `"largest"` \| `"medium"` \| `"none"` \| `"small"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:930](https://github.com/consolia-io/ui/blob/main/src/types.ts#L930)

Bottom margin/spacing

***

### children

> **children**: `ReactNode`

Defined in: [types.ts:932](https://github.com/consolia-io/ui/blob/main/src/types.ts#L932)

Text content

#### Overrides

`ComponentPropsWithRef.children`

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:934](https://github.com/consolia-io/ui/blob/main/src/types.ts#L934)

Custom CSS styles

***

### highlight?

> `optional` **highlight**: `"default"` \| `"orange"` \| `"purple"` \| `"yellow"` \| `"blue"`

Defined in: [types.ts:936](https://github.com/consolia-io/ui/blob/main/src/types.ts#L936)

Highlight color theme

***

### href?

> `optional` **href**: `string`

Defined in: [types.ts:938](https://github.com/consolia-io/ui/blob/main/src/types.ts#L938)

URL for link functionality

***

### inline?

> `optional` **inline**: `"auto"` \| `"large"` \| `"larger"` \| `"largest"` \| `"medium"` \| `"none"` \| `"small"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:940](https://github.com/consolia-io/ui/blob/main/src/types.ts#L940)

Inline spacing around the text

***

### link?

> `optional` **link**: `"default"` \| `"minimal"`

Defined in: [types.ts:942](https://github.com/consolia-io/ui/blob/main/src/types.ts#L942)

Link styling variant

***

### muted?

> `optional` **muted**: `boolean`

Defined in: [types.ts:944](https://github.com/consolia-io/ui/blob/main/src/types.ts#L944)

Whether to use muted styling with default opacity

***

### override?

> `optional` **override**: `"small"` \| `"a"` \| `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` \| `"label"` \| `"li"` \| `"ol"` \| `"p"` \| `"span"` \| `"strong"` \| `"ul"` \| `"micro"`

Defined in: [types.ts:946](https://github.com/consolia-io/ui/blob/main/src/types.ts#L946)

Override the default size from 'as' prop

***

### rel?

> `optional` **rel**: `string`

Defined in: [types.ts:948](https://github.com/consolia-io/ui/blob/main/src/types.ts#L948)

Relationship attribute for links

#### Overrides

`ComponentPropsWithRef.rel`

***

### target?

> `optional` **target**: `"_blank"` \| `"_self"`

Defined in: [types.ts:950](https://github.com/consolia-io/ui/blob/main/src/types.ts#L950)

Link target

***

### top?

> `optional` **top**: `"auto"` \| `"large"` \| `"larger"` \| `"largest"` \| `"medium"` \| `"none"` \| `"small"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:952](https://github.com/consolia-io/ui/blob/main/src/types.ts#L952)

Top margin/spacing

***

### truncate?

> `optional` **truncate**: `1` \| `2` \| `3` \| `4`

Defined in: [types.ts:954](https://github.com/consolia-io/ui/blob/main/src/types.ts#L954)

Number of lines to truncate text to (1-4)
