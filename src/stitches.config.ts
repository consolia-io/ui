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

export const spacings = {
  auto: "auto",
  large: "40px",
  larger: "60px",
  largest: "100px",
  medium: "20px",
  none: "0px",
  small: "10px",
  smaller: "5px",
  smallest: "2.5px",
};

const defaultTheme = {
  colors: {
    background: "#FFFFFF",
    blue: "rgb(143, 189, 216)",
    blueLight: "rgba(143, 189, 216, 0.3)",
    border: "rgba(50, 30, 90, 0.18)",
    borderLight: "rgba(50, 30, 90, 0.1)",
    orange: "rgb(236, 180, 137)",
    orangeLight: "rgba(236, 180, 137, 0.3)",
    overlay: "rgba(15, 8, 18, 0.2)",
    purple: "rgb(167, 155, 208)",
    purpleLight: "rgba(167, 155, 208, 0.3)",
    surface: "rgba(50, 30, 90, 0.07)",
    surfaceHover: "rgba(50, 30, 90, 0.12)",
    surfaceLight: "rgba(50, 30, 90, 0.035)",
    text: "rgb(23, 14, 31)",
    yellow: "rgb(255, 190, 122)",
    yellowLight: "rgba(255, 190, 122, 0.3)",
  },
  fonts: {
    default: "Untitled Sans, apple-system, sans-serif",
  },
  fontSizes: {
    default: "clamp(0.9375rem, 0.875rem + 0.5vw, 1.125rem)",
    h1: "clamp(2rem, 1.75rem + 1.25vw, 3rem)",
    h2: "clamp(1.75rem, 1.5rem + 1vw, 2.5rem)",
    h3: "clamp(1.5rem, 1.25rem + 1vw, 2rem)",
    h4: "clamp(1.375rem, 1.25rem + 0.5vw, 1.5rem)",
    h5: "clamp(1.25rem, 1.125rem + 0.5vw, 1.375rem)",
    h6: "clamp(1.125rem, 1.0625rem + 0.25vw, 1.25rem)",
    micro: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
    small: "clamp(0.875rem, 0.8125rem + 0.3125vw, 1rem)",
  },
  lineHeights: {
    default: "1.5",
    small: "1.2",
  },
  opacities: {
    default: 0.75,
    light: 0.55,
  },
  radii: {
    large: "24px",
    medium: "8px",
    small: "2.5px",
  },
  shadows: {
    large: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  sizes: spacings,
  space: spacings,
  transitions: {
    default: "all 0.35s ease",
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
    blueLight: "#6b7db0",
    border: "rgba(255, 255, 255, 0.20)",
    borderLight: "rgba(255, 255, 255, 0.12)",
    orange: "rgb(196, 116, 107)",
    orangeLight: "#c4746b",
    overlay: "rgba(255, 255, 255, 0.15)",
    purple: "#8b7ba8",
    purpleLight: "#8b7ba8",
    surface: "rgba(245, 243, 255, 0.12)",
    surfaceHover: "rgba(245, 243, 255, 0.18)",
    surfaceLight: "rgba(245, 243, 255, 0.08)",
    text: "#FFFFFF",
    yellow: "rgb(255, 210, 140)",
    yellowLight: "#ffd28c",
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

// Modal/Menu slide animations
export const slideInScale = keyframes({
  from: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.95)",
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
});

export const slideOutScale = keyframes({
  from: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
  to: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.95)",
  },
});

// Drawer slide animations
export const slideInUp = keyframes({
  from: {
    transform: "translateY(100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

export const slideOutDown = keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(100%)",
  },
});
