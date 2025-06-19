import { JSX } from "react";

import * as C from "../../src/index";

export default function AccordionDemo(): JSX.Element {
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
        <C.Accordion
          options={[
            {
              children: <C.Text>React is a JavaScript library for building user interfaces.</C.Text>,
              label: "What is React?",
              value: "react"
            },
            {
              children: <C.Text>Components let you split the UI into independent, reusable pieces.</C.Text>,
              label: "Components",
              value: "components"
            }
          ]}
        />
      </C.Box>

      {/* With Icons */}
      <C.Box header={
        <C.Text as="h4">With Icons</C.Text>
      }>
        <C.Accordion
          initial="start"
          options={[
            {
              children: <C.Text>Welcome to our platform!</C.Text>,
              icon: <C.Icon system="ArrowRightIcon" />,
              label: "Getting Started",
              value: "start"
            },
            {
              children: <C.Text>Manage your account settings.</C.Text>,
              icon: <C.Icon system="InfoIcon" />,
              label: "Account",
              value: "account"
            }
          ]}
        />
      </C.Box>

      {/* Allow Multiple */}
      <C.Box header={
        <C.Text as="h4">Multiple Open</C.Text>
      }>
        <C.Accordion
          allowMultiple
          options={[
            {
              children: <C.Text>This section can be open with others.</C.Text>,
              label: "Section 1",
              value: "section1"
            },
            {
              children: <C.Text>Multiple sections can be expanded simultaneously.</C.Text>,
              label: "Section 2", 
              value: "section2"
            }
          ]}
        />
      </C.Box>

      {/* With Callback */}
      <C.Box header={
        <C.Text as="h4">With Callback</C.Text>
      }>
        <C.Accordion
          options={[
            {
              children: <C.Text>Check the console for toggle events.</C.Text>,
              label: "Interactive",
              value: "interactive"
            }
          ]}
          onToggle={(value, isOpen) => {
            // eslint-disable-next-line no-console
            console.log(`${value} ${isOpen ? 'opened' : 'closed'}`);
          }}
        />
      </C.Box>

      {/* Grid Mode */}
      <C.Box header={
        <C.Text as="h4">Grid Mode</C.Text>
      }>
        <C.Accordion
          mode="grid"
          options={[
            {
              children: <C.Text>Grid layout option.</C.Text>,
              label: "Grid Item 1",
              value: "grid1"
            },
            {
              children: <C.Text>Another grid item.</C.Text>,
              label: "Grid Item 2",
              value: "grid2"
            }
          ]}
        />
      </C.Box>

      {/* Large Variant */}
      <C.Box header={
        <C.Text as="h4">Large Variant</C.Text>
      }>
        <C.Accordion
          options={[
            {
              children: <C.Text>This accordion item uses the large variant.</C.Text>,
              label: "Large Item",
              large: true,
              value: "large"
            }
          ]}
        />
      </C.Box>

      {/* Long Text Wrapping */}
      <C.Box header={
        <C.Text as="h4">Text Wrapping</C.Text>
      }>
        <C.Accordion
          options={[
            {
              children: <C.Text>This demonstrates how the accordion handles extremely long text labels that need to wrap to multiple lines for proper display and usability.</C.Text>,
              label: "This is an immensely long accordion option label that should wrap to multiple lines to demonstrate the text wrapping functionality in list mode, ensuring that no content is truncated and the entire label remains readable to users",
              value: "long-text"
            },
            {
              children: <C.Text>A normal length option for comparison.</C.Text>,
              label: "Normal Length Option",
              value: "normal"
            }
          ]}
        />
      </C.Box>
    </C.Stack>
  );
} 