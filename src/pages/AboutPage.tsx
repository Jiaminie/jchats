import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VisibilityIcon from '@mui/icons-material/Visibility';

const AboutPage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#000000', minHeight: '100vh', pt: 12 }}>
      {/* Hero */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <Typography variant="h1" sx={{ color: 'white', fontWeight: 700, mb: 3 }}>
            Digitizing the <Box component="span" sx={{ color: 'primary.main' }}>Backbone</Box> of African Commerce
          </Typography>
          <Typography variant="h6" sx={{ color: 'grey.400', maxWidth: '800px', mx: 'auto', mb: 6, lineHeight: 1.8 }}>
            JChats is building the autonomous infrastructure that allows B2B enterprises to scale across borders without the friction of manual operations.
          </Typography>
        </motion.div>
      </Container>

      {/* Mission/Vision */}
      <Box sx={{ py: 12, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <GlassCard sx={{ p: 4, height: '100%' }}>
                <LightbulbIcon sx={{ color: 'primary.main', fontSize: 48, mb: 2 }} />
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>Our Mission</Typography>
                <Typography variant="body1" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
                  To provide every African enterprise with the tools to automate complex B2B workflows, from order intake to payment reconciliation.
                </Typography>
              </GlassCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <GlassCard sx={{ p: 4, height: '100%' }}>
                <VisibilityIcon sx={{ color: 'primary.main', fontSize: 48, mb: 2 }} />
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>Our Vision</Typography>
                <Typography variant="body1" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
                  A future where African businesses operate with zero manual touchpoints, enabling limitless growth and efficiency.
                </Typography>
              </GlassCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <GlassCard sx={{ p: 4, height: '100%' }}>
                <GroupsIcon sx={{ color: 'primary.main', fontSize: 48, mb: 2 }} />
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>Our Culture</Typography>
                <Typography variant="body1" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
                  We are engineers and optimizers obsessed with removing friction. We believe in building software that feels like magic.
                </Typography>
              </GlassCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Story Section */}
      <Container maxWidth="md" sx={{ py: 12 }}>
        <Typography variant="h2" align="center" sx={{ color: 'white', fontWeight: 700, mb: 6 }}>
          Why Jiaminie?
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.300', mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
          Named after the Swahili word for "Believe in yourself," JChats was founded to solve a critical gap: the "last mile" of B2B digital transformation. While consumer e-commerce flourished, B2B distributors and wholesalers were still trapped in cycles of manual phone calls, spreadsheet-based inventory, and messy M-Pesa reconciliations.
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.300', mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
          We didn't just build another CRM. We built an autonomous engine that behaves like your best operations manager—working 24/7, catching every lead, and reconciling every payment instantly.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutPage;
