import React, { useEffect, useState } from 'react';
import { colors, typography } from '../../theme/colors';
import { Card, CardContent, Grid2, Typography } from '@mui/material';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [targetDate, timeLeft]);

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    let time = {};
    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return time;
  };

  const TimeBox = ({ value, label }) => (
    <Grid2 item xs={3}>
      <Card sx={{background: colors.background.secondary, borderRadius: 2, display: 'flex', alignItems:'center', justifyContent:'center', color: colors.accent, height: 60}}>
        <CardContent>
          <Typography sx={{fontSize: 28, fontFamily: typography.fontFamily.title, fontWeight: typography.fontWeight.medium}}>
            {String(value).padStart(2, '0')}
          </Typography>
        </CardContent>
      </Card>
      <Typography sx={{color: colors.text.secondary, fontSize: typography.fontSize.sm, fontFamily: typography.fontFamily.primary, fontWeight: typography.fontWeight.medium}}>
        {label}
      </Typography>
    </Grid2>
  );

  return (
    <Card sx={{width: 337, height: 200, background: colors.background.accent, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px'}}>
      <CardContent>
        <Typography sx={{color: colors.text.primary, fontSize: 20, fontFamily: typography.fontFamily.title, fontWeight: typography.fontWeight.medium}}>
          Next Draw In
        </Typography>
        <Grid2 container spacing={1} justifyContent="center">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours"/>
          <TimeBox value={timeLeft.minutes} label="Minutes"/>
          <TimeBox value={timeLeft.seconds} label="Seconds"/>
        </Grid2>
      </CardContent>
    </Card>
  );
  
};

export default Countdown;
