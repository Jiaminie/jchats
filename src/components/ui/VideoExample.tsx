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
          color: '#25D366',
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
          color: '#1F1F1F',
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
          color: '#666666',
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
                color: '#25D366',
                fontSize: '1.5rem',
                mt: 0.25,
                flexShrink: 0,
              }}
            />
            <Typography variant="body1" sx={{ color: '#1F1F1F' }}>
              {point}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Result Statement */}
      <Box
        sx={{
          p: 2,
          backgroundColor: '#000',
          border: '1px solid #BBF7D0',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#1DA851',
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
        backgroundColor: '#F3F4F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #E5E7EB',
        overflow: 'hidden',
      }}
    >
      <Typography variant="h6" sx={{ color: '#9CA3AF' }}>
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
