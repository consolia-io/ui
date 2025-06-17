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

  providerReset();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(tag);
  }, []);

  return (
    <ProviderStyled className={isDarkMode ? darkTheme : ""} css={css}>
      <IconContext.Provider
        value={{
          alignmentBaseline: "middle",
          height: BASE_SIZE,
          weight: "duotone",
          width: BASE_SIZE,
        }}>
        <ToastController />
        {children}
        <Portal />
      </IconContext.Provider>
    </ProviderStyled>
  );
}
