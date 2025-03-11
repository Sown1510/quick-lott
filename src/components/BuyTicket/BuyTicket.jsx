import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Grid, Chip, IconButton, Divider } from "@mui/material";
import { colors } from "../../theme/colors";
import CustomButton from "../Button/Button";
import MainLayout from "../layout/MainLayout";

const BuyTicket = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  console.log('hi');
  return (
    <MainLayout>
      <Box sx={{ padding: "20px", maxWidth: "480px", margin: "0 auto" }}>
        <Typography
          variant="h1"
          sx={{
            color: colors.text.primary,
            fontSize: "24px",
            fontWeight: 700,
            marginBottom: "24px",
            textAlign: "left",
          }}
        >
          Buy Ticket
        </Typography>

        {/* Number Selection Card */}
        <Card
          sx={{
            background: colors.background.secondary,
            borderRadius: "16px",
            marginBottom: "24px",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{
                  color: colors.text.primary,
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Select 6 Numbers
              </Typography>
              <Box sx={{ display: "flex", gap: "12px" }}>
                <CustomButton
                  variant="outlined"
                  sx={{
                    color: colors.accent,
                    borderColor: colors.accent,
                  }}
                >
                  Random
                </CustomButton>
                <CustomButton variant="text" sx={{ color: colors.text.secondary }}>
                  Clear
                </CustomButton>
              </Box>
            </Box>

            {/* Number Grid */}
            <Grid container spacing={1} sx={{ marginBottom: "20px" }}>
              {[...Array(49)].map((_, idx) => (
                <Grid item xs={2} key={idx + 1}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: colors.background.accent,
                      color: colors.text.secondary,
                      cursor: "pointer",
                      "&:hover": {
                        background: colors.accent,
                        color: colors.text.tertiary,
                      },
                    }}
                  >
                    {idx + 1}
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Selected Numbers Display */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <Chip
                  key={num}
                  label={num}
                  sx={{
                    background: colors.accent,
                    color: colors.text.tertiary,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* Quantity Selection Card */}
        <Card
          sx={{
            background: colors.background.secondary,
            borderRadius: "16px",
            marginBottom: "24px",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                color: colors.text.primary,
                fontSize: "18px",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Ticket Quantity
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <IconButton
                  sx={{
                    background: colors.background.accent,
                    width: "40px",
                    height: "40px",
                  }}
                >
                  -
                </IconButton>
                <Typography
                  sx={{
                    color: colors.text.primary,
                    fontSize: "20px",
                    fontWeight: 500,
                  }}
                >
                  {ticketQuantity}
                </Typography>
                <IconButton
                  sx={{
                    background: colors.background.accent,
                    width: "40px",
                    height: "40px",
                  }}
                >
                  +
                </IconButton>
              </Box>
              <Typography sx={{ color: colors.text.secondary }}>5 USDT per ticket</Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Price Summary Card */}
        <Card
          sx={{
            background: colors.background.secondary,
            borderRadius: "16px",
            marginBottom: "24px",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <Typography sx={{ color: colors.text.secondary }}>Ticket Price</Typography>
              <Typography sx={{ color: colors.text.primary }}>5 USDT</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <Typography sx={{ color: colors.text.secondary }}>Quantity</Typography>
              <Typography sx={{ color: colors.text.primary }}>{ticketQuantity}</Typography>
            </Box>

            <Divider
              sx={{
                background: colors.background.accent,
                margin: "16px 0",
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: colors.text.primary,
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Total
              </Typography>
              <Typography
                sx={{
                  color: colors.accent,
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                {5 * ticketQuantity} USDT
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Buy Button */}
        <CustomButton
          fullWidth
          sx={{
            background: colors.primary,
            color: colors.text.primary,
            padding: "14px",
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "12px",
          }}
        >
          Buy Tickets
        </CustomButton>
      </Box>
    </MainLayout>
  );
};

export default BuyTicket;
