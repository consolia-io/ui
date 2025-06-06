import React from "react";
import * as C from "../../src/index";

export default function TextDemo() {
  return (
    <C.Stack css={{ gap: "$xlarge" }}>
      {/* Headings */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Headings</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Text as="h1">Heading 1</C.Text>
          <C.Text as="h2">Heading 2</C.Text>
          <C.Text as="h3">Heading 3</C.Text>
          <C.Text as="h4">Heading 4</C.Text>
          <C.Text as="h5">Heading 5</C.Text>
          <C.Text as="h6">Heading 6</C.Text>
        </C.Stack>
      </C.Stack>

      {/* Paragraph and Inline Elements */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Paragraph and Inline Elements</C.Text>
        <C.Text as="p">
          This is a regular paragraph with <C.Text as="strong" inline="medium">strong text</C.Text> and{" "}
          <C.Text as="span" inline="medium" css={{ fontStyle: "italic" }}>inline span text</C.Text>.
          You can also use <C.Text as="a" href="#" link="default" inline="medium">default links</C.Text> or{" "}
          <C.Text as="a" href="#" link="minimal" inline="medium">minimal links</C.Text>.
        </C.Text>
        <C.Text as="small">This is small text, often used for captions or helper text.</C.Text>
      </C.Stack>

      {/* Numbers and Data */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Numbers and Data</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Text as="p">Regular numbers: 0123456789</C.Text>
          <C.Text as="p">
            <C.Text as="strong" inline="medium">Data example:</C.Text> Revenue increased by 147% to $2,847,192 in Q4 2024
          </C.Text>
          <C.Text as="small">Updated: January 15, 2025 at 3:42 PM</C.Text>
          <C.Text as="h6">Tokyo TDC Annual Awards — 2019</C.Text>
        </C.Stack>
      </C.Stack>

      {/* Lists */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Lists</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Text as="ul">
            <C.Text as="li">Unordered list item 1</C.Text>
            <C.Text as="li">Unordered list item 2</C.Text>
            <C.Text as="li">Unordered list item 3</C.Text>
          </C.Text>
          <C.Text as="ol">
            <C.Text as="li">Ordered list item 1</C.Text>
            <C.Text as="li">Ordered list item 2</C.Text>
            <C.Text as="li">Ordered list item 3</C.Text>
          </C.Text>
        </C.Stack>
      </C.Stack>

      {/* Highlights */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Highlights</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Text as="p" highlight="default">Default highlight</C.Text>
          <C.Text as="p" highlight="blue">Blue highlight</C.Text>
          <C.Text as="p" highlight="purple">Purple highlight</C.Text>
          <C.Text as="p" highlight="orange">Orange highlight</C.Text>
          <C.Text as="p" highlight="yellow">Yellow highlight</C.Text>
        </C.Stack>
      </C.Stack>

      {/* Links */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Links</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Text as="a" href="#" link="default">Default link style</C.Text>
          <C.Text as="a" href="#" link="minimal">Minimal link style</C.Text>
          <C.Text as="a" href="#" target="_blank">External link (with icon)</C.Text>
        </C.Stack>
      </C.Stack>

      {/* Spacing Controls */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Spacing Controls</C.Text>
        <C.Box css={{ backgroundColor: "$surface", padding: "$medium", borderRadius: "$medium" }}>
          <C.Text as="p" top="large" bottom="large">Text with top and bottom spacing</C.Text>
          <C.Text as="span" inline="medium">Inline text with right margin</C.Text>
          <C.Text as="span" inline="auto">Auto-margin inline text</C.Text>
        </C.Box>
      </C.Stack>

      {/* Special Features */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Special Features</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Text as="p" accent>Accent colored text</C.Text>
          <C.Text as="p" balanced>
            This text uses the Balancer component to create better line breaks for headings and important text blocks that need to look good across different screen sizes.
          </C.Text>
          <C.Text as="label">Form Label Text</C.Text>
        </C.Stack>
      </C.Stack>

      {/* Text Composition */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Text Composition</C.Text>
        <C.Stack css={{ gap: "$medium", backgroundColor: "$surface", padding: "$large", borderRadius: "$medium" }}>
          <C.Text as="h2">The Untitled Sans Approach</C.Text>
          <C.Text as="p">
            When Yanagi visited the Tokyo exhibition he commented on several exhibits. His insights revealed 
            that <C.Text as="strong" inline="medium">design excellence</C.Text> emerges not from decoration, but from{" "}
            <C.Text as="span" inline="medium" highlight="purple">restraint and purpose</C.Text>. The typeface follows 
            this philosophy—it's designed to{" "}
            <C.Text as="a" href="#" link="default" inline="medium">disappear into the content</C.Text>.
          </C.Text>
          <C.Text as="p">
            "I don't want to notice them, and I sincerely hope they don't spoil the atmosphere."
          </C.Text>
          <C.Text as="small">From the Klim Type Foundry — Untitled Collection</C.Text>
        </C.Stack>
      </C.Stack>
    </C.Stack>
  );
} 