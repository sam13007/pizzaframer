import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Base({ pizza, addBase }) {
  const navigate = useNavigate();
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <Stack
      sx={{ height: "80%" }}
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={3}
    >
      <Typography
        variant="h6"
        sx={{
          textTransform: "capitalize",
          borderBottom: "0.5px solid",
          fontFamily: "Quicksand",
        }}
      >
        Step 1. Choose your base
      </Typography>
      <Stack
        gap={2}
        alignItems="flex-start"
        justifyContent="center"
        width="20%"
      >
        {bases.map((base, index) => (
          <Typography
            key={index}
            sx={{
              opacity: base === pizza.base ? "1.0" : "0.6",
              fontFamily: "Quicksand",
              cursor: "pointer",
            }}
            onClick={() => {
              addBase(base);
            }}
          >
            {base === pizza.base ? `> ${base}` : base}
          </Typography>
        ))}
      </Stack>
      <Button
        color="inherit"
        sx={{
          borderRadius: "40px",
          border: "1px solid white",
          padding: "10px 20px",
          opacity: "0.8",
        }}
        onClick={() => navigate("/toppings")}
      >
        Next
      </Button>
    </Stack>
  );
}

export default Base;
