/* eslint-disable no-console */
import { JSX, useState } from "react";

import * as C from "../../src/index";

// Content components for tab panels

export default function TabsDemo(): JSX.Element {
  const [basicTab, setBasicTab] = useState("tab1");
  const [iconTab, setIconTab] = useState("home");
  const [callbackTab, setCallbackTab] = useState("overview");
  const [controlledTab, setControlledTab] = useState("tab1");
  const [overflowTab, setOverflowTab] = useState("monday");

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

  // Many tabs to demonstrate overflow scrolling
  const overflowOptions = [
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "wednesday" },
    { label: "Thursday", value: "thursday" },
    { label: "Friday", value: "friday" },
    { label: "Saturday", value: "saturday" },
    { label: "Sunday", value: "sunday" },
    { label: "Next Monday", value: "next-monday" },
    { label: "Next Tuesday", value: "next-tuesday" },
    { label: "Next Wednesday", value: "next-wednesday" },
    { label: "Next Thursday", value: "next-thursday" },
    { label: "Next Friday", value: "next-friday" }
  ];

  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(3, 1fr)" 
    }}>
      {/* Overflow Scrolling Demo */}
      <C.Box css={{ gridColumn: "1 / -1" }} header={
        <C.Text as="h4">Overflow Scrolling</C.Text>
      }>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Text accent>Try scrolling horizontally through the tabs below (no visible scrollbars)</C.Text>
          <C.Box css={{ 
            border: "1px dashed $borderLight",
            borderRadius: "$medium",
            maxWidth: "400px", // Constrain container to force overflow
            padding: "$small"
          }}>
            <C.Tabs
              options={overflowOptions}
              onSelection={setOverflowTab}
            />
          </C.Box>
          <C.Text accent>Selected: {overflowTab}</C.Text>
        </C.Stack>
      </C.Box>

      {/* Controlled Demo */}
      <C.Box css={{ gridColumn: "1 / -1" }} header={
        <C.Text as="h4">Controlled Value</C.Text>
      }>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Stack css={{ gap: "$small" }} direction="row">
            <C.Button small onClick={() => setControlledTab("tab1")}>
              Set First
            </C.Button>
            <C.Button small onClick={() => setControlledTab("tab2")}>
              Set Second  
            </C.Button>
            <C.Button small onClick={() => setControlledTab("tab3")}>
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
          <C.Box css={{ backgroundColor: "$surface" }} small>
            <C.Text>Content for: {callbackTab}</C.Text>
          </C.Box>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 