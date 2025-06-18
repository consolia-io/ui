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
          <C.Badge theme="default" variant="border">Default</C.Badge>
          <C.Badge theme="solid" variant="border">Solid</C.Badge>
          <C.Badge theme="blue" variant="border">Blue</C.Badge>
          <C.Badge theme="purple" variant="border">Purple</C.Badge>
          <C.Badge theme="orange" variant="border">Orange</C.Badge>
          <C.Badge theme="yellow" variant="border">Yellow</C.Badge>
        </C.Stack>
      </C.Box>

      {/* Theme Variant (Filled) */}
      <C.Box header={
        <C.Text as="h4">Theme Variant</C.Text>
      }>
        <C.Stack>
          <C.Badge theme="default" variant="theme">Default</C.Badge>
          <C.Badge theme="solid" variant="theme">Solid</C.Badge>
          <C.Badge theme="blue" variant="theme">Blue</C.Badge>
          <C.Badge theme="purple" variant="theme">Purple</C.Badge>
          <C.Badge theme="orange" variant="theme">Orange</C.Badge>
          <C.Badge theme="yellow" variant="theme">Yellow</C.Badge>
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
          <C.Stack css={{ alignItems: "center", gap: "$small" }} direction="row">
            <C.Badge theme="blue" variant="border">Border Blue</C.Badge>
            <C.Badge theme="blue" variant="theme">Theme Blue</C.Badge>
          </C.Stack>
          <C.Stack css={{ alignItems: "center", gap: "$small" }} direction="row">
            <C.Badge theme="purple" variant="border">Border Purple</C.Badge>
            <C.Badge theme="purple" variant="theme">Theme Purple</C.Badge>
          </C.Stack>
          <C.Stack css={{ alignItems: "center", gap: "$small" }} direction="row">
            <C.Badge icon={<C.Icon system="CheckCircleIcon" />} theme="orange" variant="border">
              Border with Icon
            </C.Badge>
            <C.Badge icon={<C.Icon system="CheckCircleIcon" />} theme="orange" variant="theme">
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
            theme="purple"
            variant="theme"
          >
            Status
          </C.Badge>
          <C.Badge 
            closable 
            icon={<C.Icon system="CheckCircleIcon" />}
            theme="solid"
            variant="border"
          >
            Complete
          </C.Badge>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 