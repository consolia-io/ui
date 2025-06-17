import { darkTheme, globalCss, styled, theme } from "../../stitches.config";

export const ProviderStyled = styled("main", {
  minHeight: "100vh",
  position: "relative",
});

export const ToastStyled = styled("div", {
  "&:hover": {
    opacity: "$default",
  },
  cursor: "pointer",
  marginBottom: "$small",
  maxWidth: "600px",
  padding: "$smaller $small",
  phone: {
    "&:last-child": {
      marginBottom: "$small",
    },
    margin: "0 auto",
    marginBottom: "0",
    marginTop: "$small",
    maxWidth: "90%",
    textAlign: "center",
  },

  pointerEvents: "all",
  width: "fit-content",
});

const baseFontURL = "https://cosmogroup.io/fonts";

export const providerReset = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  "::selection": {
    backgroundColor: theme.colors.text,
    color: theme.colors.background,
  },

  "@font-face": [
    {
      fontDisplay: "swap",
      fontFamily: "Untitled Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      src: `url(${baseFontURL}/untitled-sans-web-regular.woff2) format('woff2')`,
    },
    {
      fontDisplay: "swap",
      fontFamily: "Untitled Sans",
      fontStyle: "normal",
      fontWeight: "bold",
      src: `url(${baseFontURL}/untitled-sans-web-medium.woff2) format('woff2')`,
    },
  ],

  "a, a:visited, a:active, a:hover": {
    color: "inherit",
    textDecoration: "none",
    WebkitTapHighlightColor: "transparent",
  },

  body: {
    [`.${darkTheme}`]: {
      backgroundColor: darkTheme.colors.background,
      color: darkTheme.colors.text,
      colorScheme: "dark",
    },
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontFamily: theme.fonts.default,
    fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
    fontOpticalSizing: "auto",
    fontSize: theme.fontSizes.default,
    fontWeight: "normal",
    lineHeight: theme.lineHeights.default,
    margin: 0,
    minHeight: "100vh",
    MozOsxFontSmoothing: "grayscale",
    overflowX: "hidden",
    padding: 0,
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
  },

  button: {
    "&:disabled": {
      cursor: "not-allowed",
      opacity: theme.opacities.light,
    },
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: "inherit",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
    fontWeight: "bold",
    lineHeight: theme.lineHeights.small,
    margin: 0,
    textRendering: "optimizeLegibility",
  },

  html: {
    fontSize: "100%",
    scrollBehavior: "smooth",
  },

  "img, svg": {
    display: "block",
    maxWidth: "100%",
  },

  "input, textarea, select": {
    "&:disabled": {
      cursor: "not-allowed",
      opacity: theme.opacities.light,
    },
    fontFamily: "inherit",
    fontSize: "inherit",
  },

  p: {
    lineHeight: theme.lineHeights.default,
    margin: 0,
  },

  svg: {
    alignSelf: "center",
    verticalAlign: "middle",
  },

  "ul, ol": {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
});

export default ProviderStyled;
