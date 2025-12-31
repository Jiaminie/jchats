import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp } from "../../hooks/useScrollAnimation";
import { CustomButton } from "../ui";

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  primaryAction?: { text: string; onClick: () => void };
  secondaryAction?: { text: string; onClick: () => void };
  showImage?: boolean;
  image?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  showImage = true,
  image,
}) => {
  const { ref, controls } = useScrollAnimation();
  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        background: "background.default",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 10, md: 0 },

        backgroundImage: {
          xs: image ? `url(${image})` : "none",
          md: "none",
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 0,
        },
      }}
    >
      {/* Subtle Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37, 211, 102, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left: Copy */}
          <Grid item xs={12} md={showImage ? 6 : 12}>
            <motion.div initial="hidden" animate={controls} variants={fadeInUp}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  mb: 3,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                  textAlign: showImage ? "left" : "center",
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 6,
                  color: "#A0A0A0",
                  fontSize: "1.25rem",
                  lineHeight: 1.7,
                  maxWidth: "600px",
                  textAlign: showImage ? "left" : "center",
                  mx: showImage ? "0" : "auto",
                }}
              >
                {subtitle}
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent={showImage ? "flex-start" : "center"}
              >
                {primaryAction && (
                  <CustomButton
                    size="large"
                    variant="whatsapp"
                    color="primary"
                    onClick={primaryAction.onClick}
                  >
                    {primaryAction.text}
                  </CustomButton>
                )}
                {secondaryAction && (
                  <CustomButton
                    size="large"
                    variant="secondary"
                    color="primary"
                    onClick={secondaryAction.onClick}
                  >
                    {secondaryAction.text}
                  </CustomButton>
                )}
              </Stack>
            </motion.div>
          </Grid>

          {/* Right: Phone Mockup */}
          {showImage && (
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  pr={{ xs: 0, md: 2 }}
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "400px", md: "500px" },
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/*Image*/}
                  <img
                    src={image}
                    alt="JChats Hero Mockup"
                    style={{
                      width: "auto",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      textAlign: "center",
                    }}
                  ></Box>

                  {/* Floating Stats */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "10%",
                      left: "-5%",
                      p: 2.5,
                      bgcolor: "rgba(20, 20, 20, 0.8)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(37, 211, 102, 0.2)",
                      borderRadius: 2,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                      minWidth: "140px",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "#A0A0A0", display: "block", mb: 0.5 }}
                    >
                      Orders Today
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "#25D366", fontWeight: 700 }}
                    >
                      +127
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "#25D366", fontWeight: 600 }}
                    >
                      ▲ 40% increase
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      top: "-5%",
                      right: "5%",
                      p: 2.5,
                      bgcolor: "rgba(20, 20, 20, 0.8)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(37, 211, 102, 0.2)",
                      borderRadius: 2,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                      minWidth: "160px",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "#A0A0A0", display: "block", mb: 0.5 }}
                    >
                      M-Pesa Payments
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "#25D366",
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: "#F5F5F5", fontWeight: 600 }}
                      >
                        Instant & Secure
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
