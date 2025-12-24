import React from 'react';
import { Box, Typography, Card, CardContent, SvgIconProps } from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface MetricCardProps {
  value: string;
  label: string;
  change?: string;
  icon?: React.ElementType<SvgIconProps>;
  color?: string;
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  value, 
  label, 
  change, 
  icon: Icon,
  color = 'primary.main',
  delay = 0 
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
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid',
          borderColor: 'rgba(37, 211, 102, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: color,
            transform: 'translateY(-4px)',
            boxShadow: `0 20px 40px ${color}33`,
          },
        }}
      >
        {/* Gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        
        <CardContent sx={{ p: 3, position: 'relative', zIndex: 1 }}>
          {/* Icon */}
          {Icon && (
            <Box
              sx={{
                display: 'inline-flex',
                p: 1.5,
                borderRadius: 2,
                backgroundColor: `${color}22`,
                color: color,
                mb: 2,
              }}
            >
              <Icon sx={{ fontSize: 32 }} />
            </Box>
          )}
          
          {/* Value */}
          <Typography
            variant="h2"
            sx={{
              color: 'text.primary',
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            {value}
          </Typography>
          
          {/* Label */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: change ? 2 : 0,
            }}
          >
            {label}
          </Typography>
          
          {/* Change indicator */}
          {change && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TrendingUpIcon sx={{ color: 'success.main', fontSize: 20 }} />
              <Typography
                variant="body2"
                sx={{
                  color: 'success.main',
                  fontWeight: 600,
                }}
              >
                {change}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MetricCard;
