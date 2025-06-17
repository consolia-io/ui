import { JSX, useState } from "react";
import * as C from "../../src/index";
import dayjs from "dayjs";

export default function CalendarDemo(): JSX.Element {
  const [singleDate, setSingleDate] = useState<string>();
  const [rangeDate, setRangeDate] = useState<{ startDate?: string; endDate?: string }>({});
  const [monthDate, setMonthDate] = useState<string>();

  // Example blocked dates (next 3 Sundays)
  const blockedDates = Array.from({ length: 3 }).map((_, i) => 
    dayjs().day(7 + (i * 7)).format("YYYY-MM-DD")
  );

  // Min date is today, max date is 3 months from now
  const minDate = dayjs().format("YYYY-MM-DD");
  const maxDate = dayjs().add(3, "month").format("YYYY-MM-DD");

  // Month picker min/max dates (current year and next year)
  const monthMinDate = dayjs().startOf("year").format("YYYY-MM-DD");
  const monthMaxDate = dayjs().add(1, "year").endOf("year").format("YYYY-MM-DD");

  return (
    <C.Stack css={{ 
      display: "grid",
      gap: "$large",
      gridTemplateColumns: "repeat(3, 1fr)" 
    }}>
      {/* Single Selection */}
      <C.Box header={
        <C.Text as="h4">Single Selection</C.Text>
      }>
        <C.Stack>
          <C.Calendar
            mode="single"
            startDate={singleDate}
            onSelection={({ startDate }) => setSingleDate(startDate)}
          />
          <C.Text as="small">
            Selected: {singleDate || "None"}
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* Range Selection */}
      <C.Box header={
        <C.Text as="h4">Range Selection</C.Text>
      }>
        <C.Stack>
          <C.Calendar
            mode="range"
            startDate={rangeDate.startDate}
            endDate={rangeDate.endDate}
            minLength={2}
            maxLength={7}
            onSelection={({ startDate, endDate }) => 
              setRangeDate({ startDate, endDate })
            }
          />
          <C.Text as="small">
            Range: {rangeDate.startDate && rangeDate.endDate ? 
              `${rangeDate.startDate} to ${rangeDate.endDate}` : 
              "None"}
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* Month Selection */}
      <C.Box header={
        <C.Text as="h4">Month Selection</C.Text>
      }>
        <C.Stack>
          <C.CalendarMonths
            selectedDate={monthDate}
            onSelection={(date) => setMonthDate(date)}
          />
          <C.Text as="small">
            Selected: {monthDate || "None"}
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* With Restrictions */}
      <C.Box header={
        <C.Text as="h4">With Restrictions</C.Text>
      }>
        <C.Stack>
          <C.Calendar
            mode="single"
            minDate="2024-01-01"
            maxDate="2024-12-31"
            blockedDates={["2024-12-25", "2024-01-01"]}
            onSelection={() => {}}
          />
          <C.Text as="small">
            Min/max dates and blocked holidays
          </C.Text>
        </C.Stack>
      </C.Box>

      {/* With Description */}
      <C.Box header={
        <C.Text as="h4">With Description</C.Text>
      }>
        <C.Stack>
          <C.Calendar
            mode="range"
            description="Select your travel dates"
            onSelection={() => {}}
          />
        </C.Stack>
      </C.Box>

      {/* Month Picker Restricted */}
      <C.Box header={
        <C.Text as="h4">Month Restrictions</C.Text>
      }>
        <C.Stack>
          <C.CalendarMonths
            minDate="2024-01-01"
            maxDate="2024-12-31"
            onSelection={() => {}}
          />
          <C.Text as="small">
            Restricted to 2024 only
          </C.Text>
        </C.Stack>
      </C.Box>
    </C.Stack>
  );
} 