import type { IconProps } from "@phosphor-icons/react";

import * as PhosphorIcons from "@phosphor-icons/react";
import { type ComponentType, type JSX } from "react";

import type { IIcon } from "../../index";

import { IconStyled } from "./styles";

export const BASE_SIZE = 21;

export default function Icon({
  css,
  forceColor,
  forceSize = BASE_SIZE,
  inline,
  phosphor,
  system,
  weight = "duotone",
}: IIcon): JSX.Element {
  const iconName = system || phosphor;

  if (!iconName) return <> </>;

  const Icon = PhosphorIcons[iconName as keyof typeof PhosphorIcons] as ComponentType<IconProps>;

  return (
    <IconStyled
      css={{
        ...(inline && {
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
        }),
        ...(forceColor && {
          svg: {
            color: `$${forceColor} !important`,
          },
        }),
        ...(forceSize && {
          svg: {
            height: `${forceSize}px`,
            width: `${forceSize}px`,
          },
        }),
        ...css,
      }}>
      <Icon weight={weight} />
    </IconStyled>
  );
}
