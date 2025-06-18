import { Fragment, type JSX } from "react";
import { Balancer } from "react-wrap-balancer";

import { IText } from "../../types";
import Icon from "../Icon";
import { TextStyled } from "./styles";

export default function Text({
  accent,
  as = "p",
  balanced,
  bottom,
  children,
  css,
  highlight,
  href,
  inline,
  link,
  muted,
  override,
  rel,
  target,
  top,
  truncate,
  ...rest
}: IText): JSX.Element {
  const TextBalancer = balanced ? Balancer : Fragment;
  const elementType = override || as || "p";
  const isAnchor = as === "a";
  const isExternalLink = isAnchor && target === "_blank";
  const shouldShowInline = inline && !["span", "strong"].includes(as);

  return (
    <TextStyled
      accent={accent}
      as={elementType}
      css={{
        ...(top && {
          marginTop: 0,
          paddingTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: 0,
          paddingBottom: `$${bottom}`,
        }),
        ...(inline && {
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
        }),
        ...css,
      }}
      highlight={highlight}
      href={isAnchor ? href : undefined}
      inline={shouldShowInline ? true : false}
      link={link || (isAnchor ? "default" : undefined)}
      muted={muted}
      rel={isAnchor ? rel : undefined}
      size={as || "p"}
      target={isAnchor ? target : undefined}
      truncate={truncate}
      {...rest}>
      <TextBalancer>{children}</TextBalancer>
      {isExternalLink && (
        <Icon
          css={{
            marginLeft: "$smallest",
            marginTop: "-$smallest",
          }}
          forceSize={18}
          system="ArrowUpRightIcon"
        />
      )}
    </TextStyled>
  );
}
