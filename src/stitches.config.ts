import { createStitches, createTheme, defaultThemeMap } from "@stitches/react";

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
    background: "#FFFFFF",
    blue: "#8fbdd8",
    border: "rgba(60, 30, 90, 0.2)",
    borderLight: "rgba(60, 30, 90, 0.1)",
    orange: "#E4956A",
    overlay: "rgba(15, 8, 18, 0.2)",
    purple: "#a79bd0",
    surface: "rgba(60, 30, 90, 0.06)",
    surfaceHover: "rgba(60, 30, 90, 0.12)",
    surfaceLight: "rgba(60, 30, 90, 0.03)",
    text: "rgb(45, 25, 55)",
    yellow: "#f1de8e",
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
  opacities: {
    default: 0.75,
    light: 0.55,
  },
  radii: {
    large: "1.5rem",
    medium: "0.5rem",
    small: "0.15rem",
  },
  shadows: {
    large: "0 0.4rem 0.8rem 0 rgba(45, 25, 55, 0.08)",
    small: "0 1px 3px 0 rgba(45, 25, 55, 0.1)",
  },
  sizes: {
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
    background: "rgb(16, 16, 20)",
    blue: "#6b7db0",
    border: "rgba(255, 255, 255, 0.20)",
    borderLight: "rgba(255, 255, 255, 0.12)",
    orange: "#c4746b",
    overlay: "rgba(255, 255, 255, 0.15)",
    purple: "#8b7ba8",
    surface: "rgba(245, 243, 255, 0.12)",
    surfaceHover: "rgba(245, 243, 255, 0.18)",
    surfaceLight: "rgba(245, 243, 255, 0.08)",
    text: "#FFFFFF",
    yellow: "#e8965f",
  },
  shadows: {
    large: "0 0.6rem 1.2rem 0 rgba(0, 0, 0, 0.7)",
    small: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
  },
});

export const { css, getCssText, globalCss, keyframes, styled, theme } = createStitches({
  theme: defaultTheme,
  themeMap: { ...defaultThemeMap, opacity: "opacities" },
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
