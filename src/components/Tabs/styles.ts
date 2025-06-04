import { styled } from "../../stitches.config";
import Button from "../Button";

export const TabsStyled = styled("div", {
  background: "$surface",
  border: "1px solid $borderLight",
  borderRadius: "$medium",
  display: "flex",
  gap: "$smallest",
  padding: "$smallest",
  position: "relative",
  width: "fit-content",
});

export const TabStyled = styled(Button, {
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  border: "none",
  borderRadius: "$medium",
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
});
