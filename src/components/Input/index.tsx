import { ChangeEvent, useState, type JSX } from "react";
import toast from "react-hot-toast";

import {
  Badge,
  Button,
  Loading,
  useEventListener,
  useBreakpoints,
  Icon,
  type IInput,
} from "../../index";
import {
  InputAreaStyled,
  InputCallbackStyled,
  InputFunctionStyled,
  InputStyled,
  InputCoreStyled,
} from "./styles";

export default function Input({
  copy,
  css,
  disabled,
  error,
  errorMessage,
  id,
  listen,
  loading,
  mustRef,
  name,
  onChange,
  placeholder,
  reset,
  resetFunction,
  reveal,
  submit,
  submitFunction,
  submitValid,
  success,
  successMessage,
  type,
  value,
  warning,
  warningMessage,
  width,
}: IInput): JSX.Element {
  const { isPhone } = useBreakpoints();
  const [inputValue, setInputValue] = useState((value as string) || "");
  const [isCopied, setIsCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isSubmitDisabled = !submitValid || !submitValid(inputValue) || isSubmitted || disabled;
  const isSubmitValid = submitValid && submitValid(inputValue);
  const hasFunctions = loading || submit || copy || reveal || reset;
  const hasCallback = error || success || warning;

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value);
    setIsSubmitted(false);
    if (onChange) {
      onChange(event);
    }
  }

  function handleCopy(): void {
    if (copy && inputValue) {
      navigator?.clipboard?.writeText(inputValue.toString());
      setIsCopied(true);
      toast("Copied to clipboard");
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } else {
      toast("Nothing to copy");
    }
  }

  function handleReveal(): void {
    setIsRevealed(!isRevealed);
  }

  function handleReset(): void {
    setInputValue("");
    if (resetFunction) {
      resetFunction();
    }
  }

  function handleSubmit(): void {
    if (submitFunction && isSubmitValid) {
      submitFunction(inputValue || "");
      setIsSubmitted(true);
    }
  }

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (listen && event.key === "Enter" && submitFunction && isSubmitValid) {
      handleSubmit();
    }
  });

  return (
    <InputStyled
      css={{
        maxWidth: width || "100%",
        width: width || "100%",
        ...css,
      }}
      disabled={disabled}>
      <InputCoreStyled>
        <InputAreaStyled
          ref={mustRef || undefined}
          disabled={disabled}
          id={id || name}
          name={name}
          placeholder={placeholder}
          type={isRevealed ? "text" : type || "text"}
          value={inputValue}
          onChange={(event) => handleChange(event)}
        />

        {hasFunctions && (
          <InputFunctionStyled>
            {loading && <Loading css={{ marginRight: "$smaller" }} />}

            {copy && (
              <Button
                disabled={isCopied || disabled}
                icon={!isPhone ? <Icon system="ClipboardTextIcon" /> : undefined}
                small
                onClick={() => handleCopy()}>
                {!isPhone ? "Copy" : <Icon system="ClipboardTextIcon" />}
              </Button>
            )}

            {reveal && (
              <Button
                disabled={disabled}
                icon={
                  !isPhone ? (
                    !isRevealed ? (
                      <Icon system="EyeIcon" />
                    ) : (
                      <Icon system="EyeClosedIcon" />
                    )
                  ) : undefined
                }
                small
                onClick={() => handleReveal()}>
                {!isPhone ? (
                  !isRevealed ? (
                    "Reveal"
                  ) : (
                    "Hide"
                  )
                ) : !isRevealed ? (
                  <Icon system="EyeIcon" />
                ) : (
                  <Icon system="EyeClosedIcon" />
                )}
              </Button>
            )}

            {reset && inputValue && (
              <Button disabled={disabled} small onClick={() => handleReset()}>
                <Icon system="XCircleIcon" />
              </Button>
            )}

            {submit && (
              <Button
                disabled={isSubmitDisabled}
                icon={!isPhone ? <Icon system="ArrowRightIcon" /> : undefined}
                iconPosition="right"
                small
                theme={isSubmitValid ? "solid" : "default"}
                type="submit"
                onClick={() => handleSubmit()}>
                {!isPhone ? submit : <Icon system="ArrowRightIcon" />}
              </Button>
            )}
          </InputFunctionStyled>
        )}
      </InputCoreStyled>

      {hasCallback && (
        <InputCallbackStyled>
          {error && (
            <Badge
              icon={!errorMessage ? <Icon system="WarningCircleIcon" /> : undefined}
              theme="orange">
              {errorMessage || "Error"}
            </Badge>
          )}
          {success && (
            <Badge
              icon={!successMessage ? <Icon system="CheckCircleIcon" /> : undefined}
              theme="blue">
              {successMessage || "Success"}
            </Badge>
          )}
          {warning && (
            <Badge
              icon={!warningMessage ? <Icon system="WarningCircleIcon" /> : undefined}
              theme="yellow">
              {warningMessage || "Warning"}
            </Badge>
          )}
        </InputCallbackStyled>
      )}
    </InputStyled>
  );
}
