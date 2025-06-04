import React from "react";
import * as C from "../../src/index";
import { Icons } from "../../src/icons";

export default function BadgeDemo() {
  return (
    <C.Stack css={{ 
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "$large" 
    }}>
      {/* Themes */}
      <C.Stack>
        <C.Text as="h4">Themes</C.Text>
        <C.Stack>
          <C.Badge>Default</C.Badge>
          <C.Badge theme="purple">Purple</C.Badge>
          <C.Badge theme="orange">Orange</C.Badge>
          <C.Badge theme="yellow">Yellow</C.Badge>
          <C.Badge theme="blue">Blue</C.Badge>
        </C.Stack>
      </C.Stack>

      {/* Sizes & Block */}
      <C.Stack>
        <C.Text as="h4">Sizes</C.Text>
        <C.Stack>
          <C.Badge small>Small Badge</C.Badge>
          <C.Badge>Regular Badge</C.Badge>
          <C.Badge block>Full Width</C.Badge>
        </C.Stack>
      </C.Stack>

      {/* Interactive */}
      <C.Stack>
        <C.Text as="h4">Interactive</C.Text>
        <C.Stack>
          <C.Badge link>Clickable</C.Badge>
          <C.Badge closable>Closable</C.Badge>
          <C.Badge loading>Loading</C.Badge>
          <C.Badge copy="123">Copy Text</C.Badge>
        </C.Stack>
      </C.Stack>

      {/* With Icons */}
      <C.Stack>
        <C.Text as="h4">With Icons</C.Text>
        <C.Stack>
          <C.Badge icon={<C.Icon><Icons.CheckCircle /></C.Icon>}>Left Icon</C.Badge>
          <C.Badge 
            icon={<C.Icon><Icons.ArrowRight /></C.Icon>}
            iconPosition="right"
          >
            Right Icon
          </C.Badge>
        </C.Stack>
      </C.Stack>

      {/* Inline */}
      <C.Stack>
        <C.Text as="h4">Inline</C.Text>
        <C.Stack>
          <C.Text>
            Text with <C.Badge inline="smaller">inline badge</C.Badge> in it
          </C.Text>
          <C.Text>
            Another <C.Badge inline="smaller" theme="purple">purple badge</C.Badge> example
          </C.Text>
        </C.Stack>
      </C.Stack>

      {/* Theme Combinations */}
      <C.Stack>
        <C.Text as="h4">Combinations</C.Text>
        <C.Stack>
          <C.Badge theme="purple" small icon={<C.Icon><Icons.Circle /></C.Icon>}>
            Status
          </C.Badge>
          <C.Badge theme="orange" loading>
            Processing
          </C.Badge>
          <C.Badge theme="blue" closable>
            Removable
          </C.Badge>
        </C.Stack>
      </C.Stack>
    </C.Stack>
  );
} 