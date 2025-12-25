import React from 'react';
import { Box, Typography } from '@mui/material';

interface QuickOverviewCardProps {
  title: string;
  description: string;
}

const QuickOverviewCard: React.FC<QuickOverviewCardProps> = ({ title, description }) => {
  return (
    <Box sx={{ p: 2, border: '1px solid', borderColor: 'grey.700', borderRadius: 2 }}>
      <Typography variant="h5" component="p" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
};

export default QuickOverviewCard;