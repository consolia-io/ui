import { JSX } from "react";

import { Icons } from "../../src/icons";
import * as C from "../../src/index";

export default function NodesDemo(): JSX.Element {
  // Badge-style nodes
  const badgeNodes = [
    {
      children: (
        <C.Badge icon={<Icons.ArrowDown weight="regular" />} theme="purple">
          Database
        </C.Badge>
      ),
      color: "purple" as const
    },
    {
      children: (
        <C.Badge icon={<Icons.ArrowRight weight="regular" />} theme="orange">
          API
        </C.Badge>
      ),
      color: "orange" as const
    },
    {
      children: (
        <C.Badge icon={<Icons.ArrowUp weight="regular" />} theme="yellow">
          Frontend
        </C.Badge>
      ),
      color: "yellow" as const
    },
    {
      children: (
        <C.Badge icon={<Icons.ArrowLeft weight="regular" />} theme="blue">
          Analytics
        </C.Badge>
      ),
      color: "blue" as const
    }
  ];

  // Box-style nodes
  const boxNodes = [
    {
      children: (
        <C.Box css={{ alignItems: "center", display: "flex", gap: "$small" }} small theme="purple">
          <Icons.Database weight="regular" />
          Storage
        </C.Box>
      ),
      color: "purple" as const
    },
    {
      children: (
        <C.Box css={{ alignItems: "center", display: "flex", gap: "$small" }} small theme="orange">
          <Icons.ArrowClockwise weight="regular" />
          Network
        </C.Box>
      ),
      color: "orange" as const
    },
    {
      children: (
        <C.Box css={{ alignItems: "center", display: "flex", gap: "$small" }} small theme="blue">
          <Icons.Monitor weight="regular" />
          Monitor
        </C.Box>
      ),
      color: "blue" as const
    }
  ];

  // Custom styled nodes
  const customNodes = [
    {
              children: (
          <C.Stack css={{ 
            alignItems: "center", 
            backgroundColor: "$purple", 
            borderRadius: "$medium",
            color: "white",
            gap: "$smaller", 
            padding: "$small $medium" 
          }}>
            <Icons.CheckCircle weight="fill" />
            <C.Text as="small" css={{ color: "white" }}>Security</C.Text>
          </C.Stack>
        ),
    },
    {
              children: (
          <C.Stack css={{ 
            alignItems: "center", 
            backgroundColor: "$yellow", 
            borderRadius: "$medium",
            color: "$text",
            gap: "$smaller", 
            padding: "$small $medium" 
          }}>
            <Icons.ArrowUp weight="fill" />
            <C.Text as="small">Performance</C.Text>
          </C.Stack>
        ),
    }
  ];

  // Parent node examples
  const badgeParent = (
    <C.Badge icon={<Icons.ArrowsOutSimple weight="regular" />} theme="default">
      System
    </C.Badge>
  );

  const boxParent = (
    <C.Box css={{ alignItems: "center", display: "flex", gap: "$small" }} theme="blue">
      <Icons.ArrowsOutSimple weight="bold" />
      <C.Stack css={{ gap: "$smaller", textAlign: "center" }}>
        <C.Text as="strong" css={{ color: "white" }}>Main System</C.Text>
        <C.Text as="small" css={{ color: "white", opacity: 0.8 }}>v2.1.0</C.Text>
      </C.Stack>
    </C.Box>
  );

  const customParent = (
    <C.Badge css={{ padding: "$medium" }} theme="purple">
      <C.Stack css={{ alignItems: "center", gap: "$small" }} direction="row">
        <Icons.CheckCircle weight="fill" />
        Premium Service
      </C.Stack>
    </C.Badge>
  );

  const complexParent = (
    <C.Stack css={{ alignItems: "center", gap: "$small", textAlign: "center" }}>
      <C.Stack css={{ gap: "$smaller" }}>
        <C.Text as="strong">John Doe</C.Text>
        <C.Text as="small">System Administrator</C.Text>
        <C.Badge small theme="orange">Online</C.Badge>
      </C.Stack>
    </C.Stack>
  );

  return (
    <C.Stack css={{ gap: "$xlarge" }}>
      {/* Badge Nodes */}
      <C.Stack>
        <C.Text as="h4">Badge Nodes</C.Text>
        <C.Text as="small" bottom="medium">Using Badge components as node children</C.Text>
        <C.Nodes
          height={400}
          nodes={badgeNodes}
          parent={badgeParent}
        />
      </C.Stack>

      {/* Box Nodes */}
      <C.Stack>
        <C.Text as="h4">Box Nodes</C.Text>
        <C.Text as="small" bottom="medium">Using Box components as node children</C.Text>
        <C.Nodes
          height={400}
          nodes={boxNodes}
          parent={boxParent}
        />
      </C.Stack>

      {/* Custom Styled Nodes */}
      <C.Stack>
        <C.Text as="h4">Custom Styled Nodes</C.Text>
        <C.Text as="small" bottom="medium">Using custom Stack components with inline styling</C.Text>
        <C.Nodes
          height={350}
          nodes={customNodes}
          parent={customParent}
        />
      </C.Stack>

      {/* Complex Parent */}
      <C.Stack>
        <C.Text as="h4">Complex Parent Example</C.Text>
        <C.Text as="small" bottom="medium">Parent with multiple text elements and status badge</C.Text>
        <C.Nodes
          height={400}
          nodes={badgeNodes.slice(0, 3)}
          parent={complexParent}
        />
      </C.Stack>

      {/* Mixed Node Types Comparison */}
      <C.Stack>
        <C.Text as="h4">Mixed Node Types</C.Text>
        <C.Text as="small" bottom="medium">Comparison of different node styling approaches</C.Text>
        <C.Stack css={{ 
          display: "grid", 
          gap: "$large", 
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))" 
        }}>
          <C.Stack>
            <C.Text as="small" bottom="small">Badge Style</C.Text>
            <C.Nodes
              height={250}
              nodes={badgeNodes.slice(0, 2)}
                              parent={
                  <C.Badge icon={<Icons.Funnel weight="regular" />} theme="default">
                    Control Panel
                  </C.Badge>
                }
            />
          </C.Stack>
          
          <C.Stack>
            <C.Text as="small" bottom="small">Box Style</C.Text>
            <C.Nodes
              height={250}
              nodes={boxNodes.slice(0, 2)}
                              parent={
                  <C.Box css={{ alignItems: "center", display: "flex", gap: "$small" }} small theme="minimal">
                    <Icons.Monitor weight="fill" />
                    Dashboard
                  </C.Box>
                }
            />
          </C.Stack>
          
          <C.Stack>
            <C.Text as="small" bottom="small">Custom Style</C.Text>
            <C.Nodes
              height={250}
              nodes={customNodes}
              parent={
                <C.Box css={{ 
                  border: "2px dashed $purple", 
                  borderRadius: "$medium",
                  padding: "$small"
                }} theme="minimal">
                  <C.Stack css={{ alignItems: "center", gap: "$smaller" }}>
                    <Icons.Database weight="fill" />
                    <C.Text as="small">Custom Node</C.Text>
                  </C.Stack>
                </C.Box>
              }
            />
          </C.Stack>
        </C.Stack>
      </C.Stack>
    </C.Stack>
  );
} 