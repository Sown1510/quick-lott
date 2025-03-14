import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { colors, typography } from "../../theme/colors";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const badges = [
  { id: 1, icon: <EmojiEventsIcon />, name: "First Win", achieved: true },
  { id: 2, icon: <WorkspacePremiumIcon />, name: "Premium Player", achieved: true },
  { id: 3, icon: <MilitaryTechIcon />, name: "10 Games Played", achieved: false },
  { id: 4, icon: <EmojiEventsIcon />, name: "Big Winner", achieved: false },
];

export default function ProfileSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        mb: 2,
      }}
    >
      {/* Profile Avatar and Username */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Avatar with online indicator */}
        <Box sx={{ position: "relative", mb: 1 }}>
          <Avatar
            src="https://placehold.co/40x40"
            sx={{
              width: 40,
              height: 40,
              border: `1px solid ${colors.border || "#eee"}`,
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 12,
              position: "absolute",
              bottom: 0,
              right: 0,
              background: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                background: "#2E7D32",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Box>

        {/* Username */}
        <Typography
          sx={{
            color: colors.text?.accent || "#1E1E1E",
            fontSize: 16,
            fontFamily: "Roboto",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0.14px",
          }}
        >
          @text_text
        </Typography>
      </Box>

      {/* Banner/Card Image */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 1,
        }}
      >
        <Box
          component="img"
          src="https://placehold.co/302x128"
          sx={{
            width: "100%",
            maxWidth: 302,
            height: 128,
            borderRadius: "19px",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
}
