import { useState } from "react";
import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Storefront,
  ContentCut,
  Hotel,
  LocalShipping,
  ArrowForward,
} from "@mui/icons-material";

export default function UseCasesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const useCases = [
    {
      icon: <Storefront sx={{ fontSize: 40 }} />,
      title: "Retail & Food",
      shortDesc: "Orders, payments, confirmations",
      fullDesc: "Customers order, pay, and get confirmation instantly",
      color: "#25D366",
    },
    {
      icon: <ContentCut sx={{ fontSize: 40 }} />,
      title: "Salons & Clinics",
      shortDesc: "Bookings, deposits, reminders",
      fullDesc: "Appointments booked, deposits paid, reminders sent",
      color: "#25D366",
    },
    {
      icon: <Hotel sx={{ fontSize: 40 }} />,
      title: "Hotels & Hospitality",
      shortDesc: "Reservations and payments",
      fullDesc: "Bookings and payments handled automatically",
      color: "#25D366",
    },
    {
      icon: <LocalShipping sx={{ fontSize: 40 }} />,
      title: "Delivery & Logistics",
      shortDesc: "Tracking, assignments, payments",
      fullDesc: "Orders tracked, drivers assigned, payments collected",
      color: "#25D366",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 16 },
        bgcolor: "#000",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37, 211, 102, 0.06) 0%, transparent 70%)",
          filter: "blur(140px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Works for your business —{" "}
              <Box
                component="span"
                sx={{
                  color: "#25D366",
                  display: { xs: "block", md: "inline" },
                }}
              >
                no matter the industry.
              </Box>
            </Typography>
          </Box>
        </motion.div>

        {/* Use Cases Grid */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {useCases.map((useCase, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    minHeight: "240px",
                    p: 4,
                    bgcolor:
                      hoveredIndex === index
                        ? "rgba(37, 211, 102, 0.05)"
                        : "rgba(20, 20, 20, 0.4)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid",
                    borderColor:
                      hoveredIndex === index
                        ? "rgba(37, 211, 102, 0.4)"
                        : "rgba(255, 255, 255, 0.08)",
                    borderRadius: 3,
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 60px rgba(37, 211, 102, 0.15)",
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      display: "inline-flex",
                      p: 2,
                      borderRadius: 2,
                      bgcolor:
                        hoveredIndex === index
                          ? "rgba(37, 211, 102, 0.15)"
                          : "rgba(37, 211, 102, 0.08)",
                      color: "#25D366",
                      border: "1px solid rgba(37, 211, 102, 0.2)",
                      mb: 3,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {useCase.icon}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: { xs: "1.3rem", md: "1.5rem" },
                      mb: 1.5,
                      lineHeight: 1.3,
                    }}
                  >
                    {useCase.title}
                  </Typography>

                  {/* Content - Transitions between short and full */}
                  <AnimatePresence mode="wait">
                    {hoveredIndex === index ? (
                      <motion.div
                        key="full"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#25D366",
                            fontSize: "1.1rem",
                            lineHeight: 1.7,
                            fontWeight: 500,
                          }}
                        >
                          {useCase.fullDesc}
                        </Typography>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="short"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#A0A0A0",
                            fontSize: "1rem",
                            lineHeight: 1.7,
                          }}
                        >
                          {useCase.shortDesc}
                        </Typography>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Arrow indicator on hover */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      right: 20,
                      opacity: hoveredIndex === index ? 1 : 0,
                      transform:
                        hoveredIndex === index
                          ? "translateX(0)"
                          : "translateX(-10px)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ArrowForward
                      sx={{
                        color: "#25D366",
                        fontSize: 28,
                      }}
                    />
                  </Box>

                  {/* Subtle glow effect on hover */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -50,
                      right: -50,
                      width: 150,
                      height: 150,
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(37, 211, 102, 0.2) 0%, transparent 70%)",
                      opacity: hoveredIndex === index ? 1 : 0,
                      transition: "opacity 0.4s ease",
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                size="large"
                variant="outlined"
                sx={{
                  color: "#25D366",
                  borderColor: "rgba(37, 211, 102, 0.5)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#25D366",
                    bgcolor: "rgba(37, 211, 102, 0.05)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Find Your Business Type
              </Button>

              <Button
                size="large"
                variant="contained"
                sx={{
                  bgcolor: "#25D366",
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "1rem",
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  boxShadow: "0 4px 20px rgba(37, 211, 102, 0.3)",
                  "&:hover": {
                    bgcolor: "#20bd5a",
                    boxShadow: "0 6px 28px rgba(37, 211, 102, 0.4)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Ask If This Works for Your Business
              </Button>
              {/* Or use: <WhatsAppButton message="Does JChats work for my type of business?">Ask If This Works for Your Business</WhatsAppButton> */}
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
