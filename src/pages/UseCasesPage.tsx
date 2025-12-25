import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import {
  CustomAccordion,
  QuickOverviewCard,
  MasterCTA,
} from "../components";

const useCases = [
  { id: "food-retail", title: "Food & Retail" },
  { id: "professional", title: "Professional Services" },
  { id: "hospitality", title: "Hospitality" },
  { id: "logistics", title: "Logistics" },
  { id: "wholesale", title: "Wholesale" },
  { id: "real-estate", title: "Real Estate" },
];

const overviewCards = [
  {
    title: "Automate Sales",
    description:
      "Capture leads, provide quotes, and close sales, all on WhatsApp.",
  },
  {
    title: "24/7 Customer Service",
    description:
      "Answer questions, provide support, and resolve issues instantly.",
  },
  {
    title: "Streamline Operations",
    description: "Automate bookings, appointments, and other repetitive tasks.",
  },
];

const UseCasesPage: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: 12,
          textAlign: "center",
          backgroundColor: "background.paper",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Jiaminie for Every Industry
          </Typography>
          <Typography variant="h5" color="text.secondary">
            No matter your business, Jiaminie can automate your sales and
            customer service on WhatsApp.
          </Typography>
        </Container>
      </Box>

      {/* 3 Quick Overview Cards Section */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Quick Overview
          </Typography>
          <Grid container spacing={4} sx={{ mt: 6 }}>
            {overviewCards.map((card) => (
              <Grid item xs={12} md={4} key={card.title}>
                <QuickOverviewCard {...card} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Expandable Industry Sections */}
      <Box
        sx={{ py: 12, backgroundColor: "background.paper" }}
        id="explore-use-cases-section"
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Explore Use Cases
          </Typography>
          <Box sx={{ mt: 6 }}>
            {useCases.map((useCase) => (
              <Box key={useCase.id} id={useCase.id} sx={{ mb: 2 }}>
                {" "}
                {/* Added Box with id for anchor linking */}
                <CustomAccordion
                  title={useCase.title}
                  expanded={expanded === useCase.id}
                  onChange={handleChange(useCase.id)}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6">Pain Points:</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                      [Pain points list placeholder]
                    </Typography>
                    <Typography variant="h6">What gets automated:</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                      [What gets automated list placeholder]
                    </Typography>
                    <Typography variant="h6">Business outcome:</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                      [Business outcome placeholder]
                    </Typography>
                    <Typography variant="h6">Example scenario:</Typography>
                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                      [Example scenario placeholder]
                    </Typography>
                    {/* WhatsApp CTA */}
                    <MasterCTA
                      layout="simple"
                      title={`Discuss ${useCase.title} Automation`}
                      primaryButton={{
                        text: "Talk to us on WhatsApp",
                        action: () =>
                          console.log(
                            "WhatsApp button clicked for " + useCase.title
                          ),
                        variant: "whatsapp",
                      }}
                    />
                  </Box>
                </CustomAccordion>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default UseCasesPage;
