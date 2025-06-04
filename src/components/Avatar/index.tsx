import type { JSX } from "react";

import { Image, Text } from "../../index";
import { IAvatar } from "../../types";
import { AvatarStyled } from "./styles";

const getBackgroundColor = (text: string): string => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const colorOptions = ["purple", "orange", "yellow", "blue"];
  const letter = text.charAt(0).toUpperCase();
  const index = letters.indexOf(letter);

  return `$${colorOptions[index % colorOptions.length]}`;
};

export default function Avatar({
  alt,
  colors,
  css,
  fallback,
  src,
  width = 32,
}: IAvatar): JSX.Element {
  const backgroundColor = getBackgroundColor(fallback);

  return (
    <AvatarStyled
      css={{
        height: width,
        maxHeight: width,
        maxWidth: width,
        minHeight: width,
        minWidth: width,
        width: width,
        ...(colors && {
          backgroundColor,
        }),
        ...css,
      }}>
      {src ? (
        <Image alt={alt || fallback} fill fillFit="cover" sizes={`${width}px`} src={src} />
      ) : (
        <Text as="span">{fallback}</Text>
      )}
    </AvatarStyled>
  );
}
