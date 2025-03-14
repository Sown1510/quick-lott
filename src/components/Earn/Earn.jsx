import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Box, Button, Typography } from "@mui/material";
import TabNavigation from "./TabNavigation";
import TaskItem from "./TaskItem";
import { colors } from "../../theme/colors";
import CustomButton from "../Button/Button";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const tasks = [
  {
    id: 1,
    title: "First time play Jackpod",
    description: "Buy a ticket from Jackpod game",
    reward: "+1 LP",
    category: "mission",
  },
  {
    id: 2,
    title: "First time play Quick lott",
    description: "Buy a ticket from Jackpod game",
    reward: "+1 LP",
    category: "mission",
  },
  {
    id: 3,
    title: "Broaden your affiliate network",
    description: "Invite your friends, referee per 10 peoples to get more passive income.",
    reward: "+1 LP",
    category: "mission",
  },
];

export default function Earn() {
  const [activeTab, setActiveTab] = useState(tasks);
  const [displayedTasks, setDisplayedTasks] = useState(tasks);

  const handleTabChange = (tab) => {};
  const handleShowMore = () => {};

  return (
    <MainLayout>
      <Box>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 400,
            color: colors.text.primary,
            textAlign: "start",
            padding: "5px 10px",
          }}
        >
          Tasks to earn
        </Typography>
        <TabNavigation
          tabs={[
            { id: "mission", label: "Missons" },
            { id: "daily", label: "Daily" },
            { id: "other", label: "Other" },
          ]}
          activeTab={activeTab}
          onChange={handleTabChange}
        />
        <Box>
          {displayedTasks.map((task) => (
            <TaskItem key={task.id} title={task.title} description={task.description} reward={task.reward} />
          ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              onClick={handleShowMore}
              startIcon={<AccessTimeIcon />}
              sx={{
                height: "25px",
                textTransform: "lowercase",
                borderRadius: "20px",
                color: colors.text.accent,
                borderColor: colors.border.accent,
              }}
            >
              more
            </Button>
          </Box>
        </Box>

        {/* Affiliate Section */}
        <Box sx={{ mt: 4, mb: 2 }}>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: 400,
              color: colors.text.primary,
              mb: 2,
              ml: 1,
              textAlign: "left",
            }}
          >
            Affiliate to earn
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100px",
              bgcolor: colors.background.secondary,
              borderRadius: "8px",
              color: colors.text.secondary,
              fontSize: "14px",
              alignItems: "center",
            }}
          >
            affiliate module here
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
}
