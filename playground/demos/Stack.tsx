import { JSX, ReactNode } from "react";

import * as C from "../../src/index";
    
// Demo box component to visualize Stack layouts
function DemoBox({ children, color }: { children: ReactNode; color: string }): JSX.Element {
  return (
    <C.Box css={{ 
      backgroundColor: color,
      borderRadius: "$medium",
      color: "white",
      minWidth: "80px",
      padding: "$medium",
      textAlign: "center"
    }}>
      {children}
    </C.Box>
  );
}

export default function StackDemo(): JSX.Element {
  return (
    <C.Stack css={{ gap: "$xlarge" }}>
      {/* Basic Stack (Vertical) */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Default Stack (Vertical)</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <DemoBox color="$purple500">Item 1</DemoBox>
          <DemoBox color="$purple500">Item 2</DemoBox>
          <DemoBox color="$purple500">Item 3</DemoBox>
        </C.Stack>
      </C.Stack>

      {/* Row Stack */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Row Stack</C.Text>
        <C.Stack css={{ gap: "$medium" }} direction="row">
          <DemoBox color="$blue500">Item 1</DemoBox>
          <DemoBox color="$blue500">Item 2</DemoBox>
          <DemoBox color="$blue500">Item 3</DemoBox>
        </C.Stack>
      </C.Stack>

      {/* Column Stack with Widths */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Column Stack with Widths</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Stack direction="column" width={100}>
            <DemoBox color="$green500">Width 100%</DemoBox>
          </C.Stack>
          <C.Stack direction="column" width={75}>
            <DemoBox color="$green500">Width 75%</DemoBox>
          </C.Stack>
          <C.Stack direction="column" width={50}>
            <DemoBox color="$green500">Width 50%</DemoBox>
          </C.Stack>
        </C.Stack>
      </C.Stack>

      {/* Flex Alignment */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Flex Alignment</C.Text>
        <C.Stack css={{ backgroundColor: "$gray100", borderRadius: "$medium", gap: "$medium", padding: "$large" }} direction="row" flex="center">
          <DemoBox color="$orange500">Center</DemoBox>
          <DemoBox color="$orange500">Aligned</DemoBox>
          <DemoBox color="$orange500">Items</DemoBox>
        </C.Stack>
      </C.Stack>

      {/* Responsive Stack */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Responsive Stack</C.Text>
        <C.Stack direction="column" width={100} widthPhone={100} widthTablet={50}>
          <DemoBox color="$red500">Responsive Width</DemoBox>
          <C.Text accent css={{ fontSize: "$small" }}>100% on mobile, 50% on tablet, 100% on desktop</C.Text>
        </C.Stack>
      </C.Stack>

      {/* Stack with Spacing */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Stack with Spacing</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <DemoBox color="$yellow500">Top Space</DemoBox>
          <C.Stack bottom="large" top="large">
            <DemoBox color="$yellow500">Vertical Spacing</DemoBox>
          </C.Stack>
          <DemoBox color="$yellow500">Bottom Space</DemoBox>
        </C.Stack>
      </C.Stack>

      {/* Inverted Stack */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Inverted Stack</C.Text>
        <C.Stack inverted css={{ borderRadius: "$medium", padding: "$large", gap: "$medium" }}>
          <DemoBox color="$purple300">First Item</DemoBox>
          <DemoBox color="$purple300">Second Item</DemoBox>
          <DemoBox color="$purple300">Third Item</DemoBox>
        </C.Stack>
      </C.Stack>

      {/* Flex Duo (Space Between) */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Flex Duo</C.Text>
        <C.Stack flexduo>
          <DemoBox color="$purple500">Left</DemoBox>
          <DemoBox color="$purple500">Right</DemoBox>
        </C.Stack>
      </C.Stack>

      {/* Collapse Duo (Responsive Space Between) */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Collapse Duo (Responsive)</C.Text>
        <C.Stack collapseduo>
          <DemoBox color="$blue500">Responsive</DemoBox>
          <DemoBox color="$blue500">Space Between</DemoBox>
        </C.Stack>
      </C.Stack>
    </C.Stack>
  );
} 