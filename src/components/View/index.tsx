import type { JSX } from "react";

import { CSS } from "@stitches/react";

import { darkTheme } from "../../stitches.config";
import { IView } from "../../types";
import { ViewStyled, ViewContainerStyled } from "./styles";

function HeroBackground(): JSX.Element {
  return (
    <svg
      height="100%"
      style={{
        left: 0,
        opacity: 0.4,
        position: "absolute",
        top: 0,
        zIndex: 0,
      }}
      width="100%"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient cx="50%" cy="120%" fx="50%" fy="110%" id="sunsetGradient" r="100%">
          <stop offset="0%" stopColor="rgba(255, 210, 140, 1)" />
          <stop offset="15%" stopColor="rgba(255, 180, 140, 0.95)" />
          <stop offset="30%" stopColor="rgba(220, 140, 160, 0.9)" />
          <stop offset="45%" stopColor="rgba(160, 130, 180, 0.8)" />
          <stop offset="60%" stopColor="rgba(120, 140, 180, 0.6)" />
          <stop offset="75%" stopColor="rgba(100, 120, 160, 0.4)" />
          <stop offset="85%" stopColor="rgba(80, 100, 140, 0.2)" />
          <stop offset="95%" stopColor="rgba(60, 80, 120, 0.08)" />
          <stop offset="100%" stopColor="transparent" />
          <animateTransform
            attributeName="gradientTransform"
            dur="20s"
            repeatCount="indefinite"
            type="scale"
            values="1; 1.2; 1; 0.85; 1"
          />
        </radialGradient>
      </defs>
      <rect fill="url(#sunsetGradient)" height="100%" width="100%" />
    </svg>
  );
}

export default function View({
  app,
  as,
  bottom,
  children,
  container,
  css,
  hero,
  id,
  inverted,
  noPrint,
  top,
}: IView): JSX.Element {
  function getCustomStyles(): CSS {
    return {
      ...(top && {
        marginTop: 0,
        paddingTop: `$${top}`,
      }),
      ...(bottom && {
        marginBottom: 0,
        paddingBottom: `$${bottom}`,
      }),
      ...(hero && {
        overflow: "hidden",
        position: "relative",
      }),
      ...css,
    };
  }

  return (
    <ViewStyled
      as={as}
      className={inverted ? darkTheme.className : ""}
      css={getCustomStyles()}
      id={`view-${id}`}
      inverted={inverted}
      noPrint={noPrint}>
      {hero && <HeroBackground />}
      <ViewContainerStyled app={app} container={container}>
        {children}
      </ViewContainerStyled>
    </ViewStyled>
  );
}
