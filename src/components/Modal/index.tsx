import { useRef, useState, type JSX, type MouseEvent } from "react";

import {
  Button,
  useEventListener,
  useOutsideClick,
  useScrollLock,
  Icon,
  Portal,
  type IModal,
} from "../../index";
import {
  ModalOverlayStyled,
  ModalGroupStyled,
  ModalHeaderStyled,
  ModalContentStyled,
  ModalStyled,
  ModalTriggerStyled,
} from "./styles";

export default function Modal({
  children,
  close,
  css,
  disabled,
  forceHeight,
  portal = true,
  small,
  title,
  trigger,
  triggerCSS,
  wrapperCSS,
}: IModal): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const animationDuration = 200;
  const isModalOpen = isOpen || isMounted;

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, animationDuration);

    if (close) {
      close();
    }
  }

  function handleOpen(): void {
    setIsOpen(true);
    setIsMounted(true);
  }

  function handleClick(): void {
    if (disabled) return;

    if (isModalOpen) {
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
  useOutsideClick(ref, () => handleClose());

  return (
    <ModalStyled css={wrapperCSS}>
      <ModalTriggerStyled
        css={triggerCSS}
        onClick={(e: MouseEvent): void => {
          e.stopPropagation();
          handleClick();
        }}>
        {trigger}
      </ModalTriggerStyled>

      {isMounted && (
        <Portal disabled={!portal}>
          <ModalOverlayStyled animation={isOpen}>
            <ModalGroupStyled
              ref={ref}
              animation={isOpen}
              css={{
                ...(forceHeight && { height: `${forceHeight}vh` }),
                ...css,
              }}
              small={small}>
              <ModalHeaderStyled>
                <span>{title}</span>
                <Button
                  icon={<Icon system="XCircleIcon" />}
                  small
                  theme="minimal"
                  onClick={() => handleClose()}>
                  Close
                </Button>
              </ModalHeaderStyled>

              <ModalContentStyled>{children}</ModalContentStyled>
            </ModalGroupStyled>
          </ModalOverlayStyled>
        </Portal>
      )}
    </ModalStyled>
  );
}
