import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { Hero, MasterCTA } from "../components";
import { useNavigate } from "react-router-dom";
import { Description, Gavel, Security, Info } from "@mui/icons-material";

const LegalPage: React.FC = () => {
  const navigate = useNavigate();

  const legalLinks = [
    {
      title: "Terms of Service",
      description: "Read the rules and regulations for using JChats.",
      icon: <Gavel sx={{ fontSize: 40 }} />,
      path: "/terms",
    },
    {
      title: "Privacy Policy",
      description: "Understand how we collect, use, and protect your data.",
      icon: <Security sx={{ fontSize: 40 }} />,
      path: "/privacy",
    },
    {
      title: "Cookie Policy",
      description: "Learn about how we use cookies to improve your experience.",
      icon: <Info sx={{ fontSize: 40 }} />,
      path: "/privacy", // Reusing privacy for now or can create separate
    },
    {
      title: "Compliance",
      description: "Our commitment to regulatory standards and security.",
      icon: <Description sx={{ fontSize: 40 }} />,
      path: "/terms",
    },
  ];

  return (
    <Box>
      <Hero
        title={
          <>
            Legal{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Information
            </Box>
          </>
        }
        subtitle="Access our legal documents, policies, and compliance information."
        showImage={false}
      />

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 16 },
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {legalLinks.map((link, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  onClick={() => navigate(link.path)}
                  sx={{
                    height: "100%",
                    backgroundColor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(37, 211, 102, 0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box
                      sx={{
                        mb: 3,
                        color: "primary.main",
                        opacity: 0.8,
                      }}
                    >
                      {link.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      {link.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "text.secondary",
                      }}
                    >
                      {link.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 10 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Contact Information
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                  If you have any questions about our legal policies or practices, please contact us at:
              </Typography>
              <Typography variant="body1" sx={{ color: "text.primary", fontWeight: 500, mt: 1 }}>
                  legal@jiaminie.com
              </Typography>
          </Box>
        </Container>
      </Box>

      <MasterCTA
        layout="simple"
        title="Need more information?"
        subtitle="Our legal team is available for any specific inquiries you may have."
        primaryButton={{
          text: "Contact Support",
          action: () => navigate("/faq"),
          variant: "secondary",
        }}
      />
    </Box>
  );
};

export default LegalPage;
