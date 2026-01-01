import { Variants } from "framer-motion";
import { Box, Container, Typography, Stack, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ShoppingCart,
  Payment,
  PersonOutline,
} from "@mui/icons-material";


export default function OutcomeSection() {
  const outcomes = [
    {
      icon: <CheckCircle sx={{ fontSize: 28 }} />,
      text: "Customers get instant answers",
    },
    {
      icon: <ShoppingCart sx={{ fontSize: 28 }} />,
      text: "Orders and bookings don't stall",
    },
    {
      icon: <Payment sx={{ fontSize: 28 }} />,
      text: "Payments happen during the conversation",
    },
    {
      icon: <PersonOutline sx={{ fontSize: 28 }} />,
      text: "You step in only when needed",
    },
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 16 },
        background: "background.default",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37, 211, 102, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left: Phone Demo Placeholder */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  minHeight: { xs: "400px", md: "550px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Demo Placeholder */}
              
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "480px",
                    height: "550px",
                    bgcolor: "rgba(20, 20, 20, 0.4)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    p: 4,
                  }}
                >
                <Box
                  component="img"
                  src="/gifs/mpesa.gif" 
                  alt="JChats retail automation demo"
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />

                {/* Floating "You're Offline" Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "10%", md: "-5%" },
                    right: { xs: "5%", md: "-5%" },
                    px: 3,
                    py: 1.5,
                    bgcolor: "rgba(20, 20, 20, 0.9)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(37, 211, 102, 0.3)",
                    borderRadius: 2,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: "#888",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#A0A0A0",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      You're Offline
                    </Typography>
                  </Stack>
                </Box>

                {/* Floating "Business Active" Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: "5%", md: "-15%" },
                    left: { xs: "5%", md: "-5%" },
                    px: 3,
                    py: 1.5,
                    bgcolor: "rgba(20, 20, 20, 0.9)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(37, 211, 102, 0.3)",
                    borderRadius: 2,
                    boxShadow: "0 8px 24px rgba(37, 211, 102, 0.2)",
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: "#25D366",
                        animation: "pulse 2s ease-in-out infinite",
                        "@keyframes pulse": {
                          "0%, 100%": {
                            opacity: 1,
                            boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)",
                          },
                          "50%": {
                            opacity: 0.8,
                            boxShadow: "0 0 0 6px rgba(37, 211, 102, 0)",
                          },
                        },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#25D366",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      Business Active
                    </Typography>
                  </Stack>
                </Box>
                </Box>
                </Box>
            </motion.div>
          </Grid>

          {/* Right: Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box>
                {/* Headline */}
                <Typography
                  variant="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: { xs: "2rem", md: "3rem" },
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  Your business stays{" "}
                  <Box component="span" sx={{ color: "#25D366" }}>
                    responsive
                  </Box>
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#A0A0A0",
                    fontWeight: 400,
                    fontSize: { xs: "1.3rem", md: "1.6rem" },
                    mb: 6,
                    lineHeight: 1.4,
                  }}
                >
                  — without you being online.
                </Typography>

                {/* Outcomes List */}
                <Stack spacing={3} sx={{ mb: 6 }}>
                  {outcomes.map((outcome, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            flexShrink: 0,
                            width: 48,
                            height: 48,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            bgcolor: "rgba(37, 211, 102, 0.1)",
                            color: "#25D366",
                            border: "1px solid rgba(37, 211, 102, 0.2)",
                          }}
                        >
                          {outcome.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#fff",
                            fontWeight: 400,
                            fontSize: { xs: "1.1rem", md: "1.25rem" },
                            lineHeight: 1.5,
                          }}
                        >
                          {outcome.text}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>

                {/* CTAs */}
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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
                    See Real Examples
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
                    Ask If This Fits Your Business
                  </Button>
                  {/* Or use: <WhatsAppButton message="Does JChats fit my business?">Ask If This Fits Your Business</WhatsAppButton> */}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
