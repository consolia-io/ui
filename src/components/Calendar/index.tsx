import dayjs from "dayjs";
import { useEffect, type JSX } from "react";

import { Icons } from "../../icons";
import { Stack, Text, Button, useBreakpoints } from "../../index";
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
  CalendarFooterStyled,
  CalendarGridStyled,
  CalendarHeaderStyled,
  CalendarStyled,
} from "./styles";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  const { isPhone } = useBreakpoints();
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

  const handleDaySelection = (date: string): void => {
    if (mode === "single") {
      if (validateSingleDate(date)) {
        setDates({ endDate: date, startDate: date });
      }
    } else {
      if (!dates.startDate || dates.endDate) {
        setDates({ endDate: "", startDate: date });
      } else if (validateRange(dates.startDate, date)) {
        setDates({ endDate: date, startDate: dates.startDate });
      }
    }
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
        <Text as={description ? "h4" : "h5"} bottom="none">
          {dayjs(values.viewDate).format("MMMM YYYY")}
        </Text>
        <Stack>
          {!prevMonthDisabled && (
            <Button
              disabled={prevMonthDisabled}
              inline={description ? "small" : "auto"}
              small={isPhone}
              theme={description ? "solid" : "minimal"}
              onClick={() => handleDateChange("month", "prev")}>
              <Icons.ArrowLeft />
            </Button>
          )}
          {!nextMonthDisabled && (
            <Button
              disabled={nextMonthDisabled}
              small={isPhone}
              theme={description ? "solid" : "minimal"}
              onClick={() => handleDateChange("month", "next")}>
              <Icons.ArrowRight />
            </Button>
          )}
        </Stack>
      </CalendarHeaderStyled>
      {description && (
        <Text accent as="p" bottom="medium">
          {description}
        </Text>
      )}

      <CalendarGridStyled mode="days">
        {daysOfWeek.map((day) => (
          <Text key={day} accent as="span">
            {day}
          </Text>
        ))}
        {Array.from({ length: offset }).map((_, i) => (
          <div key={i} />
        ))}
        {days.map((date) => {
          const isSelected = date === dates.startDate || date === dates.endDate;
          const isBetween =
            dates.startDate &&
            dates.endDate &&
            ((dayjs(date).isAfter(dates.startDate, "day") &&
              dayjs(date).isBefore(dates.endDate, "day")) ||
              (dayjs(date).isAfter(dates.endDate, "day") &&
                dayjs(date).isBefore(dates.startDate, "day")));
          const isDisabled = Boolean(
            (values.minDate && dayjs(date).isBefore(values.minDate, "day")) ||
              (values.maxDate && dayjs(date).isAfter(values.maxDate, "day")) ||
              blockedDates?.includes(date),
          );

          return (
            <Button
              key={date}
              css={{
                ...(isSelected && {
                  "&:hover": {
                    backgroundColor: "$text !important",
                    color: "$background !important",
                    opacity: 0.7,
                  },
                }),
                ...(isDisabled && {
                  "&::after": {
                    background: "$text",
                    borderRadius: "$large",
                    content: "''",
                    height: "1px",
                    left: "50%",
                    position: "absolute",
                    top: "50%",
                    transform: "translate(-50%, -50%) rotate(45deg)",
                    width: "100%",
                  },
                  opacity: 0.25,
                }),
              }}
              disabled={isDisabled}
              small
              theme={isSelected ? "solid" : isBetween ? "fill" : "minimal"}
              onClick={() => handleDaySelection(date)}>
              {dayjs(date).format("D")}
            </Button>
          );
        })}
      </CalendarGridStyled>
      <CalendarFooterStyled>
        {!prevYearDisabled && (
          <Button
            disabled={prevYearDisabled}
            icon={<Icons.CaretLeft />}
            small
            onClick={() => handleDateChange("year", "prev")}>
            {dayjs(values.viewDate).subtract(1, "year").format("YYYY")}
          </Button>
        )}
        {!nextYearDisabled && (
          <Button
            disabled={nextYearDisabled}
            icon={<Icons.CaretRight />}
            iconPosition="right"
            small
            onClick={() => handleDateChange("year", "next")}>
            {dayjs(values.viewDate).add(1, "year").format("YYYY")}
          </Button>
        )}
      </CalendarFooterStyled>
    </CalendarStyled>
  );
}
