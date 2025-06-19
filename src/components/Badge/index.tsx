import { useState, type JSX } from "react";
import { toast } from "react-hot-toast";

import { Loading, Icon, type IBadge } from "../../index";
import { BadgeIconStyled, BadgeStyled, BadgeLoadingStyled } from "./styles";

export default function Badge({
  block,
  children,
  closable,
  copy,
  css,
  icon,
  iconPosition,
  inline,
  link,
  loading,
  onClick,
  small,
  theme = "default",
  variant = "border",
}: IBadge): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 150);
  }

  function handleCopy(): void {
    if (copy) {
      navigator.clipboard.writeText(copy.toString());
      toast("Copied to clipboard");
    } else {
      toast("Nothing to copy");
    }
  }

  if (!isMounted) return null;

  return (
    <BadgeStyled
      animation={!isOpen}
      block={block}
      css={{
        ...(inline && {
          display: "inline-flex",
          marginRight: inline === "auto" ? "auto" : `$${inline}`,
          verticalAlign: "middle",
        }),
        ...css,
      }}
      link={link || !!onClick || !!copy}
      loading={loading}
      small={small}
      theme={theme}
      variant={variant}
      onClick={copy ? handleCopy : onClick}>
      {loading && (
        <BadgeLoadingStyled>
          <Loading />
        </BadgeLoadingStyled>
      )}

      {icon && iconPosition !== "right" && !copy && (
        <BadgeIconStyled align={small ? "smallLeft" : "left"}>{icon}</BadgeIconStyled>
      )}

      {copy && (
        <BadgeIconStyled align={small ? "smallLeft" : "left"} hover>
          <Icon system="ClipboardTextIcon" />
        </BadgeIconStyled>
      )}

      {children}

      {icon && iconPosition === "right" && !closable && !copy && (
        <BadgeIconStyled align={small ? "smallRight" : "right"}>{icon}</BadgeIconStyled>
      )}

      {closable && (
        <BadgeIconStyled
          align={small ? "smallRight" : "right"}
          hover
          onClick={(e): void => {
            e.stopPropagation();
            handleClose();
          }}>
          <Icon system="XCircleIcon" />
        </BadgeIconStyled>
      )}
    </BadgeStyled>
  );
}
