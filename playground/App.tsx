import React from "react";
import { JSX, useState } from "react";

import * as C from "../src/index";
import AccordionDemo from "./demos/Accordion";
import AvatarDemo from "./demos/Avatar";
import BadgeDemo from "./demos/Badge";
import BoxDemo from "./demos/Box";
import ButtonDemo from "./demos/Button";
import CalendarDemo from "./demos/Calendar";
import DividerDemo from "./demos/Divider";
import DrawerDemo from "./demos/Drawer";
import FieldDemo from "./demos/Field";
import IconDemo from "./demos/Icon";
import InputDemo from "./demos/Input";
import LoadingDemo from "./demos/Loading";
import LogoDemo from "./demos/Logo";
import MapsDemo from "./demos/Maps";
import MenuDemo from "./demos/Menu";
import ModalDemo from "./demos/Modal";
import NodesDemo from "./demos/Nodes";
import PlacesDemo from "./demos/Places";
import PopoverDemo from "./demos/Popover";
import SelectDemo from "./demos/Select";
import StackDemo from "./demos/Stack";
import TableDemo from "./demos/Table";
import TabsDemo from "./demos/Tabs";
import TextDemo from "./demos/Text";
import ToastDemo from "./demos/Toast";
import UploadDemo from "./demos/Upload";
import UtilsDemo from "./demos/Utils";
import ViewDemo from "./demos/View";
import html2canvas from "html2canvas";

// Proto demo has been stashed to proto-demo-stash.txt

// Demo components map
const DEMOS = {
  Accordion: AccordionDemo,
  Avatar: AvatarDemo,
  Badge: BadgeDemo,
  Box: BoxDemo,
  Button: ButtonDemo,
  Calendar: CalendarDemo,
  Divider: DividerDemo,
  Drawer: DrawerDemo,
  Field: FieldDemo,
  Icon: IconDemo,
  Input: InputDemo,
  Loading: LoadingDemo,
  Logo: LogoDemo,
  Maps: MapsDemo,
  Menu: MenuDemo,
  Modal: ModalDemo,
  Nodes: NodesDemo,
  Places: PlacesDemo,
  Popover: PopoverDemo,
  Select: SelectDemo,
  Stack: StackDemo,
  Table: TableDemo,
  Tabs: TabsDemo,
  Text: TextDemo,
  Toast: ToastDemo,
  Upload: UploadDemo,
  Utils: UtilsDemo,
  View: ViewDemo,
};

// Select options
const DEMO_OPTIONS = Object.keys(DEMOS).map((name) => ({
  label: name,
  value: name.toLowerCase(),
}));

// TEMPORARY: LinkedIn Cover Export
function LinkedInCoverDemo() {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!ref.current) return;
    const canvas = await html2canvas(ref.current, { backgroundColor: null, useCORS: true });
    const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "linkedin-cover.jpg";
    link.click();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "2rem 0" }}>
      <div
        ref={ref}
        style={{
          width: 1128,
          height: 191,
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          border: "1px solid #eee",
          background: "#180E1F", // keep this
        }}
      >
        {/* Absolutely positioned background layer */}
        <div
          style={{
            background: "#180E1F",
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        />
        {/* Logo top right */}
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 30,
            zIndex: 2,
          }}
        >
          <C.Logo theme="light" width={160} />
        </div>
        {/* Gradient on top */}
        <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
          <GradientSVG />
        </div>
      </div>
      <button
        style={{ marginTop: 16, padding: "8px 24px", fontSize: 16, borderRadius: 4, border: "none", background: "#0073b1", color: "#fff", cursor: "pointer" }}
        onClick={handleDownload}
      >
        Download as JPG
      </button>
    </div>
  );
}

// TEMPORARY: Hardcoded Gradient at peak for LinkedIn export
function GradientSVG(): JSX.Element {
  return (
    <svg
      height="100%"
      style={{
        left: 0,
        opacity: 0.85,
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        userSelect: "none",
      }}
      width="100%"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient cx="50%" cy="120%" fx="50%" fy="110%" id="sunsetGradient" r="140%">
          <stop offset="0%" stopColor="rgba(255, 210, 140, 1)" />
          <stop offset="15%" stopColor="rgba(255, 180, 140, 0.95)" />
          <stop offset="30%" stopColor="rgba(220, 140, 160, 0.9)" />
          <stop offset="45%" stopColor="rgba(160, 130, 180, 0.8)" />
          <stop offset="60%" stopColor="rgba(120, 140, 180, 0.6)" />
          <stop offset="75%" stopColor="rgba(100, 120, 160, 0.4)" />
          <stop offset="85%" stopColor="rgba(80, 100, 140, 0.2)" />
          <stop offset="95%" stopColor="rgba(60, 80, 120, 0.08)" />
          <stop offset="100%" stopColor="transparent" />
          {/* Animation removed for static export */}
        </radialGradient>
      </defs>
      <rect fill="url(#sunsetGradient)" height="100%" width="100%" />
    </svg>
  );
}

export function App(): JSX.Element {
  const { isDarkTheme } = C.useTheme();
  const [selectedDemo, setSelectedDemo] = useState("avatar");

  // Get the current demo component
  const key = (Object.keys(DEMOS).find((key) => key.toLowerCase() === selectedDemo) ||
    "Avatar") as keyof typeof DEMOS;
  const DemoComponent = DEMOS[key];

  return (
    <C.Provider dark={isDarkTheme}>
      {/* TEMPORARY: LinkedIn Cover Export */}
      <LinkedInCoverDemo />
      {/* Header */}
      <C.View
        as="header"
        bottom="medium"
        container
        css={{
          backgroundColor: "$background",
          borderBottom: "1px solid $border",
          position: "sticky",
          zIndex: 10,
        }}
        inverted
        top="medium">
        <C.Stack direction="row" justify="space-between">
          <C.Stack
            onClick={() => {
              setSelectedDemo("avatar");
            }}>
            <C.Logo hover width={150} />
          </C.Stack>
          <C.Select
            initial={selectedDemo}
            options={DEMO_OPTIONS}
            trigger={
              <C.Button theme="solid">
                <C.Icon system="ArrowDownIcon" />
                {DEMO_OPTIONS.find((opt) => opt.value === selectedDemo)?.label ||
                  "Select Component"}
              </C.Button>
            }
            onSelection={setSelectedDemo}
          />

          <C.ProviderToggle />
        </C.Stack>
      </C.View>
      <C.View bottom="largest" hero inverted top="largest">
        <C.Stack align="center">
          <C.Text as="h1">
            {DEMO_OPTIONS.find((opt) => opt.value === selectedDemo)?.label || "Select Component"}
          </C.Text>
        </C.Stack>
      </C.View>

      {/* Current Demo */}
      <C.View bottom="largest" container top="largest">
        <C.Stack
          css={{
            minHeight: "90vh",
          }}>
          <DemoComponent />
        </C.Stack>
      </C.View>
    </C.Provider>
  );
}
