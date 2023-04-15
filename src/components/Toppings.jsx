import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Toppings({ addTopping, pizza }) {
  const navigate = useNavigate();
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  return (
    <Stack
      sx={{ minHeight: "100%" }}
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
        Step 2. Choose Toppings
      </Typography>
      <Stack
        gap={2}
        alignItems="flex-start"
        justifyContent="center"
        width="20%"
      >
        {toppings.map((topping, index) => (
          <Typography
            key={index}
            sx={{
              opacity: pizza.toppings.find((top) => topping === top)
                ? "1.0"
                : "0.4",
              fontFamily: "Quicksand",
              cursor: "pointer",
            }}
            onClick={() => {
              addTopping(topping);
            }}
          >
            {pizza.toppings.find((top) => topping === top)
              ? `> ${topping}`
              : topping}
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
        onClick={() => navigate("/order")}
      >
        Order
      </Button>
    </Stack>
  );
}

export default Toppings;
