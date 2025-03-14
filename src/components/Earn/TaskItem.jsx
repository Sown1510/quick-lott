import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../theme/colors";

export default function TaskItem({ title, description, reward }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        padding: "12px 16px",
        gap: "12px",
      }}
    >
      <i>icon</i>
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: colors.text.primary,
              lineHeight: "22.4px",
              flex: 1,
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: colors.text.primary,
              lineHeight: "16px",
            }}
          >
            {reward}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: colors.text.secondary,
            lineHeight: "19.6px",
            mt: 0.5,
            textAlign: "left",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
