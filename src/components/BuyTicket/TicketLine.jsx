import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Grid2, Chip, IconButton, Divider, Checkbox } from "@mui/material";
import { colors } from "../../theme/colors";

export default function TicketLine({ index = 0, onRemove }) {
  const [numbers, setNumbers] = useState(Array(6).fill(null));
  const handleNumberSelect = (position) => {
    // Show number selector
    const selectNumber = (num) => {
      const newNumbers = [...numbers];
      newNumbers[position] = num;
      setNumbers(newNumbers);
    };
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 4px",
        borderBottom: `1px solid ${colors.accent}`,
        marginBottom: "8px",
        "&:last-child": {
          borderBottom: "none",
          marginBottom: 0,
        },
      }}
    >
      {/* Index Circle */}
      <Typography
        sx={{
          width: "20px",
          height: "20px",
          background: colors.background.white,
          borderRadius: "50%",
          display: "flex",
          padding: "0 3px",
          fontSize: "12px",
          justifyContent: "center",
          alignItems: "center",
          color: colors.text.tertiary,
        }}
      >
        {index + 1}
      </Typography>

      {/* Numbers Container */}
      <Box sx={{ display: "flex", gap: "1px", flex: 1 }}>
        {numbers.map((num, idx) => (
          <Box
            key={idx}
            onClick={() => handleNumberSelect(idx)}
            sx={{
              width: "25px", // Reduced from 30px
              height: "25px", // Reduced from 30px
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // background: num !== null ? colors.accent : colors.background.secondary,
              color: colors.text.primary,
              cursor: "pointer",
              fontSize: "12px", // Reduced from 14px
              fontWeight: 500,
            }}
          >
            {num !== null ? num.toString().padStart(2, "0") : "--"}
          </Box>
        ))}
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", gap: "6px", minWidth: "fit-content" }}>
        <IconButton
          sx={{
            color: colors.text.primary,
            minWidth: "unset",
            padding: "4px 0",
            fontSize: "12px",
            height: "28px",
          }}
        >
          Suffer
        </IconButton>
        <IconButton
          onClick={onRemove}
          sx={{
            minWidth: "unset",
            padding: "4px 8px",
            fontSize: "12px",
            height: "28px",
          }}
        >
          ❌
        </IconButton>
      </Box>

      {/* Checkbox */}
      <Checkbox sx={{ color: colors.text.primary }} size="small" />
    </Box>
  );
}
