import { JSX, ReactNode } from "react";

import * as C from "../../src/index";
    
// Demo box component to visualize Stack layouts
function DemoBox({ children, color }: { children: ReactNode; color: string }): JSX.Element {
  return (
    <C.Box css={{ 
      backgroundColor: color,
      borderRadius: "$medium",
      color: "white",
      minWidth: "60px",
      padding: "$small",
      textAlign: "center"
    }}>
      {children}
    </C.Box>
  );
}

export default function StackDemo(): JSX.Element {
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
        <C.Stack css={{ gap: "$small" }}>
          <DemoBox color="$purple">Item 1</DemoBox>
          <DemoBox color="$purple">Item 2</DemoBox>
          <DemoBox color="$purple">Item 3</DemoBox>
        </C.Stack>
      </C.Box>

      {/* Row Direction */}
      <C.Box header={
        <C.Text as="h4">Row Direction</C.Text>
      }>
        <C.Stack css={{ gap: "$small" }} direction="row">
          <DemoBox color="$blue">Item 1</DemoBox>
          <DemoBox color="$blue">Item 2</DemoBox>
          <DemoBox color="$blue">Item 3</DemoBox>
        </C.Stack>
      </C.Box>

      {/* With Width */}
      <C.Box header={
        <C.Text as="h4">With Width</C.Text>
      }>
        <C.Stack css={{ gap: "$small" }}>
          <C.Stack width={100} direction="column">
            <DemoBox color="$orange">100% with padding</DemoBox>
          </C.Stack>
          <C.Stack width={75} direction="column">
            <DemoBox color="$orange">75% with padding</DemoBox>
          </C.Stack>
          <C.Stack width={50} direction="column">
            <DemoBox color="$orange">50% with padding</DemoBox>
          </C.Stack>
        </C.Stack>
      </C.Box>

      {/* Responsive Width Test */}
      <C.Box header={
        <C.Text as="h4">Responsive (Debug)</C.Text>
      }>
        <C.Stack direction="row" wrap={true} css={{ border: "1px solid red" }}>
          <C.Stack 
            direction="column"
            width={40}
            widthResponsive={{ phone: 100 }}
            css={{ border: "2px solid blue" }}
          >
            <DemoBox color="$blue">40% default, 100% on phone</DemoBox>
          </C.Stack>
          <C.Stack 
            direction="column"
            width={60}
            widthResponsive={{ 
              phone: 100,
              tablet: 80 
            }}
            css={{ border: "2px solid purple" }}
          >
            <DemoBox color="$purple">60% default, 80% tablet, 100% phone</DemoBox>
          </C.Stack>
        </C.Stack>
      </C.Box>

      {/* Auto-wrapping Two Columns */}
      <C.Box header={
        <C.Text as="h4">Perfect 50/50 Columns</C.Text>
      }>
        <C.Stack direction="row">
          <C.Stack 
            width={50}
            direction="column"
            widthResponsive={{ phone: 100 }}
          >
            <DemoBox color="$orange">50% desktop, 100% phone (auto-wraps)</DemoBox>
          </C.Stack>
          <C.Stack 
            width={50}
            direction="column"
            widthResponsive={{ phone: 100 }}
          >
            <DemoBox color="$yellow">50% desktop, 100% phone (auto-wraps)</DemoBox>
          </C.Stack>
        </C.Stack>
      </C.Box>

      {/* Center Alignment */}
      <C.Box header={
        <C.Text as="h4">Center Alignment</C.Text>
      }>
        <C.Stack 
          alignItems="center" 
          css={{ gap: "$small" }} 
          direction="row" 
          justify="center"
        >
          <DemoBox color="$yellow">Center</DemoBox>
          <DemoBox color="$yellow">Aligned</DemoBox>
        </C.Stack>
      </C.Box>

      {/* With Spacing */}
      <C.Box header={
        <C.Text as="h4">With Spacing</C.Text>
      }>
        <C.Stack css={{ gap: "$small" }}>
          <DemoBox color="$purple">Top</DemoBox>
          <C.Stack bottom="medium" top="medium">
            <DemoBox color="$purple">Spaced</DemoBox>
          </C.Stack>
          <DemoBox color="$purple">Bottom</DemoBox>
        </C.Stack>
      </C.Box>

      {/* Inverted Stack */}
      <C.Box header={
        <C.Text as="h4">Inverted</C.Text>
      }>
        <C.Stack css={{ gap: "$small" }} inverted>
          <DemoBox color="$blue">First</DemoBox>
          <DemoBox color="$blue">Second</DemoBox>
          <DemoBox color="$blue">Third</DemoBox>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 