import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { MasterCTA, CustomTimeline, GettingStarted } from '../components';

const timelineSteps = [
  {
    day: 1,
    title: 'Discovery',
    duration: '30 min call',
    activities: ['Understand your business and workflow'],
    needed: 'Your availability and business insights',
  },
  {
    day: 2,
    title: 'Build',
    duration: '3-4 hours',
    activities: ['We build your custom chatbot and integrations'],
  },
  {
    day: 3,
    title: 'Training & Launch',
    duration: '1 hour + go live',
    activities: ['Train your team', 'Launch the chatbot'],
  },
  {
    day: 4,
    title: 'Ongoing Support',
    duration: 'Continuous',
    activities: ['Dedicated support', 'Performance monitoring'],
  },
];

const GetStartedPage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ py: 12, textAlign: 'center', backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Go Live in 3 Days
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Our streamlined onboarding process gets you up and running in no time.
          </Typography>
        </Container>
      </Box>

      <GettingStarted />
      {/* Timeline Section */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Onboarding Timeline
          </Typography>
          <Box sx={{ mt: 6 }}>
            <CustomTimeline steps={timelineSteps} />
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <MasterCTA
        layout="simple"
        title="Ready to get started?"
        primaryButton={{
          text: 'Start Onboarding',
          action: () => window.location.href = '/contact',
        }}
      />
    </Box>
  );
};

export default GetStartedPage;
