import { JSX, ReactNode } from "react";

import * as C from "../../src/index";
    
// Demo box component to visualize Stack layouts
function DemoBox({ children, color }: { children: ReactNode; color: string }): JSX.Element {
  return (
    <C.Box css={{ 
      backgroundColor: color,
      borderRadius: "$medium",
      color: "white",

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
      <C.Box header={
        <C.Text as="h4">Basic Usage</C.Text>
      }>
        <C.Stack css={{ gap: "$small" }}>
          <DemoBox color="$purple">Item 1</DemoBox>
          <DemoBox color="$purple">Item 2</DemoBox>
          <DemoBox color="$purple">Item 3</DemoBox>
        </C.Stack>
      </C.Box>

      <C.Box header={
        <C.Text as="h4">Row Direction</C.Text>
      }>
        <C.Stack css={{ gap: "$small" }} direction="row">
          <DemoBox color="$blue">Item 1</DemoBox>
          <DemoBox color="$blue">Item 2</DemoBox>
          <DemoBox color="$blue">Item 3</DemoBox>
        </C.Stack>
      </C.Box>

      <C.Box header={
        <C.Text as="h4">With Width</C.Text>
      }>
        <C.Stack css={{ gap: "$small" }}>
          <C.Stack direction="column" width={100}>
            <DemoBox color="$orange">100% with padding</DemoBox>
          </C.Stack>
          <C.Stack direction="column" width={75}>
            <DemoBox color="$orange">75% with padding</DemoBox>
          </C.Stack>
          <C.Stack direction="column" width={50}>
            <DemoBox color="$orange">50% with padding</DemoBox>
          </C.Stack>
        </C.Stack>
      </C.Box>

      <C.Box header={
        <C.Text as="h4">Responsive (Debug)</C.Text>
      }>
        <C.Stack css={{ border: "1px solid red" }} direction="row" wrap>
          <C.Stack 
            css={{ border: "2px solid blue" }}
            direction="column"
            width={40}
            widthResponsive={{ phone: 100 }}
          >
            <DemoBox color="$blue">40% default, 100% on phone</DemoBox>
          </C.Stack>
          <C.Stack 
            css={{ border: "2px solid purple" }}
            direction="column"
            width={60}
            widthResponsive={{ 
              phone: 100,
              tabletX: 80 
            }}
          >
            <DemoBox color="$purple">60% default, 80% tabletX, 100% phone</DemoBox>
          </C.Stack>
        </C.Stack>
      </C.Box>

      <C.Box header={
        <C.Text as="h4">Perfect 50/50 Columns</C.Text>
      }>
        <C.Stack direction="row">
          <C.Stack 
            direction="column"
            width={50}
            widthResponsive={{ phone: 100 }}
          >
            <DemoBox color="$orange">50% desktop, 100% phone (auto-wraps)</DemoBox>
          </C.Stack>
          <C.Stack 
            direction="column"
            width={50}
            widthResponsive={{ phone: 100 }}
          >
            <DemoBox color="$yellow">50% desktop, 100% phone (auto-wraps)</DemoBox>
          </C.Stack>
        </C.Stack>
      </C.Box>

      <C.Box header={
        <C.Text as="h4">CSS + Responsive Test</C.Text>
      }>
        <C.Stack direction="row">
          <C.Stack 
            direction="column"
            width={30}
            widthResponsive={{ 
              phone: 100,
              tabletX: 50 
            }}
           
          >
            <DemoBox color="white">Width + Custom CSS</DemoBox>
          </C.Stack>
          <C.Stack 
            css={{
              backgroundColor: "$purple",
              padding: "$small",
              phone: {
                backgroundColor: "$blue"
              },
              tabletX: {
                backgroundColor: "$orange"
              }
            }}
            direction="column"
            width={70}
            widthResponsive={{ 
              phone: 100,
              tabletX: 50 
            }}
          >
            <DemoBox color="black">Should work together!</DemoBox>
          </C.Stack>
        </C.Stack>
      </C.Box>

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