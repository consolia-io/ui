import { useCallback, useEffect, useRef, useState, ReactNode, RefObject } from "react";

const CALCULATION_DELAY = 100;
const RESIZE_DEBOUNCE_DELAY = 100;
const SPREAD_FACTOR = 0.6;
const CURVE_INTENSITY = 0.3;

const debounce = <T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number,
): ((...args: T) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: T): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const createPath = (
  start: { x: number; y: number },
  end: { x: number; y: number; width: number },
  index: number,
  total: number,
): string => {
  const totalDistance = end.y - start.y;
  const spreadWidth = end.width * SPREAD_FACTOR;
  const spreadStep = spreadWidth / Math.max(total - 1, 1);
  const entryX = end.x - spreadWidth / 2 + index * spreadStep;

  const controlPoint1Y = start.y + totalDistance * CURVE_INTENSITY;
  const controlPoint2Y = end.y - totalDistance * CURVE_INTENSITY;

  return `M ${start.x} ${start.y} C ${start.x} ${controlPoint1Y}, ${entryX} ${controlPoint2Y}, ${entryX} ${end.y}`;
};

export const useNodeRefs = (): {
  nodesRef: RefObject<(HTMLDivElement | null)[]>;
  parentRef: RefObject<HTMLDivElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  getNodeRefs: () => (HTMLDivElement | null)[];
  getContainerRect: () => DOMRect | undefined;
  getParentRect: () => DOMRect | undefined;
} => {
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const getNodeRefs = (): (HTMLDivElement | null)[] => nodesRef.current;
  const getContainerRect = (): DOMRect | undefined => containerRef.current?.getBoundingClientRect();
  const getParentRect = (): DOMRect | undefined => parentRef.current?.getBoundingClientRect();

  return {
    containerRef,
    getContainerRect,
    getNodeRefs,
    getParentRect,
    nodesRef,
    parentRef,
  };
};

export const useNodePaths = (
  nodeCount: number,
  getContainerRect: () => DOMRect | undefined,
  getParentRect: () => DOMRect | undefined,
  getNodeRefs: () => (HTMLDivElement | null)[],
): {
  paths: string[];
  calculatePaths: () => void;
} => {
  const [paths, setPaths] = useState<string[]>([]);

  const calculateParentCenter = (
    containerRect: DOMRect,
    parentRect: DOMRect,
  ): { x: number; y: number; width: number } => ({
    width: parentRect.width,
    x: parentRect.left + parentRect.width / 2 - containerRect.left,
    y: parentRect.top - containerRect.top,
  });

  const calculateNodePosition = (
    nodeRect: DOMRect,
    containerRect: DOMRect,
  ): { x: number; y: number } => ({
    x: nodeRect.left + nodeRect.width / 2 - containerRect.left,
    y: nodeRect.bottom - containerRect.top,
  });

  const calculatePaths = useCallback((): void => {
    const containerRect = getContainerRect();
    const parentRect = getParentRect();

    if (!containerRect || !parentRect) return;

    const parentCenter = calculateParentCenter(containerRect, parentRect);
    const nodeRefs = getNodeRefs();

    const newPaths = nodeRefs.map((nodeRef, index) => {
      if (!nodeRef) return "";

      const nodeRect = nodeRef.getBoundingClientRect();
      const nodePosition = calculateNodePosition(nodeRect, containerRect);

      return createPath(nodePosition, parentCenter, index, nodeCount);
    });

    setPaths(newPaths);
  }, [nodeCount, getContainerRect, getParentRect, getNodeRefs]);

  return {
    calculatePaths,
    paths,
  };
};

export const useResizeHandler = (
  calculatePaths: () => void,
  nodes: { children: ReactNode; color?: string }[],
  parent: ReactNode,
): void => {
  useEffect(() => {
    const timer = setTimeout(calculatePaths, CALCULATION_DELAY);
    const debouncedResize = debounce(calculatePaths, RESIZE_DEBOUNCE_DELAY);

    window.addEventListener("resize", debouncedResize);

    return (): void => {
      clearTimeout(timer);
      window.removeEventListener("resize", debouncedResize);
    };
  }, [calculatePaths, nodes, parent]);
};

export const useNodesLogic = (
  nodes: { children: ReactNode; color?: string }[],
  parent: ReactNode,
): {
  nodesRef: RefObject<(HTMLDivElement | null)[]>;
  parentRef: RefObject<HTMLDivElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  paths: string[];
  calculatePaths: () => void;
} => {
  const nodeCount = nodes.length;

  const { containerRef, getContainerRect, getNodeRefs, getParentRect, nodesRef, parentRef } =
    useNodeRefs();

  const { calculatePaths, paths } = useNodePaths(
    nodeCount,
    getContainerRect,
    getParentRect,
    getNodeRefs,
  );

  useResizeHandler(calculatePaths, nodes, parent);

  return {
    calculatePaths,
    containerRef,
    nodesRef,
    parentRef,
    paths,
  };
};
