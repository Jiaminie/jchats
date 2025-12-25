import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { MasterCTA, TimelineCard, ReassuranceCard } from "../components";

const timelineSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "A 30-minute call to understand your business and workflow.",
  },
  {
    step: 2,
    title: "Build",
    description: "We build your custom chatbot in 3-4 hours.",
  },
  {
    step: 3,
    title: "Training & Launch",
    description: "A 1-hour session to train you and your team, then go live.",
  },
  {
    step: 4,
    title: "Support",
    description: "Ongoing support to ensure everything runs smoothly.",
  },
];

const reassurancePoints = [
  {
    title: "Full Control",
    description:
      "You have full control over your chatbot and can make changes anytime.",
  },
  {
    title: "Deep Customization",
    description: "We can customize the chatbot to fit your exact needs.",
  },
  {
    title: "Multi-channel Support",
    description: "Integrate with WhatsApp, Facebook Messenger, and more.",
  },
];

const HowItWorksPage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: 12,
          textAlign: "center",
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            How Jiaminie Works
          </Typography>
          <Typography variant="h5" color="text.secondary">
            From chaos to control in 4 simple steps.
          </Typography>
        </Container>
      </Box>

      {/* 4-Step Journey Section */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            The 4-Step Journey
          </Typography>
          <Grid container spacing={4} sx={{ mt: 6 }}>
            {timelineSteps.map((step) => (
              <Grid item xs={12} md={3} key={step.step}>
                <TimelineCard {...step} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Reassurance Cards Section */}
      <Box sx={{ py: 12, backgroundColor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Your Business, Your Rules
          </Typography>
          <Grid container spacing={4} sx={{ mt: 6 }}>
            {reassurancePoints.map((point) => (
              <Grid item xs={12} md={4} key={point.title}>
                <ReassuranceCard {...point} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* WhatsApp CTA */}
      <MasterCTA
        layout="inclusion"
        title="See how this works for your industry?"
        primaryButton={{
          text: "Talk to us on WhatsApp",
          action: () => console.log("WhatsApp button clicked"),
          variant: "whatsapp",
        }}
      />
    </Box>
  );
};

export default HowItWorksPage;
