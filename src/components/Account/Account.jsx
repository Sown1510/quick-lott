import React from "react";
import MainLayout from "../layout/MainLayout";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import { colors, typography } from "../../theme/colors";
import Profile from "./ProfileSection";
import ProfileSection from "./ProfileSection";
import NotificationSection from "./NotificationSection";
import RewardHistorySection from "./RewardHistorySection";
import HelpSection from "./HelpSection";

// Mock reward history data
const rewardHistory = [
  {
    id: 1,
    title: "First time play Jackpod",
    description: "Buy a ticket from Jackpod game",
    reward: "+1 LP",
  },
  {
    id: 2,
    title: "Jackpod: 2nd prize",
    description: "You've win 2nd prize",
    reward: "+100,18 TON",
  },
];

export default function Account() {
  return (
    <MainLayout>
      <ProfileSection />
      <NotificationSection />
      <RewardHistorySection />
      <HelpSection />
    </MainLayout>
  );
}
