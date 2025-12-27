import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  Divider,
  Button,
  Collapse,
  Chip,
} from "@mui/material";
import { Hero, MasterCTA } from "../components";
import {
  CheckCircleOutline,
  ExpandMore,
  KeyboardArrowRight,
} from "@mui/icons-material";

const PricingPage: React.FC = () => {
  const [businessSuiteOpen, setBusinessSuiteOpen] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: "15,000",
      tagline: "For businesses starting to automate customer conversations.",
      bestFor: [
        "Receive a manageable number of daily inquiries",
        "Sell a clear, simple set of products or services",
        "Want to start taking orders on WhatsApp quickly",
      ],
      includes: [
        "WhatsApp business automation setup",
        "Product or service catalog configuration",
        "Automated customer replies",
        "Order capture inside chat",
      ],
      capacity: "Up to 200 orders per month",
      cta: "Get Started",
      ctaAction: () => console.log("Get Started - Basic"),
    },
    {
      name: "Pro",
      price: "30,000",
      tagline: "For growing businesses where speed and reliability matter.",
      popular: true,
      bestFor: [
        "Handle regular daily orders or inquiries",
        "Need payments collected inside conversations",
        "Want fewer manual follow-ups",
      ],
      includes: [
        "Everything in Basic, plus:",
        "M-Pesa payment integration",
        "Automated order confirmations",
        "Smarter message flows for common questions",
        "Improved handoff to humans when needed",
      ],
      capacity: "200 – 1,000 orders per month",
      cta: "Talk to an Expert",
      ctaAction: () => console.log("Talk to Expert - Pro"),
    },
    {
      name: "Advanced",
      price: "50,000",
      tagline: "For high-volume operations with real operational pressure.",
      bestFor: [
        "Process large volumes of customer messages",
        "Rely on WhatsApp as a revenue channel",
        "Need reliability during peak demand",
      ],
      includes: [
        "Everything in Pro, plus:",
        "Advanced automation logic",
        "Priority setup and testing",
        "Scalable flows designed for volume",
        "Ongoing optimization support",
      ],
      capacity: "1,000+ orders per month",
      cta: "Let's Review Your Setup",
      ctaAction: () => console.log("Review Setup - Advanced"),
    },
  ];

  return (
    <Box>
      {/* HERO SECTION */}
      <Hero
        title={
          <>
            Simple, Transparent{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Pricing
            </Box>
          </>
        }
        subtitle="We only earn when you earn. No monthly subscriptions. No hidden fees. Just a one-time setup and a small transaction fee when business happens."
        primaryAction={{
          text: "Talk to an Expert",
          onClick: () => console.log("Talk to an Expert"),
        }}
        showImage={false}
      />

      {/* SECTION 1: ONE-TIME SETUP FEE */}
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
            ONE-TIME SETUP
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              mb: 3,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Choose a plan that matches where your business is today.
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 10,
              fontSize: "1.125rem",
              color: "text.secondary",
            }}
          >
            You can always evolve later.
          </Typography>

          {/* Pricing Cards */}
          <Grid container spacing={4} alignItems="stretch">
            {plans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    p: 4,
                    border: "1px solid",
                    borderColor: plan.popular ? "primary.main" : "divider",
                    borderWidth: plan.popular ? 2 : 1,
                    borderRadius: 2,
                    backgroundColor: "background.paper",
                    position: "relative",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {plan.popular && (
                    <Chip
                      label="Most Popular"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: -12,
                        right: 24,
                        backgroundColor: "primary.main",
                        color: "#000",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                      }}
                    />
                  )}

                  <Typography
                    variant="h4"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  >
                    {plan.name}
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      mb: 1,
                      fontWeight: 700,
                      color: "primary.main",
                    }}
                  >
                    KES {plan.price}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      mb: 3,
                      color: "text.disabled",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                    }}
                  >
                    One-Time Setup
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 4,
                      color: "text.secondary",
                      lineHeight: 1.6,
                    }}
                  >
                    {plan.tagline}
                  </Typography>

                  <Divider sx={{ mb: 3 }} />

                  {/* Best for you if */}
                  <Typography
                    variant="caption"
                    sx={{
                      mb: 2,
                      color: "text.disabled",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                    }}
                  >
                    Best for you if:
                  </Typography>

                  <Stack spacing={1.5} sx={{ mb: 3 }}>
                    {plan.bestFor.map((item, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        <KeyboardArrowRight
                          sx={{
                            color: "primary.main",
                            fontSize: 18,
                            flexShrink: 0,
                            mt: 0.25,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "0.95rem",
                            lineHeight: 1.5,
                            color: "text.primary",
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Divider sx={{ mb: 3 }} />

                  {/* Includes */}
                  <Typography
                    variant="caption"
                    sx={{
                      mb: 2,
                      color: "text.disabled",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                    }}
                  >
                    Includes:
                  </Typography>

                  <Stack spacing={1.5} sx={{ mb: 3, flexGrow: 1 }}>
                    {plan.includes.map((item, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1,
                        }}
                      >
                        {!item.includes("Everything") && (
                          <CheckCircleOutline
                            sx={{
                              color: "primary.main",
                              fontSize: 18,
                              flexShrink: 0,
                              mt: 0.25,
                            }}
                          />
                        )}
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "0.95rem",
                            lineHeight: 1.5,
                            color: item.includes("Everything")
                              ? "text.primary"
                              : "text.secondary",
                            fontWeight: item.includes("Everything") ? 600 : 400,
                            pl: item.includes("Everything") ? 0 : 0,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>

                  {/* Capacity */}
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: "rgba(37, 211, 102, 0.05)",
                      borderRadius: 1,
                      mb: 3,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        mb: 0.5,
                        color: "text.disabled",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                      }}
                    >
                      Capacity
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                      }}
                    >
                      {plan.capacity}
                    </Typography>
                  </Box>

                  {/* CTA */}
                  <Button
                    variant={plan.popular ? "contained" : "outlined"}
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={plan.ctaAction}
                    sx={{
                      py: 1.5,
                      fontWeight: 600,
                      ...(plan.popular && {
                        backgroundColor: "primary.main",
                        color: "#000",
                        "&:hover": {
                          backgroundColor: "primary.light",
                        },
                      }),
                    }}
                  >
                    {plan.cta}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECTION 2: TRANSACTION FEE */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          backgroundColor: "background.paper",
        }}
      >
        <Container maxWidth="md">
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
            TRANSACTION FEE
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            0.3%
          </Typography>

          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            per successful transaction
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "text.secondary",
            }}
          >
            You only pay when value is created.
            <br />
            No charges on failed, cancelled, or incomplete orders.
          </Typography>
        </Container>
      </Box>

      {/* SECTION 3: BUSINESS SUITE (EXPANDABLE) */}
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
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {/* Expandable Header */}
            <Box
              onClick={() => setBusinessSuiteOpen(!businessSuiteOpen)}
              sx={{
                p: 4,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "background.paper",
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(37, 211, 102, 0.03)",
                },
              }}
            >
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mb: 1,
                    color: "text.disabled",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                  }}
                >
                  Need Something More Flexible?
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  Business Suite
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: "text.secondary",
                  }}
                >
                  For businesses with complex workflows, approvals, or unique
                  operating models.
                </Typography>
              </Box>

              <ExpandMore
                sx={{
                  fontSize: 32,
                  color: "primary.main",
                  transform: businessSuiteOpen ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Box>

            {/* Expandable Content */}
            <Collapse in={businessSuiteOpen} timeout="auto" unmountOnExit>
              <Box sx={{ p: 4, backgroundColor: "background.default" }}>
                <Grid container spacing={6}>
                  {/* Left: Designed For */}
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        mb: 2,
                        color: "text.disabled",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 600,
                      }}
                    >
                      Designed for organizations that:
                    </Typography>

                    <Stack spacing={2}>
                      {[
                        "Operate across multiple channels or teams",
                        "Require custom approval or escalation flows",
                        "Handle high-value or sensitive transactions",
                        "Need automation tailored to existing operations",
                      ].map((item, idx) => (
                        <Box
                          key={idx}
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
                              mt: 0.25,
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "1rem",
                              lineHeight: 1.6,
                              color: "text.primary",
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>

                  {/* Right: What You Get */}
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        mb: 2,
                        color: "text.disabled",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 600,
                      }}
                    >
                      What you get:
                    </Typography>

                    <Stack spacing={2}>
                      {[
                        "Custom workflow design",
                        "Tailored automation logic",
                        "Advanced governance and control",
                        "Dedicated onboarding support",
                      ].map((item, idx) => (
                        <Box
                          key={idx}
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
                              mt: 0.25,
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "1rem",
                              lineHeight: 1.6,
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
                        mt: 4,
                        p: 3,
                        backgroundColor: "rgba(37, 211, 102, 0.05)",
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          mb: 1,
                          color: "text.disabled",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          fontWeight: 600,
                        }}
                      >
                        Pricing
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                        }}
                      >
                        Built with you, based on your needs.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* CTA */}
                <Box sx={{ mt: 6, textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => console.log("Design Your Suite")}
                    sx={{
                      px: 6,
                      py: 1.5,
                      fontWeight: 600,
                      backgroundColor: "primary.main",
                      color: "#000",
                    }}
                  >
                    Design Your Suite With Us
                  </Button>
                </Box>
              </Box>
            </Collapse>
          </Box>
        </Container>
      </Box>

      {/* SECTION 4: WHAT'S INCLUDED */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          backgroundColor: "background.paper",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 600,
              color: "text.primary",
            }}
          >
            What's Included in Every Plan
          </Typography>

          <Grid container spacing={4}>
            {[
              "Business-specific automation setup",
              "Secure payment handling",
              "Human control where it matters",
              "Ongoing support after launch",
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <CheckCircleOutline
                    sx={{
                      color: "primary.main",
                      fontSize: 24,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.125rem",
                      color: "text.primary",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FINAL CTA */}
      <MasterCTA
        layout="extended"
        title="Get Exact Pricing for Your Business"
        subtitle="Not sure which option fits? We'll help you choose—or build the right one together."
        primaryButton={{
          text: "Talk to Us on WhatsApp",
          action: () => console.log("WhatsApp CTA"),
          variant: "whatsapp",
        }}
        secondaryButton={{
          text: "Book a Quick Call",
          action: () => console.log("Book Call"),
          variant: "secondary",
        }}
      />
    </Box>
  );
};

export default PricingPage;
