import { keyframes, styled } from "../../stitches.config";

const flowDown = keyframes({
  "0%": {
    strokeDashoffset: 1050,
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
  overflow: "hidden",
  padding: "$large 0",
  position: "relative",
  variants: {
    height: {
      custom: {
        height: "100%",
      },
    },
  },
  width: "100%",
});

export const NodeRow = styled("div", {
  display: "flex",
  gap: "calc($large * 2)",
  justifyContent: "center",
  padding: "0 $large",
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
        animation: `${flowDown} 8s steps(1000, end) infinite`,
        opacity: "$default",
        strokeDasharray: "100, 950",
      },
    },
  },
});
