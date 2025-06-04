import React from "react";
import * as C from "../../src/index";
import { Icons } from "../../src/icons";

export default function BoxDemo() {
  return (
    <C.Stack css={{ gap: "$large" }}>
      {/* Basic Variants */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Basic Variants</C.Text>
        <C.Stack css={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "$medium" 
        }}>
          <C.Box>Default Box with content</C.Box>
          <C.Box small>Small padding variant</C.Box>
          <C.Box minimal>Minimal variant without padding</C.Box>
        </C.Stack>
      </C.Stack>

      {/* All Themes */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">All Themes</C.Text>
        <C.Stack css={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "$medium" 
        }}>
          <C.Box theme="default">Default theme</C.Box>
          <C.Box theme="fill">Fill theme</C.Box>
          <C.Box theme="blue">Blue theme</C.Box>
          <C.Box theme="purple">Purple theme</C.Box>
          <C.Box theme="orange">Orange theme</C.Box>
          <C.Box theme="yellow">Yellow theme</C.Box>
          <C.Box theme="minimal">Minimal theme</C.Box>
          <C.Box theme="solid">Solid theme</C.Box>
        </C.Stack>
      </C.Stack>

      {/* Header & Footer Combinations */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Header & Footer</C.Text>
        <C.Stack css={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "$medium" 
        }}>
          <C.Box header="Header Only">
            Content with header only
          </C.Box>
          
          <C.Box footer={
            <C.Stack direction="row" css={{ justifyContent: "flex-end", gap: "$small" }}>
              <C.Button small theme="minimal">Cancel</C.Button>
              <C.Button small>Submit</C.Button>
            </C.Stack>
          }>
            Content with footer only
          </C.Box>
          
          <C.Box 
            header="Header Title"
            footer={
              <C.Stack direction="row" css={{ justifyContent: "space-between", alignItems: "center" }}>
                <C.Text as="small">Footer info</C.Text>
                <C.Button small>Action</C.Button>
              </C.Stack>
            }
          >
            Content with both header and footer
          </C.Box>
        </C.Stack>
      </C.Stack>

      {/* Interactive Features */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Interactive Features</C.Text>
        <C.Stack css={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "$medium" 
        }}>
          <C.Box closable>
            Closable box with an X button
          </C.Box>
          
          <C.Box 
            expandable 
            expandableHeight={80}
          >
            Expandable box with truncated content. This content will be cut off at the specified height and can be expanded to show the full content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </C.Box>
          
          <C.Box cta="https://example.com">
            Clickable box (CTA) - entire box is a link
          </C.Box>
        </C.Stack>
      </C.Stack>

      {/* States */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">States</C.Text>
        <C.Stack css={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "$medium" 
        }}>
          <C.Box loading>
            Loading state box with overlay
          </C.Box>
          
          <C.Box>
            Normal state box
          </C.Box>
        </C.Stack>
      </C.Stack>

     
      {/* Combined Features */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Complex Examples</C.Text>
        <C.Stack css={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "$medium" 
        }}>
          <C.Box 
            theme="blue"
            header={
              <C.Stack direction="row" css={{ justifyContent: "space-between", alignItems: "center" }}>
                <C.Text as="strong">Settings</C.Text>
                                 <Icons.ArrowClockwise />
              </C.Stack>
            }
            footer={
              <C.Stack direction="row" css={{ justifyContent: "flex-end", gap: "$small" }}>
                <C.Button small theme="minimal">Reset</C.Button>
                <C.Button small>Save</C.Button>
              </C.Stack>
            }
            closable
          >
            <C.Text bottom="small">Configure your preferences</C.Text>
                         <C.Text as="small">This is a complex box with theme, header, footer, and close functionality.</C.Text>
          </C.Box>
          

          
          <C.Box 
            theme="solid"
            small
            header="Compact Card"
            footer={<C.Badge theme="orange">New</C.Badge>}
          >
            Small box with solid theme and badge
          </C.Box>
        </C.Stack>
      </C.Stack>
    </C.Stack>
  );
} 