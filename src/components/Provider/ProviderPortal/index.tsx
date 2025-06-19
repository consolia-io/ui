import { useEffect, useRef, type JSX } from "react";
import { createPortal } from "react-dom";

import { type IPortal } from "../../../index";

export default function Portal({ children, disabled }: IPortal): JSX.Element {
  const portalRef = useRef<HTMLDivElement | null>(null);

  const isPortalDisabled = Boolean(disabled);
  const hasPortalRef = Boolean(portalRef.current);
  const shouldRenderPortal = hasPortalRef && !isPortalDisabled;

  const createPortalElement = (): HTMLDivElement => {
    return document.createElement("div");
  };

  const getPortalContainer = (): Element => {
    const mainElements = document.querySelectorAll("main");
    const hasMainElement = mainElements.length === 1;

    return hasMainElement ? mainElements[0] : document.body;
  };

  const setupPortal = (): (() => void) => {
    const portalElement = createPortalElement();
    const container = getPortalContainer();

    container.appendChild(portalElement);
    portalRef.current = portalElement;

    return (): void => {
      portalElement.remove();
    };
  };

  useEffect(() => {
    return setupPortal();
  }, []);

  if (!shouldRenderPortal) {
    return children as JSX.Element;
  }

  if (!portalRef.current) {
    return children as JSX.Element;
  }

  return createPortal(children, portalRef.current);
}
