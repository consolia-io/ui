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
  backgroundColor: "$surface",
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
        background: "$blueLight",
      },
      default: {
        backgroundColor: "$surface",
        borderColor: "$borderLight",
      },
      orange: {
        background: "$orangeLight",
      },
      purple: {
        background: "$purpleLight",
      },
      yellow: {
        background: "$yellowLight",
      },
    },
  },

  verticalAlign: "middle",
});
