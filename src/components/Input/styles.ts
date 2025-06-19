import { styled } from "../../stitches.config";

const interactiveStyles = {
  borderColor: "$text",
  boxShadow: "$small",
};

export const InputStyled = styled("div", {
  position: "relative",
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: "$light",
      },
    },
  },

  width: "100%",
});

export const InputCoreStyled = styled("div", {
  "&:focus-within": interactiveStyles,
  "&:hover": interactiveStyles,
  alignContent: "center",
  alignSelf: "center",
  border: "1px solid $border",
  borderRadius: "$medium",
  display: "flex",
  justifyContent: "center",
  transition: "$default",
  width: "100%",
});

export const InputAreaStyled = styled("input", {
  "&::placeholder": {
    color: "$text",
    opacity: "$light",
  },
  "&:after": {
    clear: "both",
    content: '""',
  },
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  color: "$text",
  display: "block",
  fontFamily: "$default",
  fontSize: "$default",
  height: "$large",
  padding: "0 $small",
  phone: {
    fontSize: "16px !important",
  },

  width: "100%",
});

export const InputFunctionStyled = styled("div", {
  alignItems: "center",
  alignSelf: "center",
  display: "flex",
  gap: "$smaller",
  height: "100%",
  justifyContent: "center",
  padding: "$smallest $small $smallest 0",
  verticalAlign: "middle",
});

export const InputCallbackStyled = styled("div", {
  display: "block",
  paddingTop: "$small",
  textAlign: "left",
});
