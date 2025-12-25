import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { CustomAccordion, MasterCTA } from '../components';

const faqGroups = [
  {
    title: 'Control & Customization',
    questions: [
      { q: 'Can I customize the chatbot?', a: '[Answer placeholder]' },
      { q: 'How much control do I have?', a: '[Answer placeholder]' },
      { q: 'Can I integrate with my existing systems?', a: '[Answer placeholder]' },
    ],
  },
  {
    title: 'Payments & Reliability',
    questions: [
      { q: 'Is the payment system secure?', a: '[Answer placeholder]' },
      { q: 'What is the uptime guarantee?', a: '[Answer placeholder]' },
      { q: 'What payment methods are supported?', a: '[Answer placeholder]' },
    ],
  },
  {
    title: 'Support & Changes',
    questions: [
      { q: 'What kind of support do you offer?', a: '[Answer placeholder]' },
      { q: 'How do I request changes?', a: '[Answer placeholder]' },
      { q: 'Is there a support SLA?', a: '[Answer placeholder]' },
    ],
  },
  {
    title: 'Contracts & Cancellation',
    questions: [
      { q: 'What are the contract terms?', a: '[Answer placeholder]' },
      { q: 'How do I cancel my service?', a: '[Answer placeholder]' },
      { q: 'Is there a free trial?', a: '[Answer placeholder]' },
    ],
  },
];

const FaqPage: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ py: 12, textAlign: 'center', backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Have questions? We have answers.
          </Typography>
        </Container>
      </Box>

      {/* Grouped Accordions */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          {faqGroups.map((group) => (
            <Box key={group.title} sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                {group.title}
              </Typography>
              {group.questions.map((faq, index) => (
                <CustomAccordion
                  key={index}
                  title={faq.q}
                  expanded={expanded === `${group.title}-${index}`}
                  onChange={handleChange(`${group.title}-${index}`)}
                >
                  <Typography>{faq.a}</Typography>
                </CustomAccordion>
              ))}
            </Box>
          ))}
        </Container>
      </Box>

      {/* CTA */}
      <MasterCTA
        layout="simple"
        title="Still have questions?"
        primaryButton={{
          text: 'Ask us on WhatsApp',
          action: () => console.log('WhatsApp button clicked'),
          variant: 'whatsapp',
        }}
      />
    </Box>
  );
};

export default FaqPage;
