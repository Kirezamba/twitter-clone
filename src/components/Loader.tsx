import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Loader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
};
