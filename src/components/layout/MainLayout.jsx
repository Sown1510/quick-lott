import React from 'react';
import { colors, typography } from '../../theme/colors';

const MainLayout = ({ children }) => {
  return (
    <div style={{
      width: 375,
      height: 1600,
      position: 'relative',
      background: colors.background.primary
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        padding: '13px',
        gap: '15px'
      }}>
        <img 
          style={{
            width: 34.97,
            height: 36,
            borderRadius: 12
          }}
          src="https://placehold.co/35x36"
          alt="Logo"
        />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 3
        }}>
          <div style={{
            color: colors.text.primary,
            fontSize: typography.fontSize.lg,
            fontFamily: typography.fontFamily.title,
            fontWeight: typography.fontWeight.medium,
            lineHeight: typography.lineHeight.normal
          }}>
            Quick Lott
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav style={{
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
        <NavItem icon="games" label="Games" active />
        <NavItem icon="history" label="History" />
        <NavItem icon="earn" label="Earn" badge="3" />
        <NavItem icon="account" label="Account" />
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label, active, badge }) => {
  const getIconColor = () => active ? colors.text.primary : colors.text.secondary;
  
  return (
    <div style={{
      paddingTop: 12,
      paddingBottom: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }}>
      <div style={{
        width: 64,
        height: 32,
        position: 'relative',
        borderRadius: 100,
        background: active ? colors.background.accent : 'transparent'
      }}>
        {/* Icon will be replaced with actual SVG based on prop */}
        <div style={{ width: 24, height: 24, margin: '4px auto' }} />
        
        {badge && (
          <div style={{
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
          </div>
        )}
      </div>
      <div style={{
        color: getIconColor(),
        fontSize: typography.fontSize.sm,
        fontFamily: typography.fontFamily.primary,
        fontWeight: typography.fontWeight.medium,
        lineHeight: typography.lineHeight.tight,
        letterSpacing: typography.letterSpacing.wide,
        textAlign: 'center'
      }}>
        {label}
      </div>
    </div>
  );
};

export default MainLayout;
