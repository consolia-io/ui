import React from "react";
import * as C from "../../src/index";

export default function FieldDemo() {
  return (
    <C.Stack css={{ 
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "$large" 
    }}>
      {/* Basic Field */}
      <C.Stack>
        <C.Text as="h4">Basic</C.Text>
        <C.Field 
          name="basic"
          placeholder="Basic field example"
        />
      </C.Stack>

      {/* With Actions */}
      <C.Stack>
        <C.Text as="h4">With Actions</C.Text>
        <C.Field 
          name="actions"
          placeholder="Type something and try the actions"
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
          <C.Field 
            name="loading"
            placeholder="Loading state"
            loading
          />
          <C.Field 
            name="disabled"
            placeholder="Disabled state"
            disabled
          />
          <C.Field 
            name="error"
            placeholder="Error state"
            error
            errorMessage="This is an error message"
          />
          <C.Field 
            name="success"
            placeholder="Success state"
            success
            successMessage="This is a success message"
          />
          <C.Field 
            name="warning"
            placeholder="Warning state"
            warning
            warningMessage="This is a warning message"
          />
        </C.Stack>
      </C.Stack>

      {/* Multiline */}
      <C.Stack>
        <C.Text as="h4">Multiline</C.Text>
        <C.Field 
          name="multiline"
          placeholder="This is a multiline field"
          rows={4}
          cols={50}
        />
      </C.Stack>

      {/* With Width */}
      <C.Stack>
        <C.Text as="h4">Custom Width</C.Text>
        <C.Field 
          name="width"
          placeholder="50% width field"
          width="50%"
        />
      </C.Stack>

      {/* With onChange */}
      <C.Stack>
        <C.Text as="h4">Interactive</C.Text>
        <C.Field 
          name="interactive"
          placeholder="Type to see the value logged"
          onChange={(e) => console.log('Value:', e.target.value)}
        />
      </C.Stack>
    </C.Stack>
  );
} 