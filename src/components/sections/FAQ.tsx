import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { CustomButton } from '../ui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How does Jiaminie integrate with our existing ERP system?',
      answer: 'Our API-first architecture connects seamlessly with SAP, Oracle, Microsoft Dynamics, and custom systems. We handle the integration end-to-end—typical setup takes 3-5 days including UAT. Your data stays synchronized in real-time with zero manual input.'
    },
    {
      question: 'What level of security and compliance do you offer?',
      answer: 'Enterprise-grade security is non-negotiable. We\'re PCI-DSS Level 1 certified, SOC 2 Type II compliant, and meet all GDPR requirements. All data is encrypted at rest and in transit using 256-bit AES. Your data sovereignty is guaranteed—African customer data stays in African data centers.'
    },
    {
      question: 'Can we customize the workflows for our specific business logic?',
      answer: 'Absolutely. The Visual Journey Builder allows you to configure complex approval chains, custom pricing rules, territory-based routing, and multi-tier authorization. For unique requirements, our Solutions Architecture team will build custom modules tailored to your operations.'
    },
    {
      question: 'What happens if the system goes down during business hours?',
      answer: 'We guarantee 99.9% uptime via our SLA, backed by redundant infrastructure across multiple availability zones. In the rare event of disruption, automatic failover activates within 30 seconds. Enterprise customers get 24/7 phone support with <15 minute response times.'
    },
    {
      question: 'How long does deployment take for a mid-size enterprise?',
      answer: 'Standard deployment: 2-4 weeks from contract to go-live. This includes system integration, data migration, staff training, and parallel running. We assign a dedicated Solutions Architect who manages the entire process and ensures zero disruption to your operations.'
    },
    {
      question: 'Can we get usage analytics and custom reporting?',
      answer: 'Yes. Enterprise dashboards include real-time KPIs, custom report builders, and data export to your BI tools (Power BI, Tableau, Looker). We also provide API access for programmatic analytics integration with your existing data warehouse.'
    },
    {
      question: 'What kind of support and training do you provide?',
      answer: 'Enterprise customers get: (1) Dedicated account manager, (2) 24/7 priority support via phone/email/chat, (3) Quarterly business reviews, (4) On-site training for your team, (5) Custom training materials, and (6) Direct access to our engineering team for complex issues.'
    },
    {
      question: 'How do you handle multi-country operations?',
      answer: 'Built for regional scale. Support for multiple currencies, languages, tax regimes, and payment methods. Central governance with local customization. We currently operate across Kenya, Uganda, Tanzania, Rwanda, and are expanding to Nigeria and Ghana in Q1 2025.'
    }
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: '#000000' }}>
      <Container maxWidth="md">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            color: 'white',
            fontWeight: 700,
            mb: 2
          }}
        >
          Enterprise FAQs
        </Typography>
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            color: 'grey.400',
            mb: 8
          }}
        >
          Common questions from operations leaders
        </Typography>
        
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            elevation={0}
            sx={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(80, 200, 120, 0.1)',
              borderRadius: '8px !important',
              mb: 2,
              '&:before': { display: 'none' },
              '&:first-of-type': { borderRadius: '8px !important' },
              '&:last-of-type': { borderRadius: '8px !important' }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
              sx={{ py: 2 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1.125rem'
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0, pb: 3 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'grey.400',
                  lineHeight: 1.8
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body1" sx={{ color: 'grey.400', mb: 2 }}>
            Need answers to technical questions?
          </Typography>
          <CustomButton 
            variant="primary"
            size="large"
          >
            Schedule Technical Deep-Dive
          </CustomButton>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
