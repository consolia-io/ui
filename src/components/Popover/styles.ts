import { fadeIn, fadeOut, styled } from "../../stitches.config";

export const PopoverStyled = styled("div", {
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const PopoverTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const PopoverContentStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$background",
  border: "1px solid $border",
  borderRadius: "$medium",
  boxShadow: "$large",
  overflowY: "auto",
  padding: "$smallest $smaller",
  pointerEvents: "auto",
  textAlign: "left !important",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} 200ms ease-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} 200ms ease-out`,
        animationFillMode: "forwards",
      },
    },
    minimal: {
      false: {
        padding: "$small $medium",
      },
      true: {
        padding: 0,
      },
    },
    small: {
      false: {
        maxWidth: "420px",
        phone: {
          maxWidth: "calc(100vw - $large)",
        },
      },
      true: {
        maxWidth: "280px",
        phone: {
          maxWidth: "calc(100vw - $large)",
        },
      },
    },
  },
  width: "100%",
  zIndex: "$popover",
});

export default PopoverStyled;
