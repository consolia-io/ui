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
          <C.Logo theme="default" type="full" width={100} />
          <C.Logo theme="blue" type="full" width={100} />
          <C.Logo theme="purple" type="full" width={100} />
          <C.Logo theme="orange" type="full" width={100} />
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
          <C.Logo hover type="full" width={120} />
          <C.Text as="small">Hover for effect</C.Text>
        </C.Stack>
      </C.Box>

      {/* Outline */}
      <C.Box header={
        <C.Text as="h4">Outline</C.Text>
      }>
        <C.Stack>
          <C.Logo outline type="full" width={120} />
          <C.Logo outline type="icon" width={48} />
        </C.Stack>
      </C.Box>

      {/* Combinations */}
      <C.Box header={
        <C.Text as="h4">Combinations</C.Text>
      }>
        <C.Stack>
          <C.Logo 
            hover 
            theme="blue" 
            type="full" 
            width={120} 
          />
          <C.Logo 
            outline 
            theme="purple" 
            type="icon" 
            width={48} 
          />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 