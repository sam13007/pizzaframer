import React from "react";
import { Stack, Typography } from "@mui/material";

function Notfound() {
  return (
    <Stack
      sx={{ height: "100%" }}
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <Typography variant="h4"> 404 Page </Typography>
      <Typography variant="body2" sx={{ color: "grey" }}>
        Page you are searching for is unavailable
      </Typography>
    </Stack>
  );
}

export default Notfound;
