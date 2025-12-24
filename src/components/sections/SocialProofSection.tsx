import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { TestimonialCard } from '../ui';

const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      name: 'James Mwangi',
      role: 'Fish Trader',
      company: 'Mwangi Fresh Fish',
      location: 'Nairobi, Kenya',
      image: '', // Placeholder - will need actual image
      quote: 'Before JChats, I spent 4 hours daily answering "What do you have?" Now my catalog does it automatically. Sales up 45% and I have time to actually run my business.',
      rating: 5,
      results: [
        '45% increase in daily sales',
        'Saves 4 hours per day',
        'Zero payment disputes',
      ],
    },
    {
      name: 'Grace Akinyi',
      role: 'Salon Owner',
      company: 'Grace Beauty Lounge',
      location: 'Mombasa, Kenya',
      image: '', // Placeholder
      quote: 'No-shows used to cost me KES 15,000 monthly. With JChats deposit system, that dropped to almost zero. The automated reminders are a game-changer.',
      rating: 5,
      results: [
        '80% reduction in no-shows',
        'KES 15,000 saved monthly',
        'Bookings doubled',
      ],
    },
    {
      name: 'Peter Omondi',
      role: 'Hotel Manager',
      company: 'Lakeside Inn',
      location: 'Kisumu, Kenya',
      image: '', // Placeholder
      quote: 'Guests love how easy it is to book and pay on WhatsApp. We went from 60% to 95% occupancy in 3 months. The system pays for itself every week.',
      rating: 5,
      results: [
        'Occupancy: 60% → 95%',
        'Booking time reduced by 60%',
        'ROI in first month',
      ],
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#000000',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: '#FFFFFF',
              fontWeight: 700,
              mb: 2,
            }}
          >
            Trusted by Kenyan Businesses
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: '#666666',
              mb: { xs: 6, md: 8 },
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Real businesses. Real results. See how JChats is transforming operations across Kenya.
          </Typography>
        </motion.div>

        {/* Testimonials Grid */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                location={testimonial.location}
                image={testimonial.image}
                quote={testimonial.quote}
                rating={testimonial.rating}
                results={testimonial.results}
                delay={index * 0.1}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SocialProofSection;
