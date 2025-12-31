import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
} from "@mui/material";
import {
  Restaurant,
  Balance,
  Hotel,
  LocalShipping,
  Inventory,
  Apartment,
  ExpandMore,
  CheckCircleOutline,
  TrendingUp,
  AutoAwesome,
} from "@mui/icons-material";
import Hero from "../components/sections/Hero";
import MasterCTA from "../components/sections/MasterCTA";
import { openWhatsAppChat } from "../utils/whatsappService";
import { useNavigate } from "react-router-dom";

const useCases = [
  {
    id: "food-retail",
    title: "Food & Retail",
    icon: <Restaurant />,
    valueProposition: "Orders, payments, and delivery—handled inside WhatsApp.",
    gifSrc: "/gifs/retail.gif",
    result: "Orders completed in minutes. Payment collected instantly.",
    painPoints: [
      "High volume of customer inquiries for product availability",
      "Manual order collection and payment delays",
      "Difficulty managing promotions and discounts across channels",
    ],
    automation: [
      "Instant catalog sharing and pricing",
      "Automatic order capture and M-Pesa payments",
      "Customer reminders and follow-ups",
    ],
    outcome:
      "Orders are processed instantly, payments are collected automatically, and customers stay engaged without manual effort.",
    scenario:
      "Michael, owner of Dr. Mike Automobiles, used to miss calls while working. With JChats, customer inquiries are handled automatically, reducing missed orders to almost zero.",
  },
  {
    id: "professional",
    title: "Professional Services",
    icon: <Balance />,
    valueProposition: "Bookings and deposits handled automatically.",
    gifSrc: "/gifs/spa.gif",
    result: "Fewer no-shows. No double bookings.",
    painPoints: [
      "Booking appointments manually",
      "Handling deposits and confirmations",
      "High rate of no-shows",
    ],
    automation: [
      "Automated appointment scheduling",
      "Deposit collection and reminders",
      "Follow-up notifications to reduce no-shows",
    ],
    outcome:
      "Clients book and pay automatically. Appointment confirmations and reminders increase attendance and reduce administrative load.",
    scenario:
      "Grace, a salon owner in Mombasa, saw no-shows drop by 80% after automating bookings and deposits with JChats.",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: <Hotel />,
    valueProposition: "Bookings, deposits, and guest communication—unified.",
    gifSrc: "/gifs/hospitality.gif",
    result: "Faster bookings. Zero payment disputes.",
    painPoints: [
      "Guest inquiries for rooms and reservations",
      "Payment processing for bookings",
      "Manual check-in and reminders",
    ],
    automation: [
      "Instant room availability and pricing",
      "Automatic deposits and booking confirmations",
      "Check-in reminders and guest follow-ups",
    ],
    outcome:
      "Reservations are processed instantly, deposits collected, and guests get timely reminders — freeing staff to focus on service.",
    scenario:
      "Peter, a hotel manager in Kisumu, cut reservation handling time by 60% and increased occupancy from 60% to 95%.",
  },
  {
    id: "logistics",
    title: "Logistics & Delivery",
    icon: <LocalShipping />,
    valueProposition: "Quotes, payments, and driver assignment—automated.",
    gifSrc: "/gifs/move.gif",
    result: "More deliveries. Payment before pickup.",
    painPoints: [
      "Tracking orders and delivery assignments manually",
      "Delayed payments and confirmations",
      "Customer complaints due to slow updates",
    ],
    automation: [
      "Automatic order assignments and tracking links",
      "Payment collection before pickup",
      "Real-time customer notifications",
    ],
    outcome:
      "Deliveries are faster, payments are collected upfront, and customers receive timely updates, reducing disputes and delays.",
    scenario:
      "Mary, a delivery service owner in Nakuru, tripled deliveries per day and ensured 100% prepayment using JChats.",
  },
  {
    id: "wholesale",
    title: "Wholesale & Distribution",
    icon: <Inventory />,
    valueProposition: "Bulk orders, tracking, and payment reminders—automated.",
    gifSrc: "/gifs/wholesale.gif",
    result: "Efficient processing. Retailers stay informed.",
    painPoints: [
      "Managing bulk orders across multiple retailers",
      "Order tracking and confirmations",
      "Delayed payments affecting cash flow",
    ],
    automation: [
      "Catalog sharing and bulk order processing",
      "Automated order tracking notifications",
      "Payment reminders and confirmations",
    ],
    outcome:
      "Bulk orders are processed efficiently, payments are automated, and retailers stay informed without manual intervention.",
    scenario:
      "A wholesale distributor in Nairobi streamlined ordering from 50+ retailers with zero manual follow-ups.",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    icon: <Apartment />,
    valueProposition: "Property inquiries, viewings, and deposits—automated.",
    gifSrc: "/gifs/booking.gif",
    result: "More viewings. Automated follow-ups.",
    painPoints: [
      "Property inquiries handled manually",
      "Booking property viewings",
      "Collecting deposits and following up with clients",
    ],
    automation: [
      "Instant response to property inquiries",
      "Automated scheduling for viewings",
      "Deposit collection and reminders",
    ],
    outcome:
      "Clients book viewings and pay deposits automatically. Follow-ups happen without manual effort, increasing conversions.",
    scenario:
      "A real estate agent in Mombasa increased booked viewings by 70% after automating client interactions with JChats.",
  },
];

