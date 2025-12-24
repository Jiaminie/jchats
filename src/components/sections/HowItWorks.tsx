import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { CustomButton, GlassCard } from '../ui';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const HowItWorks: React.FC = () => {
  const timeline = [
    {
      time: '2:00 AM',
      title: 'Customer Discovery',
      description: 'Customer finds your WhatsApp link and browses product catalog',
      details: [
        'Autonomous Intent Engine analyzes behavior',
        'Beautiful product cards with prices displayed',
        'Real-time inventory checking',
      ],
    },
    {
      time: '2:15 AM',
      title: 'Order Placement',
      description: 'Customer selects items and sees total with delivery options',
      details: [
        'Inventory validation in milliseconds',
        'Delivery zone verification',
        'Clear cart with all costs shown',
      ],
    },
    {
      time: '2:16 AM',
      title: 'Payment Processing',
      description: 'STK push to phone, M-Pesa PIN entered',
      details: [
        'Real-time payment verification via API',
        'Bank-grade encryption',
        'Instant confirmation',
      ],
    },
    {
      time: '2:17 AM',
      title: 'Order Confirmation',
      description: 'Automatic receipt generated, business owner notified',
      details: [
        'Order added to "Ongoing" queue',
        'SMS notification sent',
        'Customer receives confirmation',
      ],
    },
    {
      time: '8:00 AM',
      title: 'Business Owner Wakes Up',
      description: 'Opens dashboard to see organized list of verified orders',
      details: [
        'All payments reconciled',
        'Priorities assigned',
        'Ready to execute',
      ],
    },
  ];

  const implementationSteps = [
    {
      label: 'Day 1: Discovery Call',
      description: 'We understand your business, identify workflows, and map pain points.',
      duration: '30 minutes',
      icon: <AccessTimeIcon />,
    },
    {
      label: 'Day 2: System Configuration',
      description: 'We build your catalog, connect payments, set up dashboard, and test everything.',
      duration: '4 hours',
      icon: <SettingsIcon />,
    },
    {
      label: 'Day 3: Training',
      description: 'Dashboard walkthrough, product management training, analytics explanation.',
      duration: '1 hour',
      icon: <TrendingUpIcon />,
    },
    {
      label: 'Day 4: Go Live',
      description: 'Test with 5 customers, monitor first orders, make adjustments, full launch.',
      duration: 'Same day',
      icon: <RocketLaunchIcon />,
    },
  ];

  return (
    <Box id="how-it-works" sx={{ backgroundColor: '#000000', minHeight: '100vh', pt: 12 }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 2,
            }}
          >
            The Autonomous Business
            <br />
            <Box component="span" sx={{ color: 'primary.main' }}>
              Operating System
            </Box>
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              color: 'grey.400',
              maxWidth: '700px',
              mx: 'auto',
              mb: 8,
            }}
          >
            See how Jiaminie transforms your business operations from manual chaos
            into automated precision—without revealing a single line of code.
          </Typography>
        </motion.div>
      </Container>

      {/* 24-Hour Journey Timeline */}
      <Box sx={{ py: 12, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{ color: 'white', fontWeight: 700, mb: 8 }}
          >
            The 24-Hour Journey
          </Typography>

          <Grid container spacing={4}>
            {timeline.map((item, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard
                    glow
                    sx={{
                      display: 'flex',
                      gap: 4,
                      alignItems: 'flex-start',
                      p: 4,
                      backgroundColor: 'rgba(20, 20, 20, 0.6) !important', // Force dark for this section
                      borderLeft: '4px solid',
                      borderLeftColor: 'primary.main',
                      borderColor: 'rgba(80, 200, 120, 0.1)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateX(8px)',
                      },
                    }}
                  >
                    {/* Time */}
                    <Box
                      sx={{
                        minWidth: 100,
                        p: 2,
                        background: 'rgba(80, 200, 120, 0.1)',
                        borderRadius: 2,
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 700,
                          fontFamily: 'monospace',
                        }}
                      >
                        {item.time}
                      </Typography>
                    </Box>

                    {/* Content */}
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'grey.400',
                          mb: 2,
                        }}
                      >
                        {item.description}
                      </Typography>

                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {item.details.map((detail, idx) => (
                          <Box
                            component="li"
                            key={idx}
                            sx={{
                              color: 'grey.500',
                              fontSize: '0.875rem',
                              mb: 0.5,
                            }}
                          >
                            {detail}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </GlassCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Implementation Process */}
      <Box sx={{ py: 12, backgroundColor: '#000000' }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            sx={{ color: 'white', fontWeight: 700, mb: 2 }}
          >
            Implementation Process
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: 'grey.400', mb: 8 }}
          >
            From contract to go-live in 4 days
          </Typography>

          <Stepper
            orientation="vertical"
            sx={{
              '& .MuiStepLabel-root': {
                padding: 0,
              },
              '& .MuiStepConnector-line': {
                borderColor: 'rgba(80, 200, 120, 0.2)',
                borderLeftWidth: 2,
              },
              '& .MuiStepIcon-root': {
                color: 'rgba(80, 200, 120, 0.2)',
                '&.Mui-active': {
                  color: 'primary.main',
                },
                '&.Mui-completed': {
                  color: 'primary.main',
                },
              },
            }}
          >
            {implementationSteps.map((step, index) => (
              <Step key={index} active>
                <StepLabel
                  icon={
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(80, 200, 120, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.main',
                      }}
                    >
                      {step.icon}
                    </Box>
                  }
                >
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Box sx={{ ml: 8, mb: 4 }}>
                    <Typography variant="body1" sx={{ color: 'grey.400', mb: 1 }}>
                      {step.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      Duration: {step.duration}
                    </Typography>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <CustomButton
              variant="primary"
              size="large"
              sx={{
                py: 2,
                px: 6,
              }}
              onClick={() => window.open('https://wa.me/254700000000', '_blank')}
            >
              Schedule Implementation Call
            </CustomButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HowItWorks;