import React from "react";
import { TextField } from "@mui/material";
import { COLORS } from "../../colors";

interface Props {
  value: string | string[];
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomTextField: React.FC<Props> = ({
  value,
  label,
  onChange,
}) => {
  return (
    <TextField
      fullWidth
      label={label || "Search characters"}
      variant="outlined"
      value={value}
      onChange={onChange}
      sx={{
        mb: 3,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: COLORS.background,
          },
          "&.Mui-focused fieldset": {
            borderColor: COLORS.focus,
          },
          "&:hover fieldset": {
            borderColor: COLORS.hover,
          },
        },
        "& .MuiInputLabel-root": {
          color: "white",
          "&.Mui-focused": {
            color: COLORS.white,
          },
        },
        input: {
          color: "white",
        },
      }}
    />
  );
};
