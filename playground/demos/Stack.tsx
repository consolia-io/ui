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
          <C.Stack width={100}>
            <DemoBox color="$orange">100%</DemoBox>
          </C.Stack>
          <C.Stack width={75}>
            <DemoBox color="$orange">75%</DemoBox>
          </C.Stack>
          <C.Stack width={50}>
            <DemoBox color="$orange">50%</DemoBox>
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