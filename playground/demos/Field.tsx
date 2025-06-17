import { JSX } from "react";

import * as C from "../../src/index";

export default function FieldDemo(): JSX.Element {
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
          <C.Field 
            name="basic"
            placeholder="Basic field"
          />
          <C.Field 
            name="multiline"
            placeholder="Multiline field"
            rows={3}
          />
        </C.Stack>
      </C.Box>

      {/* States */}
      <C.Box header={
        <C.Text as="h4">States</C.Text>
      }>
        <C.Stack>
          <C.Field 
            name="error"
            placeholder="Error state"
            error
            errorMessage="This field has an error"
          />
          <C.Field 
            name="success"
            placeholder="Success state"
            success
            successMessage="Success message"
          />
          <C.Field 
            name="warning"
            placeholder="Warning state"
            warning
            warningMessage="Warning message"
          />
        </C.Stack>
      </C.Box>

      {/* Interactive */}
      <C.Box header={
        <C.Text as="h4">Interactive</C.Text>
      }>
        <C.Stack>
          <C.Field 
            name="loading"
            placeholder="Loading state"
            loading
          />
          <C.Field 
            name="actions"
            placeholder="Type something"
            copy
            reset
          />
        </C.Stack>
      </C.Box>

      {/* With Submit */}
      <C.Box header={
        <C.Text as="h4">With Submit</C.Text>
      }>
        <C.Stack>
          <C.Field 
            name="submit"
            placeholder="Type and submit"
            submit="Send"
            submitValid={(value) => value.length > 0}
            submitFunction={(value) => {
              // eslint-disable-next-line no-console
              console.log('Submitted:', value);
            }}
          />
        </C.Stack>
      </C.Box>

      {/* Custom Width */}
      <C.Box header={
        <C.Text as="h4">Custom Width</C.Text>
      }>
        <C.Stack>
          <C.Field 
            name="width"
            placeholder="Custom width field"
            width="80%"
          />
        </C.Stack>
      </C.Box>

      {/* Advanced */}
      <C.Box header={
        <C.Text as="h4">Advanced</C.Text>
      }>
        <C.Stack>
          <C.Field 
            name="advanced"
            placeholder="Reset and submit"
            copy
            reset
            submit="Submit"
            submitValid={(value) => value.length > 2}
            submitFunction={(value) => {
              // eslint-disable-next-line no-console
              console.log('Advanced submit:', value);
            }}
          />
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 