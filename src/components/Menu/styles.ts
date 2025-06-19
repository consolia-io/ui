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

export const MenuStyled = styled("div", {
  display: "inline-flex",
  height: "100%",
  verticalAlign: "middle",
});

export const MenuTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const MenuOverlayStyled = styled("div", {
  ...overlayBase,
  zIndex: "$menu",
});

export const MenuGroupStyled = styled("div", {
  ...dialogContainerBase,
  maxWidth: "420px",
  padding: "$small",
});

export const MenuItemStyled = styled("div", {
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  alignItems: "center",
  borderRadius: "$medium",
  color: "$text",
  cursor: "pointer",
  display: "flex",
  fontSize: "$default",
  justifyContent: "space-between",
  margin: "$smallest 0",
  padding: "$small $medium",
  textAlign: "left",
  transition: "$default",
  userSelect: "none",
  variants: {
    selected: {
      true: {
        backgroundColor: "$surface",
        fontWeight: "bold",
      },
    },
  },
});

export const MenuSubGroupStyled = styled("div", {
  display: "block",
  margin: "$smallest 0",
  padding: "0",
});

export const MenuSubItemStyled = styled("div", {
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  alignItems: "center",
  backgroundColor: "$surfaceLight",
  borderRadius: "$medium",
  color: "$text",
  cursor: "pointer",
  display: "flex",
  fontSize: "$small",
  gap: "$small",
  margin: "0",
  padding: "$smaller $medium $smaller $large",
  transition: "$default",
  userSelect: "none",
  variants: {
    selected: {
      false: {
        backgroundColor: "$surfaceLight",
        fontWeight: 400,
      },
      true: {
        backgroundColor: "$surface",
        fontWeight: "bold",
      },
    },
  },
});

export const MenuItemContentStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  gap: "$medium",
});

export const MenuIconStyled = styled("div", {
  "&:hover": {
    opacity: 1,
  },
  color: "$text",
  display: "inline-flex",
  opacity: "$light",
  transition: "$default",
  variants: {
    open: {
      true: {
        opacity: 1,
        transform: "rotate(180deg)",
      },
    },
  },
});

export const MenuContentStyled = styled("div", {
  borderTop: "1px solid $borderLight",
  display: "block",
  padding: "$medium",
});

export const MenuHeaderStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$background",
  borderBottom: "1px solid $borderLight",
  borderRadius: "$large $large 0 0",
  display: "flex",
  fontWeight: "bold",
  justifyContent: "space-between",
  margin: "-$small -$small $small -$small",
  padding: "$medium",
});

export default MenuStyled;
