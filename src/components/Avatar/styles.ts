import { styled } from "../../stitches.config";
import { ImageStyled } from "../Image/styles";

export const AvatarStyled = styled("div", {
  [`& ${ImageStyled}`]: {
    borderRadius: "$medium !important",
    height: "100%",
    img: {
      borderRadius: "$medium !important",
      objectFit: "cover !important",
    },
    width: "100%",
  },
  alignSelf: "center",
  border: "1px solid $border",
  borderRadius: "$medium",
  display: "inline-flex",
  height: "100%",
  justifyContent: "center",
  span: {
    alignItems: "center",
    color: "$text",
    display: "flex",
    fontSize: "$small",
    fontWeight: "bold",
    justifyContent: "center",
    overflow: "hidden",
    textTransform: "uppercase",
  },

  variants: {
    theme: {
      blue: {
        backgroundColor: "$blue",
      },
      default: {
        backgroundColor: "$surface",
      },
      orange: {
        backgroundColor: "$orange",
      },
      purple: {
        backgroundColor: "$purple",
      },
      yellow: {
        backgroundColor: "$yellow",
      },
    },
  },

  verticalAlign: "middle",
});
