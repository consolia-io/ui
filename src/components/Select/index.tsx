import { useEffect, useState, type JSX } from "react";

import {
  Input,
  Loading,
  Text,
  useBreakpoints,
  useEventListener,
  useOutsideClick,
  useFloatingUI,
  useWindowDimensions,
  type ISelect,
} from "../../index";
import {
  SelectStyled,
  SelectTriggerStyled,
  SelectGroupStyled,
  SelectItemStyled,
  SelectFilterStyled,
  SelectEmptyStyled,
  SelectLabelStyled,
  SelectIconStyled,
} from "./styles";

export default function Select({
  css,
  disabled,
  filter,
  height,
  initial,
  label,
  last,
  loading,
  onSelection,
  options,
  trigger,
  triggerCSS,
  width,
  wrapperCSS,
}: ISelect): JSX.Element {
  const { contentRef, handleClick, handleClose, isMounted, isOpen, triggerRef } = useFloatingUI();
  const { isPhone } = useBreakpoints();
  const { height: windowHeight } = useWindowDimensions();

  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState("");
  const [selected, setSelected] = useState<string>(initial || "");

  const shouldShowFilter = options.length > 8 || filter;
  const filteredOptions = options
    ? options.filter((option) => {
        if (search) {
          return option.label.toLowerCase().includes(search.toLowerCase());
        }

        return option;
      })
    : [];

  useEffect(() => {
    if (!isOpen) {
      setSearch("");
      setFocused("");
    } else {
      const searchInput = document.querySelector('input[name="select-filter"]') as HTMLInputElement;

      if (searchInput && filter) {
        searchInput.focus();
      }
    }
  }, [isOpen, filter]);

  useEffect(() => {
    if (initial !== undefined) {
      setSelected(initial);
    }
  }, [initial]);

  function handleSelection(value: string, label: string): void {
    setSelected(value);
    if (onSelection) {
      onSelection(value, label);
    }
    handleClose();
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (isPhone) return;

    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }

    if (!isOpen) {
      if (event.key === "Enter") {
        event.preventDefault();
        handleClick();
      }

      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index < options.length - 1) {
        setFocused(options[index + 1].value);
        const element = document.querySelector(`[data-value="${options[index + 1].value}"]`);

        element?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index > 0) {
        setFocused(options[index - 1].value);
        const element = document.querySelector(`[data-value="${options[index - 1].value}"]`);

        element?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index >= 0) {
        handleSelection(options[index].value, options[index].label);
      }
    }
  }

  function handleItemMouseOver(value: string): void {
    if (!isPhone) {
      setFocused(value);
    }
  }

  useOutsideClick(contentRef, () => handleClose());
  useEventListener("keydown", handleKeyDown);

  return (
    <SelectStyled css={wrapperCSS}>
      <SelectTriggerStyled
        ref={triggerRef}
        css={triggerCSS}
        onClick={(e): void => {
          e.stopPropagation();
          if (!disabled) {
            handleClick();
          }
        }}>
        {trigger}
      </SelectTriggerStyled>
      {isMounted && (
        <SelectGroupStyled
          ref={contentRef}
          animation={isOpen}
          css={{
            height: height || "auto",
            maxHeight: windowHeight < 700 ? "50vh" : "70vh",
            maxWidth: width || "500px",
            minWidth: width || filter ? "200px" : "125px",
            phone: {
              maxWidth: "100%",
            },
            width: width || "auto",
            ...css,
          }}>
          {label && (
            <SelectLabelStyled>
              <Text as="h6">{label}</Text>
            </SelectLabelStyled>
          )}
          {shouldShowFilter && (
            <SelectFilterStyled>
              <Input
                disabled={!options}
                name="select-filter"
                placeholder="Type to search..."
                submitValid={(): boolean => search.length > 0}
                value={search}
                onChange={(event): void => setSearch(event.target.value)}
              />
            </SelectFilterStyled>
          )}
          {loading ? (
            <Loading />
          ) : filteredOptions && filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <SelectItemStyled
                key={option.value}
                data-value={option.value}
                focused={option.value === focused && !isPhone}
                last={last && !search}
                selected={option.value === selected}
                onClick={() => handleSelection(option.value, option.label)}
                onMouseOver={() => handleItemMouseOver(option.value)}>
                {option.icon && option.iconPosition === "left" && (
                  <SelectIconStyled align="left">{option.icon}</SelectIconStyled>
                )}
                {option.label}
                {option.icon && option.iconPosition !== "left" && (
                  <SelectIconStyled align="right">{option.icon}</SelectIconStyled>
                )}
              </SelectItemStyled>
            ))
          ) : (
            <SelectEmptyStyled>No matching options</SelectEmptyStyled>
          )}
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}
