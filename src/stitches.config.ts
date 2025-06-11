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
    blueGradient:
      "radial-gradient(ellipse at 50% 120%, rgba(143, 189, 216, 0.05) 0%, rgba(143, 189, 216, 0.15) 50%, rgba(143, 189, 216, 0.3) 100%)",
    border: "rgba(60, 30, 90, 0.2)",
    borderLight: "rgba(60, 30, 90, 0.1)",
    orange: "#E49580",
    orangeGradient:
      "radial-gradient(ellipse at 50% 120%, rgba(228, 149, 128, 0.05) 0%, rgba(228, 149, 128, 0.15) 50%, rgba(228, 149, 128, 0.3) 100%)",
    overlay: "rgba(15, 8, 18, 0.2)",
    purple: "#a79bd0",
    purpleGradient:
      "radial-gradient(ellipse at 50% 120%, rgba(167, 155, 208, 0.05) 0%, rgba(167, 155, 208, 0.15) 50%, rgba(167, 155, 208, 0.3) 100%)",
    surface: "rgba(60, 30, 90, 0.06)",
    surfaceHover: "rgba(60, 30, 90, 0.12)",
    surfaceLight: "rgba(60, 30, 90, 0.03)",
    text: "rgb(23, 14, 31)",
    yellow: "#ffbe7a",
    yellowGradient:
      "radial-gradient(ellipse at 50% 120%, rgba(255, 190, 122, 0.05) 0%, rgba(255, 190, 122, 0.15) 50%, rgba(255, 190, 122, 0.3) 100%)",
  },
  fonts: {
    default: "Untitled Sans, apple-system, sans-serif",
  },
  fontSizes: {
    default: "1.7rem",
    h1: "4.5rem",
    h2: "3.6rem",
    h3: "3rem",
    h4: "2.5rem",
    h5: "2.1rem",
    h6: "1.9rem",
    small: "1.4rem",
  },
  lineHeights: {
    default: "1.45",
    small: "1.1",
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
    large: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
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
    menu: 999,
    modal: 997,
    popover: 996,
    select: 995,
    special: 100,
    table: 100,
    toast: 998,
  },
};

export const darkTheme = createTheme({
  colors: {
    background: "#170e1f",
    blue: "#6b7db0",
    blueGradient:
      "radial-gradient(ellipse at 50% 120%, rgba(107, 125, 176, 0.8) 0%, rgba(80, 100, 140, 0.4) 50%, rgba(40, 60, 100, 0.2) 100%)",
    border: "rgba(255, 255, 255, 0.20)",
    borderLight: "rgba(255, 255, 255, 0.12)",
    orange: "rgb(196, 116, 107)",
    orangeGradient:
      "radial-gradient(ellipse at 50% 120%, rgba(255, 150, 120, 0.8) 0%, rgba(200, 90, 60, 0.4) 50%, rgba(160, 50, 20, 0.2) 100%)",
    overlay: "rgba(255, 255, 255, 0.15)",
    purple: "#8b7ba8",
    purpleGradient:
      "radial-gradient(ellipse at 50% 120%, rgba(180, 120, 150, 0.8) 0%, rgba(140, 60, 120, 0.4) 50%, rgba(100, 20, 100, 0.2) 100%)",
    surface: "rgba(245, 243, 255, 0.12)",
    surfaceHover: "rgba(245, 243, 255, 0.18)",
    surfaceLight: "rgba(245, 243, 255, 0.08)",
    text: "#FFFFFF",
    yellow: "rgb(255, 210, 140)",
    yellowGradient:
      "radial-gradient(ellipse at 50% 120%, rgba(255, 210, 140, 0.8) 0%, rgba(240, 150, 80, 0.4) 50%, rgba(230, 110, 40, 0.2) 100%)",
  },
  shadows: {
    large: "0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.15)",
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.25)",
  },
});

export const { css, getCssText, globalCss, keyframes, styled, theme } = createStitches({
  theme: defaultTheme,
  themeMap: { ...defaultThemeMap, opacity: "opacities" },
  utils: {
    darkOnly: (value: unknown) => ({
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
    lightOnly: (value: unknown) => ({
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
