import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { MasterCTA, PricingTierCard, ValueFramingCard } from '../components';

const pricingTiers: Array<{ tier: 'Starter' | 'Growth' | 'Scale'; price: string; description: string }> = [
  { tier: 'Starter', price: 'KES 15,000', description: 'Up to 200 orders/month' },
  { tier: 'Growth', price: 'KES 30,000', description: '200-1,000 orders/month' },
  { tier: 'Scale', price: 'KES 50,000', description: '1,000+ orders/month' },
];

const valueFramingData = [
  { trader: 'Fish Trader', savings: 'KES 24,000' },
  { trader: 'Restaurant', savings: 'KES 37,000' },
  { trader: 'Real Estate', savings: 'KES 52,000' },
];

const PricingPage: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ py: 12, textAlign: 'center', backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="h5" color="text.secondary">
            We only earn when you earn. No monthly fees, no hidden costs.
          </Typography>
        </Container>
      </Box>

      {/* Two-Part Pricing Display */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h2" gutterBottom>
                One-Time Setup Fee
              </Typography>
              <Grid container spacing={2}>
                {pricingTiers.map((tier) => (
                  <Grid item xs={12} sm={4} key={tier.tier}>
                    <PricingTierCard {...tier} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" component="h2" gutterBottom>
                Transaction Fee
              </Typography>
              <Typography variant="h2" component="p" color="primary.main">
                0.3%
              </Typography>
              <Typography color="text.secondary">
                per successful transaction.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Value Framing Section */}
      <Box sx={{ py: 12, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Stop Paying for Shelfware
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6 }}>
            See how Jiaminie's pay-as-you-go model saves you money compared to expensive monthly subscriptions.
          </Typography>
          <Grid container spacing={4}>
            {valueFramingData.map((data) => (
              <Grid item xs={12} md={4} key={data.trader}>
                <ValueFramingCard {...data} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Transparency Section */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            What's Included
          </Typography>
          <Typography color="text.secondary" align="center" sx={{ mb: 6 }}>
            [4 points explaining fees placeholder]
          </Typography>
        </Container>
      </Box>

      {/* Strong CTA */}
      <MasterCTA
        layout="simple"
        title="Get exact pricing for your business"
        primaryButton={{
          text: 'Request a Quote',
          action: () => window.location.href = '/contact',
        }}
      />
    </Box>
  );
};

export default PricingPage;