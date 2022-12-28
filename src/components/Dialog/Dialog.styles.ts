import { breakpoints, fadeIn, fadeOut, styled } from "../../stitches.config";

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
  backgroundColor: "rgba(116, 116, 121, 0.4)",
  bottom: 0,
  left: 0,
  minWidth: "100vw",
  overflowY: "scroll",
  position: "fixed",
  right: 0,
  top: 0,
  transition: "$default",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} .3s linear`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} .2s linear`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100%",
  zIndex: "$dialog",
});

export const DialogContentStyled = styled("div", {
  backgroundColor: "$background",
  borderRadius: "$b",
  boxShadow: "$c",
  left: "50%",
  maxHeight: "85vh",
  maxWidth: "90%",
  overflowX: "hidden",
  overflowY: "auto",
  padding: "calc($e + 1.33rem) $e",
  position: "fixed",
  textAlign: "left",
  top: "50%",
  transform: "translate(-50%, -50%)",
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
  },

  width: "70rem",

  [breakpoints.phone]: {
    width: "90%",
  },
});

export const DialogExitStyled = styled("div", {
  "&:hover": {
    opacity: 1,
  },
  cursor: "pointer",
  padding: "$b",
  position: "absolute",
  right: 0,
  top: 0,
  transition: "$default",
});

export default DialogStyled;
