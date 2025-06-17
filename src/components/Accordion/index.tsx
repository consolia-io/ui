import { useState, useRef, type JSX } from "react";

import { IAccordion } from "../../types";
import Icon from "../Icon";
import Stack from "../Stack";
import Text from "../Text";
import {
  AccordionStyled,
  AccordionItemStyled,
  AccordionButtonStyled,
  AccordionCardStyled,
  AccordionGridContentStyled,
  AccordionListContentStyled,
} from "./styles";

export default function Accordion({
  allowMultiple = false,
  initial,
  mode = "list",
  onToggle,
  options,
}: IAccordion): JSX.Element {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(initial ? [initial] : []));
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const hasOptions = options && options.length > 0;

  function handleToggle(value: string): void {
    const isOpen = openItems.has(value);

    if (allowMultiple) {
      const newOpenItems = new Set(openItems);

      if (isOpen) {
        newOpenItems.delete(value);
      } else {
        newOpenItems.add(value);
      }
      setOpenItems(newOpenItems);
    } else {
      setOpenItems(isOpen ? new Set() : new Set([value]));
    }

    if (!isOpen) {
      setTimeout(() => {
        const contentElement = contentRefs.current[value];

        if (contentElement) {
          contentElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          window.scrollBy(0, -40);
        }
      }, 100);
    }

    if (onToggle) {
      onToggle(value, !isOpen);
    }
  }

  function handleItemClick(value: string): () => void {
    return () => handleToggle(value);
  }

  if (!hasOptions) {
    return <AccordionStyled mode={mode} />;
  }

  if (mode === "grid") {
    // Grid mode: show items in a grid, use AccordionCardStyled as trigger, allow open/close
    return (
      <AccordionStyled mode="grid">
        {options.map((option) => {
          const isOpen = openItems.has(option.value);

          return (
            <AccordionItemStyled key={option.value}>
              <AccordionCardStyled
                header={
                  <Stack
                    alignItems="center"
                    css={{
                      borderBottom: isOpen ? "1px solid $borderLight" : "1px solid transparent",
                      padding: !isOpen ? "$medium" : "$small $medium",
                      transition: "$default",
                    }}
                    direction="row"
                    inline
                    justify="space-between">
                    <Text as="h6">{option.label}</Text>
                    <Icon system={isOpen ? "ArrowDownIcon" : "ArrowRightIcon"} />
                  </Stack>
                }
                minimal
                onClick={handleItemClick(option.value)}>
                <AccordionGridContentStyled expanded={isOpen}>
                  {isOpen ? option.children : null}
                </AccordionGridContentStyled>
              </AccordionCardStyled>
            </AccordionItemStyled>
          );
        })}
      </AccordionStyled>
    );
  }

  return (
    <AccordionStyled mode="list">
      {options.map((option) => {
        const isOpen = openItems.has(option.value);

        return (
          <AccordionItemStyled key={option.value}>
            <AccordionButtonStyled
              expanded={isOpen}
              icon={isOpen ? <Icon system="ArrowDownIcon" /> : <Icon system="ArrowRightIcon" />}
              iconPosition="right"
              large={option.large}
              onClick={handleItemClick(option.value)}>
              {option.label}
            </AccordionButtonStyled>
            <AccordionListContentStyled
              ref={(el: HTMLDivElement | null) => {
                contentRefs.current[option.value] = el;
              }}
              expanded={isOpen}>
              <div>{option.children}</div>
            </AccordionListContentStyled>
          </AccordionItemStyled>
        );
      })}
    </AccordionStyled>
  );
}
