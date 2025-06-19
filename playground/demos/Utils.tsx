import { JSX } from "react";

import * as C from "../../src/index";

export default function UtilsDemo(): JSX.Element {
  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(3, 1fr)" 
    }}>
      {/* Dynamic Viewport */}
      <C.Box header={
        <C.Text as="h4">Dynamic Viewport</C.Text>
      }>
        <C.Stack>
          <C.Box css={{
            border: "1px solid $border",
            dynamicViewport: { property: 'maxHeight', unit: 'vh', value: '50' },
            overflow: "auto"
          }}>
            <C.Text as="small" css={{ opacity: "$light" }}>
              See CSS for max-height fallback
            </C.Text>
            <C.Text>
              This box uses dynamicViewport utility with max-height: 50vh fallback to 50dvh.
              Try inspecting the CSS to see the @supports rule.
            </C.Text>
          </C.Box>
        </C.Stack>
      </C.Box>

      {/* Theme Utilities */}
      <C.Box header={
        <C.Text as="h4">Theme Utilities</C.Text>
      }>
        <C.Stack>
          <C.Box css={{
            backgroundColor: "$surface",
            darkOnly: {
              backgroundColor: "$purple"
            }
          }}>
            <C.Text as="small" css={{ opacity: "$light" }}>
              See CSS for theme-specific styles
            </C.Text>
            <C.Text>Dark mode only: Purple background in dark theme</C.Text>
          </C.Box>
          <C.Box css={{
            lightOnly: {
              backgroundColor: "$blueLight"
            }
          }}>
            <C.Text>Light mode only: Blue background in light theme</C.Text>
          </C.Box>
        </C.Stack>
      </C.Box>

      {/* Responsive Breakpoints */}
      <C.Box header={
        <C.Text as="h4">Responsive Breakpoints</C.Text>
      }>
        <C.Stack>
          <C.Box css={{
            backgroundColor: "$surface",
            laptop: {
              backgroundColor: "$purpleLight"
            },
            phone: {
              backgroundColor: "$orangeLight"
            },
            tablet: {
              backgroundColor: "$blueLight"
            }
          }}>
            <C.Text as="small" css={{ opacity: "$light" }}>
              Resize window to see changes
            </C.Text>
            <C.Text>
              Changes color based on breakpoint:
              <br />• Phone: Orange
              <br />• Tablet: Blue  
              <br />• Laptop+: Purple
            </C.Text>
          </C.Box>
        </C.Stack>
      </C.Box>

      {/* Visibility Utilities */}
      <C.Box header={
        <C.Text as="h4">Visibility Utilities</C.Text>
      }>
        <C.Stack>
          <C.Box css={{
            hidden: "phone"
          }}>
            <C.Text>Hidden on phone screens</C.Text>
          </C.Box>
          <C.Box css={{
            visible: "phone"
          }}>
            <C.Text>Only visible on phone screens</C.Text>
          </C.Box>
          <C.Text as="small" css={{ opacity: "$light" }}>
            Resize window to see visibility changes
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* Special Breakpoints */}
      <C.Box header={
        <C.Text as="h4">Special Breakpoints</C.Text>
      }>
        <C.Stack>
          <C.Box css={{
            backgroundColor: "$surface",
            micro: {
              backgroundColor: "$yellowLight"
            },
            print: {
              backgroundColor: "white !important"
            }
          }}>
            <C.Text as="small" css={{ opacity: "$light" }}>
              Try very small screen or print preview
            </C.Text>
            <C.Text>
              • Micro screens (&lt;375px): Yellow
              <br />• Print: White background
              <br />• Retina: Enhanced for high-DPI
            </C.Text>
          </C.Box>
        </C.Stack>
      </C.Box>

      {/* Wide Breakpoint */}
      <C.Box header={
        <C.Text as="h4">Wide Breakpoint</C.Text>
      }>
        <C.Stack>
          <C.Box css={{
            backgroundColor: "$surface",
            wide: {
              backgroundColor: "$purpleLight",
              padding: "$largest"
            }
          }}>
            <C.Text as="small" css={{ opacity: "$light" }}>
              Only applies on very wide screens (2201px+)
            </C.Text>
            <C.Text>
              Enhanced styling for ultra-wide displays with extra padding and purple background.
            </C.Text>
          </C.Box>
        </C.Stack>
      </C.Box>

      {/* Utility Combinations */}
      <C.Box header={
        <C.Text as="h4">Utility Combinations</C.Text>
      }>
        <C.Stack>
          <C.Box css={{
            backgroundColor: "$surface",
            darkOnly: {
              backgroundColor: "$orangeLight"
            },
            dynamicViewport: { property: 'minHeight', unit: 'vh', value: '20' },
            phone: {
              dynamicViewport: { property: 'minHeight', unit: 'vh', value: '15' }
            }
          }}>
            <C.Text as="small" css={{ opacity: "$light" }}>
              Multiple utilities combined
            </C.Text>
            <C.Text>
              Combines dynamic viewport, theme utilities, and responsive breakpoints for complex layouts.
            </C.Text>
          </C.Box>
        </C.Stack>
      </C.Box>

      {/* Inline Visibility */}
      <C.Box header={
        <C.Text as="h4">Inline Visibility</C.Text>
      }>
        <C.Stack>
          <C.Stack css={{ alignItems: "center", gap: "$small" }} direction="row">
            <C.Text>Always visible</C.Text>
            <C.Badge css={{ hiddenInline: "phone" }}>Desktop only</C.Badge>
            <C.Badge css={{ visibleInline: "phone" }} theme="orange">Mobile only</C.Badge>
          </C.Stack>
          <C.Text as="small" css={{ opacity: "$light" }}>
            hiddenInline/visibleInline for inline elements
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* Documentation Note */}
      <C.Box header={
        <C.Text as="h4">Available Utils Reference</C.Text>
      }>
        <C.Stack css={{ gap: "$small" }}>
          <C.Text as="small">
            <strong>Theme:</strong> darkOnly, lightOnly
          </C.Text>
          <C.Text as="small">
            <strong>Responsive:</strong> wide, desktop, laptop, tablet, phone + X variants
          </C.Text>
          <C.Text as="small">
            <strong>Special:</strong> micro, retina, print
          </C.Text>
          <C.Text as="small">
            <strong>Visibility:</strong> hidden, visible, hiddenInline, visibleInline + Special variants
          </C.Text>
          <C.Text as="small">
            <strong>Dynamic Viewport:</strong> dynamicViewport with fallback support
          </C.Text>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 