import React from "react";
import * as C from "../../src/index";
import { Icons } from "../../src/icons";

export default function IconDemo() {
  return (
    <C.Stack css={{ 
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "$large" 
    }}>
      {/* Basic Icons */}
      <C.Stack>
        <C.Text as="h4">Basic</C.Text>
        <C.Stack direction="row" css={{ gap: "$medium", alignItems: "center" }}>
          <C.Icon><Icons.Circle /></C.Icon>
          <C.Icon><Icons.CircleDashed /></C.Icon>
          <C.Icon><Icons.Dot /></C.Icon>
          <C.Icon><Icons.Hash /></C.Icon>
        </C.Stack>
      </C.Stack>

      {/* Sizes */}
      <C.Stack>
        <C.Text as="h4">Sizes</C.Text>
        <C.Stack direction="row" css={{ gap: "$medium", alignItems: "center" }}>
          <C.Icon forceSize={16}><Icons.Circle /></C.Icon>
          <C.Icon forceSize={24}><Icons.Circle /></C.Icon>
          <C.Icon forceSize={32}><Icons.Circle /></C.Icon>
          <C.Icon forceSize={48}><Icons.Circle /></C.Icon>
        </C.Stack>
      </C.Stack>

      {/* Colors */}
      <C.Stack>
        <C.Text as="h4">Colors</C.Text>
        <C.Stack direction="row" css={{ gap: "$medium", alignItems: "center" }}>
          <C.Icon forceColor="text"><Icons.Circle /></C.Icon>
          <C.Icon forceColor="blue"><Icons.Circle /></C.Icon>
          <C.Icon forceColor="purple"><Icons.Circle /></C.Icon>
          <C.Icon forceColor="orange"><Icons.Circle /></C.Icon>
        </C.Stack>
      </C.Stack>

      {/* Inline Usage */}
      <C.Stack>
        <C.Text as="h4">Inline</C.Text>
        <C.Text>
          Text with an <C.Icon inline="smaller"><Icons.Circle /></C.Icon> icon in it.
          And another <C.Icon inline="smaller" forceColor="blue"><Icons.CheckCircle /></C.Icon> here.
        </C.Text>
        <C.Text>
          <C.Icon inline="auto"><Icons.ArrowRight /></C.Icon>
          Icon with auto margin
        </C.Text>
      </C.Stack>
    </C.Stack>
  );
} 