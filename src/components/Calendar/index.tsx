import dayjs from "dayjs";
import { useEffect, type JSX } from "react";

import { Icons } from "../../icons";
import { Stack, Text, Button } from "../../index";
import { ICalendar } from "../../types";
import {
  useCalendarState,
  useCalendarSingleValidation,
  useCalendarRangeValidation,
  useNavigationDisabledState,
  useDaysInMonth,
  useCalendarViewChange,
} from "./hooks";
import {
  CalendarContentStyled,
  CalendarDescriptionStyled,
  CalendarDayStyled,
  CalendarHeaderNavigationStyled,
  CalendarGridStyled,
  CalendarHeaderStyled,
  CalendarStyled,
  CalendarDayHeaderStyled,
} from "./styles";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calendar({
  blockedDates,
  description,
  endDate,
  maxDate,
  maxLength,
  minDate,
  minLength = 2,
  mode = "range",
  onSelection,
  onViewChange,
  startDate,
  viewDate,
}: ICalendar): JSX.Element {
  const isSingleMode = mode === "single";

  const { dates, setDates, setValues, values } = useCalendarState({
    endDate,
    maxDate,
    minDate,
    startDate,
  });

  const validateSingleDate = useCalendarSingleValidation(minDate, maxDate, onSelection);
  const { validateRange } = useCalendarRangeValidation(
    minDate,
    maxDate,
    minLength,
    maxLength,
    onSelection,
    blockedDates,
  );

  const { nextMonthDisabled, nextYearDisabled, prevMonthDisabled, prevYearDisabled } =
    useNavigationDisabledState({
      maxDate: values.maxDate,
      minDate: values.minDate,
      viewDate: values.viewDate,
    });

  const { handleDateChange } = useCalendarViewChange(setValues, onViewChange);
  const { days, offset } = useDaysInMonth(values.viewDate);

  const currentMonth = dayjs(values.viewDate);
  const prevMonth = currentMonth.subtract(1, "month");
  const nextMonth = currentMonth.add(1, "month");
  const hasDescription = Boolean(description);
  const shouldRenderRange = !isSingleMode;

  const handleDaySelection = (date: string): void => {
    if (isSingleMode) {
      if (validateSingleDate(date)) {
        setDates({ endDate: date, startDate: date });
      }
    } else {
      const hasNoSelection = !dates.startDate || dates.endDate;

      if (hasNoSelection) {
        setDates({ endDate: "", startDate: date });
      } else if (dates.startDate && validateRange(dates.startDate, date)) {
        setDates({ endDate: date, startDate: dates.startDate });
      }
    }
  };

  const isDateSelected = (date: string): boolean =>
    date === dates.startDate || date === dates.endDate;

  const isDateInRange = (date: string): boolean => {
    if (!shouldRenderRange || !dates.startDate || !dates.endDate) return false;

    const dateObj = dayjs(date);
    const start = dayjs(dates.startDate);
    const end = dayjs(dates.endDate);

    return (
      (dateObj.isAfter(start, "day") && dateObj.isBefore(end, "day")) ||
      (dateObj.isAfter(end, "day") && dateObj.isBefore(start, "day"))
    );
  };

  const isDateDisabled = (date: string): boolean => {
    const dateObj = dayjs(date);
    const hasMinConstraint = values.minDate && dateObj.isBefore(values.minDate, "day");
    const hasMaxConstraint = values.maxDate && dateObj.isAfter(values.maxDate, "day");
    const isBlocked = blockedDates?.includes(date);

    return Boolean(hasMinConstraint || hasMaxConstraint || isBlocked);
  };

  const handleYearNavigation = (direction: "prev" | "next"): void => {
    handleDateChange("year", direction);
  };

  const handleMonthNavigation = (direction: "prev" | "next"): void => {
    handleDateChange("month", direction);
  };

  const renderCalendarDay = (date: string): JSX.Element => {
    const isSelected = isDateSelected(date);
    const isBetween = isDateInRange(date);
    const isDisabled = isDateDisabled(date);

    return (
      <CalendarDayStyled
        key={date}
        disabled={isDisabled}
        inRange={Boolean(isBetween && !isSelected)}
        selected={isSelected}
        onClick={() => !isDisabled && handleDaySelection(date)}>
        {dayjs(date).format("D")}
      </CalendarDayStyled>
    );
  };

  useEffect(() => {
    const initialViewDate = startDate || viewDate || dayjs().startOf("month").format("YYYY-MM-DD");

    setValues((currentValues) => ({ ...currentValues, viewDate: initialViewDate }));

    if (onViewChange) {
      onViewChange({
        endDate: dayjs(initialViewDate).endOf("month").format("YYYY-MM-DD"),
        startDate: initialViewDate,
      });
    }
  }, []);

  return (
    <CalendarStyled>
      <CalendarHeaderStyled>
        <Stack align="center" css={{ gap: "$small" }} direction="row">
          <Button disabled={prevYearDisabled} small onClick={() => handleYearNavigation("prev")}>
            <Icons.CaretUp />
          </Button>
          <Text as="h6" css={{ margin: 0 }}>
            {currentMonth.format("MMMM YYYY")}
          </Text>
          <Button disabled={nextYearDisabled} small onClick={() => handleYearNavigation("next")}>
            <Icons.CaretDown />
          </Button>
        </Stack>

        <CalendarHeaderNavigationStyled>
          <Button
            disabled={prevMonthDisabled}
            icon={<Icons.ArrowLeft />}
            small
            onClick={() => handleMonthNavigation("prev")}>
            {prevMonth.format("MMM")}
          </Button>
          <Button
            disabled={nextMonthDisabled}
            icon={<Icons.ArrowRight />}
            iconPosition="right"
            small
            onClick={() => handleMonthNavigation("next")}>
            {nextMonth.format("MMM")}
          </Button>
        </CalendarHeaderNavigationStyled>
      </CalendarHeaderStyled>

      {hasDescription && (
        <CalendarDescriptionStyled>
          <Text accent as="small">
            {description}
          </Text>
        </CalendarDescriptionStyled>
      )}

      <CalendarContentStyled>
        <CalendarGridStyled mode="days">
          {DAYS_OF_WEEK.map((day) => (
            <CalendarDayHeaderStyled key={day}>
              <Text as="small">{day}</Text>
            </CalendarDayHeaderStyled>
          ))}

          {Array.from({ length: offset }).map((_, i) => (
            <div key={i} />
          ))}

          {days.map(renderCalendarDay)}
        </CalendarGridStyled>
      </CalendarContentStyled>
    </CalendarStyled>
  );
}
