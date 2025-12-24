import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Section } from '../ui';

interface Statistic {
  number: string;
  label: string;
}

const statistics: Statistic[] = [
  { number: '500+', label: 'businesses' },
  { number: '10,000+', label: 'orders daily' },
  { number: 'KES 50M+', label: 'processed' },
];

const SocialProof: React.FC = () => {
  return (
    <Section>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6} justifyContent="center">
          {statistics.map((stat) => (
            <Grid item xs={12} md={4} key={stat.label}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 1,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  {stat.number}
                </Typography>
                
                <Typography 
                  variant="h6" 
                  color="text.secondary"
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default SocialProof;