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
  zIndex: "$menu",
});

export const MenuGroupStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$background",
  borderRadius: "$large",
  boxShadow: "$large",
  left: "50%",
  maxHeight: "80vh",
  maxWidth: "42rem",
  minHeight: "auto",
  overflowX: "hidden",
  overflowY: "auto",
  padding: "$small",
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
  },

  width: "90%",
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
