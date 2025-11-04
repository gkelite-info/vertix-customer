"use client";

import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";

type DatePickerWithRestrictionProps = {
  onChange?: (dateValue: string) => void;
  value?: string;
  disabled?: boolean;
};

export default function DatePickerWithRestriction({
  onChange,
  value,
  disabled = false,
}: DatePickerWithRestrictionProps) {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    value ? dayjs(value) : null
  );

  React.useEffect(() => {
    if (value) {
      setSelectedDate(dayjs(value));
    } else {
      setSelectedDate(null);
    }
  }, [value]);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    if (onChange && newValue) {
      onChange(newValue.format("YYYY-MM-DD"));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={null}
        value={selectedDate}
        onChange={handleDateChange}
        maxDate={dayjs()}
        disabled={disabled}
        slotProps={{
          textField: {
            placeholder: "Date",
            size: "small",
            variant: "outlined",
            sx: {
              width: "10rem",
              "& .MuiOutlinedInput-root": {
                fontSize: "0.80rem",
                borderRadius: "6px",
                backgroundColor: disabled ? "#f3f4f6" : "white",
                cursor: disabled ? "not-allowed" : "text",
              },
              "& .MuiInputBase-input": {
                padding: "4px 8px !important",
              },
              "& .MuiInputLabel-root": {
                display: "none",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
