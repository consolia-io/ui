import type { JSX } from "react";

import { CSS } from "@stitches/react";

import { darkTheme } from "../../stitches.config";
import { IView } from "../../types";
import Gradient from "../Gradient";
import Logo from "../Logo";
import { ViewStyled, ViewContainerStyled } from "./styles";

function HeroBackground(): JSX.Element {
  return (
    <>
      <Logo
        css={{
          left: "-10rem",
          opacity: 0.05,
          pointerEvents: "none",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          userSelect: "none",
          zIndex: 0,
        }}
        type="icon"
        width={900}
      />
      <Gradient />
    </>
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
      ...css,
    };
  }

  return (
    <ViewStyled
      as={as}
      className={inverted ? darkTheme.className : ""}
      css={getCustomStyles()}
      hero={hero}
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
