import type { JSX } from "react";

import { Icons } from "../../../icons";
import { Select, Button, useTheme } from "../../../index";
import { ISelect } from "../../../types";

export default function ProviderToggle(): JSX.Element {
  const { setTheme, theme } = useTheme();

  const options = [
    { icon: <Icons.Moon />, iconPosition: "right", label: "Dark", value: "dark" },
    { icon: <Icons.Sun />, iconPosition: "right", label: "Light", value: "light" },
    { icon: <Icons.Monitor />, iconPosition: "right", label: "System", value: "system" },
  ] as ISelect["options"];

  const currentThemeOption = options.find((option) => option.value === theme);
  const currentThemeIcon = currentThemeOption?.icon;
  const isCurrentTheme = (value: string): boolean => value === theme;

  const handleSelection = (value: string): void => {
    if (isCurrentTheme(value)) {
      return;
    }
    setTheme(value as "dark" | "light" | "system");
  };

  const renderTrigger = (): JSX.Element => (
    <Button
      css={{
        textTransform: "capitalize",
      }}
      icon={currentThemeIcon}
      small>
      {theme}
    </Button>
  );

  return (
    <Select
      initial={theme}
      options={options}
      trigger={renderTrigger()}
      onSelection={handleSelection}
    />
  );
}
