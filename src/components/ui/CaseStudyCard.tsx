import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

interface CaseStudyCardProps {
  photo: string;
  name: string;
  business: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  metric: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = (props) => {
  return (
    <Box sx={{ p: 2, border: '1px solid', borderColor: 'grey.700', borderRadius: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <img src={props.photo} alt={props.name} loading="lazy" decoding="async" style={{ width: '100%' }} />
          <Typography variant="h6">{props.name}</Typography>
          <Typography color="text.secondary">{props.business}, {props.location}</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6">Challenge:</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>{props.challenge}</Typography>
          <Typography variant="h6">Solution:</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>{props.solution}</Typography>
          <Typography variant="h6">Results:</Typography>
          <ul>
            {props.results.map((result, index) => (
              <li key={index}>
                <Typography color="text.secondary">{result}</Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h6" sx={{ mt: 2 }}>"{props.quote}"</Typography>
          <Typography variant="h5" color="primary.main" sx={{ mt: 1 }}>{props.metric}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaseStudyCard;