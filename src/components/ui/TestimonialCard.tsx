import React from 'react';
import { Box, Typography, Card, Rating, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  location?: string;
  image?: string;
  quote: string;
  rating?: number;
  results?: string[];
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name,
  role,
  company,
  location,
  image,
  quote,
  rating = 5,
  results = [],
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
          height: '100%',
          p: 4,
          backgroundColor: 'rgba(20, 20, 20, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 0,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            borderColor: 'primary.main',
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 32px rgba(37, 211, 102, 0.2)',
          },
        }}
      >
        {/* Quote icon - Fixed position */}
        <FormatQuoteIcon
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            fontSize: 60,
            color: '#25D366',
            opacity: 0.1,
          }}
        />
        
        {/* Rating */}
        <Rating 
          value={rating} 
          readOnly 
          sx={{ 
            mb: 2,
            '& .MuiRating-iconFilled': {
              color: '#25D366',
            },
          }} 
        />
        
        {/* Quote */}
        <Typography
          variant="body1"
          sx={{
            color: 'text.primary',
            fontStyle: 'italic',
            lineHeight: 1.8,
            mb: 3,
            flex: 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          "{quote}"
        </Typography>
        
        {/* Results */}
        {results.length > 0 && (
          <Box
            sx={{
              p: 2,
              backgroundColor: 'rgba(10, 10, 10, 0.8)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              borderRadius: 1,
              mb: 3,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: '#25D366',
                fontWeight: 600,
                display: 'block',
                mb: 1,
              }}
            >
              RESULTS
            </Typography>
            {results.map((result, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 0.5,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    mr: 1,
                  }}
                />
                <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.875rem' }}>
                  {result}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
        
        {/* Author info */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative', zIndex: 1 }}>
          <Avatar
            src={image}
            alt={name}
            sx={{
              width: 56,
              height: 56,
              border: '2px solid #25D366',
              backgroundColor: '#E5E7EB',
            }}
          >
            {name.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" sx={{ color: 'text.primary', fontWeight: 600 }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {role}, {company}
            </Typography>
            {location && (
              <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
                {location}
              </Typography>
            )}
          </Box>
        </Box>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
