import React, { useState, useEffect } from 'react';
import { colors, typography } from '../../theme/colors';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        background: colors.background.secondary,
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.accent,
        fontSize: '28px',
        fontFamily: typography.fontFamily.title,
        fontWeight: typography.fontWeight.medium
      }}>
        {String(value).padStart(2, '0')}
      </div>
      <div style={{
        color: colors.text.secondary,
        fontSize: typography.fontSize.sm,
        fontFamily: typography.fontFamily.primary,
        fontWeight: typography.fontWeight.medium
      }}>
        {label}
      </div>
    </div>
  );

  return (
    <div style={{
      width: '337px',
      height: '200px',
      background: colors.background.accent,
      borderRadius: '8px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px'
    }}>
      <div style={{
        color: colors.text.primary,
        fontSize: '20px',
        fontFamily: typography.fontFamily.title,
        fontWeight: typography.fontWeight.medium
      }}>
        Next Draw In
      </div>
      
      <div style={{
        display: 'flex',
        gap: '16px',
        justifyContent: 'center'
      }}>
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default Countdown;
