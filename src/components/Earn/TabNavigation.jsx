import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../theme/colors";

export default function TabNavigation({ tabs = [], activeTab, onChange }) {
  return (
    <Box
      sx={{
        backgroundColor: colors.background.accent,
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        {tabs.map((tab) => (
          <Box
            key={tab.id}
            onClick={() => onChange(tab.id)}
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "14px 0",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              wordWrap: "break-word",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: tab.id === activeTab ? colors.accent : colors.text.secondary,
                textAlign: "center",
              }}
            >
              {tab.label}
            </Typography>
            {tab.id === activeTab && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  height: "3px",
                  width: "80%",
                  backgroundColor: colors.accent,
                  borderTopLeftRadius: "100px",
                  borderTopRightRadius: "100px",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
      <Divider sx={{ borderColor: colors.border.accent }} />
    </Box>
  );
}
