import { useState, type JSX } from "react";

import { ITabs } from "../../types";
import { TabStyled, TabsStyled } from "./styles";

export default function Tabs({ css, initial, onSelection, options, small }: ITabs): JSX.Element {
  const [selected, setSelected] = useState<string>(initial || options[0].value);

  const hasOptions = options && options.length > 0;

  function handleSelection(value: string): void {
    setSelected(value);
    if (onSelection) {
      onSelection(value);
    }
  }

  function handleTabClick(value: string): () => void {
    return () => handleSelection(value);
  }

  if (!hasOptions) {
    return <TabsStyled />;
  }

  return (
    <TabsStyled css={css}>
      {options.map((option) => (
        <TabStyled
          key={option.value}
          icon={option.icon}
          selected={selected === option.value}
          small={small}
          onClick={handleTabClick(option.value)}>
          {option.label}
        </TabStyled>
      ))}
    </TabsStyled>
  );
}
