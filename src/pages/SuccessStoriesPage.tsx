import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  Divider,
  Avatar,
} from "@mui/material";
import { Hero, MasterCTA } from "../components";
import { openWhatsAppChat } from "../utils/whatsappService";

const SuccessStoriesPage: React.FC = () => {
  const featuredStory = {
    name: "Michael",
    title: "Mechanic & Owner of Dr. Mike Automobiles",
    image: "/images/testimonials/michael.jpg", // Replace with actual path
    challenge: `Running a busy garage, Michael struggled to keep clients engaged while he was hands-on with repairs. "A customer would reach out while I was working under the hood. By the time I picked up, the lead was gone. I lost opportunities daily."`,
    solution:
      "JChats stepped in to handle customer inquiries automatically across WhatsApp, Instagram, and Messenger. Michael could focus on repairs while the system qualified leads and scheduled appointments.",
    results: [
      "Only one customer lost during onboarding",
      "Instant replies to every inquiry, even when busy",
      "More leads converted into bookings without extra effort",
    ],
    quote:
      "I can finally focus on my work, knowing my clients are taken care of. JChats ensures I never miss a lead—even when my hands are full under the hood.",
  };

  const additionalStories = [
    {
      name: "Grace",
      title: "Salon Owner at Grace Beauty Lounge",
      image: "/images/testimonials/grace.jpg",
      challenge: `Double bookings, no-shows, and last-minute cancellations were eating into Grace's revenue. "Clients would book over the phone, then forget their appointment. I wasted hours chasing confirmations."`,
      solution:
        "JChats automated appointment booking, reminders, and deposit collection. Grace's clients could see available slots, book themselves, and pay upfront.",
      results: [
        "80% reduction in no-shows",
        "Appointments fully automated",
        "More time to focus on clients",
      ],
      quote:
        "I no longer spend my mornings calling clients. JChats keeps my calendar full and my revenue predictable.",
    },
    {
      name: "Peter",
      title: "Hotel Manager at Lakeside Inn",
      image: "/images/testimonials/peter.jpg",
      challenge: `Managing bookings across multiple channels and handling payments manually slowed Peter down. "Booking errors and missed payments were a constant headache."`,
      solution:
        "JChats automated room availability, reservations, and partial payments. Guests could book online, pay deposits, and receive confirmations instantly.",
      results: [
        "Occupancy increased from 60% → 95%",
        "Booking process 60% faster",
        "Zero payment disputes",
      ],
      quote:
        "JChats turned my booking chaos into a smooth, automated system. Guests love the ease, and I finally sleep easy at night.",
    },
    {
      name: "Mary",
      title: "Delivery Service Owner in Nakuru",
      image: "/images/testimonials/mary.jpg",
      challenge: `High delivery volumes and scattered payment tracking led to missed pickups and unhappy customers. "It was a nightmare assigning drivers and collecting payments on time."`,
      solution:
        "JChats automated order intake, driver assignment, and payment collection. Customers received tracking updates in real-time.",
      results: [
        "3x more deliveries per day",
        "100% payment collection before pickup",
        "Real-time tracking increased customer satisfaction",
      ],
      quote:
        "I no longer worry about lost payments or delayed pickups. JChats handles the workflow so I can scale without hiring extra staff.",
    },
  ];

  return (
    <Box
    sx={{
      marginTop: 4,
    }}
    >
      {/* HERO SECTION */}
      <Hero
        title={
          <>
            Real Results for{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Real Businesses
            </Box>
          </>
        }
        subtitle="Join over 500 businesses scaling with JChats, automating replies, leads, and transactions."
        primaryAction={{
          text: "Talk to an Expert",
          onClick: () => openWhatsAppChat("general"),
        }}
        showImage={true}
        image="/images/delivery.png"
      />

      {/* KEY METRICS - INLINE */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: "background.default",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 6 }}
            justifyContent="center"
            alignItems="center"
            divider={
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                }}
              />
            }
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 0.5,
                }}
              >
                500+
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.85rem",
                }}
              >
                Businesses Served
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 0.5,
                }}
              >
                15K
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.85rem",
                }}
              >
                Orders Daily
              </Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 0.5,
                }}
              >
                KES 80M
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.85rem",
                }}
              >
                Monthly Transactions
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* FEATURED STORY - MICHAEL (FULL WIDTH, BLOG STYLE) */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 16 },
          backgroundColor: "background.paper",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{
              display: "block",
              mb: 4,
              color: "text.disabled",
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            FEATURED
          </Typography>

          {/* Name & Title with Portrait */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "center" },
              textAlign: { xs: "center", sm: "left" },
              gap: 3,
              mb: 6,
            }}
          >
            <Avatar
              src={featuredStory.image}
              alt={featuredStory.name}
              imgProps={{ loading: "lazy", decoding: "async" }}
              sx={{
                width: 80,
                height: 80,
                border: "2px solid",
                borderColor: "primary.main",
              }}
            />
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                  mb: 0.5,
                }}
              >
                Meet {featuredStory.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "1.125rem",
                }}
              >
                {featuredStory.title}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 6 }} />

          {/* Challenge */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                mb: 2,
                color: "text.disabled",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Challenge
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: "text.primary",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {featuredStory.challenge}
            </Typography>
          </Box>

          {/* Solution */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                mb: 2,
                color: "text.disabled",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Solution
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: "text.primary",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {featuredStory.solution}
            </Typography>
          </Box>

          {/* Results */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                mb: 2,
                color: "text.disabled",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: 600,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Results
            </Typography>
            <Stack spacing={1.5}>
              {featuredStory.results.map((result, index) => (
                <Typography
                  key={index}
                  variant="body1"
                    sx={{
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: "text.secondary",
                      pl: { xs: 0, sm: 2 },
                      position: "relative",
                      "&::before": {
                        content: { xs: '""', sm: '"•"' },
                        position: "absolute",
                        left: 0,
                        color: "primary.main",
                        fontWeight: 700,
                      },
                      textAlign: { xs: "center", sm: "left" },
                    }}
                >
                  {result}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Divider sx={{ my: 6 }} />

          {/* Quote */}
          <Box
            sx={{
              pl: { xs: 0, sm: 3 },
              borderLeft: { xs: "none", sm: "3px solid" },
              borderColor: "primary.main",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontStyle: "italic",
                lineHeight: 1.7,
                color: "text.primary",
                mb: 2,
                fontSize: { xs: "1.125rem", md: "1.25rem" },
              }}
            >
              "{featuredStory.quote}"
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: { xs: "center", sm: "right" },
                color: "text.secondary",
                fontSize: "0.875rem",
              }}
            >
              — {featuredStory.name}, {featuredStory.title}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ADDITIONAL STORIES - ALTERNATING TWO-COLUMN GRID */}
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
              mb: 8,
              textAlign: "center",
              color: "text.disabled",
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            MORE SUCCESS STORIES
          </Typography>

          <Stack spacing={{ xs: 8, md: 12 }}>
            {additionalStories.map((story, index) => {
              const isEven = index % 2 === 0;

              return (
                <Grid
                  container
                  spacing={{ xs: 0, md: 6 }}
                  key={index}
                  alignItems="center"
                >
                  {/* Story Content */}
                  <Grid
                    item
                    xs={12}
                    md={8}
                    sx={{
                      order: { xs: 2, md: isEven ? 1 : 2 },
                    }}
                  >
                    <Box>
                      {/* Avatar, Name & Title Header */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          alignItems: { xs: "center", sm: "flex-start" },
                          textAlign: { xs: "center", sm: "left" },
                          gap: 3,
                          mb: 4,
                        }}
                      >
                        <Box sx={{ display: { xs: "block", md: "none" } }}>
                          <Avatar
                            src={story.image}
                            alt={story.name}
                            sx={{
                              width: 100,
                              height: 100,
                              border: "3px solid",
                              borderColor: "primary.main",
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 700,
                              color: "text.primary",
                              mb: 0.5,
                              fontSize: { xs: "1.75rem", md: "2.125rem" },
                            }}
                          >
                            Meet {story.name}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "text.secondary",
                              fontSize: "1.125rem",
                            }}
                          >
                            {story.title}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Challenge */}
                      <Box sx={{ mb: 4 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            mb: 1.5,
                            color: "text.disabled",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontWeight: 600,
                            textAlign: { xs: "center", sm: "left" },
                          }}
                        >
                          Challenge
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1.125rem",
                            lineHeight: 1.8,
                            color: "text.primary",
                            textAlign: { xs: "center", sm: "left" },
                          }}
                        >
                          {story.challenge}
                        </Typography>
                      </Box>

                      {/* Solution */}
                      <Box sx={{ mb: 4 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            mb: 1.5,
                            color: "text.disabled",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontWeight: 600,
                            textAlign: { xs: "center", sm: "left" },
                          }}
                        >
                          Solution
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1.125rem",
                            lineHeight: 1.8,
                            color: "text.primary",
                            textAlign: { xs: "center", sm: "left" },
                          }}
                        >
                          {story.solution}
                        </Typography>
                      </Box>

                      {/* Results */}
                      <Box sx={{ mb: 4 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            mb: 1.5,
                            color: "text.disabled",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontWeight: 600,
                            textAlign: { xs: "center", sm: "left" },
                          }}
                        >
                          Results
                        </Typography>
                        <Stack
                          spacing={1.5}
                          alignItems={{ xs: "center", sm: "flex-start" }}
                        >
                          {story.results.map((result, idx) => (
                            <Typography
                              key={idx}
                              variant="body1"
                              sx={{
                                fontSize: "1rem",
                                lineHeight: 1.7,
                                color: "text.secondary",
                                pl: { xs: 0, sm: 2 },
                                position: "relative",
                                "&::before": {
                                  content: { xs: '""', sm: '"•"' },
                                  position: "absolute",
                                  left: 0,
                                  color: "primary.main",
                                  fontWeight: 700,
                                },
                                textAlign: { xs: "center", sm: "left" },
                              }}
                            >
                              {result}
                            </Typography>
                          ))}
                        </Stack>
                      </Box>

                      {/* Quote */}
                      <Box
                        sx={{
                          pl: { xs: 0, sm: 3 },
                          borderLeft: { xs: "none", sm: "3px solid" },
                          borderColor: "primary.main",
                          mt: 4,
                          textAlign: { xs: "center", sm: "left" },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontStyle: "italic",
                            lineHeight: 1.7,
                            color: "text.primary",
                            fontSize: "1.125rem",
                          }}
                        >
                          "{story.quote}"
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "block",
                            mt: 1.5,
                            textAlign: { xs: "center", sm: "right" },
                            color: "text.secondary",
                            fontSize: "0.875rem",
                          }}
                        >
                          — {story.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Portrait */}
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                      display: { xs: "none", md: "block" },
                      order: isEven ? 2 : 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: isEven ? "flex-end" : "flex-start",
                      }}
                    >
                      <Avatar
                        src={story.image}
                        alt={story.name}
                        sx={{
                          width: 160,
                          height: 160,
                          border: "3px solid",
                          borderColor: "primary.main",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* FINAL CTA - SIMPLE */}
        <MasterCTA
          layout="inclusion"
          title="See Your Business Here?"
          subtitle="We're working with businesses like yours every day. Let's talk about what JChats can do for you."
          primaryButton={{
            text: "Talk to an Expert",
            action: () => openWhatsAppChat("general"),
            variant: "whatsapp",
          }}
        />
    </Box>
  );
};

export default SuccessStoriesPage;
