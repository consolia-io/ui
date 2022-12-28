import { fadeIn, fadeOut, styled } from "../../stitches.config";

export const PopoverStyled = styled("div", {
  display: "inline-block",
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
  backgroundColor: "$background",
  border: "0.1rem solid $border",
  borderRadius: "$a",
  boxShadow: "$c",
  lineBreak: "auto",
  marginTop: ".85%",
  overflowY: "auto",
  padding: "$a $d",
  position: "absolute",
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .2s linear`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} .2s linear`,
        animationFillMode: "forwards",
      },
    },
    minimal: {
      true: {
        padding: 0,
      },
    },
  },
  zIndex: "$popover",
});

export default PopoverStyled;
