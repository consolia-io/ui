import { keyframes, styled } from "../../stitches.config";

const fadeToOutline = keyframes({
  "0%": {
    fillOpacity: 1,
    strokeDasharray: "2500",
    strokeDashoffset: "0",
  },
  "100%": {
    fillOpacity: 0,
    strokeDasharray: "2500",
    strokeDashoffset: "0",
  },
});

const fadeToFilled = keyframes({
  "0%": {
    fillOpacity: 0,
    strokeDasharray: "2500",
    strokeDashoffset: "0",
  },
  "100%": {
    fillOpacity: 1,
    strokeDasharray: "2500",
    strokeDashoffset: "0",
  },
});

const strokeStyles = {
  stroke: "currentColor",
  strokeDasharray: "2500",
  strokeDashoffset: "0",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "8",
} as const;

export const LogoStyled = styled("div", {
  "& svg": {
    "& path:last-of-type": {
      fillOpacity: 1,
      ...strokeStyles,
    },
    fill: "currentColor",
  },
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  display: "block",
  variants: {
    hover: {
      true: {
        "&:hover": {
          "& svg": {
            "& path:last-of-type": {
              animation: `${fadeToOutline} 0.3s ease forwards`,
            },
          },
        },
        "&:not(:hover)": {
          "& svg": {
            "& path:last-of-type": {
              animation: `${fadeToFilled} 0.3s ease forwards`,
            },
          },
        },
      },
    },
    outline: {
      true: {
        "& svg": {
          "& path:last-of-type": {
            fillOpacity: 0,
          },
        },
      },
    },
    theme: {
      blue: {
        color: "$blue",
      },
      dark: {
        color: "$text",
        darkOnly: {
          color: "$light",
        },
      },
      default: {
        color: "$text",
      },
      light: {
        color: "$background",
        darkOnly: {
          color: "$text",
        },
      },
      orange: {
        color: "$orange",
      },
      purple: {
        color: "$purple",
      },
      yellow: {
        color: "$yellow",
      },
    },
  },
});
