import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import { MasterCTA, Hero } from "../components";
import {
  CheckCircleOutline,
  Lock,
  BarChart,
  AccountBalanceWallet,
  People,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { openWhatsAppChat } from "../utils/whatsappService";
import { Helmet } from "@dr.pogodin/react-helmet";

const HowItWorksPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        marginTop: 4,
      }}
    >
      <Helmet>
        <title>How it Works | JChats Automation by Jiaminie Tech</title>
        <meta name="description" content="Discover how Jiaminie Tech automates your customer engagement. Learn about our 4-phase process to connect, configure, activate, and optimize your business chat channels." />
        <meta property="og:title" content="How it Works | JChats Automation by Jiaminie Tech" />
        <meta property="og:description" content="Learn how Jiaminie Tech transforms your business communication with AI-driven chat automation." />
      </Helmet>
      {/* HERO SECTION - UNTOUCHED */}
      <Hero
        title={
          <>
            How JChats{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Works.
            </Box>
          </>
        }
        subtitle="JChats connects your business to customers across messaging platforms that support automation—handling replies, lead qualification, and transactions until human authorization is required."
        primaryAction={{
          text: "Talk to an Expert",
          onClick: () => openWhatsAppChat("general"),
        }}
        secondaryAction={{
          text: "See Use Cases",
          onClick: () => navigate("/use-cases"),
        }}
        showImage={true}
        image="/images/warehouse.png"
      />

      {/* SECTION 1: THE CORE IDEA - TWO COLUMN SYSTEM OVERVIEW */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          backgroundColor: "background.default",
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
              Let running your business be just that,
              <br />
              running your business.{" "}
              <span
                style={{
                  fontStyle: "italic",
                }}
              >
                Even at 2AM
              </span>
            </Typography>
          </Box>
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
            ALWAYS ON
          </Typography>

          <Grid container spacing={8} alignItems="flex-start">
            {/* LEFT: Headline + Core Statement */}
            <Grid item xs={12} md={5}>
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
                One system.
                <br />
                Multiple channels.
                <br />
                <Box component="span" sx={{ color: "primary.main" }}>
                  One source of truth.
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  color: "text.secondary",
                }}
              >
                Customers already message your business across platforms. JChats
                centralizes how your business responds, decides, and transacts.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 4,
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "text.primary",
                  fontWeight: 500,
                }}
              >
                Your business logic is defined once and applied consistently—
                regardless of where the conversation starts.
              </Typography>
            </Grid>

            {/* RIGHT: Channel Architecture */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  pl: { md: 6 },
                  borderLeft: { md: "1px solid" },
                  borderColor: { md: "divider" },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mb: 3,
                    color: "text.disabled",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  Supported Channels
                </Typography>

                <Stack spacing={2.5}>
                  {[
                    "WhatsApp",
                    "Instagram Messages",
                    "Facebook Messenger",
                    "Other automation-ready platforms",
                  ].map((channel, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        py: 2,
                        px: 3,
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 1,
                        transition: "border-color 0.2s ease",
                        "&:hover": {
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1.125rem",
                          color: "text.primary",
                          fontWeight: 500,
                        }}
                      >
                        {channel}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 2: THE JCHATS OPERATING MODEL - PRINCIPLE FIRST */}
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
            OPERATING MODEL
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 3,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Automation where it makes sense.
            <br />
            Control where it matters.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 8,
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "text.secondary",
            }}
          >
            JChats is designed around a simple principle that eliminates
            unnecessary human intervention while preserving critical oversight.
          </Typography>

          {/* PRINCIPLE BOX - DOMINANT */}
          <Box
            sx={{
              my: 8,
              py: 5,
              px: 5,
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 2,
              backgroundColor: "rgba(37, 211, 102, 0.03)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                display: "block",
                mb: 2,
                color: "primary.main",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
              }}
            >
              Core Principle
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                lineHeight: 1.5,
                color: "text.primary",
              }}
            >
              Automate everything that doesn't require judgment.
              <br />
              Escalate only what does.
            </Typography>
          </Box>

          <Box
            sx={{
              width: 40,
              height: 1,
              backgroundColor: "primary.main",
              mx: "auto",
              my: 6,
            }}
          />

          {/* CONSEQUENCES - 2x2 GRID */}
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mb: 2,
              textAlign: "center",
              color: "text.disabled",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
            }}
          >
            System Behavior
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mb: 5,
              textAlign: "center",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "text.secondary",
            }}
          >
            This approach allows your business to operate continuously without
            creating operational dependencies.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: "Respond instantly",
                detail:
                  "Customer inquiries receive immediate acknowledgment and intelligent routing based on intent.",
              },
              {
                title: "Qualify leads automatically",
                detail:
                  "Conversations progress through discovery without manual intervention until decision points.",
              },
              {
                title: "Collect payments inside conversations",
                detail:
                  "Transaction flows complete within the messaging interface, removing friction.",
              },
              {
                title: "Pause for approval only when required",
                detail:
                  "System escalates to human authorization only when business rules demand it.",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                    }}
                  >
                    <CheckCircleOutline
                      sx={{
                        color: "primary.main",
                        fontSize: 20,
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        color: "text.primary",
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      pl: 4.5,
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "text.secondary",
                    }}
                  >
                    {item.detail}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 8 }} />

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.125rem",
              fontWeight: 500,
              color: "text.primary",
            }}
          >
            Let us handle the routine. While you focus on running your business.
            No constant monitoring. No missed opportunities. Just seamless
          </Typography>
        </Container>
      </Box>

      {/* SECTION 3: THE 4 PHASES - WITH VISUAL SPINE */}
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
            PROCESS
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
            From chaos to control—
            <br />
            without operational disruption.
          </Typography>

          {/* VISUAL SPINE + PHASES */}
          <Box sx={{ position: "relative" }}>
            {/* Horizontal spine line (desktop only) */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 80,
                left: "10%",
                right: "10%",
                height: 2,
                backgroundColor: "divider",
                zIndex: 0,
              }}
            />

            <Grid container spacing={6}>
              {[
                {
                  step: "01",
                  title: "Alignment",
                  description:
                    "Your business workflows, decision points, and authorization boundaries are clearly defined.",
                  outcome:
                    "A shared understanding of what runs automatically and what requires human input.",
                },
                {
                  step: "02",
                  title: "System Configuration",
                  description:
                    "Your business logic is encoded into the JChats platform and applied across relevant channels.",
                  outcome:
                    "Consistent, predictable customer interactions—without manual repetition.",
                },
                {
                  step: "03",
                  title: "Activation",
                  description:
                    "Your channels go live with intelligent automation handling real customer conversations.",
                  outcome:
                    "Customers get instant responses, progress faster, and transact without delays.",
                },
                {
                  step: "04",
                  title: "Optimization",
                  description:
                    "As your business evolves, rules, flows, and channels can be refined.",
                  outcome: "Your operations scale without increasing effort.",
                },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      zIndex: 1,
                    }}
                  >
                    {/* Step number - oversized background */}
                    <Typography
                      variant="h1"
                      sx={{
                        position: "absolute",
                        top: -20,
                        left: -10,
                        fontSize: "6rem",
                        fontWeight: 700,
                        color: "primary.main",
                        opacity: 0.08,
                        lineHeight: 1,
                        zIndex: 0,
                      }}
                    >
                      {item.step}
                    </Typography>

                    {/* Node on spine */}
                    <Box
                      sx={{
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                        justifyContent: "center",
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        backgroundColor: "primary.main",
                        border: "3px solid",
                        borderColor: "background.default",
                        mb: 3,
                        position: "relative",
                        zIndex: 2,
                      }}
                    />

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
                      Phase {item.step}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        lineHeight: 1.7,
                        color: "text.secondary",
                        flexGrow: 1,
                      }}
                    >
                      {item.description}
                    </Typography>

                    <Box
                      sx={{
                        pt: 3,
                        borderTop: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          mb: 1,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "text.disabled",
                          fontSize: "0.7rem",
                        }}
                      >
                        Outcome
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          lineHeight: 1.6,
                          color: "text.secondary",
                          fontSize: "0.875rem",
                        }}
                      >
                        {item.outcome}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* SECTION 4: CONTROL & GOVERNANCE - TRUST SECTION */}
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
            GOVERNANCE
          </Typography>

          <Grid container spacing={6} alignItems="center">
            {/* LEFT: Authority Statement */}
            <Grid item xs={12} md={5}>
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
                Your business.
                <br />
                Your rules.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  color: "text.secondary",
                }}
              >
                JChats does not replace decision-making.
                <br />
                It removes unnecessary interruptions.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 4,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "text.primary",
                  fontWeight: 500,
                }}
              >
                The system works continuously—without bypassing you.
              </Typography>
            </Grid>

            {/* RIGHT: Control Safeguards */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  pl: { md: 4 },
                  borderLeft: { md: "1px solid" },
                  borderColor: { md: "divider" },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mb: 4,
                    color: "text.disabled",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  You Remain in Control Of
                </Typography>

                <Grid container spacing={3}>
                  {[
                    {
                      text: "Approval thresholds",
                      icon: <Lock sx={{ fontSize: 40 }} />,
                    },
                    {
                      text: "Payment authorization",
                      icon: <AccountBalanceWallet sx={{ fontSize: 40 }} />,
                    },
                    {
                      text: "Escalation rules",
                      icon: <BarChart sx={{ fontSize: 40 }} />,
                    },
                    {
                      text: "Human handoff points",
                      icon: <People sx={{ fontSize: 40 }} />,
                    },
                  ].map((item, index) => (
                    <Grid item xs={6} key={index}>
                      <Box
                        sx={{
                          textAlign: "left",
                          py: 2,
                        }}
                      >
                        <Box
                          sx={{
                            mb: 2,
                            color: "primary.main",
                            opacity: 0.7,
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "0.95rem",
                            lineHeight: 1.5,
                            color: "text.primary",
                            fontWeight: 500,
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 5: WHO THIS IS FOR - FILTER SECTION */}
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
            QUALIFICATION
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
            Built for businesses that operate at scale.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mb: 5,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "text.disabled",
              fontWeight: 600,
            }}
          >
            If This Sounds Like You
          </Typography>

          <Stack spacing={4}>
            {[
              "Receive high volumes of customer messages",
              "Operate across multiple social platforms",
              "Require payments before fulfillment",
              "Want fewer operational bottlenecks",
            ].map((text, index) => (
              <Box key={index}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.25rem",
                    lineHeight: 1.8,
                    color: "text.primary",
                    fontWeight: 400,
                  }}
                >
                  {text}
                </Typography>
                {index < 3 && (
                  <Divider
                    sx={{
                      mt: 4,
                      opacity: 0.3,
                    }}
                  />
                )}
              </Box>
            ))}
          </Stack>

          <Box
            sx={{
              mt: 10,
              pt: 6,
              borderTop: "2px solid",
              borderColor: "primary.main",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: "text.primary",
                fontWeight: 500,
              }}
            >
              If customer conversations directly impact revenue,
              <br />
              JChats belongs in your stack.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* MASTER CTA - UNTOUCHED */}
      <MasterCTA
        layout="extended"
        title="See how this works in real businesses."
        subtitle="Different industries apply the same operating model in different ways."
        primaryButton={{
          text: "View Industry Use Cases",
          action: () => navigate("/use-cases"),
        }}
        secondaryButton={{
          text: "Talk to an Expert",
          action: () => openWhatsAppChat("general"),
          variant: "secondary",
        }}
      />
    </Box>
  );
};

export default HowItWorksPage;
