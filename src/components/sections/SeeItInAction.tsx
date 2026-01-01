import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import {useNavigate} from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";

const SeeItInAction: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/use-cases");
  };
  
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: "background.default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37, 211, 102, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* LEFT: Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{
                display: "block",
                mb: 3,
                color: "primary.main",
                letterSpacing: "0.15em",
                fontWeight: 600,
              }}
            >
              PROOF
            </Typography>

            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontSize: { xs: "2.5rem", md: "3rem" },
              }}
            >
              See It In{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Action
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontWeight: 400,
                color: "text.secondary",
                lineHeight: 1.6,
              }}
            >
              Orders, payments, and delivery—
              <br />
              handled inside WhatsApp.
            </Typography>

            <Box
              sx={{
                mb: 6,
                pl: 3,
                borderLeft: "3px solid",
                borderColor: "primary.main",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                Result: Orders completed in minutes.
                <br />
                Payment collected instantly.
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForward />}
              onClick={handleClick}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                backgroundColor: "primary.main",
                color: "#000",
                boxShadow: "0 4px 16px rgba(37, 211, 102, 0.3)",
                "&:hover": {
                  backgroundColor: "primary.light",
                  boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
                },
              }}
            >
              See How This Works for Your Industry
            </Button>
          </Grid>

          {/* RIGHT: GIF/Phone Mockup */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 350,
                mx: "auto",
              }}
            >
              {/* Phone Frame/Border */}
              <Box
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 20px 60px rgba(37, 211, 102, 0.2)",
                }}
              >
                {/* GIF Container */}
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    backgroundColor: "#000",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box
                    component="img"
                    src="/gifs/retail.gif" 
                    alt="JChats retail automation demo"
                    loading="lazy"
                    decoding="async"
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                  {/* Placeholder if GIF not ready */}
                  {/* <Box
                    sx={{
                      aspectRatio: "9/16",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#0A0A0A",
                    }}
                  >
                    <Typography variant="h6" sx={{ color: "text.disabled" }}>
                      [Retail Demo]
                    </Typography>
                  </Box> */}
                </Box>
              </Box>

              {/* Floating accent elements */}
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  opacity: 0.1,
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: -30,
                  left: -30,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  opacity: 0.08,
                  zIndex: 0,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SeeItInAction;
