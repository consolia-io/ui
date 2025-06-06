import { styled } from "../../stitches.config";

export const ViewStyled = styled("section", {
  backgroundColor: "$background",
  color: "$text",
  paddingLeft: "$medium",
  paddingRight: "$medium",
  position: "relative",
  variants: {
    hero: {
      true: {
        backgroundColor: "transparent",
        overflow: "hidden",
        position: "relative",
      },
    },
    inverted: {
      true: {
        backgroundColor: "$background",
        color: "$text",
      },
    },
    noPrint: {
      true: {
        print: {
          display: "none",
        },
      },
    },
  },

  width: "100%",
});

export const ViewContainerStyled = styled("div", {
  position: "relative",
  variants: {
    app: {
      false: {
        width: "100%",
      },
      true: {
        desktopX: {
          maxWidth: "2000px",
        },
        margin: "0 auto",
        wide: {
          maxWidth: "2400px",
        },
        width: "98%",
      },
    },
    container: {
      false: {
        width: "100%",
      },
      true: {
        desktopX: {
          maxWidth: "1800px",
        },
        margin: "0 auto",
        wide: {
          maxWidth: "2200px",
        },
        width: "96%",
      },
    },
  },
  zIndex: 2,
});

export default ViewStyled;
