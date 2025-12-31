import React from "react";
import { Box, Typography, Container, Stack, Divider } from "@mui/material";
import { Hero, MasterCTA } from "../components";
import { openWhatsAppChat } from "../utils/whatsappService";

const TermsPage: React.FC = () => {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content:
        "By accessing or using Jiaminie Tech's JChats services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.",
    },
    {
      title: "2. Description of Service",
      content:
        "Jiaminie Tech provides JChats, an enterprise operating system for B2B commerce that automates sales, bookings, and customer service across various messaging platforms including WhatsApp, Instagram, and Facebook Messenger.",
    },
    {
      title: "3. User Obligations",
      content:
        "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must provide accurate and complete information when creating an account.",
    },
    {
      title: "4. Payment Terms",
      content:
        "Access to JChats requires payment of fees as outlined in our pricing plans. Fees are non-refundable except as required by law. We reserve the right to change our fees at any time with prior notice.",
    },
    {
      title: "5. Intellectual Property",
      content:
        "The service and its original content, features, and functionality are and will remain the exclusive property of Jiaminie Tech and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.",
    },
    {
      title: "6. Limitation of Liability",
      content:
        "In no event shall Jiaminie Tech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
    },
    {
      title: "7. Termination",
      content:
        "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.",
    },
    {
      title: "8. Governing Law",
      content:
        "These Terms shall be governed and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.",
    },
  ];

  return (
    <Box>
      <Hero
        title={
          <>
            Terms &{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Conditions
            </Box>
          </>
        }
        subtitle="Please read these terms and conditions carefully before using our service."
        showImage={false}
      />

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 16 },
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="body2"
            sx={{
              mb: 6,
              color: "text.disabled",
              fontStyle: "italic",
            }}
          >
            Last Updated: December 31, 2025
          </Typography>

          <Stack spacing={6}>
            {sections.map((section, index) => (
              <Box key={index}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    color: "text.secondary",
                  }}
                >
                  {section.content}
                </Typography>
                {index < sections.length - 1 && (
                  <Divider sx={{ mt: 6, opacity: 0.1 }} />
                )}
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <MasterCTA
        layout="simple"
        title="Have questions about our terms?"
        subtitle="Our team is here to clarify any points you might have."
        primaryButton={{
          text: "Contact Legal Support",
          action: () => openWhatsAppChat('general'),
          variant: "whatsapp",
        }}
      />
    </Box>
  );
};

export default TermsPage;
