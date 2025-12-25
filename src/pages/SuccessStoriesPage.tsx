import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { MasterCTA, CaseStudyCard, SummaryCard } from '../components';

const caseStudies = [
  {
    photo: '/path/to/photo.jpg',
    name: 'John Doe',
    business: 'ABC Fisheries',
    location: 'Nairobi, Kenya',
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    results: ['Result 1', 'Result 2', 'Result 3'],
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    metric: '+200% ROI',
  },
  // ... 2 more case studies
];

const summaryCards = [
  { photo: '/path/to/photo.jpg', name: 'Jane Smith', business: 'XYZ Restaurant', result: '+50% Sales' },
  // ... 5 more summary cards
];

const SuccessStoriesPage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ py: 12, textAlign: 'center', backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Real Results for Real Businesses
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Join over 500 businesses scaling with Jiaminie.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h3" component="p">500+</Typography>
              <Typography color="text.secondary">Businesses Served</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h3" component="p">15K</Typography>
              <Typography color="text.secondary">Orders Daily</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h3" component="p">80M</Typography>
              <Typography color="text.secondary">Monthly Transactions (KES)</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3 Deep Case Studies */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            In-Depth Success Stories
          </Typography>
          <Grid container spacing={4} sx={{ mt: 6 }}>
            {caseStudies.map((study, index) => (
              <Grid item xs={12} key={index}>
                <CaseStudyCard {...study} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 6 Quick Summary Cards */}
      <Box sx={{ py: 12, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            More Success Stories
          </Typography>
          <Grid container spacing={4} sx={{ mt: 6 }}>
            {summaryCards.map((summary, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <SummaryCard {...summary} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <MasterCTA
        layout="simple"
        title="Ready for similar results?"
        primaryButton={{
          text: 'Get Started',
          action: () => window.location.href = '/get-started',
        }}
      />
    </Box>
  );
};

export default SuccessStoriesPage;
