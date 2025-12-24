import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  icon: string; // Emoji or icon
  title: string;
  description: string;
  delay?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Card
        elevation={0}
        sx={{
          height: '100%',
          padding: 4,
          borderRadius: 0,
          textAlign: 'center',
          backgroundColor: '#000`',
          border: '1px solid #E5E7EB',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#25D366',
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 32px rgba(68, 221, 124, 0.15)',
          },
        }}
      >
        <CardContent sx={{ p: 0 }}>
          {/* Icon */}
          <Box
            sx={{
              fontSize: '4rem',
              mb: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {icon}
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              color: '#1F1F1F',
              fontWeight: 600,
              mb: 2,
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: '#666666',
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BenefitCard;
