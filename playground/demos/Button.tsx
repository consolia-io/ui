import { JSX } from "react";

import * as C from "../../src/index";

export default function ButtonDemo(): JSX.Element {
  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(3, 1fr)" 
    }}>
      {/* Basic Usage */}
      <C.Box header={
        <C.Text as="h4">Basic Usage</C.Text>
      }>
        <C.Stack>
          <C.Button>Default Button</C.Button>
          <C.Button small>Small Button</C.Button>
          <C.Button disabled>Disabled Button</C.Button>
        </C.Stack>
      </C.Box>

      {/* Themes */}
      <C.Box header={
        <C.Text as="h4">Themes</C.Text>
      }>
        <C.Stack>
          <C.Button theme="default">Default</C.Button>
          <C.Button theme="solid">Solid</C.Button>
          <C.Button theme="minimal">Minimal</C.Button>
        </C.Stack>
      </C.Box>

      {/* With Icons */}
      <C.Box header={
        <C.Text as="h4">With Icons</C.Text>
      }>
        <C.Stack>
          <C.Button icon={<C.Icon system="CheckCircleIcon" />}>
            Success
          </C.Button>
          <C.Button 
            icon={<C.Icon system="ArrowRightIcon" />}
            iconPosition="right"
          >
            Next
          </C.Button>
        </C.Stack>
      </C.Box>

      {/* States */}
      <C.Box header={
        <C.Text as="h4">States</C.Text>
      }>
        <C.Stack>
          <C.Button loading>Loading</C.Button>
          <C.Button external>External Link</C.Button>
          <C.Button block>Full Width</C.Button>
        </C.Stack>
      </C.Box>

      {/* Inline Usage */}
      <C.Box header={
        <C.Text as="h4">Inline Usage</C.Text>
      }>
        <C.Stack>
          <C.Text>
            Text with <C.Button inline="small" small>inline</C.Button> button
          </C.Text>
          <C.Button inline="auto" small theme="minimal">
            Auto margin
          </C.Button>
        </C.Stack>
      </C.Box>

      {/* Combinations */}
      <C.Box header={
        <C.Text as="h4">Combinations</C.Text>
      }>
        <C.Stack>
          <C.Button 
            small 
            theme="solid"
            icon={<C.Icon system="CheckCircleIcon" />}
          >
            Small Solid
          </C.Button>
          <C.Button 
            loading 
            theme="minimal"
            icon={<C.Icon system="ArrowClockwiseIcon" />}
          >
            Processing
          </C.Button>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 