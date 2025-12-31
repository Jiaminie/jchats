import React from "react";
import { Box, Typography, Container, Stack, Divider } from "@mui/material";
import { Hero, MasterCTA } from "../components";
import { openWhatsAppChat } from "../utils/whatsappService";

const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, phone number, and business details.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you technical notices and support messages, and to communicate with you about products, services, and events.",
    },
    {
      title: "3. Information Sharing",
      content:
        "We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.",
    },
    {
      title: "4. Data Security",
      content:
        "We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.",
    },
    {
      title: "5. Your Choice",
      content:
        "You may update, correct or delete information about you at any time by logging into your online account or emailing us. If you wish to delete your account, please email us, but note that we may retain certain information as required by law.",
    },
    {
      title: "6. Cookies",
      content:
        "Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies.",
    },
    {
      title: "7. Changes to the Policy",
      content:
        "We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy.",
    },
  ];

  return (
    <Box>
      <Hero
        title={
          <>
            Privacy{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Policy
            </Box>
          </>
        }
        subtitle="Your privacy is important to us. Here is how we handle your data."
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
        title="Privacy concerns?"
        subtitle="We're committed to protecting your data. Reach out if you have questions."
        primaryButton={{
          text: "Talk to our Privacy Officer",
          action: () => openWhatsAppChat('general'),
          variant: "whatsapp",
        }}
      />
    </Box>
  );
};

export default PrivacyPolicyPage;
