import React from "react";
import * as C from "../../src/index";
import { Icons } from "../../src/icons";

export default function DialogDemo() {
  return (
    <C.Stack css={{ 
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "$large" 
    }}>
      {/* Basic Dialog */}
      <C.Stack>
        <C.Text as="h4">Basic</C.Text>
        <C.Stack direction="row" css={{ gap: "$medium" }}>
          <C.Dialog
            title="Basic Dialog"
            trigger={<C.Button>Open Dialog</C.Button>}
          >
            <C.Text>This is a basic dialog with default width.</C.Text>
          </C.Dialog>

          <C.Dialog
            small
            title="Small Dialog"
            trigger={<C.Button theme="minimal">Small Dialog</C.Button>}
          >
            <C.Text>This dialog uses the small variant for a narrower width.</C.Text>
          </C.Dialog>
        </C.Stack>
      </C.Stack>

      {/* Custom Triggers */}
      <C.Stack>
        <C.Text as="h4">Custom Triggers</C.Text>
        <C.Stack direction="row" css={{ gap: "$medium" }}>
          <C.Dialog
            title="Icon Trigger"
            trigger={
              <C.Button 
                icon={<C.Icon><Icons.ArrowsOutSimple /></C.Icon>}
                theme="minimal"
                small
              />
            }
          >
            <C.Text>Triggered by an icon button.</C.Text>
          </C.Dialog>

          <C.Dialog
            title="Custom Trigger"
            trigger={<C.Text>Click this text to open</C.Text>}
          >
            <C.Text>Triggered by custom text.</C.Text>
          </C.Dialog>
        </C.Stack>
      </C.Stack>

      {/* Rich Content */}
      <C.Stack>
        <C.Text as="h4">Rich Content</C.Text>
        <C.Dialog
          title="Form Dialog"
          trigger={<C.Button theme="solid">Open Form</C.Button>}
        >
          <C.Stack css={{ gap: "$medium" }}>
            <C.Text>This dialog contains a form with various elements:</C.Text>
            
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

            <C.Stack direction="row" css={{ gap: "$small", justifyContent: "flex-end" }}>
              <C.Button theme="minimal">Cancel</C.Button>
              <C.Button theme="solid">Submit</C.Button>
            </C.Stack>
          </C.Stack>
        </C.Dialog>
      </C.Stack>

      {/* Forced Height */}
      <C.Stack>
        <C.Text as="h4">Forced Height</C.Text>
        <C.Dialog
          title="Scrollable Content"
          trigger={<C.Button>Long Content</C.Button>}
          forceHeight={70}
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
        </C.Dialog>
      </C.Stack>

      {/* States */}
      <C.Stack>
        <C.Text as="h4">States</C.Text>
        <C.Dialog
          disabled
          title="Disabled Dialog"
          trigger={<C.Button disabled>Can't Open</C.Button>}
        >
          <C.Text>This content won't be shown.</C.Text>
        </C.Dialog>
      </C.Stack>
    </C.Stack>
  );
} 