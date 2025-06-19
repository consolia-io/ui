import { useRef, useState, type JSX } from "react";

import {
  Button,
  Text,
  useEventListener,
  useOutsideClick,
  useScrollLock,
  Icon,
  Portal,
  type IDrawer,
} from "../../index";
import {
  DialogContentStyled,
  DialogCoreStyled,
  DialogHeaderStyled,
  DialogOverlayStyled,
  DialogStyled,
  DialogTriggerStyled,
} from "./styles";

export default function Drawer({
  children,
  css,
  disabled,
  forceHeight,
  portal = true,
  title,
  trigger,
  triggerCSS,
  wrapperCSS,
}: IDrawer): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 200);
  }

  function handleOpen(): void {
    setIsOpen(true);
    setIsMounted(true);
  }

  function handleClick(): void {
    if (isOpen || isMounted) {
      setIsOpen(false);
      setIsMounted(false);
    } else {
      handleOpen();
    }
  }

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      handleClose();
    }
  });

  useScrollLock(isMounted);

  useOutsideClick(ref, () => {
    if (isOpen) {
      handleClose();
    }
  });

  return (
    <DialogStyled css={wrapperCSS}>
      {trigger ? (
        <DialogTriggerStyled
          css={triggerCSS}
          onClick={(e): void => {
            e.stopPropagation();
            if (!disabled) {
              handleClick();
            }
          }}>
          {trigger}
        </DialogTriggerStyled>
      ) : (
        "Missing trigger"
      )}

      {isMounted && (
        <Portal disabled={!portal}>
          <DialogOverlayStyled animation={isOpen}>
            <DialogCoreStyled
              ref={ref}
              animation={isOpen}
              css={{
                ...css,
                ...(forceHeight && {
                  maxHeight: `${forceHeight}vh`,
                  minHeight: `${forceHeight}vh`,
                }),
              }}>
              <DialogHeaderStyled>
                <Text as="h4">{title}</Text>
                <Button icon={<Icon system="XCircleIcon" />} small onClick={() => handleClose()}>
                  Close
                </Button>
              </DialogHeaderStyled>

              <DialogContentStyled>{children}</DialogContentStyled>
            </DialogCoreStyled>
          </DialogOverlayStyled>
        </Portal>
      )}
    </DialogStyled>
  );
}
