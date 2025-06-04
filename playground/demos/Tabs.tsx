import React, { useState } from "react";
import * as C from "../../src/index";
import { Icons } from "../../src/icons";

// Content components for tab panels
function TabContent({ color, title }: { color: string; title: string }) {
  return (
    <C.Box css={{ 
      backgroundColor: color,
      padding: "$large",
      borderRadius: "$medium",
      marginTop: "$medium"
    }}>
      <C.Text css={{ color: "white" }}>Content for {title}</C.Text>
    </C.Box>
  );
}

export default function TabsDemo() {
  const [basicTab, setBasicTab] = useState("tab1");
  const [iconTab, setIconTab] = useState("home");
  const [dynamicTab, setDynamicTab] = useState("all");

  // Basic tabs options
  const basicOptions = [
    { label: "Tab 1", value: "tab1" },
    { label: "Tab 2", value: "tab2" },
    { label: "Tab 3", value: "tab3" }
  ];

  // Tabs with icons
  const iconOptions = [
    { 
      label: "Home",
      value: "home",
      icon: <Icons.ArrowRight weight="regular" />
    },
    {
      label: "Search",
      value: "search",
      icon: <Icons.MagnifyingGlass weight="regular" />
    },
    {
      label: "Settings",
      value: "settings",
      icon: <Icons.Info weight="regular" />
    }
  ];

  // Dynamic content tabs
  const dynamicOptions = [
    { label: "All Items", value: "all" },
    { label: "Active", value: "active" },
    { label: "Archived", value: "archived" }
  ];

  return (
    <C.Stack css={{ gap: "$xlarge" }}>
      {/* Basic Tabs */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Basic Tabs</C.Text>
        <C.Tabs
          options={basicOptions}
          onSelection={setBasicTab}
        />
        <TabContent 
          color="$purple500"
          title={basicOptions.find(o => o.value === basicTab)?.label || ""}
        />
      </C.Stack>

      {/* Tabs with Icons */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Tabs with Icons</C.Text>
        <C.Tabs
          options={iconOptions}
          onSelection={setIconTab}
        />
        <TabContent 
          color="$blue500"
          title={iconOptions.find(o => o.value === iconTab)?.label || ""}
        />
      </C.Stack>

      {/* Dynamic Content Tabs */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Dynamic Content Tabs</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Tabs
            options={dynamicOptions}
            onSelection={setDynamicTab}
          />
          {dynamicTab === "all" && (
            <C.Stack css={{ gap: "$small" }}>
              <TabContent color="$green500" title="Active Item 1" />
              <TabContent color="$gray500" title="Archived Item 1" />
              <TabContent color="$green500" title="Active Item 2" />
            </C.Stack>
          )}
          {dynamicTab === "active" && (
            <C.Stack css={{ gap: "$small" }}>
              <TabContent color="$green500" title="Active Item 1" />
              <TabContent color="$green500" title="Active Item 2" />
            </C.Stack>
          )}
          {dynamicTab === "archived" && (
            <C.Stack css={{ gap: "$small" }}>
              <TabContent color="$gray500" title="Archived Item 1" />
            </C.Stack>
          )}
        </C.Stack>
      </C.Stack>

      {/* Initial Selected Tab */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Initial Selected Tab</C.Text>
        <C.Tabs
          initial="tab2"
          options={basicOptions}
        />
      </C.Stack>
    </C.Stack>
  );
} 