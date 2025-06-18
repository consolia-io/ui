import { JSX, useState } from "react";

import * as C from "../../src/index";

export default function MenuDemo(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string>();

  const basicOptions = [
    {
      icon: <C.Icon system="ArrowRightIcon" />,
      label: "Dashboard",
      value: "dashboard"
    },
    {
      icon: <C.Icon system="InfoIcon" />,
      label: "Settings",
      value: "settings"
    },
    {
      icon: <C.Icon system="XCircleIcon" />,
      label: "Logout",
      value: "logout"
    }
  ];

  const menuWithSubs = [
    {
      icon: <C.Icon system="ArrowRightIcon" />,
      label: "Account",
      sub: [
        {
          icon: <C.Icon system="CheckCircleIcon" />,
          label: "Profile",
          value: "profile"
        },
        {
          icon: <C.Icon system="InfoIcon" />,
          label: "Settings",
          value: "settings"
        }
      ],
      value: "account"
    },
    {
      icon: <C.Icon system="MagnifyingGlassIcon" />,
      label: "Help",
      value: "help"
    }
  ];

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
        <C.Stack>
          <C.Menu
            options={basicOptions}
            trigger={<C.Button>Open Menu</C.Button>}
          />
        </C.Stack>
      </C.Box>

      {/* With Icons */}
      <C.Box header={
        <C.Text as="h4">With Icons</C.Text>
      }>
        <C.Stack>
          <C.Menu
            options={basicOptions}
            trigger={
              <C.Button icon={<C.Icon system="ArrowDownIcon" />}>
                Actions
              </C.Button>
            }
          />
        </C.Stack>
      </C.Box>

      {/* With Sub-menus */}
      <C.Box header={
        <C.Text as="h4">With Sub-menus</C.Text>
      }>
        <C.Stack>
          <C.Menu
            options={menuWithSubs}
            trigger={<C.Button theme="solid">Navigation</C.Button>}
          />
        </C.Stack>
      </C.Box>

      {/* Custom Triggers */}
      <C.Box header={
        <C.Text as="h4">Custom Triggers</C.Text>
      }>
        <C.Stack>
          <C.Menu
            options={basicOptions}
            trigger={
              <C.Button 
                icon={<C.Icon system="ArrowsOutSimpleIcon" />}
                small
                theme="minimal"
              />
            }
          />
          <C.Menu
            options={basicOptions}
            trigger={<C.Text>Click this text</C.Text>}
          />
        </C.Stack>
      </C.Box>

      {/* With Callback */}
      <C.Box header={
        <C.Text as="h4">With Callback</C.Text>
      }>
        <C.Stack>
          <C.Menu
            options={basicOptions}
            trigger={<C.Button>Select Option</C.Button>}
            onSelection={(value, label) => {
              setSelectedOption(`${label} (${value})`);
            }}
          />
          <C.Text as="small">
            Selected: {selectedOption || "None"}
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* With Initial */}
      <C.Box header={
        <C.Text as="h4">With Initial</C.Text>
      }>
        <C.Stack>
          <C.Menu
            initial="dashboard"
            options={basicOptions}
            trigger={<C.Button theme="minimal">Pre-selected</C.Button>}
          />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 