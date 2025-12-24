import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ContactSection } from '../components';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#000000', minHeight: '100vh', pt: 12 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 2,
            }}
          >
            Let's Scale Your <Box component="span" sx={{ color: 'primary.main' }}>Operations</Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'grey.400',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Ready to automate your B2B commerce? Our systems team is waiting to build your custom autonomous operating system.
          </Typography>
        </motion.div>
      </Container>
      
      <ContactSection />
      
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography align="center" variant="body2" sx={{ color: 'grey.600' }}>
            Direct Support: enterprise@jiaminie.tech | Signal: +254 700 000 000
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;
