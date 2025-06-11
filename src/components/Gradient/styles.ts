import { styled } from "../../stitches.config";

export const GradientStyled = styled("div", {
  backgroundColor: "$text",
  bottom: 0,
  darkOnly: {
    backgroundColor: "$background",
  },
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 0,
});

export default GradientStyled;
