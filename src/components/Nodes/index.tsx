import { JSX, ReactNode } from "react";

import { INodes } from "../../types";
import { useNodesLogic } from "./hooks";
import { ConnectingLine, NodeRow, NodesContainer } from "./styles";

export default function Nodes({ height, nodes, parent }: INodes): JSX.Element {
  const { containerRef, nodesRef, parentRef, paths } = useNodesLogic(nodes, parent);

  const hasCustomHeight = Boolean(height);
  const containerHeight = hasCustomHeight ? `${height}px` : undefined;

  const renderNode = (
    node: { children: ReactNode; color?: string },
    index: number,
  ): JSX.Element => {
    return (
      <div key={index} ref={(el) => void (nodesRef.current[index] = el)}>
        {node.children}
      </div>
    );
  };

  const renderConnectingLines = (): JSX.Element => (
    <svg
      style={{
        height: "100%",
        left: 0,
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        width: "100%",
      }}>
      {/* Base lines */}
      {paths.map((path, i) => (
        <ConnectingLine key={`base-${i}`} css={{ stroke: "$border" }} d={path} />
      ))}
      {/* Animated flow lines */}
      {paths.map((path, i) => {
        const nodeColor = nodes[i]?.color;
        const strokeColor = nodeColor ? `$${nodeColor}` : "$text";

        return <ConnectingLine key={`flow-${i}`} animate css={{ stroke: strokeColor }} d={path} />;
      })}
    </svg>
  );

  return (
    <NodesContainer
      ref={containerRef}
      css={{ height: containerHeight }}
      height={hasCustomHeight ? "custom" : undefined}>
      <NodeRow>{nodes.map(renderNode)}</NodeRow>

      {renderConnectingLines()}

      <NodeRow css={{ marginBottom: "$large", marginTop: "auto" }}>
        <div ref={parentRef}>{parent}</div>
      </NodeRow>
    </NodesContainer>
  );
}
