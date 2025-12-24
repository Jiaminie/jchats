import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../hooks/useScrollAnimation';

const ContactSection: React.FC = () => {
  return (
    <Box id="contact" sx={{ py: 12, backgroundColor: '#000000' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                Ready to <Box component="span" sx={{ color: 'primary.main' }}>Level Up</Box>?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'grey.400',
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                Get a free operational audit. We'll look at your current workflows and show you exactly where Jiaminie can automate, optimize, and grow your revenue.
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <Typography variant="body1" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
                  • Personalized Demo
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
                  • Custom Pricing Structure
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
                  • Integration Roadmap
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
