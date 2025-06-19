import { fadeIn, fadeOut, slideInScale, slideOutScale, styled } from "../../stitches.config";

// Shared base for overlay components (Menu/Modal/Drawer)
const overlayBase = {
  backdropFilter: "blur(2px)",
  backgroundColor: "$overlay",
  inset: 0,
  position: "fixed",
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
} as const;

// Shared base for dialog-style containers
const dialogContainerBase = {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$background",
  borderRadius: "$large",
  boxShadow: "$large",
  left: "50%",
  maxHeight: "80vh",
  minHeight: "auto",
  overflowX: "hidden",
  overflowY: "auto",
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
        animation: `${slideOutScale} 200ms ease-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${slideInScale} 200ms ease-out`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "90%",
} as const;

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
  ...overlayBase,
  zIndex: "$modal",
});

export const ModalGroupStyled = styled("div", {
  ...dialogContainerBase,
  maxWidth: "600px",
  padding: 0,
  variants: {
    ...dialogContainerBase.variants,
    small: {
      true: {
        maxWidth: "280px",
      },
    },
  },
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
