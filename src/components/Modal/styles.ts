import { fadeIn, fadeOut, keyframes, styled } from "../../stitches.config";

const slideIn = keyframes({
  from: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.95)",
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
});

const slideOut = keyframes({
  from: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
  to: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.95)",
  },
});

export const ModalStyled = styled("div", {
  display: "inline-flex",
  height: "100%",
  verticalAlign: "middle",
});

export const ModalTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const ModalOverlayStyled = styled("div", {
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
        animation: `${fadeOut} 200ms ease-in-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} 200ms ease-in-out`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100%",

  zIndex: "$modal",
});

export const ModalGroupStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$background",
  borderRadius: "$large",
  boxShadow: "$large",
  left: "50%",
  maxHeight: "80vh",
  maxWidth: "60rem",
  minHeight: "auto",
  overflowX: "hidden",
  overflowY: "auto",
  padding: 0,
  phone: {
    maxHeight: "90vh",
    width: "95%",
  },
  position: "fixed",
  top: "50%",
  transform: "translate(-50%, -50%)",

  variants: {
    animation: {
      false: {
        animation: `${slideOut} 200ms ease-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${slideIn} 200ms ease-out`,
        animationFillMode: "forwards",
      },
    },
    small: {
      true: {
        maxWidth: "28rem",
      },
    },
  },

  width: "90%",
});

export const ModalHeaderStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$background",
  borderBottom: "1px solid $borderLight",
  borderRadius: "$large $large 0 0",
  display: "flex",
  fontWeight: "bold",
  justifyContent: "space-between",
  padding: "$medium",
});

export const ModalContentStyled = styled("div", {
  padding: "$medium",
});
