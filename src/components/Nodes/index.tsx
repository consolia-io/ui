import { JSX, ReactNode } from "react";

import { INodes } from "../../types";
import Badge from "../Badge";
import Box from "../Box";
import { useNodesLogic } from "./hooks";
import { ConnectingLine, NodeRow, NodesContainer } from "./styles";

export default function Nodes({ height, nodes, parent, type = "badge" }: INodes): JSX.Element {
  const { containerRef, isCardType, isParentReactNode, nodesRef, parentRef, paths } = useNodesLogic(
    nodes,
    parent,
    type,
  );

  const hasCustomHeight = Boolean(height);
  const containerHeight = hasCustomHeight ? `${height}px` : undefined;

  const renderNode = (
    node: { name: string; icon: ReactNode; theme?: string },
    index: number,
  ): JSX.Element => {
    const validTheme = node.theme as
      | "blue"
      | "orange"
      | "purple"
      | "yellow"
      | "default"
      | "solid"
      | undefined;

    return (
      <div key={node.name} ref={(el) => void (nodesRef.current[index] = el)}>
        {isCardType ? (
          <Box
            css={{ alignItems: "center", display: "flex", gap: "$small" }}
            small
            theme={validTheme}>
            {node.icon}
            {node.name}
          </Box>
        ) : (
          <Badge icon={node.icon} theme={validTheme}>
            {node.name}
          </Badge>
        )}
      </div>
    );
  };

  const renderParentNode = (): ReactNode => {
    if (isParentReactNode) {
      return parent as ReactNode;
    }

    const parentData = parent as { name: string; icon: ReactNode };

    return isCardType ? (
      <Box css={{ alignItems: "center", display: "flex", gap: "$small" }}>
        {parentData.icon}
        {parentData.name}
      </Box>
    ) : (
      <Badge icon={parentData.icon}>{parentData.name}</Badge>
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
        <ConnectingLine key={`base-${i}`} css={{ stroke: "$text" }} d={path} />
      ))}
      {/* Animated flow lines */}
      {paths.map((path, i) => {
        const nodeTheme = nodes[i]?.theme;
        const strokeColor = nodeTheme ? `$${nodeTheme}` : "$text";

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
        <div ref={parentRef}>{renderParentNode()}</div>
      </NodeRow>
    </NodesContainer>
  );
}
