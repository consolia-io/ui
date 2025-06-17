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
  offset,
  offsetResponsive,
  onClick,
  order,
  shrink,
  top,
  width,
  widthResponsive,
  wrap,
  ...rest
}: IStack): JSX.Element {
  const dynamicStyles: CSS = {
    ...(align && { textAlign: align }),
    ...(alignItems && { alignItems }),
    ...(alignContent && { alignContent }),
    ...(justify && { justifyContent: justify }),
    ...(gap && { gap: `$${gap}` }),
    ...(wrap && { flexWrap: "wrap" }),
    ...(basis && { flexBasis: basis }),
    ...(grow && { flexGrow: grow }),
    ...(shrink && { flexShrink: shrink }),
    ...(order && { order }),
    ...(top && { marginTop: 0, paddingTop: `$${top}` }),
    ...(bottom && { marginBottom: 0, paddingBottom: `$${bottom}` }),
    ...css,
  };

  // Only apply responsive styles if width/offset props are used
  const hasGridProps =
    width !== undefined || offset !== undefined || widthResponsive || offsetResponsive;
  const responsiveStyles: CSS = hasGridProps
    ? {
        desktopX: {
          flex: `0 0 ${widthResponsive?.desktop ?? width ?? 100}%`,
          marginLeft: `${offsetResponsive?.desktop ?? offset ?? 0}%`,
        },
        laptopX: {
          flex: `0 0 ${widthResponsive?.laptop ?? width ?? 100}%`,
          marginLeft: `${offsetResponsive?.laptop ?? offset ?? 0}%`,
        },
        phone: {
          flex: `0 0 ${widthResponsive?.phone ?? width ?? 100}%`,
          marginLeft: `${offsetResponsive?.phone ?? offset ?? 0}%`,
        },
        tabletX: {
          flex: `0 0 ${widthResponsive?.tablet ?? width ?? 100}%`,
          marginLeft: `${offsetResponsive?.tablet ?? offset ?? 0}%`,
        },
        wide: {
          flex: `0 0 ${widthResponsive?.wide ?? width ?? 100}%`,
          marginLeft: `${offsetResponsive?.wide ?? offset ?? 0}%`,
        },
      }
    : {};

  return (
    <StackStyled
      as={as}
      className={inverted ? darkTheme.className : className}
      css={{
        ...responsiveStyles,
        ...dynamicStyles,
      }}
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
