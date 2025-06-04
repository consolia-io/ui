import React from "react";
import * as C from "../../src/index";

/**
 * Avatar Props:
 * - alt?: string - Alt text for the image (if src is provided)
 * - colors?: boolean - Enable color backgrounds based on fallback text
 * - fallback: string - Text to show when no image is provided
 * - src?: string - URL of the avatar image
 * - width?: number - Width and height of the avatar (default: 24)
 */
export default function AvatarDemo() {
  return (
    <C.Stack css={{ 
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "$large" 
    }}>
      {/* Basic Usage */}
      <C.Box theme="border">
        <C.Text as="h4">Basic Usage</C.Text>
        <C.Stack css={{ marginTop: "$medium" }}>
          <C.Avatar fallback="JD" />
          <C.Avatar 
            fallback="D"
            alt="Dolmios Avatar"
          />
        </C.Stack>
      </C.Box>

      {/* Sizes */}
      <C.Box theme="border">
        <C.Text as="h4">Sizes</C.Text>
        <C.Stack css={{ marginTop: "$medium" }}>
          <C.Avatar fallback="S" width={20} />
          <C.Avatar fallback="M" />
          <C.Avatar fallback="L" width={32} />
          <C.Avatar fallback="XL" width={48} />
        </C.Stack>
      </C.Box>

      {/* Colors */}
      <C.Box theme="border">
        <C.Text as="h4">Colors</C.Text>
        <C.Stack css={{ marginTop: "$medium" }}>
          <C.Avatar colors fallback="A" />
          <C.Avatar colors fallback="B" />
          <C.Avatar colors fallback="C" />
          <C.Avatar colors fallback="D" />
          <C.Avatar colors fallback="E" />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 