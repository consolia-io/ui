import { X } from "phosphor-react";
import { useState } from "react";

import { Button, Image } from "../../index";
import { IBox } from "../../types";

import { BoxExitStyled, BoxHeaderStyled, BoxInnerStyled, BoxStyled } from "./Box.styles";

export function Box(props: IBox): JSX.Element {
  const {
    image,
    imageAlt,
    imageCTA,
    imageFit,
    imageHeight,
    imagePosition,
    imageTarget,
    css,
    hover,
    header,
    loading,
    theme,
    children,
    minimal,
    closable,
  } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 250);
  }

  return isMounted ? (
    <BoxStyled
      animation={!isOpen}
      css={css}
      hover={hover}
      loading={loading || false}
      padding={header || image ? "none" : minimal ? "none" : "default"}
      theme={theme || "default"}>
      {image &&
        (imageCTA ? (
          <a href={imageCTA} rel="noopener noreferrer" target={imageTarget || "_blank"}>
            <Image
              alt={imageAlt || ""}
              css={{
                img: {
                  borderTopLeftRadius: "$medium !important",
                  borderTopRightRadius: "$medium !important",
                },
              }}
              fill
              fillFit={imageFit || "cover"}
              fillHeight={imageHeight || "20rem"}
              fillPosition={imagePosition || "center"}
              src={image}
            />
          </a>
        ) : (
          <Image
            alt={imageAlt || ""}
            css={{
              img: {
                borderTopLeftRadius: "$medium !important",
                borderTopRightRadius: "$medium !important",
              },
            }}
            fill
            fillFit={imageFit || "cover"}
            fillHeight={imageHeight || "20rem"}
            fillPosition={imagePosition || "center"}
            src={image}
          />
        ))}
      {header && <BoxHeaderStyled>{header}</BoxHeaderStyled>}
      {image || header ? (
        <BoxInnerStyled padding={minimal ? "none" : "default"}>{children}</BoxInnerStyled>
      ) : (
        children
      )}
      {closable && (
        <BoxExitStyled onClick={(): void => handleClose()}>
          <Button small theme={"minimal"}>
            <X />
          </Button>
        </BoxExitStyled>
      )}
    </BoxStyled>
  ) : (
    <> </>
  );
}
