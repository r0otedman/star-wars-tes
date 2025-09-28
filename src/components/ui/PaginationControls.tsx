import React from "react";
import { Pagination, Stack } from "@mui/material";
import { COLORS } from "../../colors";

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const PaginationControls: React.FC<Props> = ({
  page,
  totalPages,
  onChange,
}) => {
  return (
    <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, p) => onChange(p)}
        color="primary"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: COLORS.background,
            "&:hover": {
              backgroundColor: COLORS.hover,
            },
          },
        }}
      />
    </Stack>
  );
};
