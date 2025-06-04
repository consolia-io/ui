import type { JSX } from "react";

import { CSS } from "@stitches/react";

import { darkTheme } from "../../stitches.config";
import { IStack } from "../../types";
import { StackStyled, StackColumnStyled, StackRowStyled } from "./styles";

export default function Stack({
  align,
  as,
  bottom,
  children,
  className,
  collapseduo,
  css,
  direction,
  flex,
  flexduo,
  id,
  inverted,
  minimal,
  noPrint,
  offset = 0,
  offsetDesktop,
  offsetLaptop,
  offsetPhone,
  offsetTablet,
  offsetWide,
  top,
  width = 100,
  widthDesktop,
  widthLaptop,
  widthPhone,
  widthTablet,
  widthWide,
  ...rest
}: IStack): JSX.Element {
  function getSharedStyles(): CSS {
    return {
      ...(align && { textAlign: align }),
      ...(top && { marginTop: 0, paddingTop: `$${top}` }),
      ...(bottom && { marginBottom: 0, paddingBottom: `$${bottom}` }),
      ...(noPrint && { print: { display: "none" } }),
      ...css,
    };
  }

  function getResponsiveColumnStyles(): CSS {
    return {
      desktopX: {
        flex: `0 0 ${widthDesktop || width}%`,
        marginLeft: `${offsetDesktop || offset}%`,
        width: `${widthDesktop || width}%`,
      },
      laptopX: {
        flex: `0 0 ${widthLaptop || width}%`,
        marginLeft: `${offsetLaptop || offset}%`,
        width: `${widthLaptop || width}%`,
      },
      phone: {
        flex: `0 0 ${widthPhone || 100}%`,
        marginLeft: `${offsetPhone || 0}%`,
        width: `${widthPhone || 100}%`,
      },
      tabletX: {
        flex: `0 0 ${widthTablet || width}%`,
        marginLeft: `${offsetTablet || offset}%`,
        width: `${widthTablet || width}%`,
      },
      wide: {
        flex: `0 0 ${widthWide || width}%`,
        marginLeft: `${offsetWide || offset}%`,
        width: `${widthWide || width}%`,
      },
    };
  }

  const sharedStyles = getSharedStyles();
  const appliedClassName = inverted ? darkTheme.className : className;

  if (direction === "row") {
    return (
      <StackRowStyled
        className={appliedClassName}
        css={{
          alignItems: flex || "normal",
          justifyContent: flex || "normal",
          ...sharedStyles,
        }}
        id={id}
        inverted={inverted}>
        {children}
      </StackRowStyled>
    );
  }

  if (direction === "column") {
    return (
      <StackColumnStyled
        className={appliedClassName}
        css={{
          ...getResponsiveColumnStyles(),
          ...sharedStyles,
        }}
        inverted={inverted}
        minimal={minimal}>
        {children}
      </StackColumnStyled>
    );
  }

  return (
    <StackStyled
      as={as}
      className={appliedClassName}
      collapseduo={collapseduo}
      css={sharedStyles}
      flexduo={flexduo}
      inverted={inverted}
      {...rest}>
      {children}
    </StackStyled>
  );
}
