import { JSX } from "react";

import * as C from "../../src/index";

export default function BadgeDemo(): JSX.Element {
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
          <C.Badge>Default Badge</C.Badge>
          <C.Badge copy="123">With Copy</C.Badge>
          <C.Badge small>Small Badge</C.Badge>
        </C.Stack>
      </C.Box>

      {/* Border Variant (Default) */}
      <C.Box header={
        <C.Text as="h4">Border Variant</C.Text>
      }>
        <C.Stack>
          <C.Badge variant="border" theme="default">Default</C.Badge>
          <C.Badge variant="border" theme="solid">Solid</C.Badge>
          <C.Badge variant="border" theme="blue">Blue</C.Badge>
          <C.Badge variant="border" theme="purple">Purple</C.Badge>
          <C.Badge variant="border" theme="orange">Orange</C.Badge>
          <C.Badge variant="border" theme="yellow">Yellow</C.Badge>
        </C.Stack>
      </C.Box>

      {/* Theme Variant (Filled) */}
      <C.Box header={
        <C.Text as="h4">Theme Variant</C.Text>
      }>
        <C.Stack>
          <C.Badge variant="theme" theme="default">Default</C.Badge>
          <C.Badge variant="theme" theme="solid">Solid</C.Badge>
          <C.Badge variant="theme" theme="blue">Blue</C.Badge>
          <C.Badge variant="theme" theme="purple">Purple</C.Badge>
          <C.Badge variant="theme" theme="orange">Orange</C.Badge>
          <C.Badge variant="theme" theme="yellow">Yellow</C.Badge>
        </C.Stack>
      </C.Box>

      {/* With Icons */}
      <C.Box header={
        <C.Text as="h4">With Icons</C.Text>
      }>
        <C.Stack>
          <C.Badge icon={<C.Icon system="CheckCircleIcon" />}>
            Success
          </C.Badge>
          <C.Badge 
            icon={<C.Icon system="ArrowRightIcon" />}
            iconPosition="right"
            theme="blue"
          >
            Next
          </C.Badge>
        </C.Stack>
      </C.Box>

      {/* Interactive */}
      <C.Box header={
        <C.Text as="h4">Interactive</C.Text>
      }>
        <C.Stack>
          <C.Badge link>Clickable</C.Badge>
          <C.Badge closable theme="orange">Closable</C.Badge>
          <C.Badge loading theme="purple">Loading</C.Badge>
        </C.Stack>
      </C.Box>

      {/* Layout Options */}
      <C.Box header={
        <C.Text as="h4">Layout Options</C.Text>
      }>
        <C.Stack>
          <C.Badge block theme="blue">Full Width</C.Badge>
          <C.Text>
            Text with <C.Badge inline="smaller">inline</C.Badge> badge
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* Variant Comparison */}
      <C.Box header={
        <C.Text as="h4">Variant Comparison</C.Text>
      }>
        <C.Stack>
          <C.Stack direction="row" css={{ gap: "$small", alignItems: "center" }}>
            <C.Badge variant="border" theme="blue">Border Blue</C.Badge>
            <C.Badge variant="theme" theme="blue">Theme Blue</C.Badge>
          </C.Stack>
          <C.Stack direction="row" css={{ gap: "$small", alignItems: "center" }}>
            <C.Badge variant="border" theme="purple">Border Purple</C.Badge>
            <C.Badge variant="theme" theme="purple">Theme Purple</C.Badge>
          </C.Stack>
          <C.Stack direction="row" css={{ gap: "$small", alignItems: "center" }}>
            <C.Badge variant="border" theme="orange" icon={<C.Icon system="CheckCircleIcon" />}>
              Border with Icon
            </C.Badge>
            <C.Badge variant="theme" theme="orange" icon={<C.Icon system="CheckCircleIcon" />}>
              Theme with Icon
            </C.Badge>
          </C.Stack>
        </C.Stack>
      </C.Box>

      {/* Combinations */}
      <C.Box header={
        <C.Text as="h4">Combinations</C.Text>
      }>
        <C.Stack>
          <C.Badge 
            icon={<C.Icon system="CircleIcon" />} 
            small 
            variant="theme"
            theme="purple"
          >
            Status
          </C.Badge>
          <C.Badge 
            closable 
            icon={<C.Icon system="CheckCircleIcon" />}
            variant="border"
            theme="solid"
          >
            Complete
          </C.Badge>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 