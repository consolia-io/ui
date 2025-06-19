import { useState, useEffect } from "react";

import type { IUseWindowDimensions } from "../types/hooks";

export default function useWindowDimensions(): IUseWindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState({
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
