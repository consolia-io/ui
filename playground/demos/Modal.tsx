import { JSX } from "react";

import { Icons } from "../../src/icons";
import * as C from "../../src/index";

export default function ModalDemo(): JSX.Element {
  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(2, 1fr)" 
    }}>
      {/* Basic Modal */}
      <C.Stack>
        <C.Text as="h4">Basic</C.Text>
        <C.Stack css={{ gap: "$medium" }} direction="row">
          <C.Modal
            title="Basic Modal"
            trigger={<C.Button>Open Modal</C.Button>}
          >
            <C.Text>This is a basic centered modal with default width.</C.Text>
          </C.Modal>

          <C.Modal
            small
            title="Small Modal"
            trigger={<C.Button theme="minimal">Small Modal</C.Button>}
          >
            <C.Text>This modal uses the small variant for a narrower width.</C.Text>
          </C.Modal>
        </C.Stack>
      </C.Stack>

      {/* Custom Triggers */}
      <C.Stack>
        <C.Text as="h4">Custom Triggers</C.Text>
        <C.Stack css={{ gap: "$medium" }} direction="row">
          <C.Modal
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
          </C.Modal>

          <C.Modal
            title="Custom Trigger"
            trigger={<C.Text>Click this text to open</C.Text>}
          >
            <C.Text>Triggered by custom text.</C.Text>
          </C.Modal>
        </C.Stack>
      </C.Stack>

      {/* Rich Content */}
      <C.Stack>
        <C.Text as="h4">Rich Content</C.Text>
        <C.Modal
          title="Form Modal"
          trigger={<C.Button theme="solid">Open Form</C.Button>}
        >
          <C.Stack css={{ gap: "$medium" }}>
            <C.Text>This modal contains a form with various elements:</C.Text>
            
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
        </C.Modal>
      </C.Stack>

      {/* Forced Height */}
      <C.Stack>
        <C.Text as="h4">Forced Height</C.Text>
        <C.Modal
          forceHeight={50}
          title="Scrollable Content"
          trigger={<C.Button>Long Content</C.Button>}
        >
          <C.Stack css={{ gap: "$medium" }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <C.Text key={i}>
                This is paragraph {i + 1} with some long content to demonstrate scrolling.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </C.Text>
            ))}
          </C.Stack>
        </C.Modal>
      </C.Stack>

      {/* Confirmation Modal */}
      <C.Stack>
        <C.Text as="h4">Confirmation</C.Text>
        <C.Modal
          small
          title="Confirm Action"
          trigger={<C.Button theme="solid">Delete Item</C.Button>}
        >
          <C.Stack css={{ gap: "$medium" }}>
            <C.Text>Are you sure you want to delete this item? This action cannot be undone.</C.Text>
            <C.Stack css={{ gap: "$small", justifyContent: "flex-end" }} direction="row">
              <C.Button theme="minimal">Cancel</C.Button>
              <C.Button theme="solid">Delete</C.Button>
            </C.Stack>
          </C.Stack>
        </C.Modal>
      </C.Stack>

      {/* Rich Content with Actions */}
      <C.Stack>
        <C.Text as="h4">Content Preview</C.Text>
        <C.Modal
          title="Article Preview"
          trigger={<C.Button>Preview Article</C.Button>}
        >
          <C.Stack css={{ gap: "$medium" }}>
            <C.Badge theme="purple">Featured Article</C.Badge>
            <C.Text as="h3">Understanding React Components</C.Text>
            <C.Text>
              React components are the building blocks of React applications. They allow you to 
              split the UI into independent, reusable pieces.
            </C.Text>
            <C.Stack css={{ gap: "$small" }} direction="row">
              <C.Badge theme="blue">React</C.Badge>
              <C.Badge theme="orange">JavaScript</C.Badge>
              <C.Badge theme="yellow">Frontend</C.Badge>
            </C.Stack>
            <C.Stack css={{ gap: "$small", justifyContent: "flex-end" }} direction="row">
              <C.Button theme="minimal">Share</C.Button>
              <C.Button theme="solid">Read Full Article</C.Button>
            </C.Stack>
          </C.Stack>
        </C.Modal>
      </C.Stack>
    </C.Stack>
  );
} 