import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { DateModel } from "../types";

interface SelectProps {
  currency: DateModel[];
  value: string;
  label: string;
  name: string;
  helper: string;
  onPick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Select({ currency, label, name, helper, value, onPick }: SelectProps) {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "15ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-select-currency"
          select
          name={name}
          label={label}
          value={value}
          onChange={onPick}
          helperText={helper}
          variant="filled"
        >
          {currency.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  );
}
