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

      // Set position
      contentRef.current.style.position = strategy;
      contentRef.current.style.left = `${Math.round(x)}px`;
      contentRef.current.style.top = `${Math.round(y)}px`;
    });
  };

  const prepareFloatingElement = (element: HTMLDivElement): void => {
    if (!element) return;
    // Ensure element is properly positioned for floating UI
    element.style.position = "fixed";
    element.style.top = "0";
    element.style.left = "0";
    // Reset any conflicting transforms
    element.style.transform = "";
    // Ensure element has proper display to prevent size calculation issues
    element.style.visibility = "hidden";
    element.style.display = "block";
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

    // Initial position calculation with a small delay to ensure DOM is ready
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.style.visibility = "visible";
        updatePosition();
      }
    }, 0);

    // Set up auto-update for dynamic positioning
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
  }

  function handleClose(): void {
    setIsOpen(false);
    // Match animation duration for smooth close
    setTimeout(() => setIsMounted(false), 200);
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
