import { JSX, useState } from "react";

import { Icons } from "../../src/icons";
import * as C from "../../src/index";
import { ITable } from "../../src/types";

// Sample data generator
const generateData = (count: number): ITable["rows"] => {
  return Array.from({ length: count }, (_, i) => ({
    cells: {
      actions: (
        <C.Stack css={{ gap: "$small", justifyContent: "flex-end" }} direction="row">
          <C.Button small theme="minimal">
            <Icons.ArrowUpRight weight="regular" />
          </C.Button>
          <C.Button small theme="minimal">
            <Icons.X weight="regular" />
          </C.Button>
        </C.Stack>
      ),
      date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
      name: `Item ${i + 1}`,
      status: Math.random() > 0.5 ? "Active" : "Inactive",
      value: Math.floor(Math.random() * 1000)
    },
    id: `row-${i + 1}`,
    ...(i % 3 === 0 && {
      subRows: [
        {
          cells: {
            details: <C.Text>Additional details for Item {i + 1}</C.Text>
          },
          id: `row-${i + 1}-sub-1`
        }
      ]
    })
  }));
};

export default function TableDemo(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  // Column definitions
  const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "status", label: "Status", sortable: true, width: "150px" },
    { key: "date", label: "Date", sortable: true, width: "150px" },
    { align: "right" as const, key: "value", label: "Value", sortable: true, width: "120px" },
    { key: "actions", label: "Actions", width: "100px" }
  ];

  // Generate sample data
  const rows = generateData(50);

  // Loading simulation
  const simulateLoading = (): void => {
    setLoading(true);
    setError(undefined);
    setTimeout(() => setLoading(false), 2000);
  };

  // Error simulation
  const simulateError = (): void => {
    setError("Failed to load data. Please try again.");
    setLoading(false);
  };

  return (
    <C.Stack css={{ gap: "$xlarge" }}>
      {/* Basic Table */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Basic Table</C.Text>
        <C.Table
          columns={columns}
          rows={rows.slice(0, 5)}
        />
      </C.Stack>

      {/* Table with Pagination */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Table with Pagination</C.Text>
        <C.Table
          columns={columns}
          kbd
          pagination
          rows={rows}
        />
      </C.Stack>

      {/* Loading State */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Loading State</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Button onClick={simulateLoading}>
            <Icons.ArrowClockwise weight="regular" />
            Simulate Loading
          </C.Button>
          <C.Table
            columns={columns}
            loading={loading}
            rows={rows.slice(0, 5)}
          />
        </C.Stack>
      </C.Stack>

      {/* Error State */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Error State</C.Text>
        <C.Stack css={{ gap: "$medium" }}>
          <C.Button onClick={simulateError}>
            <Icons.Warning weight="regular" />
            Simulate Error
          </C.Button>
          <C.Table
            columns={columns}
            error={error}
            rows={rows.slice(0, 5)}
          />
        </C.Stack>
      </C.Stack>

      {/* Expandable Rows */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Expandable Rows</C.Text>
        <C.Text as="small" bottom="medium" css={{ opacity: 0.7 }}>Every third row is expandable</C.Text>
        <C.Table
          columns={columns}
          rows={rows.slice(0, 9)}
        />
      </C.Stack>

      {/* Full-width Cell */}
      <C.Stack>
        <C.Text as="h4" bottom="medium">Full-width Cell</C.Text>
        <C.Table
          columns={columns}
          rows={[
            {
              cells: {
                notice: (
                  <C.Box css={{ backgroundColor: "$blue100", borderRadius: "$medium", padding: "$medium" }}>
                    <C.Text accent>This is a full-width cell that spans all columns</C.Text>
                  </C.Box>
                )
              },
              id: "header"
            },
            ...rows.slice(0, 3)
          ]}
        />
      </C.Stack>
    </C.Stack>
  );
} 