import { fadeOut, styled } from "../../stitches.config";
import { TextStyled } from "../Text/styles";

export const BoxStyled = styled("article", {
  backgroundColor: "$background",
  border: "1px solid $border",
  borderRadius: "$medium",
  boxShadow: "$small",
  color: "$text",
  display: "block",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  transition: "$default",
  variants: {
    animation: {
      true: {
        animation: `${fadeOut} 0.1s ease-in-out`,
        animationFillMode: "forwards",
      },
    },
    border: {
      blue: {
        borderTopColor: "$blue",
        borderTopWidth: "8px",
      },
      default: {
        borderTopWidth: "8px",
      },
      orange: {
        borderTopColor: "$orange",
        borderTopWidth: "8px",
      },
      purple: {
        borderTopColor: "$purple",
        borderTopWidth: "8px",
      },
      solid: {
        borderTopWidth: "8px",
      },
      yellow: {
        borderTopColor: "$yellow",
        borderTopWidth: "8px",
      },
    },
    collapsed: {
      true: {
        "&::after": {
          background: "linear-gradient(to bottom, transparent 0%, $colors$background 100%)",
          bottom: 0,
          content: "",
          height: "40%",
          left: 0,
          position: "absolute",
          right: 0,
        },
      },
    },
    footer: {
      true: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
    },
    hover: {
      true: {
        "&:hover": {
          boxShadow: "$large",
          img: {
            transform: "scale(1.02)",
          },
        },
        cursor: "pointer",
        img: {
          transition: "$default",
        },
      },
    },
    loading: {
      true: {
        cursor: "wait",
        opacity: 0.6,
      },
    },
    padding: {
      default: {
        padding: "$medium",
      },
      none: {
        padding: 0,
      },
      small: {
        padding: "$small",
      },
    },
    theme: {
      blue: {
        background: "$blueLight",
      },
      default: {
        backgroundColor: "$background",
      },
      fill: {
        background: "$surface",
      },
      gradient: {
        [`${TextStyled}`]: {
          color: "$background",
        },
        backgroundColor: "transparent",
        color: "$background",
        darkOnly: {
          [`${TextStyled}`]: {
            color: "$text",
          },
          border: "1px solid $border",
          color: "$text",
        },
      },
      minimal: {
        backgroundColor: "transparent",
        border: "none",
      },
      orange: {
        background: "$orangeLight",
      },
      purple: {
        background: "$purpleLight",
      },
      solid: {
        [`${TextStyled}`]: {
          color: "$background",
        },
        background: "$text",
        color: "$background",
      },
      yellow: {
        background: "$yellowLight",
      },
    },
  },

  width: "100%",
});

export const BoxHeaderStyled = styled("div", {
  backgroundColor: "$surfaceLight",
  borderBottom: "1px solid $borderLight",
  boxShadow: "$small",
  color: "$text",
  fontWeight: "bold",

  variants: {
    padding: {
      default: {
        padding: "$small $medium",
      },
      none: {
        borderBottom: "none",
        padding: 0,
      },
      small: {
        padding: "$small",
      },
    },
  },
});

export const BoxFooterStyled = styled("div", {
  borderTop: "1px solid $borderLight",
  color: "$text",

  variants: {
    fill: {
      true: {
        backgroundColor: "$surfaceLight",
      },
    },
    padding: {
      default: {
        padding: "$small $medium",
      },
      none: {
        backgroundColor: "transparent",
        borderTop: "none",
        padding: 0,
      },
      small: {
        padding: "$small",
      },
    },
  },
});

export const BoxInnerStyled = styled("div", {
  variants: {
    padding: {
      default: {
        padding: "$medium",
      },
      none: {
        padding: 0,
      },
      small: {
        padding: "$small",
      },
    },
  },
});

export const BoxFlexStyled = styled("div", {
  height: "100%",
  position: "relative",
  width: "100%",
});

export const BoxExitStyled = styled("div", {
  position: "absolute",
  right: "$small",
  top: "$small",
});

export const BoxLoadingStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$background",
  borderRadius: "$medium",
  display: "flex",
  inset: 0,
  justifyContent: "center",
  opacity: 0.95,
  position: "absolute",
});

export const BoxExpanderTrigger = styled("div", {
  bottom: "$small",
  display: "flex",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  right: 0,

  variants: {
    expanded: {
      true: {
        bottom: "auto",
        justifyContent: "flex-start",
        padding: "$medium $medium $small",
        position: "relative",
      },
    },
  },
});

export default BoxStyled;
