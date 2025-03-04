import React from 'react';
import { colors, typography } from '../../theme/colors';

const Button = ({ children, onClick, variant = 'primary', fullWidth = false }) => {
  const getStyles = () => {
    const baseStyles = {
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      fontFamily: typography.fontFamily.primary,
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.medium,
      transition: 'all 0.3s ease',
      width: fullWidth ? '100%' : 'auto',
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          backgroundColor: colors.accent,
          color: colors.text.tertiary,
          '&:hover': {
            backgroundColor: colors.accentHover,
          }
        };
      case 'secondary':
        return {
          ...baseStyles,
          backgroundColor: colors.background.secondary,
          color: colors.text.primary,
          '&:hover': {
            backgroundColor: colors.background.accent,
          }
        };
      default:
        return baseStyles;
    }
  };

  return (
    <button
      onClick={onClick}
      style={getStyles()}
    >
      {children}
    </button>
  );
};

export default Button;