const overviewCards = [
  {
    title: "Automate Sales",
    description:
      "Capture leads, provide quotes, and close sales, all on WhatsApp and other messaging platforms.",
    icon: <TrendingUp sx={{ fontSize: 40 }} />,
  },
  {
    title: "24/7 Customer Service",
    description:
      "Answer questions, provide support, and resolve issues instantly, even when your team is offline.",
    icon: <AutoAwesome sx={{ fontSize: 40 }} />,
  },
  {
    title: "Streamline Operations",
    description:
      "Automate bookings, appointments, deliveries, and other repetitive tasks across multiple channels.",
    icon: <CheckCircleOutline sx={{ fontSize: 40 }} />,
  },
];

const UseCasesPage: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);

      setExpanded(hash);

      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
          });
        }
      }, 300);
    }
  }, []);

  
  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      {/* HERO SECTION */}
      <Hero
        title={
          <>
            JChats for{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Every Industry
            </Box>
          </>
        }
        subtitle="No matter your business, JChats automates sales, bookings, and customer service on messaging platforms like WhatsApp, Instagram, and Facebook Messenger."
        primaryAction={{
          text: "Talk to an Expert",
          onClick: () => openWhatsAppChat(),
        }}
        secondaryAction={{
          text: "See Pricing",
          onClick: () => navigate("/pricing"),
        }}
        showImage={true}
        image="/images/warehouse.png"
      />

      {/* QUICK OVERVIEW CARDS */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 16 },
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
            QUICK OVERVIEW
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              mb: { xs: 6, md: 10 },
              fontWeight: 600,
              letterSpacing: "-0.02em",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            What JChats Does for You
          </Typography>

          <Grid container spacing={4}>
            {overviewCards.map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "background.default",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(37, 211, 102, 0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box
                      sx={{
                        mb: 3,
                        color: "primary.main",
                        opacity: 0.8,
                      }}
                    >
                      {card.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.7,
                        color: "text.secondary",
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* INDUSTRY USE CASES */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 16 },
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
            INDUSTRY USE CASES
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              mb: 3,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Find Your Industry
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: { xs: 6, md: 10 },
              fontSize: "1.125rem",
              color: "text.secondary",
            }}
          >
            See how businesses like yours use JChats to automate operations and
            increase revenue.
          </Typography>

          <Box>
            {useCases.map((useCase) => (
              <Box key={useCase.id} id={useCase.id} sx={{ mb: 3 }}>
                <Accordion
                  expanded={expanded === useCase.id}
                  onChange={handleChange(useCase.id)}
                  sx={{
                    backgroundColor: "background.default",
                    border: "1px solid",
                    borderColor:
                      expanded === useCase.id ? "primary.main" : "divider",
                    borderRadius: 2,
                    "&:before": {
                      display: "none",
                    },
                    "&.Mui-expanded": {
                      margin: "0 0 24px 0",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMore
                        sx={{
                          color:
                            expanded === useCase.id
                              ? "primary.main"
                              : "text.secondary",
                          fontSize: 32,
                        }}
                      />
                    }
                    sx={{
                      py: 2,
                      px: { xs: 2, md: 4 },
                      "&:hover": {
                        backgroundColor: "rgba(37, 211, 102, 0.03)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box sx={{ color: "primary.main", fontSize: "2rem" }}>
                        {useCase.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color:
                            expanded === useCase.id
                              ? "primary.main"
                              : "text.primary",
                        }}
                      >
                        {useCase.title}
                      </Typography>
                    </Box>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{
                      px: { xs: 2, md: 4 },
                      pb: 4,
                      pt: 4,
                      borderTop: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    {/* TOP SECTION: Side-by-Side Content + GIF */}
                    <Grid container spacing={6} sx={{ mb: 6 }}>
                      {/* LEFT: Value Prop + Result */}
                      <Grid item xs={12} md={6}>
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 4,
                            fontWeight: 600,
                            color: "text.primary",
                            lineHeight: 1.5,
                            fontSize: { xs: "1.25rem", md: "1.5rem" },
                          }}
                        >
                          {useCase.valueProposition}
                        </Typography>

                        <Box
                          sx={{
                            mb: 4,
                            pl: 3,
                            borderLeft: "3px solid",
                            borderColor: "primary.main",
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
                            Result
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "1.125rem",
                              fontWeight: 600,
                              color: "text.primary",
                            }}
                          >
                            {useCase.result}
                          </Typography>
                        </Box>

                        {/* Quick bullets on desktop */}
                        <Box sx={{ display: { xs: "none", md: "block" } }}>
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
                            What Gets Automated
                          </Typography>
                          <Stack spacing={1}>
                            {useCase.automation.slice(0, 3).map((item, idx) => (
                              <Box
                                key={idx}
                                sx={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: 1,
                                }}
                              >
                                <CheckCircleOutline
                                  sx={{
                                    color: "primary.main",
                                    fontSize: 16,
                                    flexShrink: 0,
                                    mt: 0.25,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontSize: "0.95rem",
                                    lineHeight: 1.5,
                                    color: "text.secondary",
                                  }}
                                >
                                  {item}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>
                      </Grid>

                      {/* RIGHT: GIF Display */}
                      <Grid item xs={12} md={6}>
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            maxWidth: 450,
                            mx: { xs: "auto", md: 0 },
                            ml: { md: "auto" },
                          }}
                        >
                          {/* Phone Frame */}
                          <Box
                            sx={{
                              borderRadius: 3,
                              boxShadow: "0 12px 40px rgba(37, 211, 102, 0.15)",
                            }}
                          >
                            <Box
                              sx={{
                                borderRadius: 2,
                                overflow: "hidden",
                                backgroundColor: "#000",
                                border: "1px solid",
                                borderColor: "divider",
                              }}
                            >
                              <Box
                                component="img"
                                src={useCase.gifSrc}
                                alt={`${useCase.title} automation demo`}
                                sx={{
                                  width: "100%",
                                  height: "auto",
                                  display: "block",
                                }}
                              />
                            </Box>
                          </Box>

                          {/* Floating accent */}
                          <Box
                            sx={{
                              position: "absolute",
                              top: -15,
                              right: -15,
                              width: 60,
                              height: 60,
                              borderRadius: "50%",
                              backgroundColor: "primary.main",
                              opacity: 0.1,
                              zIndex: 0,
                            }}
                          />
                        </Box>
                      </Grid>
                    </Grid>

                    <Divider sx={{ my: 6 }} />

                    {/* DETAILED BREAKDOWN */}
                    <Grid container spacing={4}>
                      {/* Pain Points */}
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
                          Pain Points
                        </Typography>
                        <Stack spacing={1.5}>
                          {useCase.painPoints.map((point, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              sx={{
                                fontSize: "1rem",
                                lineHeight: 1.6,
                                color: "text.secondary",
                                pl: 2,
                                position: "relative",
                                "&::before": {
                                  content: '"•"',
                                  position: "absolute",
                                  left: 0,
                                  color: "text.disabled",
                                },
                              }}
                            >
                              {point}
                            </Typography>
                          ))}
                        </Stack>
                      </Grid>

                      {/* What Gets Automated */}
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
                          What Gets Automated
                        </Typography>
                        <Stack spacing={1.5}>
                          {useCase.automation.map((item, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 1,
                              }}
                            >
                              <CheckCircleOutline
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

                      {/* Business Outcome */}
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            p: 3,
                            backgroundColor: "rgba(37, 211, 102, 0.05)",
                            borderRadius: 1,
                            borderLeft: "3px solid",
                            borderColor: "primary.main",
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
                            Business Outcome
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "1.125rem",
                              lineHeight: 1.7,
                              color: "text.primary",
                              fontWeight: 500,
                            }}
                          >
                            {useCase.outcome}
                          </Typography>
                        </Box>
                      </Grid>

                      {/* Example Scenario */}
                      <Grid item xs={12}>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            mb: 1.5,
                            color: "text.disabled",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontWeight: 600,
                          }}
                        >
                          Real Example
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1rem",
                            lineHeight: 1.7,
                            color: "text.secondary",
                            fontStyle: "italic",
                          }}
                        >
                          {useCase.scenario}
                        </Typography>
                      </Grid>

                      {/* CTA */}
                      <Grid item xs={12}>
                        <Box sx={{ mt: 2, textAlign: "center" }}>
                          <MasterCTA
                            layout="simple"
                            title={`Ready to automate ${useCase.title.toLowerCase()}?`}
                            primaryButton={{
                              text: "Discuss This Use Case",
                              action: () =>
                                openWhatsAppChat("general"),
                              variant: "whatsapp",
                            }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FINAL CTA */}
      <MasterCTA
        layout="extended"
        title="Not Sure Which Use Case Fits?"
        subtitle="We'll help you identify how JChats can work for your specific business model."
        primaryButton={{
          text: "Talk to an Expert",
          action: () => openWhatsAppChat("general"),
          variant: "whatsapp",
        }}
        secondaryButton={{
          text: "See Pricing",
          action: () => navigate('/pricing'),
          variant: "secondary",
        }}
      />
    </Box>
  );
};

export default UseCasesPage;
