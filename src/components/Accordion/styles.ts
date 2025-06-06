import { styled } from "../../stitches.config";
import Button from "../Button";

export const AccordionStyled = styled("div", {
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: "$small",
  overflow: "hidden",
  transition: "$default",
  width: "100%",
});

export const AccordionItemStyled = styled("div", {
  width: "100%",
});

export const AccordionHeaderStyled = styled(Button, {
  borderRadius: "$medium",
  justifyContent: "space-between",
  padding: "$smaller $small",
  textAlign: "left",
  transition: "$default",
  variants: {
    expanded: {
      true: {
        backgroundColor: "$surface",
        borderBottom: "none",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
    large: {
      true: {
        fontSize: "$h6 !important",
      },
    },
  },
  width: "100%",
});

export const AccordionContentStyled = styled("div", {
  border: "1px solid transparent",
  overflow: "hidden",
  transition: "$default",
  variants: {
    expanded: {
      false: {
        height: 0,
        opacity: 0,
        padding: "0 $small",
      },
      true: {
        borderColor: "$border",
        height: "auto",
        opacity: 1,
        padding: "$medium $small",
      },
    },
  },
});
