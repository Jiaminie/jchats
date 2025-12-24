import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Section, FeatureCard } from '../ui';

interface BusinessExample {
  title: string;
  description: string;
  image: string;
}

const businessExamples: BusinessExample[] = [
  {
    title: 'Fish & Meat Traders',
    description: 'Show daily stock. Take orders. Get paid. All before 9am.',
    image: '/images/fish-ice.svg',
  },
  {
    title: 'Restaurants & Food',
    description: 'Menu in chat. Orders flow in. No more missed calls.',
    image: '/images/restaurant-food.svg',
  },
  {
    title: 'Service Providers',
    description: 'Quote, book, and collect payment. All in 5 minutes.',
    image: '/images/moving-truck.svg',
  },
];

const TargetAudience: React.FC = () => {
  return (
    <Section>
      <Box sx={{ backgroundColor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 2,
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            Who Is This For?
          </Typography>
          
          <Typography
            variant="h6"
            align="center"
            sx={{ 
              mb: 8, 
              color: 'text.secondary',
              fontSize: '1.25rem',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Built for businesses that need simple, effective selling
          </Typography>
          
          <Grid container spacing={4}>
            {businessExamples.map((business) => (
              <Grid item xs={12} md={4} key={business.title}>
                <FeatureCard
                  title={business.title}
                  description={business.description}
                  image={business.image}
                  sx={{ height: '100%' }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Section>
  );
};

export default TargetAudience;