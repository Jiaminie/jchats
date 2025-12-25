import React from 'react';
import { Box, Typography } from '@mui/material';

interface TimelineCardProps {
  step: number;
  title: string;
  description: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ step, title, description }) => {
  return (
    <Box sx={{ p: 2, border: '1px solid', borderColor: 'grey.700', borderRadius: 2 }}>
      <Typography variant="h6" component="p" color="primary.main">
        Step {step}
      </Typography>
      <Typography variant="h5" component="p" sx={{ my: 1 }}>
        {title}
      </Typography>
      <Typography color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
};

export default TimelineCard;