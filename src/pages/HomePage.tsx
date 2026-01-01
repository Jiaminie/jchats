import React from "react";
import { Box } from "@mui/material";
import {
  Hero,
  UseCasesSection,
  SeeItInAction,
  SocialProofSection,
  GettingStartedEasy,
  OutcomeSection,
  MasterCTA,
  TargetAudience,
} from "../components";
import { WhatsApp, Instagram, Facebook, Assessment, PlayArrow, CheckCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { openWhatsAppChat } from "../utils/whatsappService";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleScrollToSocialProof = () => {
    const socialProofSection = document.getElementById("social-proof");
    if (socialProofSection) {
      socialProofSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const channelCards = [
    {
      title: "WhatsApp Commerce",
      description:
        "Turn WhatsApp into your best salesperson. Automatically respond to customers, show products or services, take orders, and collect M-Pesa payments — even when you’re offline.",
      icon: <WhatsApp />,
      href: "https://wa.me/254114102575?text=Hi! I'm interested in learning about JChats for my business.",
      buttonText: "Consult Sales",
    },
    {
      title: "Instagram Messages",
      description:
        "Convert every DM into a sales opportunity. Instantly reply to inquiries, story reactions, and comments with prices, availability, and booking options — then guide customers to payment.",
      icon: <Instagram />,
      href: "https://www.instagram.com/jiaminie_tech/",
      buttonText: "See Instagram",
    },
    {
      title: "Facebook Messenger",
      description:
        "Handle high message volume without missing customers. Automatically answer common questions, share catalogs, and route serious buyers to checkout or human follow-up.",
      icon: <Facebook/>,
      href: "https://www.facebook.com/jiaminie_tech/",
      buttonText: "See Facebook",
    },
  ];

  return (
    <Box
      sx={{
        marginTop: 4,
      }}
    >
      {/* HERO SECTION */}
      <Hero
        title={
          <>
            More Chats. More Sales.{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Less stress.
            </Box>
          </>
        }
        subtitle="Use JChats range of chat automations to convert conversations into revenue"
        primaryAction={{
            text: "Show Me How",
          onClick: () => navigate("/use-cases"),
        }}
        showImage={true}
        image="/images/hero.png"
      />
      <MasterCTA
        layout="inclusion"
        title={
          <>
            Your Next Customer
            <Box
              component="span"
              sx={{ color: "primary.main", display: "block", mt: 0.5 }}
            >
              is Messaging You Right Now.
            </Box>
          </>
        }
        subtitle="Experience the power of instant engagement with JChats' AI-driven automations. Never miss a lead again."
        primaryButton={{
          text: "Get Started Now",
          action: () => openWhatsAppChat('general'),
        }}
        background="linear-gradient(135deg, rgba(80, 200, 120, 0.1) 0%, rgba(0, 0, 0, 1) 100%)"
      />
      <TargetAudience
        sectionTitle="Reach Your Customers Where They Are"
        sectionSubtitle="Engage your audience on their favorite messaging platforms and turn conversations into conversions."
        cards={channelCards}
        backgroundColor="background.default"
      />
      <MasterCTA
        layout="inclusion"
        title={
          <>
            Convert customers, and make leads
            <Box
              component="span"
              sx={{ color: "primary.main", display: "block", mt: 0.5 }}
            >
              right there on your celli.
            </Box>
          </>
        }
        subtitle="Be part of our success story"
        primaryButton={{
          text: "Here's how",
          action: () => console.log("Inclusion CTA clicked"),
        }}
        background="linear-gradient(135deg, rgba(80, 200, 120, 0.1) 0%, rgba(0, 0, 0, 1) 100%)"
      />
      <OutcomeSection />
      <MasterCTA
        layout="inclusion"
        title="Ready to Transform Your Customer Engagement?"
        subtitle="Discover how JChats can revolutionize your business communications and drive growth."
        primaryButton={{
          text: "Get Your Free Demo",
          icon: <PlayArrow />,
          action: () => openWhatsAppChat('general'),
        }}
      />

      <UseCasesSection />
      <Box id="video-examples">
        <SeeItInAction />
      </Box>

      <Box id="social-proof">
        <SocialProofSection />
      </Box>

      <MasterCTA
        layout="inclusion"
        title="Still not convinced? See What Our Customers are Saying"
        subtitle="Real stories from businesses that have transformed their operations with JChats."
        primaryButton={{
          text: "View Testimonials",
          action: handleScrollToSocialProof,
        }}
      />

      <GettingStartedEasy />
      <MasterCTA
        layout="extended"
        title={
          <>
            Stop Managing Chaos.
            <br />
            <Box component="span" sx={{ color: "primary.main" }}>
              Start Leading Growth.
            </Box>
          </>
        }
        subtitle="Your business deserves an architecture that works as hard as you do."
        primaryButton={{
          text: "Request System Audit",
          icon: <Assessment />,
          action: () => openWhatsAppChat('general'),
        }}
        secondaryButton={{
          text: "Watch Live Demo",
          icon: <PlayArrow />,
          action: () => navigate('/use-cases'),
        }}
        trustSignals={[
          {
            text: "No credit card required",
            icon: (
              <CheckCircle sx={{ color: "primary.main", fontSize: 20 }} />
            ),
          },
          {
            text: "Custom ROI analysis included",
            icon: (
              <CheckCircle sx={{ color: "primary.main", fontSize: 20 }} />
            ),
          },
          {
            text: "Response within 4 business hours",
            icon: (
              <CheckCircle sx={{ color: "primary.main", fontSize: 20 }} />
            ),
          },
        ]}
        contactInfo={{
          title: "Prefer to Talk First?",
          whatsApp: { text: "WhatsApp Us", number: "+254 114 102 575" },
          phone: { text: "Call Direct", number: "+254 114 102 575" },
          email: { text: "Email Us", address: "info@jiaminie.co.ke" },
          availability:
            "Available: Mon-Fri, 8AM-6PM EAT Enterprise emergency: 24/7",
        }}
        background="linear-gradient(135deg, rgba(80, 200, 120, 0.1) 0%, rgba(0, 0, 0, 1) 100%)"
      />
    </Box>
  );
};

export default HomePage;
