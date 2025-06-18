import type { JSX } from "react";

import useMountSSR from "../../../hooks/useMountSSR";
import { Select, Button, useTheme } from "../../../index";
import { ISelect } from "../../../types";
import Icon from "../../Icon";

export default function ProviderToggle(): JSX.Element {
  const { setTheme, theme } = useTheme();
  const isMounted = useMountSSR();

  const options = [
    { icon: <Icon system="MoonIcon" />, iconPosition: "right", label: "Dark", value: "dark" },
    { icon: <Icon system="SunIcon" />, iconPosition: "right", label: "Light", value: "light" },
    {
      icon: <Icon system="MonitorIcon" />,
      iconPosition: "right",
      label: "System",
      value: "system",
    },
  ] as ISelect["options"];

  const currentTheme = isMounted ? theme : "system";
  const currentThemeOption = options.find((option) => option.value === currentTheme);
  const currentThemeIcon = currentThemeOption?.icon;
  const isCurrentTheme = (value: string): boolean => value === currentTheme;

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
      {currentTheme}
    </Button>
  );

  return (
    <Select
      initial={currentTheme}
      options={options}
      trigger={renderTrigger()}
      onSelection={handleSelection}
    />
  );
}
