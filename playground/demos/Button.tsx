import React from "react";
import * as C from "../../src/index";
import { Icons } from "../../src/icons";

export default function ButtonDemo() {
  return (
    <C.Stack css={{ 
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "$large" 
    }}>
      {/* Basic Buttons */}
      <C.Stack>
        <C.Text as="h4">Basic</C.Text>
        <C.Stack direction="row" css={{ gap: "$medium", flexWrap: "wrap" }}>
          <C.Button>Default Button</C.Button>
          <C.Button small>Small Button</C.Button>
          <C.Button disabled>Disabled Button</C.Button>
        </C.Stack>
      </C.Stack>

      {/* Themes */}
      <C.Stack>
        <C.Text as="h4">Themes</C.Text>
        <C.Stack direction="row" css={{ gap: "$medium", flexWrap: "wrap" }}>
          <C.Button theme="default">Default Theme</C.Button>
          <C.Button theme="minimal">Minimal Theme</C.Button>
          <C.Button theme="solid">Solid Theme</C.Button>
        </C.Stack>
      </C.Stack>

      {/* With Icons */}
      <C.Stack>
        <C.Text as="h4">With Icons</C.Text>
        <C.Stack direction="row" css={{ gap: "$medium", flexWrap: "wrap" }}>
          <C.Button icon={<C.Icon><Icons.Circle /></C.Icon>}>
            Left Icon
          </C.Button>
          <C.Button 
            icon={<C.Icon><Icons.ArrowRight /></C.Icon>}
            iconPosition="right"
          >
            Right Icon
          </C.Button>
          <C.Button external>
            External Link
          </C.Button>
        </C.Stack>
      </C.Stack>

      {/* States */}
      <C.Stack>
        <C.Text as="h4">States</C.Text>
        <C.Stack direction="row" css={{ gap: "$medium", flexWrap: "wrap" }}>
          <C.Button loading>Loading</C.Button>
          <C.Button disabled>Disabled</C.Button>
          <C.Button block>Full Width</C.Button>
        </C.Stack>
      </C.Stack>

      {/* Combinations */}
      <C.Stack>
        <C.Text as="h4">Combinations</C.Text>
        <C.Stack direction="row" css={{ gap: "$medium", flexWrap: "wrap" }}>
          <C.Button 
            small 
            theme="solid"
            icon={<C.Icon><Icons.Circle /></C.Icon>}
          >
            Small Solid
          </C.Button>
          <C.Button 
            theme="minimal"
            icon={<C.Icon><Icons.X /></C.Icon>}
            iconPosition="right"
          >
            Delete
          </C.Button>
          <C.Button 
            loading 
            theme="solid"
          >
            Processing
          </C.Button>
        </C.Stack>
      </C.Stack>

      {/* Inline */}
      <C.Stack>
        <C.Text as="h4">Inline</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Text>
            Text with an <C.Button inline="small" small>inline button</C.Button> in it.
          </C.Text>
          <C.Text>
            <C.Button inline="auto" small theme="minimal">Left</C.Button>
            Auto margin pushing this button right
          </C.Text>
        </C.Stack>
      </C.Stack>
    </C.Stack>
  );
} 