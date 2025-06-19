import { JSX, ReactNode } from "react";

import { type INodes } from "../../index";
import { useNodesLogic } from "./hooks";
import { ConnectingLine, NodeRow, NodesContainer, NodesSVG } from "./styles";

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
    <NodesSVG>
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
    </NodesSVG>
  );

  return (
    <NodesContainer ref={containerRef} css={{ height: containerHeight }}>
      <NodeRow>{nodes.map(renderNode)}</NodeRow>

      {renderConnectingLines()}

      <NodeRow>
        <div ref={parentRef}>{parent}</div>
      </NodeRow>
    </NodesContainer>
  );
}
