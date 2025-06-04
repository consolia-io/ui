import { JSX, useState } from "react";

import { Icons } from "../../src/icons";
import * as C from "../../src/index";

export default function SelectDemo(): JSX.Element {
  const [singleValue, setSingleValue] = useState<string>();
  const [multiValue, setMultiValue] = useState<Array<{ label: string; value: string }>>([]);
  const [filteredValue, setFilteredValue] = useState<string>();
  const [limitedMultiValue, setLimitedMultiValue] = useState<Array<{ label: string; value: string }>>([]);

  // Common options for demos
  const options = [
    {
      icon: <Icons.ArrowRight weight="regular" />,
      iconPosition: "left" as const,
      label: "Option 1",
      value: "option1"
    },
    {
      icon: <Icons.ArrowDown weight="regular" />,
      iconPosition: "left" as const,
      label: "Option 2",
      value: "option2"
    },
    {
      icon: <Icons.ArrowUp weight="regular" />,
      iconPosition: "left" as const,
      label: "Option 3",
      value: "option3"
    },
    {
      icon: <Icons.ArrowLeft weight="regular" />,
      iconPosition: "left" as const,
      label: "Option 4",
      value: "option4"
    },
    {
      icon: <Icons.CheckCircle weight="regular" />,
      iconPosition: "left" as const,
      label: "Option 5",
      value: "option5"
    }
  ];

  // Extended options for filterable select
  const manyOptions = Array.from({ length: 15 }, (_, i) => ({
    icon: <Icons.ArrowRight weight="regular" />,
    iconPosition: "right" as const,
    label: `Option ${i + 1}`,
    value: `option${i + 1}`
  }));

  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(2, 1fr)" 
    }}>
      {/* Basic Select */}
      <C.Stack>
        <C.Text as="h4">Basic Select</C.Text>
        <C.Select
          label="Basic Selection"
          options={options}
          trigger={
            <C.Button>
              <Icons.ArrowDown weight="regular" />
              {singleValue ? options.find(o => o.value === singleValue)?.label : "Select an option"}
            </C.Button>
          }
          onSelection={(value) => setSingleValue(value)}
        />
        <C.Text accent>
          Selected: {singleValue || "None"}
        </C.Text>
      </C.Stack>

      {/* Multi Select */}
      <C.Stack>
        <C.Text as="h4">Multi Select</C.Text>
        <C.SelectMulti
          label="Multiple Selection"
          options={options}
          trigger={
            <C.Button>
              <Icons.ArrowsOutSimple weight="regular" />
              Select multiple ({multiValue.length})
            </C.Button>
          }
          onSelection={(values) => setMultiValue(values)}
        />
        <C.Text accent>
          Selected: {multiValue.length ? multiValue.map(v => v.label).join(", ") : "None"}
        </C.Text>
      </C.Stack>

      {/* Filterable Select */}
      <C.Stack>
        <C.Text as="h4">Filterable Select</C.Text>
        <C.Select
          filter
          label="Search and Select"
          options={manyOptions}
          trigger={
            <C.Button>
              <Icons.Info weight="regular" />
              {filteredValue ? manyOptions.find(o => o.value === filteredValue)?.label : "Search options"}
            </C.Button>
          }
          onSelection={(value) => setFilteredValue(value)}
        />
        <C.Text accent>
          Selected: {filteredValue || "None"}
        </C.Text>
      </C.Stack>

      {/* Limited Multi Select */}
      <C.Stack>
        <C.Text as="h4">Limited Multi Select</C.Text>
        <C.SelectMulti
          filter
          label="Max 3 Selections"
          limit={3}
          options={manyOptions}
          trigger={
            <C.Button>
              <Icons.Info weight="regular" />
              Limited select ({limitedMultiValue.length}/3)
            </C.Button>
          }
          onSelection={(values) => setLimitedMultiValue(values)}
        />
        <C.Text accent>
          Selected: {limitedMultiValue.length ? limitedMultiValue.map(v => v.label).join(", ") : "None"}
        </C.Text>
      </C.Stack>

      {/* Disabled Select */}
      <C.Stack>
        <C.Text as="h4">Disabled Select</C.Text>
        <C.Select
          disabled
          label="Disabled Selection"
          options={options}
          trigger={
            <C.Button disabled>
              <Icons.X weight="regular" />
              Cannot select
            </C.Button>
          }
        />
      </C.Stack>

      {/* Multi Select with Reset Disabled */}
      <C.Stack>
        <C.Text as="h4">Multi Select (No Reset)</C.Text>
        <C.SelectMulti
          label="No Reset Option"
          options={options.slice(0, 3)}
          reset={false}
          trigger={
            <C.Button>
              <Icons.X weight="regular" />
              No reset ({multiValue.length})
            </C.Button>
          }
          onSelection={(values) => setMultiValue(values)}
        />
        <C.Text accent>
          Note: Reset button is disabled for this example
        </C.Text>
      </C.Stack>
    </C.Stack>
  );
} 