import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

interface VideoExampleProps {
  category: string;
  valueProposition: string;
  scenarioIntro: string;
  bulletPoints: string[];
  resultStatement: string;
  videoPlaceholder: string; // Placeholder for video/image
  layout: 'text-left' | 'text-right';
  delay?: number;
}

const VideoExample: React.FC<VideoExampleProps> = ({
  category,
  valueProposition,
  scenarioIntro,
  bulletPoints,
  resultStatement,
  videoPlaceholder,
  layout,
  delay = 0,
}) => {
  const textContent = (
    <Box>
      {/* Category Headline */}
      <Typography
        variant="h3"
        sx={{
          color: 'primary.main',
          fontWeight: 600,
          mb: 2,
        }}
      >
        {category}
      </Typography>

      {/* Value Proposition */}
      <Typography
        variant="h5"
        sx={{
          color: 'text.primary',
          fontWeight: 600,
          mb: 3,
        }}
      >
        {valueProposition}
      </Typography>

      {/* Scenario Introduction */}
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          mb: 2,
        }}
      >
        {scenarioIntro}
      </Typography>

      {/* Bullet Points */}
      <Box component="ul" sx={{ pl: 0, mb: 3, listStyle: 'none' }}>
        {bulletPoints.map((point, index) => (
          <Box
            component="li"
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1.5,
              mb: 1.5,
            }}
          >
            <CheckCircleIcon
              sx={{
                color: 'primary.main',
                fontSize: '1.5rem',
                mt: 0.25,
                flexShrink: 0,
              }}
            />
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              {point}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Result Statement */}
      <Box
        sx={{
          p: 2,
          backgroundColor: 'secondary.dark',
          border: '1px solid',
          borderColor: 'primary.light',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'primary.dark',
            fontWeight: 600,
          }}
        >
          {resultStatement}
        </Typography>
      </Box>
    </Box>
  );

  const videoContent = (
    <Box
      sx={{
        width: '100%',
        height: { xs: '300px', md: '400px' },
        backgroundColor: 'background.paper',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid',
        borderColor: 'grey.700',
        overflow: 'hidden',
      }}
    >
      <Typography variant="h6" sx={{ color: 'text.disabled' }}>
        {videoPlaceholder}
      </Typography>
    </Box>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 } }}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          direction={layout === 'text-right' ? 'row-reverse' : 'row'}
        >
          {/* Text Column */}
          <Grid item xs={12} md={6}>
            {textContent}
          </Grid>

          {/* Video Column */}
          <Grid item xs={12} md={6}>
            {videoContent}
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default VideoExample;
