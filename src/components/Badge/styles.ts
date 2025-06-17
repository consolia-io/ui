import { styled, fadeOut } from "../../stitches.config";

export const BadgeStyled = styled("span", {
  alignContent: "center !important",
  alignItems: "center !important",
  backgroundColor: "$background",
  border: "1px solid $border",
  borderRadius: "$small",
  boxShadow: "$small",
  color: "$text",
  compoundVariants: [
    // Border variant (current theme styles with left border)
    {
      css: {
        backgroundColor: "$background",
        borderColor: "$blue",
        borderLeftWidth: "5px",
      },
      theme: "blue",
      variant: "border",
    },
    {
      css: {
        backgroundColor: "$background",
        borderColor: "$border",
      },
      theme: "default",
      variant: "border",
    },
    {
      css: {
        backgroundColor: "$background",
        borderColor: "$orange",
        borderLeftWidth: "5px",
      },
      theme: "orange",
      variant: "border",
    },
    {
      css: {
        backgroundColor: "$background",
        borderColor: "$purple",
        borderLeftWidth: "5px",
      },
      theme: "purple",
      variant: "border",
    },
    {
      css: {
        backgroundColor: "$text",
        borderColor: "$text",
        color: "$background",
      },
      theme: "solid",
      variant: "border",
    },
    {
      css: {
        backgroundColor: "$background",
        borderColor: "$yellow",
        borderLeftWidth: "5px",
      },
      theme: "yellow",
      variant: "border",
    },
    // Theme variant (filled with color, text always $text)
    {
      css: {
        backgroundColor: "$blue",
        borderColor: "$blue",
        color: "$text",
      },
      theme: "blue",
      variant: "theme",
    },
    {
      css: {
        backgroundColor: "$background",
        borderColor: "$border",
        color: "$text",
      },
      theme: "default",
      variant: "theme",
    },
    {
      css: {
        backgroundColor: "$orange",
        borderColor: "$orange",
        color: "$text",
      },
      theme: "orange",
      variant: "theme",
    },
    {
      css: {
        backgroundColor: "$purple",
        borderColor: "$purple",
        color: "$text",
      },
      theme: "purple",
      variant: "theme",
    },
    {
      css: {
        backgroundColor: "$text",
        borderColor: "$text",
        color: "$background",
      },
      theme: "solid",
      variant: "theme",
    },
    {
      css: {
        backgroundColor: "$yellow",
        borderColor: "$yellow",
        color: "$text",
      },
      theme: "yellow",
      variant: "theme",
    },
  ],
  display: "inline-flex",
  fontSize: "$small",
  fontWeight: "bold",
  justifyContent: "center",
  lineHeight: "$default",
  marginBottom: "0 !important",
  padding: "$smallest $small",

  position: "relative",
  variants: {
    animation: {
      true: {
        animation: `${fadeOut} 0.15s linear`,
        animationFillMode: "forwards",
      },
    },
    block: {
      true: {
        justifyContent: "initial",
        width: "100%",
      },
    },
    link: {
      true: {
        "&:hover": {
          backgroundColor: "$surfaceHover",
          borderColor: "$border",
        },
        cursor: "pointer",
        transition: "$default",
      },
    },
    loading: {
      true: {
        cursor: "wait",
        opacity: "$light",
      },
    },
    small: {
      true: {
        fontSize: "$micro",
        padding: "$smallest $smaller",
      },
    },
    theme: {
      blue: {
        backgroundColor: "$background",
        borderColor: "$blue",
        borderLeftWidth: "5px",
      },
      default: {
        backgroundColor: "$background",
        borderColor: "$border",
      },
      orange: {
        backgroundColor: "$background",
        borderColor: "$orange",
        borderLeftWidth: "5px",
      },
      purple: {
        backgroundColor: "$background",
        borderColor: "$purple",
        borderLeftWidth: "5px",
      },
      solid: {
        backgroundColor: "$text",
        borderColor: "$text",
        color: "$background",
      },
      yellow: {
        backgroundColor: "$background",
        borderColor: "$yellow",
        borderLeftWidth: "5px",
      },
    },
    variant: {
      border: {},
      theme: {},
    },
  },
  verticalAlign: "middle",
});

export const BadgeIconStyled = styled("span", {
  color: "inherit",
  display: "inline-flex",
  variants: {
    align: {
      left: {
        marginRight: "$small",
      },
      right: {
        marginLeft: "$small",
      },
      smallLeft: {
        marginRight: "$smaller",
      },
      smallRight: {
        marginLeft: "$smaller",
      },
    },
    hover: {
      true: {
        "&:hover": {
          opacity: "$light",
          transition: "$default",
        },
        cursor: "pointer",
      },
    },
  },
  verticalAlign: "middle",
});

export const BadgeLoadingStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$surface",
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
});
