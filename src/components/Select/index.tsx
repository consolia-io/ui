import { useRef, useState } from "react";

import { Icons } from "../../icons";
import { Input, Loading, useEventListener, useOutsideClick } from "../../index";
import { ISelect } from "../../types";

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
  options,
  css,
  onSelection,
  label,
  disabled,
  selection,
  width,
  height,
  horizontal = "left",
  vertical = "bottom",
  trigger,
  loading,
  last,
  filter,
}: ISelect): JSX.Element {
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(selection ? selection[0] : "");

  function handleClose(): void {
    setIsOpen(false);
    setFocused("");
    setTimeout(() => {
      setIsMounted(false);
    }, 250);
  }

  function handleOpen(): void {
    setIsOpen(true);
    setIsMounted(true);
  }

  function handleTriggerClick(): void {
    if (isOpen || isMounted) {
      handleClose();
    } else {
      handleOpen();
    }
  }

  function handleSelection(value: string, label: string): void {
    if (onSelection) {
      onSelection(value, label);
    }
    handleClose();
  }

  const deviceWidth = typeof window !== "undefined" ? Number(window?.innerWidth || 0) : 0;

  useOutsideClick(ref, handleClose);

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
    if (isOpen && event.key === "ArrowDown") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index < options.length - 1) {
        setFocused(options[index + 1].value);
      }
    }
    if (isOpen && event.key === "ArrowUp") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index > 0) {
        setFocused(options[index - 1].value);
      }
    }
    if (isOpen && event.key === "Enter") {
      event.preventDefault();
      const index = options.findIndex((option) => option.value === focused);

      if (index >= 0) {
        handleSelection(options[index].value, options[index].label);
      }
    }
  });

  const filteredOptions = options
    ? options.filter((option) => {
        if (search) {
          return option.label.toLowerCase().includes(search.toLowerCase());
        } else {
          return option;
        }
      })
    : [];

  return (
    <SelectStyled css={css}>
      <SelectTriggerStyled
        onClickCapture={(): void => {
          if (!disabled) {
            handleTriggerClick();
          }
        }}>
        {trigger}
      </SelectTriggerStyled>
      {isMounted && (
        <SelectGroupStyled
          ref={ref}
          animation={isOpen}
          css={{
            maxHeight: height || "50rem",
            maxWidth: width || "50rem",
            minWidth: width || "15rem",
            phone: {
              maxWidth: deviceWidth ? deviceWidth * 0.8 : "80vw",
            },
            width: width || "auto",
          }}
          horizontal={horizontal}
          vertical={vertical}>
          {label && <SelectLabelStyled>{label}</SelectLabelStyled>}
          {options.length > 10 && filter && (
            <SelectFilterStyled>
              <Input
                disabled={!options}
                icon={<Icons.MagnifyingGlass />}
                reset
                resetFunction={(): void => setSearch("")}
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
                key={option.value + Math.random()}
                focused={option.value === focused}
                last={last && !search}
                selected={
                  selection && selection.find((item) => item === option.value) && focused !== option.value
                    ? true
                    : false
                }
                onClick={(): void => handleSelection(option.value, option.label)}
                onMouseOver={(): void => setFocused(option.value)}>
                {option.icon && option.iconPosition !== "right" && (
                  <SelectIconStyled align="left">{option.icon}</SelectIconStyled>
                )}
                {option.label}
                {option.icon && option.iconPosition === "right" && (
                  <SelectIconStyled align="right">{option.icon}</SelectIconStyled>
                )}
              </SelectItemStyled>
            ))
          ) : (
            <SelectEmptyStyled>No results found.</SelectEmptyStyled>
          )}
        </SelectGroupStyled>
      )}
    </SelectStyled>
  );
}
