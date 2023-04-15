import React from "react";
import { Stack, Typography, styled, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Typo = styled(Typography)(() => ({
  fontFamily: "Quicksand",
}));

function Home() {
  const navigate = useNavigate();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="80%"
      gap={5}
    >
      <Typo variant="h4">Welcome to Pizza Hunt</Typo>

      <Button
        color="inherit"
        sx={{
          borderRadius: "40px",
          border: "1px solid white",
          padding: "10px 20px",
          opacity: "0.8",
        }}
        onClick={() => navigate("/base")}
      >
        Create your own pizza
      </Button>
    </Stack>
  );
}

export default Home;
