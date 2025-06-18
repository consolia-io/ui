import type { JSX } from "react";

import { CSS } from "@stitches/react";

import { darkTheme } from "../../stitches.config";
import { IStack } from "../../types";
import { StackStyled } from "./styles";

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
    ...((wrap || direction === "row") && { flexWrap: "wrap" }),
    ...(basis && { flexBasis: basis }),
    ...(grow && { flexGrow: grow }),
    ...(shrink && { flexShrink: shrink }),
    ...(order && { order }),
    ...(top && { marginTop: 0, paddingTop: `$${top}` }),
    ...(bottom && { marginBottom: 0, paddingBottom: `$${bottom}` }),
    ...(width !== undefined && {
      flex: width === 100 ? `0 0 100%` : `${width} 1 0%`,
    }),
    ...css,
    ...(widthResponsive?.phone && {
      phone: {
        ...(css?.phone && typeof css.phone === "object" ? css.phone : {}),
        flex: widthResponsive.phone === 100 ? `0 0 100%` : `${widthResponsive.phone} 1 0%`,
      },
    }),
    ...(widthResponsive?.tabletX && {
      tabletX: {
        ...(css?.tabletX && typeof css.tabletX === "object" ? css.tabletX : {}),
        flex: widthResponsive.tabletX === 100 ? `0 0 100%` : `${widthResponsive.tabletX} 1 0%`,
      },
    }),
    ...(widthResponsive?.laptopX && {
      laptopX: {
        ...(css?.laptopX && typeof css.laptopX === "object" ? css.laptopX : {}),
        flex: widthResponsive.laptopX === 100 ? `0 0 100%` : `${widthResponsive.laptopX} 1 0%`,
      },
    }),
    ...(widthResponsive?.desktopX && {
      desktopX: {
        ...(css?.desktopX && typeof css.desktopX === "object" ? css.desktopX : {}),
        flex: widthResponsive.desktopX === 100 ? `0 0 100%` : `${widthResponsive.desktopX} 1 0%`,
      },
    }),
    ...(widthResponsive?.wide && {
      wide: {
        ...(css?.wide && typeof css.wide === "object" ? css.wide : {}),
        flex: widthResponsive.wide === 100 ? `0 0 100%` : `${widthResponsive.wide} 1 0%`,
      },
    }),
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
