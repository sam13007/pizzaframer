import React from "react";
import { Stack, Typography } from "@mui/material";
import pizza from "./assets/pizza.svg";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <Stack direction="row" alignItems="flex-end" gap={3} padding="2vw">
      <img src={pizza} alt="Pizza" height="60px" width="60px" />
      <Typography
        variant="h6"
        sx={{
          borderBottom: "0.3px solid",
          borderImage: "linear-gradient(to right, #F0F0F0, darkorchid) 0.7",
          minWidth: "90%",
          paddingBottom: "10px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Pizza Hunt
      </Typography>
    </Stack>
  );
}

export default Navbar;
