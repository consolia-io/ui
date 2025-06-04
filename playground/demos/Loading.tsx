import { JSX, useState } from "react";

import * as C from "../../src/index";

export default function LoadingDemo(): JSX.Element {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(2, 1fr)" 
    }}>
      {/* Basic Loading */}
      <C.Stack>
        <C.Text as="h4">Basic</C.Text>
        <C.Stack css={{ alignItems: "center", gap: "$medium" }} direction="row">
          <C.Loading />
        </C.Stack>
      </C.Stack>

      {/* Themes */}
      <C.Stack>
        <C.Text as="h4">Themes</C.Text>
        <C.Stack css={{ alignItems: "center", gap: "$medium" }} direction="row">
          <C.Loading theme="default" />
          <C.Loading theme="colored" />
        </C.Stack>
        <C.Text css={{ color: "$text", opacity: "$light" }}>Default vs Colored cycling</C.Text>
      </C.Stack>

      {/* Sizes */}
      <C.Stack>
        <C.Text as="h4">Sizes</C.Text>
        <C.Stack css={{ alignItems: "center", gap: "$medium" }} direction="row">
          <C.Loading css={{ height: "16px", width: "16px" }} />
          <C.Loading css={{ height: "24px", width: "24px" }} />
          <C.Loading css={{ height: "32px", width: "32px" }} />
          <C.Loading css={{ height: "48px", width: "48px" }} />
        </C.Stack>
      </C.Stack>

      {/* Colors + Colored Theme */}
      <C.Stack>
        <C.Text as="h4">Colored Theme Examples</C.Text>
        <C.Stack css={{ alignItems: "center", gap: "$medium" }} direction="row">
          <C.Loading theme="colored" />
          <C.Loading theme="colored" css={{ height: "32px", width: "32px" }} />
          <C.Loading theme="colored" css={{ height: "48px", width: "48px" }} />
        </C.Stack>
      </C.Stack>

      {/* Static Colors */}
      <C.Stack>
        <C.Text as="h4">Static Colors</C.Text>
        <C.Stack css={{ alignItems: "center", gap: "$medium" }} direction="row">
          <C.Loading css={{ color: "$text" }} />
          <C.Loading css={{ color: "$blue" }} />
          <C.Loading css={{ color: "$purple" }} />
          <C.Loading css={{ color: "$orange" }} />
        </C.Stack>
      </C.Stack>

      {/* Loading Overlay */}
      <C.Stack>
        <C.Text as="h4">Loading Overlay</C.Text>
        <C.Box css={{ height: "200px", position: "relative" }}>
          <C.Stack css={{ gap: "$medium" }}>
            <C.Button 
              theme={showOverlay ? "solid" : "default"}
              onClick={() => setShowOverlay(!showOverlay)}
            >
              {showOverlay ? "Hide" : "Show"} Overlay
            </C.Button>
            <C.Text>Content in the box</C.Text>
            <C.Text>More content here</C.Text>
            <C.Text>Even more content</C.Text>
          </C.Stack>
          {showOverlay && (
            <C.LoadingOverlay 
              title="Loading something..." 
            />
          )}
        </C.Box>
      </C.Stack>
    </C.Stack>
  );
} 