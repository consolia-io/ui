import React from "react";
import * as C from "../../src/index";
import { Icons } from "../../src/icons";
import { toast } from "react-hot-toast";

export default function ToastDemo() {
  return (
    <C.Stack css={{ 
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "$large",
      alignItems: "center" 
    }}>
      {/* Default Toast */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Default</C.Text>
        <C.Button
          onClick={() => toast("This is a default toast message")}
        >
          <Icons.Info weight="regular" />
          Show Toast
        </C.Button>
      </C.Stack>

      {/* Success Toast */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Success</C.Text>
        <C.Button
          onClick={() => toast.success("Operation completed successfully!")}
        >
          <Icons.ArrowUp weight="regular" />
          Success Toast
        </C.Button>
      </C.Stack>

      {/* Error Toast */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Error</C.Text>
        <C.Button
          onClick={() => toast.error("Something went wrong!")}
        >
          <Icons.X weight="regular" />
          Error Toast
        </C.Button>
      </C.Stack>

      {/* Custom Duration */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Long Duration</C.Text>
        <C.Button
          onClick={() => 
            toast("This toast will stay for 5 seconds", {
              duration: 5000
            })
          }
        >
          <Icons.ArrowsOutSimple weight="regular" />
          Long Toast
        </C.Button>
      </C.Stack>

      {/* Multiple Toasts */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Multiple</C.Text>
        <C.Button
          onClick={() => {
            toast("First toast");
            setTimeout(() => toast.success("Second toast"), 500);
            setTimeout(() => toast.error("Third toast"), 1000);
          }}
        >
          <Icons.ArrowRight weight="regular" />
          Multiple Toasts
        </C.Button>
      </C.Stack>

      {/* Dismiss All */}
      <C.Stack css={{ alignItems: "center" }}>
        <C.Text as="h4" bottom="medium">Dismiss All</C.Text>
        <C.Button
          onClick={() => toast.dismiss()}
        >
          <Icons.ArrowDown weight="regular" />
          Clear All
        </C.Button>
      </C.Stack>
    </C.Stack>
  );
} 