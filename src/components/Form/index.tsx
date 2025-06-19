import { useState, type JSX } from "react";

import { Button, useEventListener, type IForm } from "../../index";
import { FormStyled } from "./styles";

export default function Form({
  children,
  css,
  disabled,
  id,
  listen,
  loading,
  name,
  submit,
  submitFunction,
  submitValid,
  ...rest
}: IForm): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isSubmitDisabled = !submitValid || disabled || isSubmitted;

  function handleSubmit(): void {
    submitFunction();
    setIsSubmitted(true);
  }

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (listen && event.key === "Enter" && submit && submitValid) {
      handleSubmit();
    }
  });

  return (
    <FormStyled
      css={css}
      disabled={disabled}
      id={id || name}
      name={name}
      onChange={() => setIsSubmitted(false)}
      {...rest}>
      {children}

      {submit && (
        <Button
          css={{ marginTop: "$medium" }}
          disabled={isSubmitDisabled}
          loading={loading}
          onClick={() => handleSubmit()}>
          {submit}
        </Button>
      )}
    </FormStyled>
  );
}
