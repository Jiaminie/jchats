import React from 'react';
import { Box, Typography } from '@mui/material';

interface ValueFramingCardProps {
  trader: string;
  savings: string;
}

const ValueFramingCard: React.FC<ValueFramingCardProps> = ({ trader, savings }) => {
  return (
    <Box sx={{ p: 2, border: '1px solid', borderColor: 'grey.700', borderRadius: 2 }}>
      <Typography variant="h6" component="p">
        {trader}
      </Typography>
      <Typography variant="h5" component="p" color="primary.main" sx={{ my: 1 }}>
        Saves {savings}/month
      </Typography>
    </Box>
  );
};

export default ValueFramingCard;