import React from 'react';
import { Box, Container, Typography, Grid, Stack, Divider} from '@mui/material';
import { CustomButton, GlassCard } from '../ui';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import AssessmentIcon from '@mui/icons-material/Assessment';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FinalCTA: React.FC = () => {
  return (
    <Box sx={{ 
      py: 12, 
      background: 'linear-gradient(135deg, rgba(80, 200, 120, 0.1) 0%, rgba(0, 0, 0, 1) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated grid background */}
      <Box sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(80, 200, 120, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(80, 200, 120, 0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.3
      }} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6}>
          {/* Main CTA */}
          <Grid item xs={12} md={8}>
            <Typography 
              variant="h2" 
              sx={{ 
                color: 'white',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              Stop Managing Chaos.
              <br />
              <Box component="span" sx={{ color: 'primary.main' }}>
                Start Leading Growth.
              </Box>
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'grey.400',
                mb: 4,
                lineHeight: 1.8
              }}
            >
              Your business logic deserves an architecture that works as hard as you do. 
              Request a comprehensive analysis of your current B2B workflow gaps.
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <CustomButton
                variant="primary"
                size="large"
                startIcon={<AssessmentIcon />}
              >
                Request System Audit
              </CustomButton>
              
              <CustomButton
                variant="secondary"
                size="large"
                startIcon={<PlayArrowIcon />}
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.light',
                    backgroundColor: 'rgba(80, 200, 120, 0.1)'
                  }
                }}
              >
                Watch Live Demo
              </CustomButton>
            </Stack>
            
            {/* Trust signals */}
            <Box sx={{ 
              display: 'flex',
              gap: 3,
              mt: 4,
              flexWrap: 'wrap'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  No credit card required
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  Custom ROI analysis included
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  Response within 4 business hours
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          {/* Alternative contact methods */}
          <Grid item xs={12} md={4}>
            <GlassCard
              glow
              hover={false}
              sx={{
                p: 4,
                backgroundColor: 'rgba(20, 20, 20, 0.8) !important', // Force dark background for this dark section
                borderColor: 'rgba(80, 200, 120, 0.2) !important'
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'white',
                  fontWeight: 600,
                  mb: 3
                }}
              >
                Prefer to Talk First?
              </Typography>
              
              <Stack spacing={3}>
                {/* WhatsApp */}
                <CustomButton
                  variant="whatsapp"
                  size="medium"
                  fullWidth
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    justifyContent: 'flex-start',
                    py: 1.5
                  }}
                >
                  <Box sx={{ textAlign: 'left', flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      WhatsApp Us
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      +254 700 000 000
                    </Typography>
                  </Box>
                </CustomButton>
                
                {/* Phone */}
                <CustomButton
                  variant="secondary"
                  size="medium"
                  fullWidth
                  startIcon={<PhoneIcon />}
                  sx={{
                    justifyContent: 'flex-start',
                    py: 1.5,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(80, 200, 120, 0.1)'
                    }
                  }}
                >
                  <Box sx={{ textAlign: 'left', flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Call Direct
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'grey.400' }}>
                      +254 700 000 001
                    </Typography>
                  </Box>
                </CustomButton>
                
                {/* Email */}
                <CustomButton
                  variant="secondary"
                  size="medium"
                  fullWidth
                  startIcon={<EmailIcon />}
                  sx={{
                    justifyContent: 'flex-start',
                    py: 1.5,
                    borderColor: 'rgba(80, 200, 120, 0.3)',
                    color: 'grey.300',
                    '&:hover': {
                      backgroundColor: 'rgba(80, 200, 120, 0.05)',
                      borderColor: 'primary.main'
                    }
                  }}
                >
                  <Box sx={{ textAlign: 'left', flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Email Us
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'grey.400' }}>
                      enterprise@jiaminie.tech
                    </Typography>
                  </Box>
                </CustomButton>
              </Stack>
              
              <Divider sx={{ my: 3, borderColor: 'rgba(80, 200, 120, 0.1)' }} />
              
              <Typography variant="caption" sx={{ color: 'grey.500', display: 'block', textAlign: 'center' }}>
                Available: Mon-Fri, 8AM-6PM EAT
                <br />
                Enterprise emergency: 24/7
              </Typography>
            </GlassCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FinalCTA;