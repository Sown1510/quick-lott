import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { colors, typography } from "../../theme/colors";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

// Sample reward history data - this could be passed as props in a real implementation
const rewardHistory = [
  {
    id: 1,
    title: "First time play Jackpod",
    description: "Buy a ticket from Jackpod game",
    reward: "+1 LP",
  },
  {
    id: 2,
    title: "Jackpod: 2nd prize",
    description: "You've win 2nd prize",
    reward: "+100,18 TON",
  },
];

export default function RewardHistorySection() {
  return (
    <Box sx={{ width: "100%", mb: 3, px: 2 }}>
      {/* Header */}
      <Typography
        sx={{
          color: colors.text?.primary || "#1E1E1E",
          fontSize: 16,
          fontFamily: "Inter",
          fontWeight: 700,
          lineHeight: "22.4px",
          mb: 1,
          textAlign: "left",
        }}
      >
        Reward history
      </Typography>

      {/* Reward Items */}
      {rewardHistory.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            py: 1.5,
            width: "100%",
            borderBottom: index < rewardHistory.length - 1 ? `1px solid ${colors.border || "#eee"}` : "none",
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              minWidth: 20,
              height: 20,
              mr: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StarOutlineIcon
              sx={{
                fontSize: 20,
                color: colors.text?.primary || "#1E1E1E",
              }}
            />
          </Box>

          {/* Content */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Title and Reward Row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 0.5,
              }}
            >
              <Typography
                sx={{
                  flex: 1,
                  color: colors.text?.primary || "#1E1E1E",
                  fontSize: 16,
                  fontFamily: "Inter",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                  textAlign: "left",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: colors.text?.primary || "#1E1E1E",
                  fontSize: 16,
                  fontFamily: "Inter",
                  fontWeight: 400,
                  lineHeight: "16px",
                  ml: 1,
                }}
              >
                {item.reward}
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              sx={{
                color: colors.text?.secondary || "#757575",
                fontSize: 14,
                fontFamily: "Inter",
                fontWeight: 400,
                lineHeight: "19.6px",
                textAlign: "left",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}

      {/* Show More Button */}
      {rewardHistory.length > 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="outlined"
            startIcon={<AccessTimeIcon />}
            size="small"
            sx={{
              textTransform: "none",
              borderRadius: "100px",
              px: 2,
              py: 0.5,
              color: colors.text?.accent || "#757575",
              borderColor: colors.border.accent || "#BDBDBD",
              fontSize: 14,
              fontFamily: "Inter",
              fontWeight: 400,
              "&:hover": {
                borderColor: colors.accent || "#2E7D32",
                backgroundColor: "transparent",
              },
            }}
          >
            more
          </Button>
        </Box>
      )}

      <Divider sx={{ mt: 3, mb: 1 }} />
    </Box>
  );
}
