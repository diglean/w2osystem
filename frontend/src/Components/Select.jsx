import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./styles/Select.module.css";

const BasicSelect = ({ label, value, options, cbHandleChange }) => {
  const handleChange = (e) => {
    return cbHandleChange(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className={styles.main}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value || ""}
          label={label}
          onChange={handleChange}
        >
          {options.map((item) => {
            return (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
