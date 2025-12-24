import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { TestimonialCard } from '../ui';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../hooks/useScrollAnimation';

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      name: 'David Kimani',
      role: 'Operations Director',
      company: 'Swift Logistics Ltd',
      quote: 'We were losing 60% of inquiries that came after hours. Now we capture every lead automatically.',
      rating: 5,
      results: ['0% Missed Leads', '300% Booking Increase', 'ROI in 3 weeks'],
      avatar: '/testimonials/david.jpg'
    },
    {
      name: 'Sarah Wanjiku',
      role: 'Finance Manager',
      company: 'TradeMart Distributors',
      quote: "My team used to spend entire mornings verifying M-Pesa payments. Now it's instant and error-free.",
      rating: 5,
      results: ['15hrs saved/week', 'Auto-reconciliation', 'Faster delivery'],
      avatar: '/testimonials/sarah.jpg'
    },
    {
      name: 'James Omondi',
      role: 'CEO',
      company: 'TechSupply East Africa',
      quote: 'The ROI was visible within the first month. We can now handle 3x the volume with the same team size.',
      rating: 5,
      results: ['2.5x Revenue', 'NPS increased by 40%', 'Regional expansion enabled'],
      avatar: '/testimonials/james.jpg'
    }
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: '#0a0a0a' }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white',
              fontWeight: 700,
              mb: 2
            }}
          >
            Real Results. <Box component="span" sx={{ color: 'primary.main' }}>Real Businesses.</Box>
          </Typography>
          <Typography variant="h6" sx={{ color: 'grey.400' }}>
            See how East African enterprises are scaling with Jiaminie
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <TestimonialCard {...testimonial} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;