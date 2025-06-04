import {
  computePosition,
  offset,
  flip,
  shift,
  autoUpdate,
  limitShift,
  type Strategy,
  type ComputePositionReturn,
} from "@floating-ui/dom";
import { useState, useRef, useEffect } from "react";

export default function useFloatingUI(): {
  contentRef: { current: null | HTMLDivElement };
  handleClick: () => void;
  handleClose: () => void;
  isMounted: boolean;
  isOpen: boolean;
  triggerRef: { current: null | HTMLDivElement };
} {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const updatePosition = (): void => {
    if (!triggerRef.current || !contentRef.current) return;

    const strategy: Strategy = "fixed";

    computePosition(triggerRef.current, contentRef.current, {
      middleware: [
        offset(8),
        flip({
          fallbackPlacements: [
            "bottom",
            "top",
            "bottom-start",
            "top-start",
            "bottom-end",
            "top-end",
          ],
          padding: 8,
        }),
        shift({
          limiter: limitShift(),
          padding: 8,
        }),
      ],
      placement: "bottom",
      strategy,
    }).then(({ x, y }: ComputePositionReturn) => {
      if (!contentRef.current || !triggerRef.current) return;

      contentRef.current.style.position = strategy;
      contentRef.current.style.left = `${Math.round(x)}px`;
      contentRef.current.style.top = `${Math.round(y)}px`;
    });
  };

  const prepareFloatingElement = (element: HTMLDivElement): void => {
    if (!element) return;
    element.style.position = "fixed";
  };

  useEffect(() => {
    if (!isOpen || !triggerRef.current || !contentRef.current) {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }

      return;
    }

    prepareFloatingElement(contentRef.current);

    updatePosition();

    cleanupRef.current = autoUpdate(triggerRef.current, contentRef.current, updatePosition, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true,
    });

    return (): void => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [isOpen]);

  useEffect(() => {
    return (): void => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, []);

  function handleOpen(): void {
    setIsMounted(true);
    setIsOpen(true);
    setTimeout(updatePosition, 10);
  }

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => setIsMounted(false), 150);
  }

  function handleClick(): void {
    if (isOpen || isMounted) {
      setIsOpen(false);
      setIsMounted(false);
    } else {
      handleOpen();
    }
  }

  return {
    contentRef,
    handleClick,
    handleClose,
    isMounted,
    isOpen,
    triggerRef,
  };
}
