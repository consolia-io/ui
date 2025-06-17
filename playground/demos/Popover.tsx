import { JSX } from "react";

import * as C from "../../src/index";

export default function PopoverDemo(): JSX.Element {
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
        <C.Popover
          trigger={
            <C.Button>
              <C.Icon system="InfoIcon" />
              Basic
            </C.Button>
          }
        >
          <C.Text>Default popover with automatic positioning.</C.Text>
        </C.Popover>
      </C.Box>

      {/* Small Popover */}
      <C.Box header={
        <C.Text as="h4">Small Size</C.Text>
      }>
        <C.Popover
          small
          trigger={
            <C.Button>
              <C.Icon system="ArrowDownIcon" />
              Small
            </C.Button>
          }
        >
          <C.Text>Compact popover with reduced max-width.</C.Text>
        </C.Popover>
      </C.Box>

      {/* Minimal Popover */}
      <C.Box header={
        <C.Text as="h4">Minimal Style</C.Text>
      }>
        <C.Popover
          minimal
          trigger={
            <C.Button>
              <C.Icon system="ArrowsOutSimpleIcon" />
              Minimal
            </C.Button>
          }
        >
          <C.Stack css={{ gap: "$small", padding: "$medium" }}>
            <C.Text>No default padding.</C.Text>
            <C.Button small>Custom content</C.Button>
          </C.Stack>
        </C.Popover>
      </C.Box>

      {/* Disabled State */}
      <C.Box header={
        <C.Text as="h4">Disabled State</C.Text>
      }>
        <C.Popover
          disabled
          trigger={
            <C.Button disabled>
              <C.Icon system="XIcon" />
              Disabled
            </C.Button>
          }
        >
          <C.Text>This won't show.</C.Text>
        </C.Popover>
      </C.Box>

      {/* Custom Styling */}
      <C.Box header={
        <C.Text as="h4">Custom CSS</C.Text>
      }>
        <C.Popover
          css={{
            backgroundColor: "$purple",
            color: "white",
          }}
          trigger={
            <C.Button>
              <C.Icon system="ArrowUpIcon" />
              Styled
            </C.Button>
          }
        >
          <C.Text css={{ color: "inherit" }}>
            Custom background and text color.
          </C.Text>
        </C.Popover>
      </C.Box>

      {/* Rich Content */}
      <C.Box header={
        <C.Text as="h4">Rich Content</C.Text>
      }>
        <C.Popover
          trigger={
            <C.Button>
              <C.Icon system="ArrowRightIcon" />
              Rich
            </C.Button>
          }
        >
          <C.Stack css={{ gap: "$small" }}>
            <C.Text as="strong">User Profile</C.Text>
            <C.Badge theme="blue">Active</C.Badge>
            <C.Button small>View Details</C.Button>
          </C.Stack>
        </C.Popover>
      </C.Box>
    </C.Stack>
  );
} 