import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Stack, 
  Link, 
  TextField, 
  Divider,
  Alert,
  Snackbar,
} from '@mui/material';
import { CustomButton } from '../ui';
import { WhatsApp } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowSuccess(true);
      setEmail('');
    }
  };

  const platformLinks = [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Architecture', href: '/#strategic-pillars' },
    { label: 'Modules', href: '/#feature-matrix' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        pt: 10,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <img src="/logo.avif" alt="Logo" width={50} height={50}/>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                JChats
              </Typography>
            </Box>
            
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary', 
                mb: 4,
                lineHeight: 1.7,
                maxWidth: '300px'
              }}
            >
              The enterprise operating system for African B2B commerce. Automate, scale, and govern your entire revenue stack.
            </Typography>
            
            <CustomButton
              component={RouterLink}
              to="/contact"
              variant="secondary"
              size="medium"
              startIcon={<WhatsApp />}
              sx={{
                borderColor: 'rgba(0,0,0,0.15)',
                color: 'text.secondary',
                '&:hover': { 
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  backgroundColor: 'rgba(37, 211, 102, 0.05)'
                },
              }}
            >
              Consult Sales
            </CustomButton>
          </Grid>
          
          {/* Platform Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ mb: 3, color: 'text.primary', fontWeight: 700, letterSpacing: 1 }}>
              PLATFORM
            </Typography>
            <Stack spacing={2}>
              {platformLinks.map((link) => (
                <Link 
                  key={link.label}
                  component={RouterLink}
                  to={link.href}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>
          
          {/* Company Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle2" sx={{ mb: 3, color: 'text.primary', fontWeight: 700, letterSpacing: 1 }}>
              COMPANY
            </Typography>
            <Stack spacing={2}>
              {[
                { label: 'About', href: '/about' },
                { label: 'Careers', href: '#' },
                { label: 'Partners', href: '#' },
                { label: 'Legal', href: '#' },
              ].map((link) => (
                <Link 
                  key={link.label}
                  component={RouterLink}
                  to={link.href}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>
          
          {/* Audit Signup */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle2" sx={{ mb: 3, color: 'text.primary', fontWeight: 700, letterSpacing: 1 }}>
              SYSTEM AUDIT
            </Typography>
            
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
              Request a comprehensive analysis of your current B2B workflow gaps.
            </Typography>
            
            <Box component="form" onSubmit={handleNewsletterSubmit}>
              <TextField
                placeholder="Work Email"
                variant="outlined"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255,255,255,0.03)',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                  },
                  '& input': { color: 'white' }
                }}
              />
              <CustomButton
                variant="primary"
                size="medium"
                fullWidth
                type="submit"
                sx={{ py: 1 }}
              >
                Request Audit
              </CustomButton>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 8, borderColor: 'rgba(255,255,255,0.05)' }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.6 }}>
            © 2024 Jiaminie Tech. Enterprise Systems.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
             <Link href="#" sx={{ color: 'text.secondary', opacity: 0.6, textDecoration: 'none', '&:hover': { opacity: 1 } }}>Privacy</Link>
             <Link href="#" sx={{ color: 'text.secondary', opacity: 0.6, textDecoration: 'none', '&:hover': { opacity: 1 } }}>Terms</Link>
          </Box>
        </Box>
      </Container>
      
      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success"
          variant="filled"
          sx={{ bgcolor: 'primary.dark', color: 'white' }}
        >
          Request received. Our systems team will contact you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;