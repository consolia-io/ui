import type { JSX } from "react";

import { Loading, type ILoadingOverlay } from "../../../index";
import { LoadingOverlayStyled, LoadingOverlayTitledStyled } from "../styles";

export default function LoadingOverlay({ title }: ILoadingOverlay): JSX.Element {
  return (
    <LoadingOverlayStyled>
      <Loading />
      <LoadingOverlayTitledStyled>{title}</LoadingOverlayTitledStyled>
    </LoadingOverlayStyled>
  );
}
