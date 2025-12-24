import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Chip,
  Divider,
  Switch,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: isAnnual ? '8,999' : '9,999',
      period: isAnnual ? 'month (billed annually)' : 'month',
      description: 'Perfect for testing',
      popular: false,
      features: [
        '200 orders/month',
        '1 WhatsApp number',
        'M-Pesa integration',
        'Basic analytics',
        'Email support',
        'Standard API access',
      ],
      cta: 'Start Free Trial',
      savings: isAnnual ? 'Save KES 12,000/year' : null,
    },
    {
      name: 'Business',
      price: isAnnual ? '22,499' : '24,999',
      period: isAnnual ? 'month (billed annually)' : 'month',
      description: 'For serious growth',
      popular: true,
      features: [
        'Unlimited orders',
        '3 WhatsApp numbers',
        'All payment methods',
        'Advanced analytics',
        'Priority support',
        'Free setup & training',
        'Quarterly business review',
        'Full API access',
      ],
      cta: 'Get Started',
      savings: isAnnual ? 'Save KES 30,000/year' : null,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Tailored to your needs',
      description: 'Full control & customization',
      popular: false,
      features: [
        'Everything in Business',
        'Unlimited WhatsApp numbers',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'SLA guarantee',
        'White-label option',
        'Multi-location management',
        'Custom feature development',
      ],
      cta: 'Contact Sales',
      savings: null,
    },
  ];

  const faqs = [
    {
      question: 'Can I upgrade mid-month?',
      answer: 'Yes! Pay only the prorated difference. Upgrade anytime with zero hassle.',
    },
    {
      question: 'What if I exceed 200 orders on Starter?',
      answer: 'We\'ll notify you at 150 orders. You can upgrade instantly, or orders pause until next month.',
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees. Only M-Pesa charges (paid by customer) and payment processor fees apply.',
    },
    {
      question: 'What\'s included in "setup"?',
      answer: 'We upload products, configure payments, set up dashboard, and train your team. Normally KES 30,000, free for all plans.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. No contracts. Cancel before next billing cycle to avoid charges.',
    },
    {
      question: 'Do you offer refunds?',
      answer: '14-day money-back guarantee if you\'re not satisfied. No questions asked.',
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#000000', minHeight: '100vh', pt: 12 }}>
      {/* Hero */}
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 2,
            }}
          >
            Enterprise Economics
            <br />
            <Box component="span" sx={{ color: 'primary.main' }}>
              That Scale
            </Box>
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              color: 'grey.400',
              maxWidth: '700px',
              mx: 'auto',
              mb: 4,
            }}
          >
            Transparent pricing. No hidden costs. ROI visible from day one.
          </Typography>

          {/* Annual toggle */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={isAnnual}
                  onChange={(e) => setIsAnnual(e.target.checked)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: 'primary.main',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: 'primary.main',
                    },
                  }}
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ color: 'white' }}>Annual billing</Typography>
                  <Chip
                    label="Save up to 20%"
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(80, 200, 120, 0.2)',
                      color: 'primary.main',
                    }}
                  />
                </Box>
              }
            />
          </Box>
        </motion.div>

        {/* Pricing cards */}
        <Grid container spacing={4} sx={{ mb: 12 }}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  elevation={plan.popular ? 8 : 2}
                  sx={{
                    background: plan.popular
                      ? 'rgba(80, 200, 120, 0.05)'
                      : 'rgba(20, 20, 20, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid',
                    borderColor: plan.popular ? 'primary.main' : 'rgba(80, 200, 120, 0.1)',
                    borderRadius: 3,
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: plan.popular
                        ? '0 20px 60px rgba(80, 200, 120, 0.3)'
                        : '0 20px 40px rgba(0, 0, 0, 0.4)',
                    },
                  }}
                >
                  {plan.popular && (
                    <Chip
                      label="Most Popular"
                      sx={{
                        position: 'absolute',
                        top: -12,
                        right: 24,
                        backgroundColor: 'primary.main',
                        color: '#000',
                        fontWeight: 600,
                      }}
                    />
                  )}

                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {plan.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'grey.400',
                      mb: 3,
                    }}
                  >
                    {plan.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h2"
                      component="span"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                      }}
                    >
                      {plan.price !== 'Custom' && 'KES '}
                      {plan.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{
                        color: 'grey.400',
                        ml: 1,
                      }}
                    >
                      {plan.price !== 'Custom' && '/'}{plan.period}
                    </Typography>
                  </Box>

                  {plan.savings && (
                    <Chip
                      label={plan.savings}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(80, 200, 120, 0.2)',
                        color: 'primary.main',
                        mb: 3,
                      }}
                    />
                  )}

                  <Divider sx={{ my: 3, borderColor: 'rgba(80, 200, 120, 0.1)' }} />

                  <Box sx={{ flex: 1, mb: 3 }}>
                    {plan.features.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1,
                          mb: 2,
                        }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: 'primary.main',
                            fontSize: 20,
                            mt: 0.25,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'grey.300',
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant={plan.popular ? 'contained' : 'outlined'}
                    size="large"
                    fullWidth
                    sx={{
                      py: 1.5,
                      ...(plan.popular && {
                        background: 'linear-gradient(135deg, #50C878 0%, #3DA860 100%)',
                      }),
                    }}
                    onClick={() => window.open('https://wa.me/254700000000', '_blank')}
                  >
                    {plan.cta}
                  </Button>

                  {!isAnnual && plan.price !== 'Custom' && (
                    <Typography
                      variant="caption"
                      align="center"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        mt: 2,
                        display: 'block',
                      }}
                    >
                      First month 50% off
                    </Typography>
                  )}
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* FAQ */}
        <Box sx={{ mb: 12 }}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 6,
            }}
          >
            Pricing FAQs
          </Typography>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
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
                      fontSize: '1.125rem',
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
                      lineHeight: 1.8,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingPage;
