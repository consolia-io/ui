import { JSX, useState } from "react";

import * as C from "../../src/index";

// Content components for tab panels
function TabContent({ color, title }: { color: string; title: string }) {
  return (
    <C.Box css={{ 
      backgroundColor: color,
      borderRadius: "$medium",
      marginTop: "$medium",
      padding: "$large"
    }}>
      <C.Text css={{ color: "white" }}>Content for {title}</C.Text>
    </C.Box>
  );
}

export default function TabsDemo(): JSX.Element {
  const [basicTab, setBasicTab] = useState("tab1");
  const [iconTab, setIconTab] = useState("home");
  const [callbackTab, setCallbackTab] = useState("overview");
  const [controlledTab, setControlledTab] = useState("tab1");

  const basicOptions = [
    { label: "First", value: "tab1" },
    { label: "Second", value: "tab2" },
    { label: "Third", value: "tab3" }
  ];

  const iconOptions = [
    { 
      icon: <C.Icon system="ArrowRightIcon" />,
      label: "Home",
      value: "home"
    },
    {
      icon: <C.Icon system="InfoIcon" />,
      label: "Info",
      value: "info"
    },
    {
      icon: <C.Icon system="ArrowUpIcon" />,
      label: "Settings",
      value: "settings"
    }
  ];

  const callbackOptions = [
    { label: "Overview", value: "overview" },
    { label: "Details", value: "details" },
    { label: "History", value: "history" }
  ];

  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(3, 1fr)" 
    }}>
      {/* Controlled Demo */}
      <C.Box header={
        <C.Text as="h4">Controlled Value</C.Text>
      } css={{ gridColumn: "1 / -1" }}>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Stack direction="row" css={{ gap: "$small" }}>
            <C.Button onClick={() => setControlledTab("tab1")} small>
              Set First
            </C.Button>
            <C.Button onClick={() => setControlledTab("tab2")} small>
              Set Second  
            </C.Button>
            <C.Button onClick={() => setControlledTab("tab3")} small>
              Set Third
            </C.Button>
          </C.Stack>
          <C.Tabs
            initial={controlledTab}
            options={basicOptions}
            onSelection={setControlledTab}
          />
          <C.Text accent>External control: {controlledTab}</C.Text>
        </C.Stack>
      </C.Box>

      {/* Basic Usage */}
      <C.Box header={
        <C.Text as="h4">Basic Usage</C.Text>
      }>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Tabs
            options={basicOptions}
            onSelection={setBasicTab}
          />
          <C.Text accent>Selected: {basicTab}</C.Text>
        </C.Stack>
      </C.Box>

      {/* Small Size */}
      <C.Box header={
        <C.Text as="h4">Small Size</C.Text>
      }>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Tabs
            options={basicOptions}
            small
            onSelection={setBasicTab}
          />
          <C.Text accent>Compact styling</C.Text>
        </C.Stack>
      </C.Box>

      {/* With Icons */}
      <C.Box header={
        <C.Text as="h4">With Icons</C.Text>
      }>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Tabs
            options={iconOptions}
            onSelection={setIconTab}
          />
          <C.Text accent>Selected: {iconTab}</C.Text>
        </C.Stack>
      </C.Box>

      {/* Initial Selection */}
      <C.Box header={
        <C.Text as="h4">Initial Selection</C.Text>
      }>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Tabs
            initial="tab2"
            options={basicOptions}
          />
          <C.Text accent>Pre-selected second tab</C.Text>
        </C.Stack>
      </C.Box>

      {/* With Callback */}
      <C.Box header={
        <C.Text as="h4">With Callback</C.Text>
      }>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Tabs
            options={callbackOptions}
            onSelection={(value) => {
              setCallbackTab(value);
              console.log('Tab changed:', value);
            }}
          />
          <C.Text accent>Check console logs</C.Text>
        </C.Stack>
      </C.Box>

      {/* Dynamic Content */}
      <C.Box header={
        <C.Text as="h4">Dynamic Content</C.Text>
      }>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Tabs
            options={callbackOptions}
            onSelection={setCallbackTab}
          />
          <C.Box small css={{ backgroundColor: "$surface" }}>
            <C.Text>Content for: {callbackTab}</C.Text>
          </C.Box>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 