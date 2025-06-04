import React from "react";
import * as C from "../../src/index";

export default function DividerDemo() {
  return (
    <C.Stack css={{ 
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "$large" 
    }}>
      {/* Basic Divider */}
      <C.Stack>
        <C.Text as="h4">Basic</C.Text>
        <C.Text>Content above</C.Text>
        <C.Divider />
        <C.Text>Content below</C.Text>
      </C.Stack>

      {/* With Spacing */}
      <C.Stack>
        <C.Text as="h4">With Spacing</C.Text>
        <C.Text>Content above</C.Text>
        <C.Divider top="medium" bottom="medium" />
        <C.Text>Content below</C.Text>
      </C.Stack>

      {/* In Content */}
      <C.Stack>
        <C.Text as="h4">In Content</C.Text>
        <C.Text>First paragraph of content describing something important.</C.Text>
        <C.Divider top="small" bottom="small" />
        <C.Text>Second paragraph with different content.</C.Text>
        <C.Divider top="small" bottom="small" />
        <C.Text>Third and final paragraph of the content.</C.Text>
      </C.Stack>

      {/* Between Components */}
      <C.Stack>
        <C.Text as="h4">Between Components</C.Text>
        <C.Button block>First Action</C.Button>
        <C.Divider top="medium" bottom="medium" />
        <C.Button block theme="minimal">Second Action</C.Button>
      </C.Stack>
    </C.Stack>
  );
} 