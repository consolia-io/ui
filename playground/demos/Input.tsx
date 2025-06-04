import React from "react";
import * as C from "../../src/index";

export default function InputDemo() {
  return (
    <C.Stack css={{ 
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "$large" 
    }}>
      {/* Basic Input */}
      <C.Stack>
        <C.Text as="h4">Basic</C.Text>
        <C.Input
          name="basic"
          placeholder="Basic input example"
        />
      </C.Stack>

      {/* With Actions */}
      <C.Stack>
        <C.Text as="h4">With Actions</C.Text>
        <C.Input
          name="actions"
          placeholder="Type something to try actions"
          copy
          reset
          submit="Send"
          submitValid={(value) => value.length > 0}
          submitFunction={(value) => console.log('Submitted:', value)}
        />
      </C.Stack>

      {/* States */}
      <C.Stack>
        <C.Text as="h4">States</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Input
            name="loading"
            placeholder="Loading state"
            loading
          />
          <C.Input
            name="disabled"
            placeholder="Disabled state"
            disabled
          />
          <C.Input
            name="error"
            placeholder="Error state"
            error
            errorMessage="This is an error message"
          />
          <C.Input
            name="success"
            placeholder="Success state"
            success
            successMessage="This is a success message"
          />
          <C.Input
            name="warning"
            placeholder="Warning state"
            warning
            warningMessage="This is a warning message"
          />
        </C.Stack>
      </C.Stack>

      {/* Special Types */}
      <C.Stack>
        <C.Text as="h4">Special Types</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Input
            name="password"
            type="password"
            placeholder="Password input with reveal"
            reveal
          />
          <C.Input
            name="width"
            placeholder="50% width input"
            width="50%"
          />
          <C.Input
            name="listen"
            placeholder="Press Enter to submit"
            listen
            submit="Submit"
            submitValid={(value) => value.length > 0}
            submitFunction={(value) => console.log('Submitted:', value)}
          />
        </C.Stack>
      </C.Stack>
    </C.Stack>
  );
} 