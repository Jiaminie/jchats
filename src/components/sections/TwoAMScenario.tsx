import React from 'react';
import { Box, Container, Grid, Typography, Stack, Divider } from '@mui/material';
import { CustomButton } from '../ui';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TwoAMScenario: React.FC = () => {
  return (
    <Box sx={{ 
      py: 12, 
      backgroundColor: '#000000',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background gradient effect */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(80, 200, 120, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>    
            <Typography 
              variant="h2" 
              sx={{ 
                color: 'white',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              While You Sleep,
              <br />
              <Box component="span" sx={{ color: 'primary.main' }}>
                Jiaminie Works
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
              Stop waking up to chaos. Every morning, see a clean, organized list 
              of confirmed bookings—all payments verified, all details captured, 
              all schedules synchronized.
            </Typography>
            
            {/* Time stamp with metric */}
            <Box sx={{ 
              p: 3, 
              backgroundColor: 'rgba(80, 200, 120, 0.05)',
              border: '1px solid rgba(80, 200, 120, 0.2)',
              borderRadius: 2,
              mb: 3
            }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'grey.500',
                  display: 'block',
                  mb: 1
                }}
              >
                TIMESTAMP
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 700,
                  mb: 2
                }}
              >
                02:14 AM
              </Typography>
              <Divider sx={{ my: 2, borderColor: 'rgba(80, 200, 120, 0.2)' }} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CheckCircleIcon sx={{ color: 'success.main' }} />
                <Box>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                    Move Booking Confirmed
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    KES 15,000 Deposit Received → Added to "Ongoing"
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Stack direction="row" spacing={2}>
              <CustomButton 
                variant="primary" 
                size="large"
              >
                See It In Action
              </CustomButton>
              <CustomButton 
                variant="secondary" 
                size="large"
                sx={{ 
                  borderColor: 'primary.main',
                  color: 'primary.main'
                }}
              >
                Read Case Study
              </CustomButton>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={6}>
            {/* Phone mockup with notification */}
            <Box sx={{ 
              position: 'relative',
              height: { xs: 500, md: 600 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Box
                sx={{
                  width: { xs: 280, md: 320 },
                  height: { xs: 530, md: 600 },
                  backgroundColor: '#1a1a1a',
                  borderRadius: 6,
                  border: '8px solid #333',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Notification overlay */}
                <Box sx={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  right: 20,
                  backgroundColor: 'rgba(80, 200, 120, 0.95)',
                  p: 2,
                  borderRadius: 2,
                  zIndex: 2,
                  animation: 'slideDown 0.5s ease-out'
                }}>
                  <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)' }}>
                    NEW ORDER
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#000', fontWeight: 600 }}>
                    KES 15,000 Received
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(0,0,0,0.7)' }}>
                    3-bedroom move, Westlands → Karen
                  </Typography>
                </Box>
                
                {/* Dashboard preview */}
                <Box sx={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  backgroundColor: '#0a0a0a'
                }}>
                  <Typography variant="caption" sx={{ color: 'grey.500' }}>
                    ONGOING MOVES
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {[1, 2, 3].map((i) => (
                      <Box 
                        key={i}
                        sx={{ 
                          mb: 1.5,
                          p: 1.5,
                          backgroundColor: 'rgba(80, 200, 120, 0.1)',
                          borderRadius: 1,
                          borderLeft: '3px solid',
                          borderColor: 'primary.main'
                        }}
                      >
                        <Typography variant="caption" sx={{ color: 'white' }}>
                          Move #{1450 + i} • PAID
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
              
              {/* Glow effect */}
              <Box sx={{
                position: 'absolute',
                width: 400,
                height: 400,
                background: 'radial-gradient(circle, rgba(80, 200, 120, 0.3) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: -1
              }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </Box>
  );
};

export default TwoAMScenario;
