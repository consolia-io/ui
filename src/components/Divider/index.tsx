import type { JSX } from "react";

import { type IDivider } from "../../index";
import { DividerStyled } from "./styles";

export default function Divider({ bottom, css, top, ...rest }: IDivider): JSX.Element {
  return (
    <DividerStyled
      css={{
        ...(top && {
          marginTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: `$${bottom}`,
        }),
        ...css,
      }}
      {...rest}
    />
  );
}
