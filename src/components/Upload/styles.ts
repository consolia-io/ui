import { styled } from "../../stitches.config";

const interactiveStyles = {
  borderColor: "$text",
  boxShadow: "$small",
};

export const UploadStyled = styled("div", {
  "&:focus-within": interactiveStyles,
  "&:hover": interactiveStyles,
  border: "1px solid $border",
  borderRadius: "$medium",
  position: "relative",
  transition: "$default",
  variants: {
    disabled: {
      true: {
        "&:focus-within": {
          borderColor: "$border",
          boxShadow: "none",
        },
        "&:hover": {
          borderColor: "$border",
          boxShadow: "none",
        },
        cursor: "not-allowed",
        opacity: "$light",
      },
    },
  },

  width: "100%",
});

export const UploadCoreStyled = styled("div", {
  padding: "$medium",
  width: "100%",
});

export const UploadInputStyled = styled("input", {
  display: "none",
});

export const UploadFooterStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$surfaceLight",
  borderBottomLeftRadius: "$medium",
  borderBottomRightRadius: "$medium",
  borderTop: "1px solid $borderLight",
  display: "flex",
  justifyContent: "space-between",
  padding: "$small $medium",
  width: "100%",
});

export const UploadCallbackStyled = styled("div", {
  display: "block",
  paddingTop: "$small",
  textAlign: "left",
});
