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
  const dynamicStyles: CSS = {
    ...(align && { textAlign: align }),
    ...(alignItems && { alignItems }),
    ...(alignContent && { alignContent }),
    ...(justify && { justifyContent: justify }),
    ...((gap || direction === "row") && {
      gap: `$${gap ?? "small"}`,
    }),
    ...((wrap || direction === "row") && { flexWrap: "wrap" }),
    ...(basis && { flexBasis: basis }),
    ...(grow && { flexGrow: grow }),
    ...(shrink && { flexShrink: shrink }),
    ...(order && { order }),
    ...(top && { marginTop: 0, paddingTop: `$${top}` }),
    ...(bottom && { marginBottom: 0, paddingBottom: `$${bottom}` }),
    ...css,
  };

  const responsiveStyles: CSS =
    width !== undefined || widthResponsive
      ? {
          desktopX: {
            flex: `${widthResponsive?.desktop ?? width ?? 100} 1 0%`,
          },
          laptopX: {
            flex: `${widthResponsive?.laptop ?? width ?? 100} 1 0%`,
          },
          phone: {
            flex: `${widthResponsive?.phone ?? width ?? 100} 1 0%`,
          },
          tabletX: {
            flex: `${widthResponsive?.tablet ?? width ?? 100} 1 0%`,
          },
          wide: {
            flex: `${widthResponsive?.wide ?? width ?? 100} 1 0%`,
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
