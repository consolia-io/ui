import { JSX } from "react";

import { Icons } from "../../src/icons";
import * as C from "../../src/index";

export default function DrawerDemo(): JSX.Element {
  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(2, 1fr)" 
    }}>
      {/* Basic Drawer */}
      <C.Stack> 
        <C.Text as="h4">Basic</C.Text>
        <C.Stack css={{ gap: "$medium" }} direction="row">
          <C.Drawer
            title="Basic Drawer"
            trigger={<C.Button>Open Drawer</C.Button>}
          >
            <C.Text>This is a basic drawer with default width.</C.Text>
          </C.Drawer>

          <C.Drawer
            small
            title="Small Drawer"
            trigger={<C.Button theme="minimal">Small Drawer</C.Button>}
          >
            <C.Text>This drawer uses the small variant for a narrower width.</C.Text>
          </C.Drawer>
        </C.Stack>
      </C.Stack>

      {/* Custom Triggers */}
      <C.Stack>
        <C.Text as="h4">Custom Triggers</C.Text>
        <C.Stack css={{ gap: "$medium" }} direction="row">
          <C.Drawer
            title="Icon Trigger"
            trigger={
              <C.Button 
                icon={<C.Icon><Icons.ArrowsOutSimple /></C.Icon>}
                small
                theme="minimal"
              />
            }
          >
            <C.Text>Triggered by an icon button.</C.Text>
          </C.Drawer>

          <C.Drawer
            title="Custom Trigger"
            trigger={<C.Text>Click this text to open</C.Text>}
          >
            <C.Text>Triggered by custom text.</C.Text>
          </C.Drawer>
        </C.Stack>
      </C.Stack>

      {/* Rich Content */}
      <C.Stack>
        <C.Text as="h4">Rich Content</C.Text>
        <C.Drawer
          title="Form Drawer"
          trigger={<C.Button theme="solid">Open Form</C.Button>}
        >
          <C.Stack css={{ gap: "$medium" }}>
            <C.Text>This drawer contains a form with various elements:</C.Text>
            
            <C.Stack css={{ gap: "$small" }}>
              <C.Text>Name:</C.Text>
              <C.Input name="name" placeholder="Enter your name" />
            </C.Stack>

            <C.Stack css={{ gap: "$small" }}>
              <C.Text>Description:</C.Text>
              <C.Input 
                name="description" 
                placeholder="Enter description"
              />
            </C.Stack>

            <C.Stack css={{ gap: "$small", justifyContent: "flex-end" }} direction="row">
              <C.Button theme="minimal">Cancel</C.Button>
              <C.Button theme="solid">Submit</C.Button>
            </C.Stack>
          </C.Stack>
        </C.Drawer>
      </C.Stack>

      {/* Forced Height */}
      <C.Stack>
        <C.Text as="h4">Forced Height</C.Text>
        <C.Drawer
          forceHeight={70}
          title="Scrollable Content"
          trigger={<C.Button>Long Content</C.Button>}
        >
          <C.Stack css={{ gap: "$medium" }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <C.Text key={i}>
                This is paragraph {i + 1} with some long content to demonstrate scrolling.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </C.Text>
            ))}
          </C.Stack>
        </C.Drawer>
      </C.Stack>

      {/* States */}
      <C.Stack>
        <C.Text as="h4">States</C.Text>
        <C.Drawer
          disabled
          title="Disabled Drawer"
          trigger={<C.Button disabled>Can't Open</C.Button>}
        >
          <C.Text>This content won't be shown.</C.Text>
        </C.Drawer>
      </C.Stack>
    </C.Stack>
  );
} 