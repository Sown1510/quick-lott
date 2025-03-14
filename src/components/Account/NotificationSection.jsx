import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { colors, typography } from "../../theme/colors";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Sample notifications - replace with actual data
const notifications = [
  // Empty for now - will be filled with actual notifications
];

export default function NotificationSection() {
  const handleMarkAllAsRead = () => {
    console.log("Marked all notifications as read");
    // Implement actual functionality here
  };

  return (
    <Box sx={{ width: "100%", mb: 3, px: 2 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          sx={{
            color: colors.text?.primary || "#1E1E1E",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: 700,
            lineHeight: "22.4px",
          }}
        >
          Notification
        </Typography>

        <Typography
          onClick={handleMarkAllAsRead}
          sx={{
            color: colors.text?.primary || "#1E1E1E",
            fontSize: 14,
            fontFamily: "Inter",
            fontWeight: 400,
            lineHeight: "19.6px",
            cursor: "pointer",
            "&:hover": {
              color: colors.accent || "#2E7D32",
            },
          }}
        >
          Mark all as read
        </Typography>
      </Box>

      {/* Notifications Container */}
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          mb: 2,
          mt: 1,
        }}
      >
        {notifications && notifications.length > 0 ? (
          // Render actual notifications when available
          notifications.map((notification, index) => (
            <Box
              key={index}
              sx={{
                p: 1.5,
                borderBottom: index < notifications.length - 1 ? `1px solid ${colors.border || "#eee"}` : "none",
              }}
            >
              <Typography
                sx={{
                  color: colors.text?.primary || "#1E1E1E",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {notification.title}
              </Typography>
              <Typography
                sx={{
                  color: colors.text?.secondary || "#757575",
                  fontSize: 12,
                }}
              >
                {notification.message}
              </Typography>
            </Box>
          ))
        ) : (
          // Empty state
          <Box
            sx={{
              height: 100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              backgroundColor: colors.background?.secondary || "#f5f5f5",
              borderRadius: 1,
            }}
          >
            <Typography
              sx={{
                color: colors.text?.secondary || "#757575",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              No new notifications
            </Typography>
          </Box>
        )}
      </Box>

      {/* Show More Button */}
      {notifications && notifications.length > 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          <Button
            variant="outlined"
            startIcon={<AccessTimeIcon />}
            size="small"
            sx={{
              textTransform: "none",
              borderRadius: "100px",
              px: 2,
              py: 0.5,
              color: colors.text?.secondary || "#757575",
              borderColor: colors.border || "#BDBDBD",
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
