import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function MuiDatePicker({ value, onChange }) {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
