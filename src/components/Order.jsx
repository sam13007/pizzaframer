import { Stack, Typography } from "@mui/material";
import React from "react";

function Order({ pizza }) {
  return (
    <Stack
      sx={{ minHeight: "80%" }}
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <Typography variant="h5">Thank you for your order 😊</Typography>
      <Typography variant="body2">
        You ordered a {pizza.base} pizza with:
      </Typography>
      <Stack direction="row" gap={1}>
        {pizza.toppings.map((topping, index) => (
          <Typography variant="body2" key={index}>{`${topping} `}</Typography>
        ))}
      </Stack>
    </Stack>
  );
}

export default Order;
