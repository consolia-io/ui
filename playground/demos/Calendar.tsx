import { JSX, useState } from "react";

import * as C from "../../src/index";

export default function CalendarDemo(): JSX.Element {
  const [singleDate, setSingleDate] = useState<string>();
  const [rangeDate, setRangeDate] = useState<{ startDate?: string; endDate?: string }>({});
  const [monthDate, setMonthDate] = useState<string>();

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
            endDate={rangeDate.endDate}
            maxLength={7}
            minLength={2}
            mode="range"
            startDate={rangeDate.startDate}
            onSelection={({ endDate, startDate }) => 
              setRangeDate({ endDate, startDate })
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
            blockedDates={["2024-12-25", "2024-01-01"]}
            maxDate="2024-12-31"
            minDate="2024-01-01"
            mode="single"
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
            description="Select your travel dates"
            mode="range"
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
            maxDate="2024-12-31"
            minDate="2024-01-01"
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