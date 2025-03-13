import React from "react";
import { Button } from "@mui/material";

import { colors, typography } from "../../theme/colors";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

const CustomButton = ({ children, onClick, variant = "contained", fullWidth = false, sx, ...props }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        backgroundColor: colors.accent,
        color: colors.text.tertiary,
        "&:hover": {
          backgroundColor: colors.accentHover,
        },
        minWidth: "unset",
        borderRadius: "8px",
        fontFamily: typography.fontFamily.primary,
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.medium,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
