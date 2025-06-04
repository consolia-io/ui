import { fadeIn, fadeOut, styled } from "../../stitches.config";

export const SelectStyled = styled("div", {
  display: "inline-block",
  position: "relative",
  verticalAlign: "middle",
});

export const SelectTriggerStyled = styled("div", {
  cursor: "pointer",
  display: "inline-flex",
  position: "relative",
  verticalAlign: "middle",
});

export const SelectGroupStyled = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  backgroundColor: "$background",
  border: "1px solid $border",
  borderRadius: "$medium",
  boxShadow: "$large",
  lineBreak: "auto",
  overflowY: "auto",
  padding: "$smallest $smaller",
  pointerEvents: "auto",
  textAlign: "left !important",
  variants: {
    animation: {
      false: {
        animation: `${fadeOut} 200ms ease-out`,
        animationFillMode: "forwards",
      },
      true: {
        animation: `${fadeIn} 200ms ease-out`,
        animationFillMode: "forwards",
      },
    },
  },
  width: "100%",

  zIndex: "$select",
});

export const SelectFilterStyled = styled("div", {
  backgroundColor: "$background",
  padding: "$small",
  position: "sticky",
  top: 0,
  zIndex: "$select",
});

export const SelectItemStyled = styled("div", {
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  alignItems: "center",
  borderRadius: "$medium",
  cursor: "pointer",
  display: "flex",
  gap: "$small",
  justifyContent: "space-between",
  margin: "$smallest $smaller",
  padding: "$smaller $small",

  transition: "$default",

  variants: {
    focused: {
      true: {
        backgroundColor: "$surfaceHover",
      },
    },
    last: {
      true: {
        borderTop: "1px solid $borderLight",
        marginTop: "$small",
        paddingTop: "$small",
      },
    },
    selected: {
      false: {
        backgroundColor: "transparent",
      },
      true: {
        backgroundColor: "$surface",
        color: "$text",
        fontWeight: "bold",
      },
    },
  },
});

export const SelectEmptyStyled = styled("div", {
  color: "$text",
  fontSize: "$small",
  opacity: "$light",
  padding: "$medium",
  textAlign: "center",
});

export const SelectLabelStyled = styled("div", {
  backgroundColor: "$background",
  borderBottom: "1px solid $borderLight",
  fontWeight: "bold",
  padding: "$smaller $small $smallest $small",
  position: "sticky",
  top: 0,
  zIndex: "$select",
});

export const SelectIconStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  variants: {
    align: {
      left: {
        order: -1,
      },
      right: {
        order: 1,
      },
    },
  },
});

export default SelectStyled;
