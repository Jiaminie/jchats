import React from 'react';
import { Box, Container, Grid, Typography, CardContent } from '@mui/material';
import { GlassCard } from '../ui';
import StorageIcon from '@mui/icons-material/Storage';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

// Custom Visual Components to represent the requested graphics
const ApiGatewayVisual = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mt: 2, opacity: 0.8 }}>
    <Box sx={{ p: 1, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 1, fontSize: '0.7rem' }}>SAP</Box>
    <Box sx={{ height: 1, width: 20, borderBottom: '1px dashed rgba(0,255,148,0.5)' }} />
    <Box sx={{ 
      width: 40, height: 40, borderRadius: '50%', 
      bgcolor: 'rgba(0,255,148,0.1)', border: '1px solid rgba(0,255,148,0.5)',
      display: 'flex', alignItems:'center', justifyContent:'center' 
    }}>
      <StorageIcon sx={{ fontSize: 20, color: 'primary.main' }} />
    </Box>
    <Box sx={{ height: 1, width: 20, borderBottom: '1px dashed rgba(0,255,148,0.5)' }} />
    <Box sx={{ p: 1, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 1, fontSize: '0.7rem' }}>Oracle</Box>
  </Box>
);

const AiTerminalVisual = () => (
  <Box sx={{ 
    mt: 2, p: 1.5, bgcolor: '#000', borderRadius: 1, border: '1px solid rgba(255,255,255,0.1)',
    fontFamily: 'monospace', fontSize: '0.75rem', color: 'primary.main'
  }}>
    <Box sx={{ display: 'flex', gap: 1, mb: 0.5 }}>
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ff5f56' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#27c93f' }} />
    </Box>
    <Box sx={{ opacity: 0.7 }}>&gt; diagnosing intent...</Box>
    <Box>&gt; executing transaction</Box>
  </Box>
);

const InvoiceVisual = () => (
  <Box sx={{ 
    mt: 2, position: 'relative', height: 60, width: '100%', 
    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 1, p: 1
  }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
      <Box sx={{ width: 40, height: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'success.main', opacity: 0.8 }} />
    </Box>
    <Box sx={{ width: 60, height: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />
    <Box sx={{ position: 'absolute', bottom: 5, right: 10, fontSize: '1.2rem', color: 'text.secondary', opacity: 0.2 }}>
      <ReceiptLongIcon />
    </Box>
  </Box>
);

const WorkflowVisual = () => (
  <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
    <Box sx={{ p: 0.5, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 0.5, fontSize: '0.6rem' }}>Lead</Box>
    <Box sx={{ width: 15, borderBottom: '1px solid rgba(255,255,255,0.2)' }} />
    <Box sx={{ p: 0.5, border: '1px solid primary.main', bgcolor: 'rgba(0,255,148,0.1)', borderRadius: 0.5, fontSize: '0.6rem', color: 'primary.main' }}>Qualify</Box>
    <Box sx={{ width: 15, borderBottom: '1px solid rgba(255,255,255,0.2)' }} />
    <Box sx={{ p: 0.5, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 0.5, fontSize: '0.6rem' }}>Deal</Box>
  </Box>
);

const CoreFeatures: React.FC = () => {
  const features = [
    {
      title: 'Seamless Integrations',
      description: 'Connects with the tools you already use like SAP, Oracle, or custom systems. No data silos, just smooth synchronization.',
      icon: <StorageIcon sx={{ fontSize: 28, color: 'primary.main' }} />,
      cols: 8,
      visual: <ApiGatewayVisual />,
    },
    {
      title: 'Smart AI Assistants',
      description: 'Your 24/7 digital team member. It understands customer needs, answers questions, and closes deals automatically.',
      icon: <SmartToyIcon sx={{ fontSize: 28, color: 'secondary.main' }} />,
      cols: 4,
      visual: <AiTerminalVisual />,
    },
    {
      title: 'Automated Reconciliation',
      description: 'Instant tracking for M-Pesa and card payments. Every shilling is accounted for in real-time, errors eliminated.',
      icon: <ReceiptLongIcon sx={{ fontSize: 28, color: 'warning.main' }} />,
      cols: 4,
      visual: <InvoiceVisual />,
    },
    {
      title: 'Visual Journey Builder',
      description: 'Map out exactly how you want your customer experience to flow. From first click to final delivery, you\'re in control.',
      icon: <AccountTreeIcon sx={{ fontSize: 28, color: 'success.main' }} />,
      cols: 8,
      visual: <WorkflowVisual />,
    },
  ];

  return (
    <Box id="feature-matrix" sx={{ py: 12, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ mb: 8, fontWeight: 700, color: 'text.primary' }}
        >
          Enterprise-Grade <Box component="span" sx={{ color: 'primary.main' }}>Modules</Box>
        </Typography>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={feature.cols} key={index}>
              <GlassCard
                hover
                glow={false}
                sx={{
                  height: '100%',
                  bgcolor: 'background.default',
                  border: '1px solid',
                  borderColor: 'rgba(0,0,0,0.05)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    justifyContent: 'space-between', 
                    mb: 2 
                  }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, maxWidth: '80%' }}>
                      {feature.title}
                    </Typography>
                    <Box sx={{ 
                      p: 1, 
                      borderRadius: 1, 
                      bgcolor: 'rgba(255,255,255,0.03)' 
                    }}>
                      {feature.icon}
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 3, flexGrow: 1 }}>
                    {feature.description}
                  </Typography>

                  {/* Render the custom visual */}
                  <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {feature.visual}
                  </Box>
                </CardContent>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreFeatures;
