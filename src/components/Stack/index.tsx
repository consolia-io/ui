import type { JSX } from "react";

import { CSS } from "@stitches/react";

import { type IStack } from "../../index";
import { darkTheme } from "../../stitches.config";
import { StackStyled } from "./styles";

// Helper function to calculate flex value for width
const getFlexValue = (width: number): string => (width === 100 ? `0 0 100%` : `${width} 1 0%`);

// Helper function to create responsive width styles
const createResponsiveWidth = (widthResponsive: IStack["widthResponsive"], css: CSS = {}): CSS => {
  const responsiveStyles: CSS = {};

  if (widthResponsive?.phone) {
    responsiveStyles.phone = {
      ...(css?.phone && typeof css.phone === "object" ? css.phone : {}),
      flex: getFlexValue(widthResponsive.phone),
    };
  }

  if (widthResponsive?.tabletX) {
    responsiveStyles.tabletX = {
      ...(css?.tabletX && typeof css.tabletX === "object" ? css.tabletX : {}),
      flex: getFlexValue(widthResponsive.tabletX),
    };
  }

  if (widthResponsive?.laptopX) {
    responsiveStyles.laptopX = {
      ...(css?.laptopX && typeof css.laptopX === "object" ? css.laptopX : {}),
      flex: getFlexValue(widthResponsive.laptopX),
    };
  }

  if (widthResponsive?.desktopX) {
    responsiveStyles.desktopX = {
      ...(css?.desktopX && typeof css.desktopX === "object" ? css.desktopX : {}),
      flex: getFlexValue(widthResponsive.desktopX),
    };
  }

  if (widthResponsive?.wide) {
    responsiveStyles.wide = {
      ...(css?.wide && typeof css.wide === "object" ? css.wide : {}),
      flex: getFlexValue(widthResponsive.wide),
    };
  }

  return responsiveStyles;
};

export default function Stack({
  align,
  alignContent,
  alignItems,
  as,
  basis,
  bottom,
  children,
  className,
  css,
  direction,
  gap,
  grow,
  id,
  inline,
  inverted,
  justify,
  minimal,
  onClick,
  order,
  shrink,
  top,
  width,
  widthResponsive,
  wrap,
  ...rest
}: IStack): JSX.Element {
  const finalCSS: CSS = {
    ...(align && { textAlign: align }),
    ...(alignItems && { alignItems }),
    ...(alignContent && { alignContent }),
    ...(justify && { justifyContent: justify }),
    ...((gap || direction === "row") && { gap: `$${gap ?? "small"}` }),
    ...((wrap || direction === "row") && { flexWrap: wrap ?? "wrap" }),
    ...(basis && { flexBasis: basis }),
    ...(grow && { flexGrow: grow }),
    ...(shrink && { flexShrink: shrink }),
    ...(order && { order }),
    ...(top && { marginTop: 0, paddingTop: `$${top}` }),
    ...(bottom && { marginBottom: 0, paddingBottom: `$${bottom}` }),
    ...(width !== undefined && { flex: getFlexValue(width) }),
    ...css,
    ...(widthResponsive && createResponsiveWidth(widthResponsive, css)),
  };

  return (
    <StackStyled
      as={as}
      className={inverted ? darkTheme.className : className}
      css={finalCSS}
      direction={direction}
      id={id}
      inline={inline}
      minimal={minimal}
      onClick={onClick}
      {...rest}>
      {children}
    </StackStyled>
  );
}
