import React from 'react';
import { Container, Typography, Box, Grid, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const GettingStarted: React.FC = () => {
  const steps = [
    {
      day: 'Day 1',
      icon: CalendarTodayIcon,
      title: 'Share Your Business Details',
      description: 'Tell us about your business, products/services, and how you currently operate. A quick 15-minute call is all we need.',
      details: [
        'What you sell or offer',
        'Your current process',
        'Your WhatsApp number',
        'Your M-Pesa till number',
      ],
    },
    {
      day: 'Days 2-3',
      icon: BuildIcon,
      title: 'We Set Everything Up',
      description: 'Our team builds your custom catalog, configures payments, and sets up automated messages. You focus on your business.',
      details: [
        'Product catalog with photos & prices',
        'M-Pesa payment integration',
        'Automated order confirmations',
        'Custom WhatsApp messages',
      ],
    },
    {
      day: 'Day 3',
      icon: RocketLaunchIcon,
      title: 'Go Live & Start Selling',
      description: 'We train you on the system (30 minutes), test everything together, then you start taking orders immediately.',
      details: [
        'Live training session',
        'Test orders together',
        'Launch to your customers',
        'Ongoing support included',
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
            Get Started in 3 Days
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: '#FFFFFF',
              mb: { xs: 6, md: 8 },
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            From first call to first sale in 72 hours. No technical knowledge required.
          </Typography>
        </motion.div>

        {/* Timeline */}
        <Grid container spacing={4}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassCard
                    glow={false}
                    hover={true}
                    sx={{
                      height: '100%',
                      p: 4,
                      background: '#000000',
                      border: '2px solid',
                      borderColor: '#E5E7EB',
                      '&:hover': {
                        borderColor: '#25D366',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(37, 211, 102, 0.15)',
                      },
                    }}
                  >
                    {/* Day Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -16,
                        left: 24,
                        backgroundColor: '#25D366',
                        color: '#FFFFFF',
                        px: 3,
                        py: 1,
                        borderRadius: 0,
                        fontWeight: 600,
                        fontSize: '0.875rem',
                      }}
                    >
                      {step.day}
                    </Box>

                    <CardContent sx={{ p: 0, pt: 3 }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: 0,
                          backgroundColor: 'rgba(37, 211, 102, 0.1)',
                          color: '#25D366',
                          mb: 3,
                        }}
                      >
                        <IconComponent sx={{ fontSize: 40 }} />
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#FFFFFF',
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {step.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#FFFFFF',
                          lineHeight: 1.7,
                          mb: 3,
                        }}
                      >
                        {step.description}
                      </Typography>

                      {/* Details */}
                      <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
                        {step.details.map((detail, idx) => (
                          <Box
                            component="li"
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 1,
                              mb: 1,
                            }}
                          >
                            <CheckCircleIcon
                              sx={{
                                color: '#25D366',
                                fontSize: '1.25rem',
                                mt: 0.25,
                                flexShrink: 0,
                              }}
                            />
                            <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
                              {detail}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </GlassCard>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default GettingStarted;
