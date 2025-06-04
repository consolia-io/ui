import { JSX } from "react";

import { Icons } from "../../src/icons";
import * as C from "../../src/index";

export default function PopoverDemo(): JSX.Element {
  return (
    <C.Stack css={{ 
      alignItems: "center",
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(3, 1fr)" 
    }}>
      {/* Basic Popover */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Basic</C.Text>
        <C.Popover
          trigger={
            <C.Button>
              <Icons.Info weight="regular" />
              Click me
            </C.Button>
          }
        >
          <C.Text>This is a basic popover with default styling.</C.Text>
        </C.Popover>
      </C.Stack>

      {/* Small Popover */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Small</C.Text>
        <C.Popover
          small
          trigger={
            <C.Button>
              <Icons.ArrowDown weight="regular" />
              Small popover
            </C.Button>
          }
        >
          <C.Text>A more compact popover with reduced max-width.</C.Text>
        </C.Popover>
      </C.Stack>

      {/* Minimal Popover */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Minimal</C.Text>
        <C.Popover
          minimal
          trigger={
            <C.Button>
              <Icons.ArrowsOutSimple weight="regular" />
            </C.Button>
          }
        >
          <C.Box css={{ padding: "$medium" }}>
            <C.Stack css={{ gap: "$medium" }}>
              <C.Text>No default padding for custom content.</C.Text>
              <C.Button>Action Button</C.Button>
            </C.Stack>
          </C.Box>
        </C.Popover>
      </C.Stack>

      {/* Disabled Popover */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Disabled</C.Text>
        <C.Popover
          disabled
          trigger={
            <C.Button disabled>
              <Icons.X weight="regular" />
              Disabled
            </C.Button>
          }
        >
          <C.Text>This content won't be shown.</C.Text>
        </C.Popover>
      </C.Stack>

      {/* Custom Styled Popover */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Custom Styled</C.Text>
        <C.Popover
          css={{
            backgroundColor: "$purple",
            color: "white",
          }}
          trigger={
            <C.Button>
              <Icons.ArrowUp weight="regular" />
              Custom style
            </C.Button>
          }
        >
          <C.Text css={{ color: "inherit" }}>
            A popover with custom background color.
          </C.Text>
        </C.Popover>
      </C.Stack>

      {/* Rich Content Popover */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Rich Content</C.Text>
        <C.Popover
          trigger={
            <C.Button>
              <Icons.ArrowRight weight="regular" />
              More info
            </C.Button>
          }
        >
          <C.Stack css={{ gap: "$medium" }}>
            <C.Text as="h4">Detailed Information</C.Text>
            <C.Text>This popover contains multiple elements including:</C.Text>
            <C.Stack css={{ gap: "$small" }}>
              <C.Badge theme="purple">Feature 1</C.Badge>
              <C.Badge theme="blue">Feature 2</C.Badge>
              <C.Badge theme="orange">Feature 3</C.Badge>
            </C.Stack>
            <C.Button>Learn More</C.Button>
          </C.Stack>
        </C.Popover>
      </C.Stack>
    </C.Stack>
  );
} 