import { fadeIn, fadeOut, keyframes, styled } from "../../stitches.config";
import { TextStyled } from "../Text/styles";

const slideIn = keyframes({
  from: {
    transform: "translateY(100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const slideOut = keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(100%)",
  },
});

export const DialogStyled = styled("div", {
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
});

export const DialogTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const DialogOverlayStyled = styled("div", {
  backdropFilter: "blur(2px)",
  backgroundColor: "$overlay",
  bottom: 0,
  height: "100%",
  left: 0,
  position: "fixed",
  right: 0,
  top: 0,
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} 0.2s ease-in-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} 0.2s ease-in-out`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100%",
  zIndex: "$modal",
});

export const DialogCoreStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$background",
  borderRadius: "$large $large 0 0",
  bottom: 0,
  boxShadow: "$large",
  left: 0,
  maxHeight: "70vh",
  minHeight: "30vh",
  overflowX: "hidden",
  overflowY: "auto",
  phone: {
    maxHeight: "90vh",
    minHeight: "50vh",
  },
  position: "fixed",
  right: 0,

  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${slideOut} 0.2s ease-in-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${slideIn} 0.2s ease-in-out`,
        animationFillMode: "forwards",
      },
    },
  },

  width: "100%",
});

export const DialogHeaderStyled = styled("div", {
  [`& ${TextStyled}`]: {
    marginBottom: "0 !important",
    verticalAlign: "middle",
  },
  alignItems: "center",
  backgroundColor: "$background",
  borderBottom: "1px solid $borderLight",
  display: "flex",
  justifyContent: "space-between",
  padding: "$medium",
  position: "sticky",
  top: 0,
  zIndex: "$special",
});

export const DialogContentStyled = styled("div", {
  margin: "0 auto",
  maxWidth: "60rem",
  padding: "$large $medium",
  paddingBottom: "calc($medium + env(safe-area-inset-bottom))",
  width: "100%",
});
