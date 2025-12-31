import React from "react";
import { Box, Typography, Container, Grid, Stack, Divider } from "@mui/material";
import { Hero, MasterCTA, FeatureCard } from "../components";
import { TrendingUp, Security, Autorenew, Public } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const values = [
    {
      title: "Scale First",
      description: "We build systems that don't just work today, but scale with your enterprise as it grows across borders.",
      icon: <TrendingUp />,
    },
    {
      title: "Enterprise Governance",
      description: "Your data is your property. We provide the tools to govern, secure, and monitor every interaction.",
      icon: <Security />,
    },
    {
      title: "Obsessive Automation",
      description: "If it can be automated, it should be. We focus on removing the manual friction from B2B commerce.",
      icon: <Autorenew />,
    },
    {
      title: "Pan-African Vision",
      description: "Rooted in Kenya, building for Africa. We understand the unique challenges of the continent's digital economy.",
      icon: <Public />,
    },
  ];

  return (
    <Box>
      <Hero
        title={
          <>
            Building the Operating System for{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              African Commerce
            </Box>
          </>
        }
        subtitle="We're on a mission to transform how B2B enterprises sell, scale, and govern their revenue across messaging platforms."
        showImage={false}
        image="/images/hero.jpeg"
      />

      {/* MISSION SECTION */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  mb: 2,
                  display: "block",
                }}
              >
                OUR MISSION
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.1,
                }}
              >
                Moving Africa Away from Manual Chaos
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  mb: 4,
                }}
              >
                For too long, B2B commerce in Africa has been trapped in manual DM threads. Enterprises struggle to track leads, manage complex bookings, and govern their sales teams across WhatsApp, Instagram, and Messenger.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  color: "text.secondary",
                }}
              >
                JChats (by Jiaminie Tech) was born to solve this. We provide the enterprise-grade revenue stack that turns messaging into a powerful, automated sales engine.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  borderRadius: 4,
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Stack spacing={4}>
                  <Box>
                    <Typography variant="h3" sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}>
                      24/7
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Automated Engagement
                    </Typography>
                  </Box>
                  <Divider sx={{ opacity: 0.1 }} />
                  <Box>
                    <Typography variant="h3" sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}>
                      300%
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Average Sales Efficiency Increase
                    </Typography>
                  </Box>
                  <Divider sx={{ opacity: 0.1 }} />
                  <Box>
                    <Typography variant="h3" sx={{ color: "primary.main", fontWeight: 700, mb: 1 }}>
                      0%
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Manual Data Entry Errors
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* VALUES SECTION */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          backgroundColor: "background.paper",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              variant="overline"
              sx={{ color: "text.disabled", fontWeight: 600, letterSpacing: "0.15em", mb: 2, display: "block" }}
            >
              OUR CORE VALUES
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              The Principles That Drive Us
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureCard
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* STORY SECTION */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: "center" }}>
            The Journey to JChats
          </Typography>
          <Stack spacing={6}>
            <Typography variant="body1" sx={{ fontSize: "1.25rem", lineHeight: 1.8, color: "text.secondary", textAlign: "center" }}>
              Starting as a boutique technology firm in Nairobi, we saw firsthand how the most ambitious businesses in Africa were being held back by their tools. They had the products and the passion, but their "tech stack" was limited to fragmented PDF menus and manual bookkeeping.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.25rem", lineHeight: 1.8, color: "text.secondary", textAlign: "center" }}>
              We built JChats to fulfill a single promise: To give every enterprise in Africa the same level of automation and governance that the world's largest companies enjoy, right where their customers are.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <MasterCTA
        title="Ready to Scale Your Enterprise?"
        subtitle="Join the leading businesses using JChats to automate their revenue stack."
        primaryButton={{
          text: "View Success Stories",
          action: () => navigate("/success-stories"),
        }}
        secondaryButton={{
          text: "Start System Audit",
          action: () => navigate("/get-started"),
        }}
      />
    </Box>
  );
};

export default AboutPage;
