import { JSX } from "react";

import * as C from "../../src/index";

export default function InputDemo(): JSX.Element {
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
          <C.Input
            name="basic"
            placeholder="Basic input"
          />
          <C.Input
            name="email"
            type="email"
            placeholder="Email input"
          />
        </C.Stack>
      </C.Box>

      {/* States */}
      <C.Box header={
        <C.Text as="h4">States</C.Text>
      }>
        <C.Stack>
          <C.Input
            name="error"
            placeholder="Error state"
            error
            errorMessage="This field has an error"
          />
          <C.Input
            name="success"
            placeholder="Success state"
            success
            successMessage="Success message"
          />
          <C.Input
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
          <C.Input
            name="loading"
            placeholder="Loading state"
            loading
          />
          <C.Input
            name="actions"
            placeholder="Type something"
            copy
            reset
          />
        </C.Stack>
      </C.Box>

      {/* Special Types */}
      <C.Box header={
        <C.Text as="h4">Special Types</C.Text>
      }>
        <C.Stack>
          <C.Input
            name="password"
            type="password"
            placeholder="Password input"
            reveal
          />
          <C.Input
            name="width"
            placeholder="Custom width"
            width="80%"
          />
        </C.Stack>
      </C.Box>

      {/* With Submit */}
      <C.Box header={
        <C.Text as="h4">With Submit</C.Text>
      }>
        <C.Stack>
          <C.Input
            name="submit"
            placeholder="Type and submit"
            submit="Send"
            submitValid={(value) => value.length > 0}
            submitFunction={(value) => {
              // eslint-disable-next-line no-console
              console.log('Submitted:', value);
            }}
          />
          <C.Input
            name="listen"
            placeholder="Press Enter to submit"
            listen
            submit="Submit"
            submitFunction={(value) => {
              // eslint-disable-next-line no-console
              console.log('Listen submit:', value);
            }}
          />
        </C.Stack>
      </C.Box>

      {/* Advanced */}
      <C.Box header={
        <C.Text as="h4">Advanced</C.Text>
      }>
        <C.Stack>
          <C.Input
            name="advanced"
            placeholder="All features"
            copy
            reset
            reveal
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