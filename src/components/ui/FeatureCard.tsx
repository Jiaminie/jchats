import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import type { FeatureCardProps } from '../../types';

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  icon,
  sx,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        p: 4,
        border: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        backgroundColor: 'rgba(20, 20, 20, 0.6)',
        backdropFilter: 'blur(12px)',
        height: '100%',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: '0 12px 32px rgba(37, 211, 102, 0.15)',
          transform: 'translateY(-6px) scale(1.02)',
        },
        ...sx,
      }}
    >
      {image && (
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={title}
          sx={{
            objectFit: 'cover',
            borderRadius: 0,
            mb: 3,
          }}
        />
      )}
      
      {icon && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 3,
            color: 'primary.main',
            '& svg': {
              fontSize: '3rem',
            },
          }}
        >
          {icon}
        </Box>
      )}

      <CardContent sx={{ p: 0 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 2, 
            fontWeight: 600,
            textAlign: image ? 'left' : 'center'
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{
            textAlign: image ? 'left' : 'center'
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;