import { fadeOut, styled } from "../../stitches.config";
import { TextStyled } from "../Text/styles";

export const paddingVariants = {
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
};

export const BoxStyled = styled("article", {
  backgroundColor: "$background",
  border: "1px solid $border",
  borderRadius: "$medium",
  boxShadow: "$small",
  color: "$text",
  display: "block",
  height: "100%",
  margin: 0,
  overflow: "hidden",
  paddingBlock: 0,
  position: "relative",
  transition: "$default",
  variants: {
    animation: {
      true: {
        animation: `${fadeOut} 0.1s ease-in-out`,
        animationFillMode: "forwards",
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
          transform: "translateY(-1px)",
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
    theme: {
      blue: {
        background: "$blueGradient",
      },

      default: {
        backgroundColor: "$background",
      },
      fill: {
        background: "$surfaceGradient",
      },
      gradient: {
        [`${TextStyled}`]: {
          color: "$background",
        },
        backgroundColor: "transparent",
        borderColor: "$surfaceLight",
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
        background: "$orangeGradient",
      },
      purple: {
        background: "$purpleGradient",
      },
      solid: {
        [`${TextStyled}`]: {
          color: "$background",
        },
        background: "$solidGradient",
        color: "$background",
      },
      yellow: {
        background: "$yellowGradient",
      },
    },
    ...paddingVariants,
  },

  width: "100%",
});

export const BoxHeaderStyled = styled("div", {
  borderBottom: "1px solid $borderLight",
  color: "$text",
  fontWeight: "bold",
  padding: "$small $medium",
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
  backgroundColor: "$surfaceLight",
  borderTop: "1px solid $borderLight",
  color: "$text",
  padding: "$small $medium",
  variants: {
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
    ...paddingVariants,
  },
});

export const BoxFlexStyled = styled("div", {
  height: "100%",
  position: "relative",
  width: "100%",
  zIndex: 1,
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
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  left: 0,
  opacity: 0.95,
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 1,
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
  zIndex: 1,
});
export default BoxStyled;
