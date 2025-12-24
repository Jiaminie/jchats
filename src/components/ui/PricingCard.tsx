import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Chip, 
  Divider, 
  Stack 
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import type { PricingCardProps } from '../../types';
import CustomButton from './CustomButton';

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  popular = false,
  ctaText = 'Get Started',
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        p: 4,
        position: 'relative',
        border: popular ? '2px solid' : '1px solid',
        borderColor: popular ? 'primary.main' : 'rgba(255, 255, 255, 0.08)',
        backgroundColor: popular ? 'rgba(20, 20, 20, 0.8)' : 'rgba(20, 20, 20, 0.6)',
        backdropFilter: 'blur(12px)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: popular ? '0 12px 40px rgba(37, 211, 102, 0.2)' : 'none',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'primary.main',
          boxShadow: popular 
            ? '0 20px 60px rgba(37, 211, 102, 0.3)'
            : '0 12px 32px rgba(37, 211, 102, 0.15)',
        },
      }}
    >
      {popular && (
        <Chip
          label="Most Popular!"
          color="primary"
          sx={{
            position: 'absolute',
            top: -16,
            right: 24,
            fontWeight: 600,
            fontSize: '0.875rem',
          }}
        />
      )}
      
      <CardContent sx={{ p: 0, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h3"
            component="span"
            sx={{ fontWeight: 700 }}
          >
            KES {price}
          </Typography>
          <Typography
            variant="body1"
            component="span"
            color="text.secondary"
          >
            /month
          </Typography>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Stack spacing={2} sx={{ mb: 4, flex: 1 }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircle
                sx={{ color: 'primary.main', mr: 2, fontSize: '1.25rem' }}
              />
              <Typography variant="body1">{feature}</Typography>
            </Box>
          ))}
        </Stack>
        
        <CustomButton
          variant={popular ? 'primary' : 'secondary'}
          size="large"
          fullWidth
          onClick={() => console.log(`Selected ${name} plan`)}
        >
          {ctaText}
        </CustomButton>
        
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, color: 'primary.main', fontWeight: 600 }}
        >
          First month 50% off
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PricingCard;