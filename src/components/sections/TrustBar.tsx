import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const TrustBar: React.FC = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'background.default', py: 6, borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {/* Authority Copy */}
            <Grid item xs={12}>
              <Typography 
                variant="caption" 
                align="center" 
                sx={{ 
                  display: 'block', 
                  mb: 4, 
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  fontWeight: 600,
                  opacity: 0.7
                }}
              >
                Powering high-growth businesses across East Africa
              </Typography>
              
              {/* Logos Carousel (Static for now, but styled for scrolling effect) */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                gap: { xs: 4, md: 8 },
                flexWrap: 'wrap',
                opacity: 0.5,
                '& > div': {
                  filter: 'grayscale(100%)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    opacity: 1,
                    transform: 'scale(1.1)'
                  }
                }
              }}>
                {/* Logo Placeholders - Replace with actual SVGs/Images */}
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>LOGISTICS.CO</Typography>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>TRADEFLOW</Typography>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>AGRI-CORP</Typography>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>DISTRIBU-TECH</Typography>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>OMEGA SUPPLY</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* NEW SECTION: Trust Bar with Real Signals (Priority 1A) */}
      <Box sx={{ py: 4, backgroundColor: 'grey.900', borderTop: '1px solid rgba(80, 200, 120, 0.1)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: 'primary.main', display: 'flex' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2ZM12 4.29V12H19C18.47 16.11 15.72 19.78 12 20.93V12H5V8.11L12 4.29Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    Certified Partner
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    WhatsApp Business API
                  </Typography>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: 'primary.main', display: 'flex' }}>
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V11.99H5V6.3L12 3.19V11.99Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    Bank-Grade Security
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    PCI-DSS Compliant
                  </Typography>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: 'primary.main', display: 'flex' }}>
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 2L6.35 12.01H12.65L10.5 22L17.65 11.99H11.35L13.5 2Z" fill="currentColor"/>
                  </svg>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    Enterprise Reliability
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    99.9% Uptime SLA
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TrustBar;
