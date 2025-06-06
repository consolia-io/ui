[**@consolia/ui v0.2.0**](../README.md)

***

[@consolia/ui](../README.md) / IText

# Interface: IText

Defined in: [types.ts:906](https://github.com/consolia-io/ui/blob/main/src/types.ts#L906)

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

Defined in: [types.ts:908](https://github.com/consolia-io/ui/blob/main/src/types.ts#L908)

Whether to use accent styling

***

### as?

> `optional` **as**: `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` \| `"small"` \| `"a"` \| `"label"` \| `"li"` \| `"ol"` \| `"p"` \| `"span"` \| `"strong"` \| `"ul"`

Defined in: [types.ts:910](https://github.com/consolia-io/ui/blob/main/src/types.ts#L910)

HTML element type and text size

***

### balanced?

> `optional` **balanced**: `boolean`

Defined in: [types.ts:912](https://github.com/consolia-io/ui/blob/main/src/types.ts#L912)

Whether to use balanced text wrapping

***

### bottom?

> `optional` **bottom**: `"small"` \| `"large"` \| `"medium"` \| `"excess"` \| `"larger"` \| `"largest"` \| `"none"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:914](https://github.com/consolia-io/ui/blob/main/src/types.ts#L914)

Bottom margin/spacing

***

### children

> **children**: `ReactNode`

Defined in: [types.ts:916](https://github.com/consolia-io/ui/blob/main/src/types.ts#L916)

Text content

#### Overrides

`ComponentPropsWithRef.children`

***

### css?

> `optional` **css**: `CSS`

Defined in: [types.ts:918](https://github.com/consolia-io/ui/blob/main/src/types.ts#L918)

Custom CSS styles

***

### highlight?

> `optional` **highlight**: `"blue"` \| `"orange"` \| `"purple"` \| `"yellow"` \| `"default"`

Defined in: [types.ts:920](https://github.com/consolia-io/ui/blob/main/src/types.ts#L920)

Highlight color theme

***

### href?

> `optional` **href**: `string`

Defined in: [types.ts:922](https://github.com/consolia-io/ui/blob/main/src/types.ts#L922)

URL for link functionality

***

### inline?

> `optional` **inline**: `"small"` \| `"large"` \| `"medium"` \| `"excess"` \| `"larger"` \| `"largest"` \| `"none"` \| `"smaller"` \| `"smallest"` \| `"auto"`

Defined in: [types.ts:924](https://github.com/consolia-io/ui/blob/main/src/types.ts#L924)

Inline spacing around the text

***

### link?

> `optional` **link**: `"default"` \| `"minimal"`

Defined in: [types.ts:926](https://github.com/consolia-io/ui/blob/main/src/types.ts#L926)

Link styling variant

***

### override?

> `optional` **override**: `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` \| `"small"` \| `"a"` \| `"label"` \| `"li"` \| `"ol"` \| `"p"` \| `"span"` \| `"strong"` \| `"ul"`

Defined in: [types.ts:928](https://github.com/consolia-io/ui/blob/main/src/types.ts#L928)

Override the default size from 'as' prop

***

### rel?

> `optional` **rel**: `string`

Defined in: [types.ts:930](https://github.com/consolia-io/ui/blob/main/src/types.ts#L930)

Relationship attribute for links

#### Overrides

`ComponentPropsWithRef.rel`

***

### target?

> `optional` **target**: `"_blank"` \| `"_self"`

Defined in: [types.ts:932](https://github.com/consolia-io/ui/blob/main/src/types.ts#L932)

Link target

***

### top?

> `optional` **top**: `"small"` \| `"large"` \| `"medium"` \| `"excess"` \| `"larger"` \| `"largest"` \| `"none"` \| `"smaller"` \| `"smallest"`

Defined in: [types.ts:934](https://github.com/consolia-io/ui/blob/main/src/types.ts#L934)

Top margin/spacing
