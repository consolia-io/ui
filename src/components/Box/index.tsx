import { useState, type JSX } from "react";

import { Button, Image, Loading, Icon, type IBox } from "../../index";
import Gradient from "../Gradient";
import {
  BoxExitStyled,
  BoxExpanderTrigger,
  BoxFlexStyled,
  BoxFooterStyled,
  BoxHeaderStyled,
  BoxInnerStyled,
  BoxLoadingStyled,
  BoxStyled,
} from "./styles";

export default function Box({
  border,
  children,
  closable,
  css,
  cta,
  expandable,
  expandableHeight,
  footer,
  header,
  image,
  imageAlt,
  imageCTA,
  imageFit,
  imageHeight,
  imagePosition,
  imageSizes,
  imageTarget,
  loading,
  minimal,
  onClick,
  small,
  theme = "default",
}: IBox): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 100);
  }

  const padding = header || footer || image || minimal ? "none" : small ? "small" : "default";
  const hasInteraction = !!(cta || imageCTA || onClick);

  if (!isMounted) return null;

  return (
    <BoxStyled
      animation={!isOpen}
      as={cta ? "a" : "div"}
      border={border}
      collapsed={expandable && !isExpanded}
      css={{
        ...(expandable && expandableHeight && !isExpanded && { maxHeight: expandableHeight }),
        ...css,
      }}
      footer={!!footer}
      hover={hasInteraction}
      href={cta}
      loading={!!loading}
      padding={padding}
      target={cta ? "_blank" : undefined}
      theme={theme || "default"}
      onClick={onClick}>
      {theme === "gradient" && <Gradient />}
      {loading && (
        <BoxLoadingStyled>
          <Loading />
        </BoxLoadingStyled>
      )}

      <BoxFlexStyled>
        {image &&
          (imageCTA && !cta ? (
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
                fillFit={imageFit}
                fillHeight={imageHeight}
                fillPosition={imagePosition}
                sizes={imageSizes || "50vw"}
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
              fillFit={imageFit}
              fillHeight={imageHeight}
              fillPosition={imagePosition}
              sizes={imageSizes || "50vw"}
              src={image}
            />
          ))}

        {header && (
          <BoxHeaderStyled padding={minimal ? "none" : small ? "small" : "default"}>
            {header}
          </BoxHeaderStyled>
        )}

        {image || header || footer ? (
          <BoxInnerStyled padding={minimal ? "none" : small ? "small" : "default"}>
            {children}
          </BoxInnerStyled>
        ) : (
          children
        )}
      </BoxFlexStyled>

      {footer && (
        <BoxFooterStyled fill={!header} padding={minimal ? "none" : small ? "small" : "default"}>
          {footer}
        </BoxFooterStyled>
      )}

      {expandable && !cta && (
        <BoxExpanderTrigger expanded={isExpanded}>
          <Button
            icon={
              isExpanded ? (
                <Icon system="ArrowsInSimpleIcon" />
              ) : (
                <Icon system="ArrowsOutSimpleIcon" />
              )
            }
            small
            theme={isExpanded ? "default" : "solid"}
            onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Collapse" : "Expand"}
          </Button>
        </BoxExpanderTrigger>
      )}

      {closable && !cta && (
        <BoxExitStyled onClick={() => handleClose()}>
          <Button small theme="minimal">
            <Icon system="XCircleIcon" />
          </Button>
        </BoxExitStyled>
      )}
    </BoxStyled>
  );
}
