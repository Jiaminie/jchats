import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import { Hero, MasterCTA } from "../components";
import {
  BlockOutlined,
  SecurityOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";

const GetStartedPage: React.FC = () => {
  return (
    <Box sx={{ marginTop: 4 }}>
      {/* HERO SECTION */}
      <Hero
        title={
          <>
            Go Live in Days—
            <br />
            <Box component="span" sx={{ color: "primary.main" }}>
              Without Disrupting Your Business
            </Box>
          </>
        }
        subtitle="Getting started with JChats is simple, guided, and low-effort. From your first conversation to a live system, we handle the heavy lifting so you can stay focused on running your business."
        primaryAction={{
          text: "Talk to an Expert",
          onClick: () => console.log("Talk to an Expert"),
        }}
        secondaryAction={{
          text: "See How It Works",
          onClick: () => console.log("See How It Works"),
        }}
        showImage={true}
      />

      {/* SECTION 1: REASSURANCE ABOVE THE FOLD */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          background: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              mx: "auto",
              mb: 6,
              textAlign: { xs: "center", md: "left" },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                py: 1,
                fontWeight: 600,
                letterSpacing: "-0.03em",
                fontSize: { xs: "1.5rem", md: "2.0rem" },
                lineHeight: 1.0,
                background:
                  "linear-gradient(90deg, #25D366 0%, #073d1fff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              No technical setup. No complicated onboarding.
              <br />
              No pressure{" "}
              <span
                style={{
                  fontStyle: "italic",
                }}
              >
                to commit before you're ready.{" "}
              </span>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* SECTION 2: WHAT HAPPENS NEXT (HIGH-LEVEL FLOW) */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              display: "block",
              mb: 3,
              textAlign: "center",
              color: "text.disabled",
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            THE PROCESS
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              mb: 12,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            A Simple, Guided Journey—
            <br />
            Designed Around You
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 10,
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Getting started with JChats follows a clear, structured flow.
            <br />
            You don't need to manage it—we guide you through each phase.
          </Typography>

          {/* Three Phase Flow */}
          <Box sx={{ position: "relative" }}>
            {/* Vertical spine line */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                left: "50%",
                top: 60,
                bottom: 60,
                width: 2,
                backgroundColor: "divider",
                transform: "translateX(-50%)",
                zIndex: 0,
              }}
            />

            <Stack spacing={8}>
              {[
                {
                  step: "01",
                  title: "Understand",
                  description:
                    "We start by learning how your business operates, how customers reach you, and where conversations turn into revenue.",
                },
                {
                  step: "02",
                  title: "Configure",
                  description:
                    "Behind the scenes, we prepare your system to reflect your rules, channels, and approval boundaries.",
                },
                {
                  step: "03",
                  title: "Activate",
                  description:
                    "Once everything is aligned, your channels go live—responding, qualifying, and progressing customers automatically.",
                },
              ].map((phase, index) => (
                <Grid
                  container
                  spacing={4}
                  key={index}
                  alignItems="center"
                  sx={{ position: "relative", zIndex: 1 }}
                >
                  {/* Left side (odd) or Right side (even) */}
                  <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                      order: { xs: 2, md: index % 2 === 0 ? 1 : 3 },
                      textAlign: {
                        xs: "left",
                        md: index % 2 === 0 ? "right" : "left",
                      },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        mb: 1,
                        color: "primary.main",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 600,
                      }}
                    >
                      Phase {phase.step}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      {phase.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.125rem",
                        lineHeight: 1.7,
                        color: "text.secondary",
                      }}
                    >
                      {phase.description}
                    </Typography>
                  </Grid>

                  {/* Center node */}
                  <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{
                      order: { xs: 1, md: 2 },
                      display: "flex",
                      justifyContent: "center",
                      mb: { xs: 2, md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        border: "3px solid",
                        borderColor: "primary.main",
                        backgroundColor: "background.paper",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "primary.main",
                          fontWeight: 700,
                        }}
                      >
                        {phase.step}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Empty space for alternating layout */}
                  <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                      order: { xs: 3, md: index % 2 === 0 ? 3 : 1 },
                      display: { xs: "none", md: "block" },
                    }}
                  />
                </Grid>
              ))}
            </Stack>
          </Box>

          <Typography
            variant="body1"
            align="center"
            sx={{
              mt: 10,
              fontSize: "1.125rem",
              fontWeight: 500,
              color: "text.primary",
            }}
          >
            Your involvement is minimal.
            <br />
            Your control is never removed.
          </Typography>
        </Container>
      </Box>

      {/* SECTION 3: REASSURANCE BLOCK */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{
              display: "block",
              mb: 3,
              color: "text.disabled",
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            REASSURANCE
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 8,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            What You Don't Have to Worry About
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "text.secondary",
            }}
          >
            JChats is designed to fit into your business—not disrupt it.
          </Typography>

          <Stack spacing={3}>
            {[
              "You don't need technical knowledge",
              "You don't need to change how customers contact you",
              "You don't need to monitor conversations constantly",
              "You don't need to hand over full control",
              "You don't need to commit before understanding the value",
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <BlockOutlined
                  sx={{
                    color: "primary.main",
                    fontSize: 24,
                    flexShrink: 0,
                    mt: 0.5,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "text.primary",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Box
            sx={{
              mt: 8,
              pt: 6,
              borderTop: "2px solid",
              borderColor: "divider",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "text.primary",
              }}
            >
              Everything runs within clear boundaries you approve.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* SECTION 4: HUMAN ANCHOR / TRUST */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            {/* Left: Statement */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  mb: 3,
                  color: "text.disabled",
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                }}
              >
                SUPPORT
              </Typography>

              <Typography
                variant="h3"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                You're Always in Control—
                <br />
                And Never On Your Own
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  color: "text.secondary",
                }}
              >
                Automation handles the routine. You step in only when judgment
                or authorization is required.
              </Typography>
            </Grid>

            {/* Right: Details */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  pl: { md: 4 },
                  borderLeft: { md: "1px solid" },
                  borderColor: { md: "divider" },
                }}
              >
                <Stack spacing={4}>
                  {[
                    {
                      icon: <SupportAgentOutlined sx={{ fontSize: 40 }} />,
                      text: "A JChats specialist works with you from the first conversation—answering questions, guiding decisions, and ensuring the system fits your business.",
                    },
                    {
                      icon: <SecurityOutlined sx={{ fontSize: 40 }} />,
                      text: "No black boxes. No forced workflows. No surprises.",
                    },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        gap: 3,
                        alignItems: "flex-start",
                      }}
                    >
                      <Box sx={{ color: "primary.main", flexShrink: 0 }}>
                        {item.icon}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1.125rem",
                          lineHeight: 1.7,
                          color: "text.primary",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 5: PRIMARY CTA */}

      <MasterCTA
        layout="inclusion"
        title="Ready to Get Started?"
        subtitle=" The next step is a simple conversation.
            We'll walk through your goals, answer your questions, and help you
            decide if JChats is right for your business."
        primaryButton={{
          text: "Talk to an Expert",
          action: () => console.log("Talk to an Expert"),
          variant: "whatsapp",
        }}
      />
    </Box>
  );
};

export default GetStartedPage;
