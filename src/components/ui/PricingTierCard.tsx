import React from 'react';
import { Box, Typography } from '@mui/material';

interface PricingTierCardProps {
  tier: 'Starter' | 'Growth' | 'Scale';
  price: string;
  description: string;
}

const PricingTierCard: React.FC<PricingTierCardProps> = ({ tier, price, description }) => {
  return (
    <Box sx={{ p: 2, border: '1px solid', borderColor: 'grey.700', borderRadius: 2 }}>
      <Typography variant="h6" component="p" color="primary.main">
        {tier}
      </Typography>
      <Typography variant="h4" component="p" sx={{ my: 1 }}>
        {price}
      </Typography>
      <Typography color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
};

export default PricingTierCard;