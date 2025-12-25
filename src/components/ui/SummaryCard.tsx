import React from 'react';
import { Box, Typography } from '@mui/material';

interface SummaryCardProps {
  photo: string;
  name: string;
  business: string;
  result: string;
}

const SummaryCard: React.FC<SummaryCardProps> = (props) => {
  return (
    <Box sx={{ p: 2, border: '1px solid', borderColor: 'grey.700', borderRadius: 2, textAlign: 'center' }}>
      <img src={props.photo} alt={props.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <Typography variant="h6" sx={{ mt: 2 }}>{props.name}</Typography>
      <Typography color="text.secondary">{props.business}</Typography>
      <Typography variant="h5" color="primary.main" sx={{ mt: 1 }}>{props.result}</Typography>
    </Box>
  );
};

export default SummaryCard;