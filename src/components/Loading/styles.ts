import { keyframes, styled } from "../../stitches.config";

const dashArrayValue = "2500";
const strokeWidthValue = "30";
const animationDuration = "4s";

const buildPath = keyframes({
  "0%": {
    fillOpacity: 0,
    strokeDasharray: dashArrayValue,
    strokeDashoffset: dashArrayValue,
  },
  "35%": {
    fillOpacity: 0,
    strokeDasharray: dashArrayValue,
    strokeDashoffset: "0",
  },
  "40%": {
    fillOpacity: 1,
    strokeDasharray: dashArrayValue,
    strokeDashoffset: "0",
  },
  "65%": {
    fillOpacity: 1,
    strokeDasharray: dashArrayValue,
    strokeDashoffset: "0",
  },
  "70%": {
    fillOpacity: 0,
    strokeDasharray: dashArrayValue,
    strokeDashoffset: "0",
  },
  "100%": {
    fillOpacity: 0,
    strokeDasharray: dashArrayValue,
    strokeDashoffset: `-${dashArrayValue}`,
  },
});

const colorCycle = keyframes({
  "0%": {
    color: "$purple",
  },
  "25%": {
    color: "$blue",
  },
  "50%": {
    color: "$yellow",
  },
  "75%": {
    color: "$orange",
  },
  "100%": {
    color: "$purple",
  },
});

export const LoadingStyled = styled("span", {
  "& svg": {
    "& path": {
      animation: `${buildPath} ${animationDuration} linear infinite`,
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: strokeWidthValue,
      transition: "color 1.5s ease-in-out",
    },
    height: "100%",

    width: "100%",
  },
  display: "inline-flex",
  height: "$medium",
  position: "relative",

  variants: {
    colored: {
      true: {
        "& svg path": {
          animation: `${buildPath} ${animationDuration} linear infinite, ${colorCycle} 8s ease-in-out infinite`,
        },
      },
    },
  },

  width: "$medium",
});

export const LoadingOverlayStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$text",
  border: "1px solid $text",
  borderRadius: "$small",
  bottom: "$medium",
  boxShadow: "$large",
  color: "$background",
  display: "flex",
  justifyContent: "center",
  maxWidth: "60rem",
  padding: "$smallest $small",
  phone: {
    left: "50%",
    maxWidth: "95%",
    textAlign: "center",
    transform: "translateX(-50%)",
    width: "fit-content",
  },
  pointerEvents: "none",
  position: "fixed",
  right: "$medium",
  userSelect: "none",
  zIndex: "$toast",
});

export const LoadingOverlayTitledStyled = styled("div", {
  marginLeft: "$small",
});
