import { JSX, useState } from "react";

import { Icons } from "../src/icons";
import * as C from "../src/index";
import AvatarDemo from "./demos/Avatar";
import BadgeDemo from "./demos/Badge";
import BoxDemo from "./demos/Box";
import ButtonDemo from "./demos/Button";
import CalendarDemo from "./demos/Calendar";
import DialogDemo from "./demos/Dialog";
import DividerDemo from "./demos/Divider";
import FieldDemo from "./demos/Field";
import IconDemo from "./demos/Icon";
import InputDemo from "./demos/Input";
import LoadingDemo from "./demos/Loading";
import LogoDemo from "./demos/Logo";
import MenuDemo from "./demos/Menu";
import NodesDemo from "./demos/Nodes";
import PopoverDemo from "./demos/Popover";
import SelectDemo from "./demos/Select";
import StackDemo from "./demos/Stack";
import TableDemo from "./demos/Table";
import TabsDemo from "./demos/Tabs";
import TextDemo from "./demos/Text";
import ToastDemo from "./demos/Toast";
import UploadDemo from "./demos/Upload";
import ViewDemo from "./demos/View";

// Demo components map
const DEMOS = {
  Avatar: AvatarDemo,
  Badge: BadgeDemo,
  Box: BoxDemo,
  Button: ButtonDemo,
  Calendar: CalendarDemo,
  Dialog: DialogDemo,
  Divider: DividerDemo,
  Field: FieldDemo,
  Icon: IconDemo,
  Input: InputDemo,
  Loading: LoadingDemo,
  Logo: LogoDemo,
  Menu: MenuDemo,
  Nodes: NodesDemo,
  Popover: PopoverDemo,
  Select: SelectDemo,
  Stack: StackDemo,
  Table: TableDemo,
  Tabs: TabsDemo,
  Text: TextDemo,
  Toast: ToastDemo,
  Upload: UploadDemo,
  View: ViewDemo,
};

// Select options
const DEMO_OPTIONS = Object.keys(DEMOS).map((name) => ({
  label: name,
  value: name.toLowerCase(),
}));

export function App(): JSX.Element {
  const { isDarkTheme } = C.useTheme();
  const [selectedDemo, setSelectedDemo] = useState("avatar");

  // Get the current demo component
  const key = (Object.keys(DEMOS).find((key) => key.toLowerCase() === selectedDemo) ||
    "Avatar") as keyof typeof DEMOS;
  const DemoComponent = DEMOS[key];

  return (
    <C.Provider dark={isDarkTheme}>
      {/* Header */}
      <C.View
        as="header"
        bottom="medium"
        container
        css={{
          backgroundColor: "$background",
          borderBottom: "1px solid $border",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
        inverted
        top="medium">
        <C.Stack flexduo>
          <C.Logo hover width={150} />
          <C.Select
            initial={selectedDemo}
            options={DEMO_OPTIONS}
            trigger={
              <C.Button theme="solid">
                <Icons.ArrowDown weight="regular" />
                {DEMO_OPTIONS.find((opt) => opt.value === selectedDemo)?.label ||
                  "Select Component"}
              </C.Button>
            }
            onSelection={setSelectedDemo}
          />

          <C.ProviderToggle />
        </C.Stack>
      </C.View>

      {/* Current Demo */}
      <C.View bottom="largest" container top="largest">
        <C.Stack bottom="larger">
          <C.Badge theme="purple">
            Demo: "{DEMO_OPTIONS.find((opt) => opt.value === selectedDemo)?.label}"
          </C.Badge>
        </C.Stack>
        <C.Stack>
          <DemoComponent />
        </C.Stack>
      </C.View>
    </C.Provider>
  );
}
