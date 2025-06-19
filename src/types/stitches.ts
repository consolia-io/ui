/**
 * Responsive breakpoint names available in the design system
 *
 * @category Design System
 */
export type TBreakpointName =
  | "phone"
  | "phoneX"
  | "tablet"
  | "tabletX"
  | "laptop"
  | "laptopX"
  | "desktop"
  | "desktopX"
  | "wide";

/**
 * Special breakpoint names for edge cases
 *
 * @category Design System
 */
export type TSpecialBreakpointName = "micro" | "retina" | "print";

/**
 * Responsive breakpoints configuration for media queries
 *
 * @category Design System
 * @example
 * ```tsx
 * // Usage in styled components
 * const Component = styled('div', {
 *   fontSize: '16px',
 *   phone: {
 *     fontSize: '14px'
 *   },
 *   tablet: {
 *     fontSize: '15px'
 *   }
 * });
 * ```
 */
export type TBreakpointsConfig = Record<TBreakpointName, string> & {
  special: Record<TSpecialBreakpointName, string>;
};

/**
 * Spacing scale configuration used throughout the design system
 *
 * @category Design System
 * @example
 * ```tsx
 * const Component = styled('div', {
 *   padding: '$medium', // 20px
 *   marginTop: '$large', // 40px
 *   gap: '$small' // 10px
 * });
 * ```
 */
export type TSpacingConfig = Record<
  "none" | "smallest" | "smaller" | "small" | "medium" | "large" | "larger" | "largest" | "auto",
  string
>;

/**
 * Theme configuration for colors, typography, and design tokens
 *
 * @category Design System
 * @example
 * ```tsx
 * const Component = styled('div', {
 *   backgroundColor: '$surface',
 *   color: '$text',
 *   borderRadius: '$medium',
 *   fontSize: '$default'
 * });
 * ```
 */
export type TThemeConfig = {
  /** Color palette for the design system */
  colors: Record<
    | "background"
    | "text"
    | "blue"
    | "blueLight"
    | "orange"
    | "orangeLight"
    | "purple"
    | "purpleLight"
    | "yellow"
    | "yellowLight"
    | "border"
    | "borderLight"
    | "surface"
    | "surfaceHover"
    | "surfaceLight"
    | "overlay",
    string
  >;
  /** Font family configuration */
  fonts: {
    default: string;
  };
  /** Font size scale with responsive clamp values */
  fontSizes: Record<
    "micro" | "small" | "default" | "h6" | "h5" | "h4" | "h3" | "h2" | "h1",
    string
  >;
  /** Line height values */
  lineHeights: {
    default: string;
    small: string;
  };
  /** Opacity values */
  opacities: {
    default: number;
    light: number;
  };
  /** Border radius values */
  radii: Record<"small" | "medium" | "large", string>;
  /** Box shadow configurations */
  shadows: {
    large: string;
    small: string;
  };
  /** Size scale (same as spacings) */
  sizes: TSpacingConfig;
  /** Space scale (same as spacings) */
  space: TSpacingConfig;
  /** Transition configurations */
  transitions: {
    default: string;
  };
  /** Z-index layering */
  zIndices: {
    menu: number;
    modal: number;
    popover: number;
    select: number;
    special: number;
    table: number;
    toast: number;
  };
};

/**
 * Dynamic viewport configuration object
 *
 * @category Utilities
 */
export type TDynamicViewportConfig = {
  property: string;
  value: string;
  unit: "vh" | "vw" | "vi" | "vb";
};

/**
 * Utility functions available in Stitches CSS-in-JS
 *
 * @category Utilities
 * @example
 * ```tsx
 * const Component = styled('div', {
 *   // Theme utilities
 *   darkOnly: {
 *     backgroundColor: '$purple'
 *   },
 *   // Responsive utilities
 *   phone: {
 *     fontSize: '$small'
 *   },
 *   // Visibility utilities
 *   hidden: 'tablet',
 *   // Dynamic viewport utilities
 *   dynamicViewport: { property: 'maxHeight', value: '100', unit: 'vh' }
 * });
 * ```
 */
export type TStitchesUtils = {
  /**
   * Apply styles only in dark theme
   * @param value - CSS styles to apply in dark mode
   */
  darkOnly: (value: unknown) => unknown;

  /**
   * Apply styles only in light theme
   * @param value - CSS styles to apply in light mode
   */
  lightOnly: (value: unknown) => unknown;

  /**
   * Apply styles at wide breakpoint (2201px+)
   * @param value - CSS styles to apply
   */
  wide: (value: unknown) => unknown;

  /**
   * Apply styles at desktop breakpoint (max 2200px)
   * @param value - CSS styles to apply
   */
  desktop: (value: unknown) => unknown;

  /**
   * Apply styles at laptop breakpoint (max 1400px)
   * @param value - CSS styles to apply
   */
  laptop: (value: unknown) => unknown;

  /**
   * Apply styles at tablet breakpoint (max 1100px)
   * @param value - CSS styles to apply
   */
  tablet: (value: unknown) => unknown;

  /**
   * Apply styles at phone breakpoint (max 800px)
   * @param value - CSS styles to apply
   */
  phone: (value: unknown) => unknown;

  /**
   * Apply styles at phoneX breakpoint (376px-800px)
   * @param value - CSS styles to apply
   */
  phoneX: (value: unknown) => unknown;

  /**
   * Apply styles at tabletX breakpoint (801px-1100px)
   * @param value - CSS styles to apply
   */
  tabletX: (value: unknown) => unknown;

  /**
   * Apply styles at laptopX breakpoint (1101px-1400px)
   * @param value - CSS styles to apply
   */
  laptopX: (value: unknown) => unknown;

  /**
   * Apply styles at desktopX breakpoint (1401px-2200px)
   * @param value - CSS styles to apply
   */
  desktopX: (value: unknown) => unknown;

  /**
   * Apply styles at micro breakpoint (max 375px)
   * @param value - CSS styles to apply
   */
  micro: (value: unknown) => unknown;

  /**
   * Apply styles for retina/high-DPI displays
   * @param value - CSS styles to apply
   */
  retina: (value: unknown) => unknown;

  /**
   * Apply styles for print media
   * @param value - CSS styles to apply
   */
  print: (value: unknown) => unknown;

  /**
   * Hide element at specific breakpoint
   * @param value - Breakpoint name where element should be hidden
   */
  hidden: (value: TBreakpointName) => unknown;

  /**
   * Hide element inline at specific breakpoint
   * @param value - Breakpoint name where element should be hidden inline
   */
  hiddenInline: (value: TBreakpointName) => unknown;

  /**
   * Hide element at special breakpoint (micro, retina, print)
   * @param value - Special breakpoint name where element should be hidden
   */
  hiddenSpecial: (value: "micro" | "retina" | "print") => unknown;

  /**
   * Show element only at specific breakpoint
   * @param value - Breakpoint name where element should be visible
   */
  visible: (value: TBreakpointName) => unknown;

  /**
   * Show element inline only at specific breakpoint
   * @param value - Breakpoint name where element should be visible inline
   */
  visibleInline: (value: TBreakpointName) => unknown;

  /**
   * Show element only at special breakpoint (micro, retina, print)
   * @param value - Special breakpoint name where element should be visible
   */
  visibleSpecial: (value: "micro" | "retina" | "print") => unknown;

  /**
   * Apply dynamic viewport units with fallback support
   * @param config - Configuration object
   */
  dynamicViewport: (config: TDynamicViewportConfig) => unknown;
};
