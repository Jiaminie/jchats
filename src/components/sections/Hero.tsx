import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { motion } from 'framer-motion';
import WhatsAppButton from '../ui/WhatsAppButton';
import CustomButton from '../ui/CustomButton';
import { useScrollAnimation, fadeInUp } from '../../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, controls } = useScrollAnimation();

  const scrollToVideoSection = () => {
    const videoSection = document.getElementById('video-examples');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 0 },
      }}
    >
      {/* Subtle Background Elements */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37, 211, 102, 0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left: Copy */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={fadeInUp}
            >
              <Typography 
                variant="h1" 
                component="h1"
                sx={{ 
                  mb: 3,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                Your Entire Business.{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Running on WhatsApp.
                </Box>
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 6, 
                  color: '#A0A0A0',
                  fontSize: '1.25rem',
                  lineHeight: 1.7,
                  maxWidth: '600px',
                }}
              >
                Why not meet your customers where they are?
              </Typography>
            
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
              >
                <WhatsAppButton
                  message="Hi! I'd like to learn more about JChats for my business."
                  sx={{ minWidth: { xs: '100%', sm: 'auto' } }}
                >
                  Schedule a Demo
                </WhatsAppButton>
                <CustomButton
                  size="large"
                  variant="secondary"
                  onClick={scrollToVideoSection}
                  startIcon={<PlayArrowIcon />}
                  sx={{ minWidth: { xs: '100%', sm: 'auto' } }}
                >
                  See How It Works
                </CustomButton>
                
              </Stack>
            </motion.div>
          </Grid>
          
          {/* Right: Phone Mockup */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '400px', md: '500px' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Phone Mockup Placeholder */}
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '450px',
                    height: '100%',
                    backgroundColor: 'rgba(20, 20, 20, 0.6)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: 3,
                    border: '1px solid rgba(37, 211, 102, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    p: 4,
                    boxShadow: '0 20px 60px rgba(37, 211, 102, 0.1)',
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#A0A0A0', textAlign: 'center' }}>
                    📱 Split-Screen Mockup
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#A0A0A0', textAlign: 'center', maxWidth: '300px' }}>
                    Customer WhatsApp Chat + Business Dashboard Side-by-Side
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#666666', textAlign: 'center' }}>
                    (Replace with actual phone mockup image)
                  </Typography>
                </Box>

                {/* Floating Stats */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '-5%',
                    p: 2.5,
                    bgcolor: 'rgba(20, 20, 20, 0.8)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(37, 211, 102, 0.2)',
                    borderRadius: 2,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                    minWidth: '140px',
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#A0A0A0', display: 'block', mb: 0.5 }}>
                    Orders Today
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#25D366', fontWeight: 700 }}>
                    +127
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#25D366', fontWeight: 600 }}>
                    ▲ 40% increase
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '-5%',
                    p: 2.5,
                    bgcolor: 'rgba(20, 20, 20, 0.8)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(37, 211, 102, 0.2)',
                    borderRadius: 2,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                    minWidth: '160px',
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#A0A0A0', display: 'block', mb: 0.5 }}>
                    M-Pesa Payments
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#25D366' }} />
                    <Typography variant="body2" sx={{ color: '#F5F5F5', fontWeight: 600 }}>
                      Instant & Secure
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;