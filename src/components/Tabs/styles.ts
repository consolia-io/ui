import { styled } from "../../stitches.config";
import Button from "../Button";

// Shared scrollbar hiding styles
const hideScrollbar = {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
};

export const TabsStyled = styled("div", {
  ...hideScrollbar,
  background: "$surface",
  border: "1px solid $borderLight",
  borderRadius: "$medium",
  boxShadow: "$small",
  display: "flex",
  flexWrap: "nowrap",
  gap: "$smallest",
  maxWidth: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  padding: "$smallest",
  position: "relative",
  scrollBehavior: "smooth",
  width: "100%",
});

export const TabStyled = styled(Button, {
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  border: "none",
  borderRadius: "$medium",
  flexShrink: 0,
  padding: "$smaller $small",
  transition: "$default",
  variants: {
    selected: {
      false: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
      true: {
        "&:hover": {
          backgroundColor: "$background",
        },
        backgroundColor: "$background",
        boxShadow: "$small",
        color: "$text",
      },
    },
  },
  whiteSpace: "nowrap",
});
