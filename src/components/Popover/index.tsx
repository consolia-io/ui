import type { JSX, MouseEvent } from "react";

import { useEventListener, useOutsideClick, useFloatingUI } from "../../index";
import { IPopover } from "../../types";
import { PopoverStyled, PopoverContentStyled, PopoverTriggerStyled } from "./styles";

export default function Popover({
  children,
  css,
  disabled,
  minimal = false,
  small = false,
  trigger,
  triggerCSS,
  wrapperCSS,
}: IPopover): JSX.Element {
  const { contentRef, handleClick, handleClose, isMounted, isOpen, triggerRef } = useFloatingUI();

  function handleKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  }

  function handleTriggerClick(e: MouseEvent): void {
    e.stopPropagation();
    if (!disabled) {
      handleClick();
    }
  }

  useOutsideClick(contentRef, () => handleClose());
  useEventListener("keydown", handleKeyDown);

  return (
    <PopoverStyled css={wrapperCSS}>
      <PopoverTriggerStyled
        ref={triggerRef}
        css={triggerCSS}
        onClick={(e) => handleTriggerClick(e)}>
        {trigger}
      </PopoverTriggerStyled>

      {isMounted && (
        <PopoverContentStyled
          ref={contentRef}
          animation={isOpen}
          css={css}
          minimal={minimal}
          small={small}>
          {children}
        </PopoverContentStyled>
      )}
    </PopoverStyled>
  );
}
