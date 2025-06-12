import { styled } from "../../stitches.config";
import Box from "../Box";
import Button from "../Button";

export const AccordionStyled = styled("div", {
  alignItems: "flex-start",
  defaultVariants: {
    mode: "list",
  },
  display: "flex",
  flexDirection: "column",
  gap: "$small",
  overflow: "hidden",
  transition: "$default",
  variants: {
    mode: {
      grid: {
        display: "grid",
        flexDirection: undefined,
        gap: "$medium",
        gridTemplateColumns: "1fr 1fr",
      },
      list: {
        display: "flex",
        flexDirection: "column",
      },
    },
  },
  width: "100%",
});

export const AccordionItemStyled = styled("div", {
  width: "100%",
});

export const AccordionButtonStyled = styled(Button, {
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

export const AccordionCardStyled = styled(Box, {
  backgroundColor: "$background",
  cursor: "pointer",
  width: "100%",
});

export const AccordionListContentStyled = styled("div", {
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

export const AccordionGridContentStyled = styled("div", {
  overflow: "hidden",
  transition: "$default",
  variants: {
    expanded: {
      false: {
        height: 0,
        opacity: 0,
        padding: `0 $medium`,
      },
      true: {
        height: "auto",
        opacity: 1,
        padding: "$medium",
      },
    },
  },
});
