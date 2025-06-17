import dayjs from "dayjs";
import { useEffect, useState, useMemo, type JSX } from "react";

import { Stack, Text, Button } from "../../../index";
import { ICalendarMonths } from "../../../types";
import Icon from "../../Icon";
import {
  CalendarContentStyled,
  CalendarHeaderNavigationStyled,
  CalendarGridStyled,
  CalendarHeaderStyled,
  CalendarStyled,
  CalendarMonthStyled,
} from "../styles";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function CalendarMonths({
  maxDate,
  minDate,
  onSelection,
  selectedDate,
  viewDate,
}: ICalendarMonths): JSX.Element {
  const initialViewDate = viewDate || selectedDate || dayjs().startOf("month").format("YYYY-MM-DD");

  const [values, setValues] = useState({
    maxDate,
    minDate,
    selectedDate,
    viewDate: initialViewDate,
  });

  const currentYear = dayjs(values.viewDate);
  const prevYear = currentYear.subtract(1, "year");
  const nextYear = currentYear.add(1, "year");

  const handleDateChange = (type: "month" | "year", direction: "next" | "prev"): void => {
    const amount = direction === "next" ? 1 : -1;
    const unit = type === "year" ? "year" : "month";

    setValues((currentValues) => ({
      ...currentValues,
      viewDate: dayjs(currentValues.viewDate).add(amount, unit).format("YYYY-MM-DD"),
    }));
  };

  const handleYearNavigation = (direction: "next" | "prev"): void => {
    handleDateChange("year", direction);
  };

  const isPrevYearDisabled = useMemo(() => {
    if (!values.minDate) return false;

    return prevYear.endOf("year").isBefore(dayjs(values.minDate));
  }, [values.viewDate, values.minDate, prevYear]);

  const isNextYearDisabled = useMemo(() => {
    if (!values.maxDate) return false;

    return nextYear.startOf("year").isAfter(dayjs(values.maxDate));
  }, [values.viewDate, values.maxDate, nextYear]);

  const isMonthDisabled = (month: number): boolean => {
    const monthDate = dayjs(values.viewDate).month(month).startOf("month");
    const hasMinConstraint = values.minDate && monthDate.isBefore(dayjs(values.minDate), "month");
    const hasMaxConstraint = values.maxDate && monthDate.isAfter(dayjs(values.maxDate), "month");

    return Boolean(hasMinConstraint || hasMaxConstraint);
  };

  const isMonthSelected = (month: number): boolean => {
    if (!values.selectedDate) return false;

    return dayjs(values.selectedDate).isSame(dayjs(values.viewDate).month(month), "month");
  };

  const handleMonthSelection = (month: number): void => {
    const newDate = dayjs(values.viewDate).month(month).startOf("month");

    onSelection(newDate.format("YYYY-MM-DD"));
  };

  const renderMonthButton = (monthName: string, index: number): JSX.Element => {
    const isSelected = isMonthSelected(index);
    const isDisabled = isMonthDisabled(index);

    return (
      <CalendarMonthStyled
        key={monthName}
        disabled={isDisabled}
        selected={isSelected}
        onClick={() => !isDisabled && handleMonthSelection(index)}>
        {monthName}
      </CalendarMonthStyled>
    );
  };

  useEffect(() => {
    setValues((currentValues) => ({
      ...currentValues,
      selectedDate,
      viewDate: selectedDate || viewDate || currentValues.viewDate,
    }));
  }, [selectedDate, viewDate]);

  return (
    <CalendarStyled>
      <CalendarHeaderStyled>
        <Stack align="center" css={{ gap: "$small" }} direction="row">
          <Button disabled={isPrevYearDisabled} small onClick={() => handleYearNavigation("prev")}>
            <Icon system="CaretUpIcon" />
          </Button>
          <Text as="h6" css={{ margin: 0 }}>
            {currentYear.format("YYYY")}
          </Text>
          <Button disabled={isNextYearDisabled} small onClick={() => handleYearNavigation("next")}>
            <Icon system="CaretDownIcon" />
          </Button>
        </Stack>

        <CalendarHeaderNavigationStyled />
      </CalendarHeaderStyled>

      <CalendarContentStyled>
        <CalendarGridStyled mode="months">{MONTHS.map(renderMonthButton)}</CalendarGridStyled>
      </CalendarContentStyled>
    </CalendarStyled>
  );
}
