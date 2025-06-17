import { JSX } from "react";

import * as C from "../../src/index";

export default function LogoDemo(): JSX.Element {
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
          <C.Logo type="full" width={120} />
          <C.Logo type="icon" width={48} />
          <C.Logo type="text" width={100} />
        </C.Stack>
      </C.Box>

      {/* Themes */}
      <C.Box header={
        <C.Text as="h4">Themes</C.Text>
      }>
        <C.Stack>
          <C.Logo type="full" width={100} theme="default" />
          <C.Logo type="full" width={100} theme="blue" />
          <C.Logo type="full" width={100} theme="purple" />
          <C.Logo type="full" width={100} theme="orange" />
        </C.Stack>
      </C.Box>

      {/* Sizes */}
      <C.Box header={
        <C.Text as="h4">Sizes</C.Text>
      }>
        <C.Stack>
          <C.Logo type="full" width={80} />
          <C.Logo type="full" width={120} />
          <C.Logo type="full" width={160} />
        </C.Stack>
      </C.Box>

      {/* With Hover */}
      <C.Box header={
        <C.Text as="h4">With Hover</C.Text>
      }>
        <C.Stack>
          <C.Logo type="full" width={120} hover />
          <C.Text as="small">Hover for effect</C.Text>
        </C.Stack>
      </C.Box>

      {/* Outline */}
      <C.Box header={
        <C.Text as="h4">Outline</C.Text>
      }>
        <C.Stack>
          <C.Logo type="full" width={120} outline />
          <C.Logo type="icon" width={48} outline />
        </C.Stack>
      </C.Box>

      {/* Combinations */}
      <C.Box header={
        <C.Text as="h4">Combinations</C.Text>
      }>
        <C.Stack>
          <C.Logo 
            type="full" 
            width={120} 
            theme="blue" 
            hover 
          />
          <C.Logo 
            type="icon" 
            width={48} 
            theme="purple" 
            outline 
          />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 