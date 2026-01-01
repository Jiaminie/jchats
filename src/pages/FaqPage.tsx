import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { Hero, MasterCTA } from "../components";
import { ExpandMore } from "@mui/icons-material";
import { openWhatsAppChat} from "../utils/whatsappService";

const FAQPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqCategories = [
    {
      category: "Control & Customization",
      questions: [
        {
          id: "control-1",
          question: "Do customers need to download anything?",
          answer:
            "No. Your customers use their regular WhatsApp, Instagram, or Messenger apps. There's nothing to download, no links to click, and no new platform to learn. They message you exactly as they always have.",
        },
        {
          id: "control-2",
          question: "Can I reply personally anytime I want?",
          answer:
            "Yes. You can take over any conversation at any time. JChats handles automated responses, but you remain in full control. Step in when you want, and the system steps back.",
        },
        {
          id: "control-3",
          question: "What happens to my existing WhatsApp Business account?",
          answer:
            "We upgrade it. Your phone number stays the same, your customer history remains intact, and you keep full access. JChats integrates with your existing setup—it doesn't replace it.",
        },
        {
          id: "control-4",
          question: "Can I change prices or update stock instantly?",
          answer:
            "Yes. Updates take about 10 seconds. You can adjust prices, mark items out of stock, or add new products through your dashboard. Changes apply immediately across all channels.",
        },
      ],
    },
    {
      category: "Payments & Reliability",
      questions: [
        {
          id: "payment-1",
          question: "Is customer data secure?",
          answer:
            "Yes. We use bank-grade encryption for all customer data and payment information. Your data is stored securely, and we comply with industry-standard security protocols. We never share customer information with third parties.",
        },
        {
          id: "payment-2",
          question: "What if M-Pesa is down?",
          answer:
            "JChats supports multiple payment options. If one payment method is unavailable, customers can choose another. The system notifies you of any payment issues and allows manual processing if needed.",
        },
        {
          id: "payment-3",
          question: "What happens if a payment fails?",
          answer:
            "The customer is immediately notified and can retry. Failed or incomplete payments don't count toward your transaction fee—you only pay the 0.3% on successful, completed transactions.",
        },
        {
          id: "payment-4",
          question: "How do refunds work?",
          answer:
            "You process refunds directly through your dashboard. The system logs the refund, notifies the customer, and updates your records automatically. The transaction fee is not charged on refunded orders.",
        },
      ],
    },
    {
      category: "Support & Changes",
      questions: [
        {
          id: "support-1",
          question: "What are your support hours?",
          answer:
            "We offer 24/7 WhatsApp support. During business hours (8 AM – 8 PM EAT), you'll get immediate responses. Outside those hours, we respond within 2 hours for urgent issues.",
        },
        {
          id: "support-2",
          question: "Can I add more products or services later?",
          answer:
            "Yes. There's no limit to how many products or services you can add. You can expand your catalog anytime through your dashboard without additional setup fees.",
        },
        {
          id: "support-3",
          question: "Can I cancel anytime?",
          answer:
            "Yes. There are no long-term contracts. If you decide JChats isn't right for your business, you can cancel anytime. Your one-time setup fee is non-refundable, but there are no cancellation penalties.",
        },
        {
          id: "support-4",
          question: "Do you provide training for my staff?",
          answer:
            "Yes. Training is included in your setup. We'll walk your team through the dashboard, show them how to manage orders, and answer all their questions. Ongoing support is always available if they need help later.",
        },
      ],
    },
    {
      category: "Technical & Integration",
      questions: [
        {
          id: "technical-1",
          question: "Do I need internet access all the time?",
          answer:
            "Yes, but it works on 3G and standard mobile data. The system is designed to handle slower connections common in Kenya. As long as you can access WhatsApp, you can manage your business through JChats.",
        },
        {
          id: "technical-2",
          question: "Can I use JChats across multiple locations?",
          answer:
            "Yes. The Pro and Advanced plans support multi-location businesses. You can manage orders from different branches, assign staff permissions, and track performance by location.",
        },
        {
          id: "technical-3",
          question: "Can JChats integrate with my existing systems?",
          answer:
            "Custom integrations are available with the Business Suite plan. We can connect JChats to your inventory system, accounting software, CRM, or other business tools you already use.",
        },
        {
          id: "technical-4",
          question: "What if I need custom workflows?",
          answer:
            "The Business Suite plan is designed for businesses with unique operational needs. We'll build custom approval flows, escalation rules, and automation logic tailored to how your business actually operates.",
        },
      ],
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('/images/gradient.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      {/* HERO SECTION */}
      <Hero
        title={
          <>
            Frequently Asked{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Questions
            </Box>
          </>
        }
        subtitle="Have questions? We have answers. If you don't find what you're looking for, we're here to help."
        primaryAction={{
          text: "Ask a Question",
          onClick: () => openWhatsAppChat('general'),
        }}
        showImage={false}
      />
      </Box>
      {/* FAQ SECTIONS */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          {faqCategories.map((category, categoryIndex) => (
            <Box key={categoryIndex} sx={{ mb: 8 }}>
              {/* Category Header */}
              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  mb: 3,
                  color: "text.disabled",
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                }}
              >
                {category.category}
              </Typography>

              <Divider sx={{ mb: 4, opacity: 0.5 }} />

              {/* Questions in Category */}
              <Box>
                {category.questions.map((faq) => (
                  <Accordion
                    key={faq.id}
                    expanded={expanded === faq.id}
                    onChange={handleChange(faq.id)}
                    sx={{
                      backgroundColor: "background.default",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 1,
                      mb: 2,
                      "&:before": {
                        display: "none",
                      },
                      "&.Mui-expanded": {
                        margin: "0 0 16px 0",
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMore
                          sx={{
                            color:
                              expanded === faq.id
                                ? "primary.main"
                                : "text.secondary",
                          }}
                        />
                      }
                      sx={{
                        py: 2,
                        px: 3,
                        "&:hover": {
                          backgroundColor: "rgba(37, 211, 102, 0.03)",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: "1.125rem",
                          color:
                            expanded === faq.id
                              ? "primary.main"
                              : "text.primary",
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        px: 3,
                        pb: 3,
                        pt: 0,
                        borderTop: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1rem",
                          lineHeight: 1.8,
                          color: "text.secondary",
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          ))}
        </Container>
      </Box>

      {/* STILL HAVE QUESTIONS CTA */}

      <MasterCTA
        layout="simple"
        title="Still have questions?"
        subtitle="Contact our support team for personalized assistance."
        primaryButton={{
          text: "Talk to Us on WhatsApp",
          action: () => openWhatsAppChat('general'),
          variant: "whatsapp",
        }}
      />
    </Box>
  );
};

export default FAQPage;
