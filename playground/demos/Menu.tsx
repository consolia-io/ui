import { JSX, useState } from "react";

import { Icons } from "../../src/icons";
import * as C from "../../src/index";

export default function MenuDemo(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string>();

  const menuOptions = [
    {
      icon: <Icons.ArrowUpRight weight="regular" />,
      label: "Dashboard",
      value: "dashboard"
    },
    {
      icon: <Icons.ArrowDown weight="regular" />,
      label: "Settings",
      sub: [
        {
          icon: <Icons.ArrowRight weight="regular" />,
          label: "Profile",
          value: "profile"
        },
        {
          icon: <Icons.ArrowLeft weight="regular" />,
          label: "Preferences",
          value: "preferences"
        },
        {
          icon: <Icons.ArrowDown weight="regular" />,
          label: "Security",
          value: "security"
        }
      ],
      value: "settings"
    },
    {
      icon: <Icons.Info weight="regular" />,
      label: "Help",
      value: "help"
    },
    {
      icon: <Icons.X weight="regular" />,
      label: "Logout",
      value: "logout"
    }
  ];

  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(2, 1fr)" 
    }}>
      {/* Basic Menu */}
      <C.Stack>
        <C.Text as="h4">Basic Menu</C.Text>
        <C.Menu
          options={menuOptions}
          trigger={
            <C.Button>
              <Icons.ArrowDown weight="regular" />
              Open Menu
            </C.Button>
          }
          onSelection={(value) => setSelectedOption(value)}
        />
        <C.Text accent>
          Selected: {selectedOption || "None"}
        </C.Text>
      </C.Stack>

      {/* Custom Menu with Logo */}
      <C.Stack>
        <C.Text as="h4">Custom Menu with Logo</C.Text>
        <C.Menu
          logo={
            <C.Stack css={{ alignItems: "center", gap: "$small" }} direction="row">
              <Icons.ArrowUpRight weight="regular" />
              <C.Text as="h4" inline="auto">Actions Menu</C.Text>
            </C.Stack>
          }
          options={menuOptions}
          trigger={
            <C.Button>
              <Icons.ArrowsOutSimple weight="regular" />
              Actions
            </C.Button>
          }
          onSelection={(value) => setSelectedOption(value)}
        />
      </C.Stack>
    </C.Stack>
  );
} 