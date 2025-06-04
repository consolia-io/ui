import { useEffect, useState, type JSX } from "react";
import toast from "react-hot-toast";

import { Icons } from "../../../icons";
import {
  Input,
  Loading,
  Text,
  useBreakpoints,
  useEventListener,
  useOutsideClick,
  useFloatingUI,
  useWindowDimensions,
} from "../../../index";
import { ISelectMulti } from "../../../types";
import {
  SelectStyled,
  SelectTriggerStyled,
  SelectGroupStyled,
  SelectItemStyled,
  SelectFilterStyled,
  SelectEmptyStyled,
  SelectLabelStyled,
  SelectIconStyled,
} from "../styles";

export default function SelectMulti({
  css,
  disabled,
  filter,
  height,
  initial,
  label,
  limit,
  loading,
  onSelection,
  options,
  reset = true,
  trigger,
  triggerCSS,
  width,
  wrapperCSS,
}: ISelectMulti): JSX.Element {
  const { contentRef, handleClick, handleClose, isMounted, isOpen, triggerRef } = useFloatingUI();
  const { isPhone } = useBreakpoints();
  const { height: windowHeight } = useWindowDimensions();

  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState("");
  const [selected, setSelected] = useState<Array<{ label: string; value: string }>>(initial || []);

  const shouldShowFilter = options.length > 10 && filter;
  const hasSelections = selected.length > 0;
  const canReset = reset && hasSelections;
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
    }
  }, [isOpen]);

  function handleSelection(option: { label: string; value: string }): void {
    const selectionIndex = selected.findIndex((item) => item.value === option.value);
    let newSelectedItems;

    if (selectionIndex === -1) {
      if (!limit || selected.length < limit) {
        newSelectedItems = [...selected, option];
        setSelected(newSelectedItems);
        if (onSelection) {
          onSelection(newSelectedItems);
        }
      } else {
        toast(`Maximum selections reached (${limit}).`);
      }
    } else {
      newSelectedItems = [
        ...selected.slice(0, selectionIndex),
        ...selected.slice(selectionIndex + 1),
      ];
      setSelected(newSelectedItems);
      if (onSelection) {
        onSelection(newSelectedItems);
      }
    }
  }

  function handleReset(): void {
    setSelected([]);
    if (onSelection) {
      onSelection([]);
    }
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (isPhone) return;

    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }

    if (!isOpen) {
      if (event.key === "Enter" || event.key === " ") {
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
        handleSelection(options[index]);
      }
    }
  }

  function handleItemMouseOver(value: string): void {
    if (!isPhone) {
      setFocused(value);
    }
  }

  function handleResetMouseOver(): void {
    if (!isPhone) {
      setFocused("");
    }
  }

  function isOptionSelected(optionValue: string): boolean {
    return selected.findIndex((item) => item.value === optionValue) !== -1;
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
            maxWidth: width || "50rem",
            minWidth: width || filter ? "20rem" : "12.5rem",
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
                name="select-multi-filter"
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
                selected={isOptionSelected(option.value)}
                onClick={() => handleSelection(option)}
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
          {canReset && (
            <SelectItemStyled
              key="reset"
              last
              onClick={() => handleReset()}
              onMouseOver={() => handleResetMouseOver()}>
              Reset
              <SelectIconStyled align="right">
                <Icons.X />
              </SelectIconStyled>
            </SelectItemStyled>
          )}
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}
