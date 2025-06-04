import { useState } from "react";
import * as C from "../../src/index";
import dayjs from "dayjs";

export default function CalendarDemo() {
  const [singleDate, setSingleDate] = useState<string>();
  const [dateRange, setDateRange] = useState<{ startDate?: string; endDate?: string }>({});
  const [selectedMonth, setSelectedMonth] = useState<string>();

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
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "$large" 
    }}>
      {/* Single Selection Calendar */}
      <C.Stack>
        <C.Text as="h4">Single Selection</C.Text>
        <C.Calendar
          mode="single"
          minDate={minDate}
          maxDate={maxDate}
          startDate={singleDate}
          onSelection={({ startDate }) => setSingleDate(startDate)}
          description="Select a single date within the next 3 months"
        />
        <C.Text accent>
          Selected: {singleDate || "None"}
        </C.Text>
      </C.Stack>

      {/* Range Selection Calendar */}
      <C.Stack>
        <C.Text as="h4">Range Selection</C.Text>
        <C.Calendar
          mode="range"
          minDate={minDate}
          maxDate={maxDate}
          startDate={dateRange.startDate}
          endDate={dateRange.endDate}
          blockedDates={blockedDates}
          minLength={2}
          maxLength={14}
          onSelection={({ startDate, endDate }) => 
            setDateRange({ startDate, endDate })
          }
          description="Select a date range (2-14 days) excluding Sundays"
        />
        <C.Text accent>
          Range: {dateRange.startDate && dateRange.endDate ? 
            `${dateRange.startDate} to ${dateRange.endDate}` : 
            "None"}
        </C.Text>
      </C.Stack>

      {/* Month Selection Calendar */}
      <C.Stack>
        <C.Text as="h4">Month Selection</C.Text>
        <C.CalendarMonths
          minDate={monthMinDate}
          maxDate={monthMaxDate}
          selectedDate={selectedMonth}
          onSelection={(date) => setSelectedMonth(date)}
        />
        <C.Text accent>
          Selected: {selectedMonth ? 
            dayjs(selectedMonth).format("MMMM YYYY") : 
            "None"}
        </C.Text>
      </C.Stack>
    </C.Stack>
  );
} 