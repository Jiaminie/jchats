import React from "react";
import { Box } from "@mui/material";
import {
  Hero,
  UseCasesSection,
  VideoExamples,
  SocialProofSection,
  GettingStartedEasy,
  OutcomeSection,
  MasterCTA,
  TargetAudience,
} from "../components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import AssessmentIcon from "@mui/icons-material/Assessment";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const HomePage: React.FC = () => {
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
    icon: <WhatsAppIcon />,
    href: "#",
  },
  {
    title: "Instagram Messages",
    description:
      "Convert every DM into a sales opportunity. Instantly reply to inquiries, story reactions, and comments with prices, availability, and booking options — then guide customers to payment.",
    icon: <InstagramIcon />,
    href: "#",
  },
  {
    title: "Facebook Messenger",
    description:
      "Handle high message volume without missing customers. Automatically answer common questions, share catalogs, and route serious buyers to checkout or human follow-up.",
    icon: <FacebookIcon />,
    href: "#",
  },
];


  return (
    <Box>
      <Hero />
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
          action: () => console.log("Get Started Now clicked"),
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
          icon: <PlayArrowIcon />,
          action: () => console.log("Get Your Free Demo clicked"),
        }}
      />

      <UseCasesSection />
      <Box id="video-examples">
        <VideoExamples />
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
          icon: <AssessmentIcon />,
          action: () => console.log("Request System Audit"),
        }}
        secondaryButton={{
          text: "Watch Live Demo",
          icon: <PlayArrowIcon />,
          action: () => console.log("Watch Live Demo"),
        }}
        trustSignals={[
          {
            text: "No credit card required",
            icon: (
              <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
            ),
          },
          {
            text: "Custom ROI analysis included",
            icon: (
              <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
            ),
          },
          {
            text: "Response within 4 business hours",
            icon: (
              <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
            ),
          },
        ]}
        contactInfo={{
          title: "Prefer to Talk First?",
          whatsApp: { text: "WhatsApp Us", number: "+254 700 000 000" },
          phone: { text: "Call Direct", number: "+254 700 000 001" },
          email: { text: "Email Us", address: "enterprise@jiaminie.tech" },
          availability:
            "Available: Mon-Fri, 8AM-6PM EAT<br />Enterprise emergency: 24/7",
        }}
        background="linear-gradient(135deg, rgba(80, 200, 120, 0.1) 0%, rgba(0, 0, 0, 1) 100%)"
      />
    </Box>
  );
};

export default HomePage;
