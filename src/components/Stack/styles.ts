import { styled } from "../../stitches.config";
import { TextStyled } from "../Text/styles";

const baseStyles = {
  marginBlockEnd: 0,
  marginBlockStart: 0,
  width: "auto",
};

export const StackStyled = styled("div", {
  ...baseStyles,
  variants: {
    direction: {
      column: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "$small",
        paddingRight: "$small",
        phone: {
          paddingLeft: "$smaller",
          paddingRight: "$smaller",
        },
      },
      row: {
        display: "flex",
        flexDirection: "row",
      },
    },
    inline: {
      true: {
        [`& ${TextStyled}`]: {
          marginBottom: "0 !important",
          verticalAlign: "middle",
        },
      },
    },
    inverted: {
      true: {
        backgroundColor: "$background",
        color: "$text",
      },
    },
    minimal: {
      true: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
});

export default StackStyled;
