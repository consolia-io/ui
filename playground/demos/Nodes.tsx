import { JSX } from "react";

import { Icons } from "../../src/icons";
import * as C from "../../src/index";

export default function NodesDemo(): JSX.Element {
  const nodes = [
    {
      icon: <Icons.ArrowDown weight="regular" />,
      name: "Database",
      theme: "purple" as const
    },
    {
      icon: <Icons.ArrowRight weight="regular" />,
      name: "API",
      theme: "orange" as const
    },
    {
      icon: <Icons.ArrowUp weight="regular" />,
      name: "Frontend",
      theme: "yellow" as const
    },
    {
      icon: <Icons.ArrowLeft weight="regular" />,
      name: "Analytics",
      theme: "blue" as const
    }
  ];

  const parent = {
    icon: <Icons.ArrowsOutSimple weight="regular" />,
    name: "System"
  };

  const customParentContent = (
    <C.Box theme="blue" small css={{ display: "flex", alignItems: "center", gap: "$small" }}>
      <Icons.ArrowsOutSimple weight="bold" />
      <C.Stack css={{ textAlign: "center", gap: "$smaller" }}>
        <C.Text as="strong" css={{ color: "white" }}>Main System</C.Text>
        <C.Text as="small" css={{ color: "white", opacity: 0.8 }}>v2.1.0</C.Text>
      </C.Stack>
    </C.Box>
  );

  const badgeParent = (
    <C.Badge theme="purple" css={{ padding: "$medium" }}>
      <C.Stack direction="row" css={{ alignItems: "center", gap: "$small" }}>
        <Icons.CheckCircle weight="fill" />
        Premium Service
      </C.Stack>
    </C.Badge>
  );

  const complexParent = (
    <C.Stack css={{ alignItems: "center", gap: "$small", textAlign: "center" }}>
      <C.Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        alt="System Admin"
        fallback="SA"
        width={40}
      />
      <C.Stack css={{ gap: "$smaller" }}>
        <C.Text as="strong">John Doe</C.Text>
        <C.Text as="small">System Administrator</C.Text>
        <C.Badge small theme="orange">Online</C.Badge>
      </C.Stack>
    </C.Stack>
  );

  return (
    <C.Stack css={{ gap: "$xlarge" }}>
      {/* Default Badge Type */}
      <C.Stack>
        <C.Text as="h4">Default Badge Type</C.Text>
        <C.Nodes
          nodes={nodes}
          parent={parent}
          height={400}
        />
      </C.Stack>

      {/* Card Type */}
      <C.Stack>
        <C.Text as="h4">Card Type</C.Text>
        <C.Nodes
          nodes={nodes}
          parent={parent}
          height={400}
          type="card"
        />
      </C.Stack>

      {/* ReactNode Parent - Custom Box */}
      <C.Stack>
        <C.Text as="h4">ReactNode Parent - Custom Box</C.Text>
        <C.Text as="small" bottom="medium">ReactNode parent rendered directly with full styling control</C.Text>
        <C.Nodes
          nodes={nodes.slice(0, 3)}
          parent={customParentContent}
          height={400}
        />
      </C.Stack>

      {/* ReactNode Parent - Custom Badge */}
      <C.Stack>
        <C.Text as="h4">ReactNode Parent - Custom Badge</C.Text>
        <C.Text as="small" bottom="medium">Using a custom Badge with enhanced styling</C.Text>
        <C.Nodes
          nodes={nodes.slice(0, 2)}
          parent={badgeParent}
          height={350}
        />
      </C.Stack>

      {/* ReactNode Parent - Complex Content */}
      <C.Stack>
        <C.Text as="h4">ReactNode Parent - Complex Content</C.Text>
        <C.Text as="small" bottom="medium">Complex parent with Avatar, text, and status badge</C.Text>
        <C.Nodes
          nodes={nodes.slice(0, 3)}
          parent={complexParent}
          height={400}
        />
      </C.Stack>

      {/* Custom Height Comparison */}
      <C.Stack>
        <C.Text as="h4">Comparison - Badge vs Card vs ReactNode</C.Text>
        <C.Stack css={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "$large" 
        }}>
          <C.Stack>
            <C.Text as="small" bottom="small">Badge Type</C.Text>
            <C.Nodes
              height={250}
              nodes={nodes.slice(0, 2)}
              parent={parent}
              type="badge"
            />
          </C.Stack>
          
          <C.Stack>
            <C.Text as="small" bottom="small">Card Type</C.Text>
            <C.Nodes
              height={250}
              nodes={nodes.slice(0, 2)}
              parent={parent}
              type="card"
            />
          </C.Stack>
          
          <C.Stack>
            <C.Text as="small" bottom="small">ReactNode Type</C.Text>
            <C.Nodes
              height={250}
              nodes={nodes.slice(0, 2)}
              parent={
                <C.Box theme="minimal" css={{ 
                  border: "2px dashed $purple", 
                  padding: "$small",
                  borderRadius: "$medium"
                }}>
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