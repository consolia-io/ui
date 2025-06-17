import { keyframes, styled } from "../../stitches.config";

const flowDown = keyframes({
  "0%": {
    strokeDashoffset: 550,
  },
  "100%": {
    strokeDashoffset: 0,
  },
});

export const NodesContainer = styled("div", {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "500px",
  justifyContent: "space-between",
  overflow: "hidden",
  position: "relative",
  width: "100%",
});

export const NodeRow = styled("div", {
  display: "flex",
  gap: "$medium",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  zIndex: 1,
});

export const ConnectingLine = styled("path", {
  fill: "none",
  opacity: "$light",
  stroke: "$text",
  strokeLinecap: "round",
  strokeWidth: "0.5rem",
  transition: "opacity 200ms ease-out",

  variants: {
    animate: {
      true: {
        animation: `${flowDown} 5s linear infinite`,
        opacity: "$default",
        strokeDasharray: "50, 500",
      },
    },
  },
});
