import React from 'react';
import { colors, typography } from '../../theme/colors';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faHistory, faMoneyBillWave, faUser } from '@fortawesome/free-solid-svg-icons';

const MainLayout = ({ children }) => {
  return (
    <Box style={{
      width: 375,
      height: 1600,
      position: 'relative',
      background: colors.background.primary
    }}>
      {/* Header */}
      <AppBar position='fixed' sx={{background: colors.background.secondary, width: '375px', left: 0}}>
        <Toolbar sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '13px',
          gap: '15px'
        }}>
          <Link to="/">
            <img 
              style={{
                width: 34.97,
                height: 36,
                borderRadius: 12
              }}
              src="https://placehold.co/35x36"
              alt="Logo"
            />
          </Link>
          
          <Typography variant='h6' sx={{
            color: colors.text.primary,
            fontFamily: typography.fontFamily.title,
            fontWeight: typography.fontWeight.medium
          }}>
            Quick Lott
          </Typography>
        </Toolbar>
      </AppBar>
      

      {/* Main Content */}
      <main style={{paddingTop: '77px'}}>
        {children}
      </main>

      {/* Bottom Navigation */}
      <Box sx={{
        width: 375,
        height: 77,
        paddingLeft: 3,
        paddingRight: 3,
        position: 'fixed',
        bottom: 0,
        background: colors.background.secondary,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NavItem icon={<FontAwesomeIcon icon={faGamepad} />} label="Games" active />
        <NavItem icon={<FontAwesomeIcon icon={faHistory} />} label="History" />
        <NavItem icon={<FontAwesomeIcon icon={faMoneyBillWave} />} label="Earn" badge="3" />
        <NavItem icon={<FontAwesomeIcon icon={faUser} />} label="Account" />
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, label, active, badge }) => {
  const getIconColor = () => active ? colors.text.primary : colors.text.secondary;
  return (
    <Box sx={{
      paddingTop: 12,
      paddingBottom: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }}>
      <Box sx={{
        width: 64,
        height: 32,
        position: 'relative',
        borderRadius: 100,
        background: active ? colors.background.accent : 'transparent'
      }}>
        {/* Icon will be replaced with actual SVG based on prop */}
        <Box sx={{ width: 24, height: 24, margin: '4px auto' }} />
        
        {badge && (
          <Box style={{
            paddingLeft: 4,
            paddingRight: 4,
            position: 'absolute',
            top: 2,
            right: 8,
            background: colors.status.error,
            borderRadius: 100,
            color: colors.text.primary,
            fontSize: typography.fontSize.xs,
            fontWeight: typography.fontWeight.medium,
            lineHeight: typography.lineHeight.tight,
            letterSpacing: typography.letterSpacing.wide
          }}>
            {badge}
          </Box>
        )}
      </Box>
      <Typography sx={{
        color: getIconColor(),
        fontSize: typography.fontSize.sm,
        fontFamily: typography.fontFamily.primary,
        fontWeight: typography.fontWeight.medium,
        lineHeight: typography.lineHeight.tight,
        letterSpacing: typography.letterSpacing.wide,
        textAlign: 'center'
      }}>
        {label}
      </Typography>
    </Box>
  );
};

export default MainLayout;
