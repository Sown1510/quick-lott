import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Grid2, Chip, IconButton, Divider, Checkbox } from "@mui/material";
import { colors } from "../../theme/colors";

export default function TotalSummary({ ticketCount, pricePerTicket }) {
  const totalPrice = ticketCount * pricePerTicket;
  return (
    <Box>
      <Divider
        sx={{
          margin: "20px 0 16px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: colors.text.secondary,
            fontSize: "14px",
          }}
        >
          Total pay:
        </Typography>
        <Box sx={{ textAlign: "right" }}>
          <Typography
            sx={{
              color: colors.accent,
              fontSize: "20px",
              fontWeight: 600,
              marginBottom: "4px",
            }}
          >
            {totalPrice} TON
          </Typography>
          <Typography
            sx={{
              color: colors.text.secondary,
              fontSize: "12px",
            }}
          >
            ({ticketCount} {ticketCount === 1 ? "ticket" : "tickets"})
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
