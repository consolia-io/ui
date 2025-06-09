import { IconContext } from "@phosphor-icons/react";
import { useEffect, type JSX } from "react";

import packageJson from "../../../package.json";
import { darkTheme } from "../../stitches.config";
import { IProvider } from "../../types";
import { BASE_SIZE } from "../Icon";
import Portal from "./ProviderPortal";
import { ProviderStyled, providerReset } from "./styles";
import { ToastController } from "./ToastController";

const tag = `Consolia UI v${packageJson.version}`;

export default function Provider({ children, css, dark }: IProvider): JSX.Element {
  const isDarkMode = Boolean(dark);
  const themeClassName = isDarkMode ? darkTheme : "";

  const iconContextValue = {
    alignmentBaseline: "middle" as const,
    size: BASE_SIZE,
    weight: "duotone" as const,
  };

  providerReset();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(tag);
  }, []);

  return (
    <ProviderStyled className={themeClassName} css={css}>
      <IconContext.Provider value={iconContextValue}>
        <ToastController />
        {children}
        <Portal />
      </IconContext.Provider>
    </ProviderStyled>
  );
}
