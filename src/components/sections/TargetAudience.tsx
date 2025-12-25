import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Section, FeatureCard } from '../ui';

interface TargetAudienceProps {
  sectionTitle: string;
  sectionSubtitle: string;
  cards: {
    title: string;
    description: string;
    image?: string;
    icon?: React.ReactElement;
    href?: string;
  }[];
  backgroundColor?: string;
}

const TargetAudience: React.FC<TargetAudienceProps> = ({ 
  sectionTitle, 
  sectionSubtitle, 
  cards,
  backgroundColor = 'background.default',
}) => {
  return (
    <Section>
      <Box sx={{ backgroundColor: backgroundColor, }}>
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
            {sectionTitle}
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
            {sectionSubtitle}
          </Typography>
          
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <FeatureCard
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  icon={card.icon}
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