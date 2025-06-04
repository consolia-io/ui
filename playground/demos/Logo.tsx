import React from "react";
import * as C from "../../src/index";

export default function LogoDemo() {
  return (
    <C.Stack css={{ gap: "$large" }}>
      {/* Types */}
      <C.Box theme="border">
        <C.Text as="h4">Types</C.Text>
        <C.Stack css={{ marginTop: "$medium", gap: "$large" }}>
          <C.Logo type="full" width={48} />
          <C.Logo type="full" width={200} />
          <C.Logo type="full" width={180} />
        </C.Stack>
      </C.Box>

      {/* Colors */}
      <C.Box theme="border">
        <C.Text as="h4">Colors</C.Text>
        <C.Stack css={{ marginTop: "$medium", gap: "$large" }}>
          <C.Logo type="full" width={48} color="purple" />
          <C.Logo type="full" width={48} color="orange" />
          <C.Logo type="full" width={48} color="yellow" />
          <C.Logo type="full" width={48} color="blue" />
        </C.Stack>
      </C.Box>

      {/* Sizes */}
      <C.Box theme="border">
        <C.Text as="h4">Sizes</C.Text>
        <C.Stack css={{ marginTop: "$medium", gap: "$large" }}>
          <C.Logo type="full" width={120} />
          <C.Logo type="full" width={180} />
          <C.Logo type="full" width={240} />
        </C.Stack>
      </C.Box>

      {/* Hover */}
      <C.Box theme="border">
        <C.Text as="h4">Hover</C.Text>
        <C.Stack css={{ marginTop: "$medium", gap: "$large" }}>
          <C.Logo type="full" width={120} hover />
        </C.Stack>
      </C.Box>

      {/* Icon */}
      <C.Box theme="border">
        <C.Text as="h4">Icon</C.Text>
        <C.Stack css={{ marginTop: "$medium", gap: "$large" }}>
          <C.Logo type="icon" width={120} />
        </C.Stack>
      </C.Box>

      {/* Outline */}
      <C.Box theme="border">
        <C.Text as="h4">Outline</C.Text>
        <C.Stack css={{ marginTop: "$medium", gap: "$large" }}>
          <C.Logo type="full" width={120} outline />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 