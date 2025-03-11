import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Countdown from "../components/Countdown/Countdown";
import RoundHistory from "../components/RoundHistory/RoundHistory";
import Button from "../components/Button/Button";
import { colors, typography } from "../theme/colors";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Set target date to 7 days from now for demo
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  const navigate = useNavigate();

  const handleBuyTicket = () => {
    navigate("/buy-ticket");
  };

  // Mock data for previous rounds
  const previousRounds = [
    {
      roundNumber: "6191",
      date: "Jan 01, 2024, 16:00",
      hasMyTicket: true,
      reward: "Jackpot + 2rd prize",
      prizes: [
        {
          title: "Jackpot 1",
          amount: "100",
          winTickets: 0,
        },
        {
          title: "Jackpot 2",
          amount: "100",
          winTickets: 2,
        },
        {
          title: "Second prize",
          amount: "100",
          winTickets: 5,
        },
        {
          title: "Second prize",
          amount: "100",
          winTickets: 22,
        },
      ],
    },
    {
      roundNumber: "6190",
      date: "Dec 31, 2023, 16:00",
      hasMyTicket: false,
      prizes: [
        {
          title: "Jackpot 1",
          amount: "100",
          winTickets: 1,
        },
        {
          title: "Jackpot 2",
          amount: "100",
          winTickets: 3,
        },
        {
          title: "Second prize",
          amount: "100",
          winTickets: 8,
        },
        {
          title: "Second prize",
          amount: "100",
          winTickets: 15,
        },
      ],
    },
  ];

  return (
    <MainLayout>
      {/* Countdown Timer */}
      <Box sx={{ padding: "20px 17px", position: "relative" }}>
        <Countdown targetDate={targetDate} />
        <Typography
          sx={{
            position: "absolute",
            right: 30,
            top: 25,
            color: colors.text.primary,
            fontSize: typography.fontSize.xl,
            fontFamily: typography.fontFamily.title,
            fontWeight: typography.fontWeight.medium,
            lineHeight: typography.lineHeight.relaxed,
            letterSpacing: typography.letterSpacing.normal,
          }}
        >
          #6192
        </Typography>
      </Box>

      {/* Buy Ticket Button */}
      <Box sx={{ padding: "0 17px", marginBottom: 5 }}>
        <Button onClick={handleBuyTicket} fullWidth>
          Buy Ticket
        </Button>
      </Box>

      {/* Prize Sections */}
      <Box sx={{ padding: "0 13px" }}>
        <PrizeSection title="Jackpot 1" amount="31,753" currency="TON" usdValue="31.5k" isHighlight />

        <Box sx={{ marginTop: 0 }}>
          <Box sx={{ display: "flex", gap: 20 }}>
            <PrizeSection title="Second prize" amount="15,000" currency="TON" usdValue="15k" />
            <PrizeSection title="Third prize" amount="7,500" currency="TON" usdValue="7.5k" />
          </Box>
        </Box>
      </Box>

      {/* Previous Rounds */}
      <RoundHistory rounds={previousRounds} />
    </MainLayout>
  );
};

const PrizeSection = ({ title, amount, currency, usdValue, isHighlight }) => {
  const textColor = isHighlight ? colors.prize.jackpot : colors.text.primary;

  return (
    <Box style={{ marginTop: 0 }}>
      <Box
        sx={{
          color: colors.text.primary,
          fontSize: typography.fontSize.sm,
          fontFamily: typography.fontFamily.primary,
          fontWeight: typography.fontWeight.medium,
          lineHeight: typography.lineHeight.tight,
          letterSpacing: typography.letterSpacing.wide,
        }}
      >
        {title}
      </Box>
      <Box style={{ marginTop: 0 }}>
        <Typography
          sx={{
            color: textColor,
            fontSize: typography.fontSize.base,
            fontWeight: typography.fontWeight.medium,
            lineHeight: typography.lineHeight.relaxed,
            letterSpacing: typography.letterSpacing.normal,
          }}
        >
          est{" "}
        </Typography>
        <Typography
          sx={{
            color: textColor,
            fontSize: typography.fontSize.xl,
            fontWeight: typography.fontWeight.medium,
            lineHeight: typography.lineHeight.relaxed,
            letterSpacing: typography.letterSpacing.normal,
          }}
        >
          {amount} {currency}{" "}
        </Typography>
        <Typography
          sx={{
            color: textColor,
            fontSize: typography.fontSize.base,
            fontWeight: typography.fontWeight.medium,
            lineHeight: typography.lineHeight.relaxed,
            letterSpacing: typography.letterSpacing.normal,
          }}
        >
          (~${usdValue})
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
