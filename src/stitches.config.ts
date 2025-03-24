import { createStitches, createTheme } from "@stitches/react";

export const breakpoints = {
  desktop: "@media only screen and (max-width: 2200px)",
  desktopX: "@media only screen and (min-width: 1401px) and (max-width: 2200px)",
  laptop: "@media only screen and (max-width: 1400px)",
  laptopX: "@media only screen and (min-width: 1101px) and (max-width: 1400px)",
  phone: "@media only screen and (max-width: 800px)",
  phoneX: "@media only screen and (min-width: 376px) and (max-width: 800px)",
  special: {
    micro: "@media only screen and (max-width: 375px)",
    print: "@media print",
    retina:
      "@media only screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx)",
  },
  tablet: "@media only screen and (max-width: 1100px)",
  tabletX: "@media only screen and (min-width: 801px) and (max-width: 1100px)",
  wide: "@media only screen and (min-width: 2201px)",
};

const defaultTheme = {
  colors: {
    accent: "rgba(20, 5, 25, 0.9)",
    background: "rgb(255, 255, 255)",
    blueBackground: "#DCE9F7",
    blueText: "#2B5585",
    border: "rgba(50, 10, 70, 0.1)",
    borderSubtle: "rgba(50, 10, 70, 0.05)",
    default: "rgba(50, 10, 70, 0.05)",
    defaultHover: "rgba(50, 10, 70, 0.075)",
    defaultSubtle: "rgba(50, 10, 70, 0.025)",
    dialog: "rgba(0, 0, 0, 0.8)",
    greenBackground: "#D7E9E4",
    greenText: "#2D4A3E",
    orangeBackground: "#F6E2D3",
    orangeText: "#8B4A1B",
    purpleBackground: "#E8E1EC",
    purpleText: "#523357",
    redBackground: "#F2DDE1",
    redText: "#943D47",
    text: "rgb(20, 5, 25)",
  },
  fonts: {
    default: "Untitled Sans, apple-system, sans-serif",
  },
  fontSizes: {
    default: "1.7rem",
    h1: "4rem",
    h2: "3.5rem",
    h3: "3rem",
    h4: "2.5rem",
    h5: "2rem",
    h6: "1.75rem",
    small: "1.5rem",
  },
  lineHeights: {
    default: "1.5",
    small: "1.25",
  },
  radii: {
    large: "0.75rem",
    small: "0.25rem",
  },
  shadows: {
    large: "0 0.6rem 1.2rem 0 rgba(20, 5, 25, 0.15)",
    small: "0 0.2rem 0.4rem 0 rgba(20, 5, 25, 0.15)",
  },
  space: {
    excess: "16rem",
    large: "4rem",
    larger: "6rem",
    largest: "8rem",
    medium: "2rem",
    none: "0",
    small: "1rem",
    smaller: "0.5rem",
    smallest: "0.25rem",
  },
  transitions: {
    default: "all 0.23s ease",
  },
  zIndices: {
    dialog: 997,
    menu: 999,
    popover: 996,
    select: 995,
    special: 100,
    table: 100,
    toast: 998,
  },
};

export const darkTheme = createTheme({
  colors: {
    accent: "rgba(254, 247, 242, 0.9)",
    background: "rgb(20, 5, 25)",
    blueBackground: "#1E3356",
    blueText: "#B8D4F7",
    border: "rgba(254, 247, 242, 0.22)",
    borderSubtle: "rgba(254, 247, 242, 0.12)",
    default: "rgba(254, 247, 242, 0.05)",
    defaultHover: "rgba(254, 247, 242, 0.075)",
    defaultSubtle: "rgba(254, 247, 242, 0.025)",
    dialog: "rgba(20, 5, 25, 0.8)",
    greenBackground: "#1E3633",
    greenText: "#B8E6D4",
    orangeBackground: "#332013",
    orangeText: "#FFD4B8",
    purpleBackground: "#2D1F33",
    purpleText: "#E6C7ED",
    redBackground: "#331A1D",
    redText: "#FFD0D4",
    text: "rgb(254, 247, 242)",
  },
  shadows: {
    large: "0 0.6rem 1.2rem 0 rgba(254, 247, 242, 0.06)",
    small: "0 0.2rem 0.4rem 0 rgba(254, 247, 242, 0.06)",
  },
});

export const { css, getCssText, globalCss, keyframes, styled, theme } = createStitches({
  theme: defaultTheme,
  utils: {
    darkModeSpec: (value: unknown) => ({
      [`.${darkTheme} &`]: value,
    }),
    desktop: (value: unknown) => ({
      [breakpoints.desktop]: value,
    }),
    desktopX: (value: unknown) => ({
      [breakpoints.desktopX]: value,
    }),
    hidden: (
      value:
        | "phone"
        | "tablet"
        | "tabletX"
        | "laptop"
        | "laptopX"
        | "desktop"
        | "desktopX"
        | "wide",
    ) => ({
      [breakpoints[value]]: {
        display: "none !important",
      },
    }),
    hiddenInline: (
      value:
        | "phone"
        | "tablet"
        | "tabletX"
        | "laptop"
        | "laptopX"
        | "desktop"
        | "desktopX"
        | "wide",
    ) => ({
      [breakpoints[value]]: {
        display: "none !important",
      },
      display: "inline-block !important",
    }),
    hiddenSpecial: (value: "micro" | "retina" | "print") => ({
      [breakpoints.special[value]]: {
        display: "none !important",
      },
    }),
    laptop: (value: unknown) => ({
      [breakpoints.laptop]: value,
    }),
    laptopX: (value: unknown) => ({
      [breakpoints.laptopX]: value,
    }),

    lightThemeSpec: (value: unknown) => ({
      "@media (prefers-color-scheme: light)": value,
    }),
    micro: (value: unknown) => ({
      [breakpoints.special.micro]: value,
    }),
    phone: (value: unknown) => ({
      [breakpoints.phone]: value,
    }),
    print: (value: unknown) => ({
      [breakpoints.special.print]: value,
    }),
    retina: (value: unknown) => ({
      [breakpoints.special.retina]: value,
    }),
    tablet: (value: unknown) => ({
      [breakpoints.tablet]: value,
    }),
    tabletX: (value: unknown) => ({
      [breakpoints.tabletX]: value,
    }),
    visible: (
      value:
        | "phone"
        | "tablet"
        | "tabletX"
        | "laptop"
        | "laptopX"
        | "desktop"
        | "desktopX"
        | "wide",
    ) => ({
      [breakpoints[value]]: {
        display: "block !important",
      },
      display: "none",
    }),
    visibleInline: (
      value:
        | "phone"
        | "tablet"
        | "tabletX"
        | "laptop"
        | "laptopX"
        | "desktop"
        | "desktopX"
        | "wide",
    ) => ({
      [breakpoints[value]]: {
        display: "inline-block !important",
      },
      display: "none",
    }),
    visibleSpecial: (value: "micro" | "retina" | "print") => ({
      [breakpoints.special[value]]: {
        display: "block !important",
      },
      display: "none",
    }),
    wide: (value: unknown) => ({
      [breakpoints.wide]: value,
    }),
  },
});

export const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

export const fadeOut = keyframes({
  "0%": {
    opacity: 1,
  },

  "100%": {
    opacity: 0,
  },
});
