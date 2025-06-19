import { fadeIn, fadeOut, styled } from "../../stitches.config";
import Button from "../Button";

// Base styles shared between calendar day and month buttons
const calendarButtonBase = {
  "&:active": {
    transform: "scale(0.98)",
  },
  "&:hover": {
    backgroundColor: "$surfaceHover",
  },
  alignItems: "center",
  backgroundColor: "transparent",
  borderBottom: "1px solid $borderLight",
  borderRadius: 0,
  borderRight: "1px solid $borderLight",
  boxShadow: "none",
  color: "$text",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  transition: "all 200ms ease-out",
  width: "100%",
};

export const CalendarStyled = styled("div", {
  minWidth: "320px",
  padding: "$small",
  phone: {
    minWidth: "100%",
  },
  width: "100%",
});

export const CalendarHeaderStyled = styled("div", {
  alignItems: "center",
  borderBottom: "1px solid $borderLight",
  display: "flex",
  justifyContent: "space-between",
  padding: "$small",
  width: "100%",
});

export const CalendarHeaderNavigationStyled = styled("div", {
  alignItems: "center",
  display: "flex",
  gap: "$small",
});

export const CalendarContentStyled = styled("div", {
  padding: 0,
});

export const CalendarGridStyled = styled("div", {
  border: "1px solid $borderLight",
  display: "grid",
  textAlign: "center",

  variants: {
    mode: {
      days: {
        gridTemplateColumns: "repeat(7, 1fr)",
      },
      months: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
    },
  },
});

export const CalendarDayHeaderStyled = styled("div", {
  "&:last-child": {
    borderRight: "none",
  },
  borderBottom: "1px solid $borderLight",
  borderRadius: 0,
  borderRight: "1px solid $borderLight",
  padding: "$smaller 0",
  textAlign: "center",
});

export const CalendarDayStyled = styled(Button, {
  ...calendarButtonBase,
  "&:nth-child(7n)": {
    borderRight: "none",
  },
  height: "$large",
  padding: 0,

  variants: {
    disabled: {
      true: {
        "&:hover": {
          backgroundColor: "transparent",
          transform: "none",
        },
        cursor: "not-allowed",
        opacity: "$light",
      },
    },
    inRange: {
      true: {
        "&:hover": {
          backgroundColor: "$surfaceHover",
        },
        backgroundColor: "$surfaceLight",
      },
    },
    selected: {
      true: {
        backgroundColor: "$surface",
        color: "$text",
        fontWeight: "bold",
      },
    },
  },
});

export const CalendarFooterStyled = styled("div", {
  alignItems: "center",
  backgroundColor: "$background",
  borderTop: "1px solid $borderLight",
  bottom: 0,
  display: "flex",
  justifyContent: "space-between",
  padding: "$medium",
  position: "sticky",
});

export const CalendarDescriptionStyled = styled("div", {
  padding: "$small",
});

export const CalendarMonthStyled = styled(Button, {
  ...calendarButtonBase,
  "&:nth-child(3n)": {
    borderRight: "none",
  },
  fontSize: "$default",
  height: "$larger",
  padding: "$medium $small",

  variants: {
    disabled: {
      true: {
        "&:hover": {
          backgroundColor: "transparent",
          transform: "none",
        },
        cursor: "not-allowed",
        opacity: "$light",
      },
    },
    selected: {
      true: {
        backgroundColor: "$surface",
        color: "$text",
        fontWeight: "bold",
      },
    },
  },
});

export const CalendarAnimationWrapper = styled("div", {
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
});
