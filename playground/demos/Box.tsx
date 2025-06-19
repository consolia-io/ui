import { JSX } from "react";

import * as C from "../../src/index";

export default function BoxDemo(): JSX.Element {
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
          <C.Box>Default Box</C.Box>
          <C.Box small>Small Box</C.Box>
          <C.Box minimal>Minimal Box</C.Box>
        </C.Stack>
      </C.Box>

      {/* Themes (Filled Backgrounds) */}
      <C.Box header={
        <C.Text as="h4">Themes (Filled)</C.Text>
      }>
        <C.Stack>
          <C.Box theme="blue">Blue Theme</C.Box>
          <C.Box theme="purple">Purple Theme</C.Box>
          <C.Box theme="orange">Orange Theme</C.Box>
          <C.Box theme="yellow">Yellow Theme</C.Box>
          <C.Box theme="solid">Solid Theme</C.Box>
          <C.Box theme="fill">Fill Theme</C.Box>
          <C.Box theme="gradient"><C.Logo /></C.Box>
        </C.Stack>
      </C.Box>

      {/* Borders (Left Border Style) */}
      <C.Box header={
        <C.Text as="h4">Borders (Left Border)</C.Text>
      }>
        <C.Stack>
          <C.Box border="blue">Blue Border</C.Box>
          <C.Box border="purple">Purple Border</C.Box>
          <C.Box border="orange">Orange Border</C.Box>
          <C.Box border="solid">Solid Border</C.Box>
        </C.Stack>
      </C.Box>

      {/* With Headers */}
      <C.Box header={
        <C.Text as="h4">With Headers</C.Text>
      }>
        <C.Stack>
          <C.Box header="Simple Header">
            Content with header
          </C.Box>
          <C.Box header={<C.Badge theme="blue">Status</C.Badge>}>
            Complex header
          </C.Box>
        </C.Stack>
      </C.Box>

      {/* With Footers */}
      <C.Box header={
        <C.Text as="h4">With Footers</C.Text>
      }>
        <C.Stack>
          <C.Box footer={
            <C.Button small>Action</C.Button>
          }>
            Content with footer
          </C.Box>
          <C.Box 
            footer={
              <C.Stack direction="row">
                <C.Button small theme="minimal">Cancel</C.Button>
                <C.Button small>Save</C.Button>
              </C.Stack>
            }
            header="Complete Example"
          >
            Header and footer
          </C.Box>
        </C.Stack>
      </C.Box>

      {/* Interactive */}
      <C.Box header={
        <C.Text as="h4">Interactive</C.Text>
      }>
        <C.Stack>
          <C.Box closable>
            Closable Box
          </C.Box>
          <C.Box expandable expandableHeight={60}>
            Expandable box with long content that gets truncated at the specified height and can be expanded to show more.
          </C.Box>
          <C.Box loading>
            Loading State
          </C.Box>
        </C.Stack>
      </C.Box>

      {/* Theme vs Border Comparison */}
      <C.Box header={
        <C.Text as="h4">Theme vs Border Comparison</C.Text>
      }>
        <C.Stack>
          <C.Stack css={{ gap: "$small" }} direction="row">
            <C.Box css={{ flex: 1 }} theme="blue">
              <C.Text as="strong">Theme Blue</C.Text>
              <C.Text as="small">Filled background</C.Text>
            </C.Box>
            <C.Box border="blue" css={{ flex: 1 }}>
              <C.Text as="strong">Border Blue</C.Text>
              <C.Text as="small">Left border only</C.Text>
            </C.Box>
          </C.Stack>
          <C.Stack css={{ gap: "$small" }} direction="row">
            <C.Box 
              css={{ flex: 1 }} 
              header="Purple Theme"
              theme="purple"
            >
              With header
            </C.Box>
            <C.Box 
              border="purple" 
              css={{ flex: 1 }}
              header="Purple Border"
            >
              With header
            </C.Box>
          </C.Stack>
        </C.Stack>
      </C.Box>

      {/* Advanced */}
      <C.Box header={
        <C.Text as="h4">Advanced</C.Text>
      }>
        <C.Stack>
          <C.Box 
            closable
            small
            theme="gradient"
          >
            <C.Logo theme="light" />
          </C.Box>
          <C.Box 
            border="orange"
            footer={<C.Button small>Update</C.Button>}
            header="Settings"
          >
            Border with complex content
          </C.Box>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 