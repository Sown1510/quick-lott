import React from 'react';
import { Button } from '@mui/material';

import { colors, typography } from '../../theme/colors';

const CustomButton = ({ children, onClick, variant = 'contained', fullWidth = false }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        backgroundColor: colors.accent,
        color: colors.text.tertiary,
        '&:hover': {
          backgroundColor: colors.accentHover,
        },
        padding: '12px 24px',
        borderRadius: '8px',
        fontFamily: typography.fontFamily.primary,
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.medium,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
