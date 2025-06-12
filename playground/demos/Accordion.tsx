import React, { useState } from "react";

import { Icons } from "../../src/icons";
import * as C from "../../src/index";

export default function AccordionDemo() {
  const [singleSelection, setSingleSelection] = useState<string>("");
  const [multipleSelection, setMultipleSelection] = useState<string>("");

  // Basic accordion options
  const basicOptions = [
    {
      children: (
        <C.Stack css={{ gap: "$small" }}>
          <C.Text>
            React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".
          </C.Text>
          <C.Button theme="minimal">Learn more about React</C.Button>
        </C.Stack>
      ),
      label: "What is React?",
      value: "react"
    },
    {
      children: (
        <C.Stack css={{ gap: "$small" }}>
          <C.Text>
            Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can refer to other components in their output.
          </C.Text>
          <C.Badge theme="blue">Components are reusable</C.Badge>
        </C.Stack>
      ),
      label: "How do components work?",
      value: "components"
    },
    {
      children: (
        <C.Box theme="minimal">
          <C.Text>
            State management in React can be handled with built-in hooks like useState and useReducer, or with external libraries like Redux or Zustand.
          </C.Text>
        </C.Box>
      ),
      label: "What about state management?",
      value: "state"
    }
  ];

  // Accordion with icons
  const iconOptions = [
    {
      children: (
        <C.Stack css={{ gap: "$small" }}>
          <C.Text>Welcome to our platform! Here's everything you need to know to get started.</C.Text>
          <C.Button theme="solid">Start Tutorial</C.Button>
        </C.Stack>
      ),
      icon: <Icons.ArrowRight weight="regular" />,
      label: "Getting Started",
      value: "start"
    },
    {
      children: (
        <C.Stack css={{ gap: "$small" }}>
          <C.Text>Manage your account preferences, security settings, and personal information.</C.Text>
          <C.Stack css={{ gap: "$small" }} direction="row">
            <C.Button theme="minimal">Edit Profile</C.Button>
            <C.Button theme="minimal">Security</C.Button>
          </C.Stack>
        </C.Stack>
      ),
      icon: <Icons.Info weight="regular" />, 
      label: "Account Settings",
      value: "account"
    },
    {
      children: (
        <C.Stack css={{ gap: "$small" }}>
          <C.Text>Need help? Browse our knowledge base or contact our support team.</C.Text>
          <C.Badge theme="orange">24/7 Support Available</C.Badge>
        </C.Stack>
      ),
      icon: <Icons.MagnifyingGlass weight="regular" />,
      label: "Help & Support",
      value: "help"
    }
  ];

  // Rich content accordion
  const richOptions = [
    {
      children: (
        <C.Stack css={{ gap: "$medium" }}>
          <C.Text>
            This project includes multiple phases with different deliverables and timelines.
          </C.Text>
          <C.Stack css={{ gap: "$small" }} direction="row">
            <C.Badge theme="blue">Phase 1</C.Badge>
            <C.Badge theme="purple">Phase 2</C.Badge>
            <C.Badge theme="yellow">Phase 3</C.Badge>
          </C.Stack>
          <C.Box theme="minimal">
            <C.Text css={{ fontSize: "$small" }}>
              Each phase builds upon the previous one, ensuring a smooth development process.
            </C.Text>
          </C.Box>
        </C.Stack>
      ),
      label: "Project Overview",
      value: "overview"
    },
    {
      children: (
        <C.Stack css={{ gap: "$small" }}>
          <C.Text>Here are the key technical requirements and specifications:</C.Text>
          <C.Stack css={{ gap: "$smallest", paddingLeft: "$medium" }}>
            <C.Text css={{ fontSize: "$small" }}>• Modern React with TypeScript</C.Text>
            <C.Text css={{ fontSize: "$small" }}>• Responsive design principles</C.Text>
            <C.Text css={{ fontSize: "$small" }}>• Accessibility compliance</C.Text>
            <C.Text css={{ fontSize: "$small" }}>• Performance optimization</C.Text>
          </C.Stack>
        </C.Stack>
      ),
      label: "Technical Specifications",
      value: "specs"
    }
  ];

  return (
    <C.Stack css={{ gap: "$large" }}>
      {/* Basic Accordion */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Basic Accordion</C.Text>
        <C.Accordion
          options={basicOptions}
          onToggle={(value, isOpen) => {
            // eslint-disable-next-line no-console
            console.log(`${value} ${isOpen ? 'opened' : 'closed'}`);
          }}
        />
      </C.Stack>

      {/* Accordion with Icons */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Accordion with Icons</C.Text>
        <C.Accordion
          initial="start"
          options={iconOptions}
        />
      </C.Stack>

      {/* Multiple Open Items */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Multiple Items Open</C.Text>
        <C.Accordion
          allowMultiple
          options={richOptions}
          onToggle={(value, isOpen) => {
            setMultipleSelection(`${value} ${isOpen ? 'opened' : 'closed'}`);
          }}
        />
        {multipleSelection && (
          <C.Badge css={{ marginTop: "$small" }} theme="default">
            Last action: {multipleSelection}
          </C.Badge>
        )}
      </C.Stack>

      {/* Controlled Accordion */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Callback Example</C.Text>
        <C.Accordion
          options={basicOptions.slice(0, 2)}
          onToggle={(value, isOpen) => {
            setSingleSelection(`${value} is now ${isOpen ? 'open' : 'closed'}`);
          }}
        />
        {singleSelection && (
          <C.Text css={{ color: "$textSecondary", fontSize: "$small", marginTop: "$small" }}>
            Status: {singleSelection}
          </C.Text>
        )}
      </C.Stack>

      {/* Grid Mode */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Grid Mode</C.Text>
        <C.Accordion
          mode="grid"
          options={basicOptions}
        />
      </C.Stack>
    </C.Stack>
  );
} 