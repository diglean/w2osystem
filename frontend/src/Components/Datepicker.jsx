import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
  DatePicker as MuiDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";

const DatePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        sx={{ marginBottom: "10px" }}
        label={props.label}
        onChange={(e) => props.cbValueChanged(e)}
        format="DD/MM/YYYY"
        slotProps={{ textField: { required: props.required } }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
