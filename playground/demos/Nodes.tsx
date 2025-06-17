import { JSX } from "react";

import * as C from "../../src/index";

export default function NodesDemo(): JSX.Element {
  const simpleNodes = [
    {
      children: <C.Badge theme="purple">Database</C.Badge>,
      color: "purple" as const
    },
    {
      children: <C.Badge theme="orange">API</C.Badge>,
      color: "orange" as const
    },
    {
      children: <C.Badge theme="blue">Frontend</C.Badge>,
      color: "blue" as const
    }
  ];

  const iconNodes = [
    {
      children: (
        <C.Badge icon={<C.Icon system="CheckCircleIcon" />} theme="purple">
          Security
        </C.Badge>
      ),
      color: "purple" as const
    },
    {
      children: (
        <C.Badge icon={<C.Icon system="ArrowRightIcon" />} theme="yellow">
          Network
        </C.Badge>
      ),
      color: "yellow" as const
    }
  ];

  const boxNodes = [
    {
      children: (
        <C.Box small theme="blue">
          <C.Text>Monitor</C.Text>
        </C.Box>
      ),
      color: "blue" as const
    },
    {
      children: (
        <C.Box small theme="orange">
          <C.Text>Storage</C.Text>
        </C.Box>
      ),
      color: "orange" as const
    }
  ];

  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(3, 1fr)" 
    }}>
      {/* Basic Usage */}
      <C.Box header={
        <C.Text as="h4">Basic Usage</C.Text>
      }>
        <C.Nodes
          height={200}
          nodes={simpleNodes}
          parent={<C.Badge theme="default">System</C.Badge>}
        />
      </C.Box>

      {/* With Icons */}
      <C.Box header={
        <C.Text as="h4">With Icons</C.Text>
      }>
        <C.Nodes
          height={200}
          nodes={iconNodes}
          parent={
            <C.Badge icon={<C.Icon system="ArrowsOutSimpleIcon" />} theme="default">
              Control
            </C.Badge>
          }
        />
      </C.Box>

      {/* Box Nodes */}
      <C.Box header={
        <C.Text as="h4">Box Nodes</C.Text>
      }>
        <C.Nodes
          height={200}
          nodes={boxNodes}
          parent={
            <C.Box theme="minimal">
              <C.Text>Main Hub</C.Text>
            </C.Box>
          }
        />
      </C.Box>

      {/* Different Heights */}
      <C.Box header={
        <C.Text as="h4">Custom Height</C.Text>
      }>
        <C.Nodes
          height={150}
          nodes={simpleNodes.slice(0, 2)}
          parent={<C.Badge theme="blue">Compact</C.Badge>}
        />
      </C.Box>

      {/* Color Variety */}
      <C.Box header={
        <C.Text as="h4">Color Variety</C.Text>
      }>
        <C.Nodes
          height={200}
          nodes={[
            {
              children: <C.Badge theme="purple">Purple</C.Badge>,
              color: "purple" as const
            },
            {
              children: <C.Badge theme="orange">Orange</C.Badge>,
              color: "orange" as const
            },
            {
              children: <C.Badge theme="yellow">Yellow</C.Badge>,
              color: "yellow" as const
            },
            {
              children: <C.Badge theme="blue">Blue</C.Badge>,
              color: "blue" as const
            }
          ]}
          parent={<C.Badge theme="default">Colors</C.Badge>}
        />
      </C.Box>

      {/* Complex Parent */}
      <C.Box header={
        <C.Text as="h4">Complex Parent</C.Text>
      }>
        <C.Nodes
          height={200}
          nodes={simpleNodes.slice(0, 2)}
          parent={
            <C.Stack>
              <C.Text as="strong">Admin Panel</C.Text>
              <C.Badge small theme="orange">v2.1</C.Badge>
            </C.Stack>
          }
        />
      </C.Box>
    </C.Stack>
  );
} 