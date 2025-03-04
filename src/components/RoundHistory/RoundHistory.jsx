import React from 'react';
import { colors, typography } from '../../theme/colors';

const RoundHistory = ({ rounds }) => {
  return (
    <div style={{ padding: '0 13px', marginTop: '30px' }}>
      <div style={{
        color: colors.text.primary,
        fontSize: '20px',
        fontFamily: typography.fontFamily.title,
        marginBottom: '20px',
      }}>
        Previous Rounds
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {rounds.map((round, index) => (
          <RoundCard key={index} {...round} />
        ))}
      </div>
    </div>
  );
};

const RoundCard = ({ roundNumber, date, hasMyTicket, reward, prizes }) => {
  return (
    <div style={{
      background: colors.background.secondary,
      borderRadius: '16px',
      padding: '16px',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      }}>
        <div style={{
          color: colors.text.primary,
          fontSize: typography.fontSize.lg,
          fontFamily: typography.fontFamily.title,
          fontWeight: typography.fontWeight.medium
        }}>
          Round #{roundNumber}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            color: colors.text.secondary,
            fontSize: typography.fontSize.sm,
            fontFamily: typography.fontFamily.primary
          }}>
            {date}
          </div>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11.475 12.525L12.525 11.475L9.75 8.7V5.25H8.25V9.3L11.475 12.525ZM9 16.5C7.9625 16.5 6.9875 16.3031 6.075 15.9094C5.1625 15.5156 4.36875 14.9813 3.69375 14.3063C3.01875 13.6313 2.48438 12.8375 2.09063 11.925C1.69687 11.0125 1.5 10.0375 1.5 9C1.5 7.9625 1.69687 6.9875 2.09063 6.075C2.48438 5.1625 3.01875 4.36875 3.69375 3.69375C4.36875 3.01875 5.1625 2.48438 6.075 2.09063C6.9875 1.69687 7.9625 1.5 9 1.5C10.0375 1.5 11.0125 1.69687 11.925 2.09063C12.8375 2.48438 13.6313 3.01875 14.3063 3.69375C14.9813 4.36875 15.5156 5.1625 15.9094 6.075C16.3031 6.9875 16.5 7.9625 16.5 9C16.5 10.0375 16.3031 11.0125 15.9094 11.925C15.5156 12.8375 14.9813 13.6313 14.3063 14.3063C13.6313 14.9813 12.8375 15.5156 11.925 15.9094C11.0125 16.3031 10.0375 16.5 9 16.5Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* My Ticket Button */}
      {hasMyTicket && (
        <>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: colors.accent,
            borderRadius: '40px',
            padding: '4px 10px',
            gap: '3px',
            marginTop: '8px'
          }}>
            <span style={{
              color: colors.text.tertiary,
              fontSize: '15px',
              fontFamily: typography.fontFamily.primary,
              lineHeight: '20px'
            }}>
              My ticket
            </span>
          </div>
          
          {/* Reward */}
          <div style={{
            color: '#008000',
            fontSize: typography.fontSize.sm,
            fontFamily: typography.fontFamily.primary,
            fontWeight: typography.fontWeight.medium,
            marginTop: '8px'
          }}>
            Your reward: {reward}
          </div>
        </>
      )}

      {/* Prizes Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        marginTop: '16px'
      }}>
        {prizes.map((prize, index) => (
          <div key={index}>
            <div style={{
              color: colors.text.primary,
              fontSize: typography.fontSize.sm,
              fontFamily: typography.fontFamily.primary,
              fontWeight: typography.fontWeight.medium,
              marginBottom: '6px'
            }}>
              {prize.title}
            </div>
            <div style={{
              color: colors.accent,
              fontSize: typography.fontSize.base,
              fontFamily: typography.fontFamily.primary,
              fontWeight: typography.fontWeight.medium,
              marginBottom: '4px'
            }}>
              {prize.amount} TON
            </div>
            <div style={{
              color: colors.text.secondary,
              fontSize: typography.fontSize.sm,
              fontFamily: typography.fontFamily.primary,
              fontWeight: typography.fontWeight.medium
            }}>
              {prize.winTickets} win ticket{prize.winTickets !== 1 ? 's' : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoundHistory;
