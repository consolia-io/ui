import { useRef, useState, type JSX } from "react";

import {
  Button,
  Logo,
  Portal,
  useEventListener,
  useOutsideClick,
  useScrollLock,
} from "../../index";
import { IMenu } from "../../types";
import Icon from "../Icon";
import {
  MenuGroupStyled,
  MenuItemStyled,
  MenuItemContentStyled,
  MenuStyled,
  MenuTriggerStyled,
  MenuContentStyled,
  MenuIconStyled,
  MenuSubItemStyled,
  MenuSubGroupStyled,
  MenuHeaderStyled,
  MenuOverlayStyled,
} from "./styles";

export default function Menu({
  children,
  css,
  initial,
  onSelection,
  options,
  trigger,
}: IMenu): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [subMenu, setSubMenu] = useState<string | null>(null);

  const animationDuration = 200;
  const isMenuOpen = isOpen || isMounted;

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, animationDuration);
  }

  function handleOpen(): void {
    setIsOpen(true);
    setIsMounted(true);
  }

  function handleClick(): void {
    if (isMenuOpen) {
      setIsOpen(false);
      setIsMounted(false);
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

  function handleItemClick(option: IMenu["options"][number]): void {
    if (option.sub) {
      setSubMenu(subMenu === option.value ? null : option.value);
    } else {
      setSubMenu(null);
      handleSelection(option.value, option.label);
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
    <MenuStyled css={css}>
      <MenuTriggerStyled
        onClick={(e): void => {
          e.stopPropagation();
          handleClick();
        }}>
        {trigger}
      </MenuTriggerStyled>

      {isMounted && (
        <Portal>
          <MenuOverlayStyled animation={isOpen}>
            <MenuGroupStyled ref={ref} animation={isOpen}>
              <MenuHeaderStyled>
                <Logo />

                <Button icon={<Icon system="XCircleIcon" />} small onClick={() => handleClose()}>
                  Close
                </Button>
              </MenuHeaderStyled>

              {options.map((option) => (
                <div key={option.value}>
                  <MenuItemStyled
                    selected={initial === option.value || subMenu === option.value}
                    onClick={() => handleItemClick(option)}>
                    <MenuItemContentStyled>
                      {option.icon && option.icon}
                      {option.label}
                    </MenuItemContentStyled>
                    {option.sub && (
                      <MenuIconStyled open={subMenu === option.value}>
                        <Icon system="CaretDownIcon" />
                      </MenuIconStyled>
                    )}
                  </MenuItemStyled>

                  {option.sub && subMenu === option.value && (
                    <MenuSubGroupStyled>
                      {option.sub.map((subOption) => (
                        <MenuSubItemStyled
                          key={subOption.value}
                          selected={initial === subOption.value}
                          onClick={() => handleSelection(subOption.value, subOption.label)}>
                          {subOption.icon && subOption.icon}
                          {subOption.label}
                        </MenuSubItemStyled>
                      ))}
                    </MenuSubGroupStyled>
                  )}
                </div>
              ))}

              {children && <MenuContentStyled>{children}</MenuContentStyled>}
            </MenuGroupStyled>
          </MenuOverlayStyled>
        </Portal>
      )}
    </MenuStyled>
  );
}
