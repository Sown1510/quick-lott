import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Grid2, Chip, IconButton, Divider, Checkbox } from "@mui/material";
import { colors } from "../../theme/colors";
import CustomButton from "../Button/Button";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MainLayout from "../layout/MainLayout";
import TicketLine from "./TicketLine";
import TotalSummary from "./TotalSummary";
import { useNavigate } from "react-router-dom";

const BuyTicket = () => {
  const navigate = useNavigate();
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [tickets, setTickets] = useState([0]);
  const PRICE_PER_TICKET = 2;

  const handleAddTicket = () => {
    setTickets([...tickets, tickets.length]);
  };

  const handleRemoveTicket = (indexToRemove) => {
    setTickets(tickets.filter((_, idx) => idx !== indexToRemove));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleBuyTickets = () => {
    alert(`Buyed ${tickets.length} tickets`);
  };

  return (
    <MainLayout>
      <Box sx={{ padding: "16px", maxWidth: "480px", margin: "0 auto" }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
          <Typography sx={{ color: colors.text.primary, fontSize: "24px", fontWeight: 700, textAlign: "left" }}>Buy Ticket</Typography>
        </Box>

        {/* Number Selection Card */}
        <Card>
          <CardContent sx={{ background: colors.background.secondary }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <Typography sx={{ fontSize: "18px", color: colors.text.primary }}>Round #6192</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <AccessTimeIcon sx={{ fontSize: "20px", color: colors.text.primary }} />
                <Typography sx={{ fontSize: "12px", color: colors.text.primary }}>Jan 01, 2024, 16:00</Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "14px", textAlign: "left", color: colors.text.primary }}>Each ticket include 6 number from 00-45.</Typography>
              <Typography sx={{ fontSize: "14px", textAlign: "left", color: colors.text.primary }}>Please fill correctly.</Typography>
            </Box>
            <Box>
              {tickets.map((_, idx) => (
                <TicketLine key={idx} index={idx} onRemove={() => handleRemoveTicket(idx)} />
              ))}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  gap: "8px",
                  padding: "4px 12px",
                  cursor: "pointer",
                  color: colors.text.black,
                  "&:hover": {
                    color: colors.accent,
                  },
                }}
              >
                <CustomButton onClick={handleAddTicket} sx={{ width: "28px", height: "28px", minWidth: "28px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Typography sx={{ fontSize: "20px" }}>+</Typography>
                </CustomButton>
              </Box>
            </Box>
            <TotalSummary ticketCount={tickets.length} pricePerTicket={PRICE_PER_TICKET} />
            <Box sx={{ marginTop: "20px", display: "flex", gap: "16px", justifyContent: "space-between" }}>
              <CustomButton onClick={handleCancel} sx={{ background: "transparent", color: colors.text.secondary, fontSize: "14px" }}>
                Cancel
              </CustomButton>
              <CustomButton onClick={handleBuyTickets}>Buy {tickets.length} Ticket</CustomButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </MainLayout>
  );
};

export default BuyTicket;
