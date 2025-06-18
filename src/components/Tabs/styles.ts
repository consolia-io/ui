import { styled } from "../../stitches.config";
import Button from "../Button";

export const TabsStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  background: "$surface",
  border: "1px solid $borderLight",
  borderRadius: "$medium",
  boxShadow: "$small",
  display: "flex",
  flexWrap: "nowrap",
  gap: "$smallest",
  maxWidth: "100%",
  msOverflowStyle: "none",
  overflowX: "auto",
  overflowY: "hidden",

  padding: "$smallest",
  position: "relative",
  scrollbarWidth: "none",

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
