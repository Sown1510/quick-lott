import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Countdown from '../components/Countdown/Countdown';
import RoundHistory from '../components/RoundHistory/RoundHistory';
import Button from '../components/Button/Button';
import { colors, typography } from '../theme/colors';

const Home = () => {
  // Set target date to 7 days from now for demo
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  // Mock data for previous rounds
  const previousRounds = [
    {
      roundNumber: '6191',
      date: 'Jan 01, 2024, 16:00',
      hasMyTicket: true,
      reward: 'Jackpot + 2rd prize',
      prizes: [
        {
          title: 'Jackpot 1',
          amount: '100',
          winTickets: 0
        },
        {
          title: 'Jackpot 2',
          amount: '100',
          winTickets: 2
        },
        {
          title: 'Second prize',
          amount: '100',
          winTickets: 5
        },
        {
          title: 'Second prize',
          amount: '100',
          winTickets: 22
        }
      ]
    },
    {
      roundNumber: '6190',
      date: 'Dec 31, 2023, 16:00',
      hasMyTicket: false,
      prizes: [
        {
          title: 'Jackpot 1',
          amount: '100',
          winTickets: 1
        },
        {
          title: 'Jackpot 2',
          amount: '100',
          winTickets: 3
        },
        {
          title: 'Second prize',
          amount: '100',
          winTickets: 8
        },
        {
          title: 'Second prize',
          amount: '100',
          winTickets: 15
        }
      ]
    }
  ];

  const handleBuyTicket = () => {
    // Handle navigation to buy ticket page
    console.log('Navigate to buy ticket page');
  };

  return (
    <MainLayout>
      {/* Countdown Timer */}
      <div style={{ padding: '20px 17px', position: 'relative' }}>
        <Countdown targetDate={targetDate} />
        <div style={{
          position: 'absolute',
          right: 30,
          top: 25,
          color: colors.text.primary,
          fontSize: typography.fontSize.xl,
          fontFamily: typography.fontFamily.title,
          fontWeight: typography.fontWeight.medium,
          lineHeight: typography.lineHeight.relaxed,
          letterSpacing: typography.letterSpacing.normal
        }}>
          #6192
        </div>
      </div>

      {/* Buy Ticket Button */}
      <div style={{ padding: '0 17px', marginBottom: 30 }}>
        <Button
          onClick={handleBuyTicket}
          fullWidth
        >
          Buy Ticket
        </Button>
      </div>

      {/* Prize Sections */}
      <div style={{ padding: '0 13px' }}>
        <PrizeSection
          title="Jackpot 1"
          amount="31,753"
          currency="TON"
          usdValue="31.5k"
          isHighlight
        />

        <div style={{ marginTop: 30 }}>
          <div style={{ display: 'flex', gap: 20 }}>
            <PrizeSection
              title="Second prize"
              amount="15,000"
              currency="TON"
              usdValue="15k"
            />
            <PrizeSection
              title="Third prize"
              amount="7,500"
              currency="TON"
              usdValue="7.5k"
            />
          </div>
        </div>
      </div>

      {/* Previous Rounds */}
      <RoundHistory rounds={previousRounds} />
    </MainLayout>
  );
};

const PrizeSection = ({ title, amount, currency, usdValue, isHighlight }) => {
  const textColor = isHighlight ? colors.prize.jackpot : colors.text.primary;
  
  return (
    <div style={{ marginTop: 20 }}>
      <div style={{
        color: colors.text.primary,
        fontSize: typography.fontSize.sm,
        fontFamily: typography.fontFamily.primary,
        fontWeight: typography.fontWeight.medium,
        lineHeight: typography.lineHeight.tight,
        letterSpacing: typography.letterSpacing.wide
      }}>
        {title}
      </div>
      <div style={{ marginTop: 5 }}>
        <span style={{
          color: textColor,
          fontSize: typography.fontSize.base,
          fontWeight: typography.fontWeight.medium,
          lineHeight: typography.lineHeight.relaxed,
          letterSpacing: typography.letterSpacing.normal
        }}>
          est{' '}
        </span>
        <span style={{
          color: textColor,
          fontSize: typography.fontSize.xl,
          fontWeight: typography.fontWeight.medium,
          lineHeight: typography.lineHeight.relaxed,
          letterSpacing: typography.letterSpacing.normal
        }}>
          {amount} {currency}{' '}
        </span>
        <span style={{
          color: textColor,
          fontSize: typography.fontSize.base,
          fontWeight: typography.fontWeight.medium,
          lineHeight: typography.lineHeight.relaxed,
          letterSpacing: typography.letterSpacing.normal
        }}>
          (~${usdValue})
        </span>
      </div>
    </div>
  );
};

export default Home;
