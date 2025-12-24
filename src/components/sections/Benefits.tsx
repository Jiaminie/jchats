import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import BenefitCard from '../ui/BenefitCard';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: '📈',
      title: 'Increase Sales',
      description: 'Customers order 24/7, even while you sleep. Average increase: 40% more revenue.',
      cols: 8,
    },
    {
      icon: '⏰',
      title: 'Save Time',
      description: "Stop answering 'What do you have?' all day. Automated catalog saves 3+ hours daily.",
      cols: 4,
    },
    {
      icon: '💰',
      title: 'Get Paid Instantly',
      description: "M-Pesa payments happen in chat. Money in your account immediately. No 'I'll pay later.'",
      cols: 4,
    },
    {
      icon: '📱',
      title: 'Multi-Channel Ready',
      description: 'WhatsApp, Instagram, Facebook Messenger. Reach customers on their favorite platform.',
      cols: 8,
    },
    {
      icon: '🔐',
      title: 'Secure & Reliable',
      description: 'Bank-grade security. Every transaction encrypted. 99.9% uptime guaranteed.',
      cols: 7,
    },
    {
      icon: '🚀',
      title: 'Quick Setup',
      description: 'Go live in 3 days, not 3 months. We handle all the technical work for you.',
      cols: 5,
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
              mb: { xs: 6, md: 8 },
            }}
          >
            Why Businesses Choose JChats
          </Typography>
        </motion.div>

        {/* Benefits Grid */}
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={benefit.cols} key={index}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 0.1}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
