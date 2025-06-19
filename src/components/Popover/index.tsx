import type { JSX, MouseEvent } from "react";

import {
  useEventListener,
  useOutsideClick,
  useFloatingUI,
  useWindowDimensions,
  type IPopover,
} from "../../index";
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
  const { height: windowHeight } = useWindowDimensions();

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
          css={{
            maxHeight: windowHeight < 700 ? "50vh" : "70vh",
            width: "auto",
            ...css,
          }}
          minimal={minimal}
          small={small}>
          {children}
        </PopoverContentStyled>
      )}
    </PopoverStyled>
  );
}
