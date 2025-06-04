import React from "react";
import * as C from "../../src/index";

export default function ViewDemo() {
  return (
    <C.Stack css={{ gap: "$large" }}>
      {/* Basic View */}
        <C.View 
          hero
          inverted 
          css={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <C.Logo 
            type="icon"
            width={900} 
            css={{
              position: "absolute",
              top: "50%",
              left: "-10rem",
              transform: "translateY(-50%)",
              opacity: 0.03,
              zIndex: 0,
            }}
          />
          <C.Stack align="center">
            <C.Text as="h1">Default view with no custom styling</C.Text>
            <C.Text as="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </C.Text>
          </C.Stack>
        </C.View>

      {/* Hero View */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Hero View</C.Text>
        <C.View hero inverted css={{ height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <C.Stack align="center">
            <C.Text as="h2">Hero view with animated sunset gradient</C.Text>
            <C.Text as="p">Perfect for landing pages and hero sections</C.Text>
          </C.Stack>
        </C.View>
      </C.Stack>

      {/* Container View */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Container View</C.Text>
        <C.View container>
          <C.Box css={{ padding: "$large" }}>
            <C.Text>Container view with max-width and centered content</C.Text>
          </C.Box>
        </C.View>
      </C.Stack>

      {/* App View */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">App View</C.Text>
        <C.View app>
          <C.Box css={{ padding: "$large" }}>
            <C.Text>App view with wider max-width for applications</C.Text>
          </C.Box>
        </C.View>
      </C.Stack>

      {/* Inverted View */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Inverted View</C.Text>
        <C.View inverted>
          <C.Box css={{ padding: "$large" }}>
            <C.Text>Inverted view with dark theme</C.Text>
          </C.Box>
        </C.View>
      </C.Stack>

      {/* View with Spacing */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">View with Spacing</C.Text>
        <C.View top="large" bottom="large">
          <C.Box css={{ padding: "$large" }}>
            <C.Text>View with top and bottom spacing</C.Text>
          </C.Box>
        </C.View>
      </C.Stack>

      {/* No Print View */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">No Print View</C.Text>
        <C.View noPrint>
          <C.Box css={{ padding: "$large" }}>
            <C.Text>This view will not be visible when printing</C.Text>
          </C.Box>
        </C.View>
      </C.Stack>

      {/* Nested Views */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Nested Views</C.Text>
        <C.View container>
          <C.Box css={{ padding: "$large" }}>
            <C.Text bottom="medium">Outer container view</C.Text>
            <C.View>
              <C.Box css={{ padding: "$large" }}>
                <C.Text>Nested inner view</C.Text>
              </C.Box>
            </C.View>
          </C.Box>
        </C.View>
      </C.Stack>
    </C.Stack>
  );
} 