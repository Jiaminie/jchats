import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { CustomButton, GlassCard } from "../ui";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

interface MasterCTAProps {
  title: React.ReactNode;
  subtitle?: string;
  primaryButton?: {
    text: string;
    icon?: React.ReactElement;
    action: () => void;
    variant?: "primary" | "secondary" | "whatsapp";
  };
  secondaryButton?: {
    text: string;
    icon?: React.ReactElement;
    action: () => void;
    variant?: "primary" | "secondary" | "whatsapp";
  };
  trustSignals?: { text: string; icon?: React.ReactElement }[];
  contactInfo?: {
    title: string;
    whatsApp?: { text: string; number: string };
    phone?: { text: string; number: string };
    email?: { text: string; address: string };
    availability?: string;
  };
  background?: string;
  layout?: "simple" | "extended" | "inclusion";
}

const MasterCTA: React.FC<MasterCTAProps> = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  trustSignals,
  contactInfo,
  background = "linear-gradient(135deg, rgba(80, 200, 120, 0.1) 0%, rgba(0, 0, 0, 1) 100%)",
  layout = "simple",
}) => {
  const renderSimpleLayout = () => (
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "text.primary", fontWeight: 600, mb: 2 }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            align="center"
            sx={{ color: "text.secondary", mb: 4 }}
          >
            {subtitle}
          </Typography>
        )}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {primaryButton && (
            <CustomButton
              variant={primaryButton.variant || "primary"}
              size="large"
              onClick={primaryButton.action}
              startIcon={primaryButton.icon}
            >
              {primaryButton.text}
            </CustomButton>
          )}
        </Box>
      </motion.div>
    </Container>
  );

  const renderExtendedLayout = () => (
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h6"
              sx={{ color: "grey.400", mb: 4, lineHeight: 1.8 }}
            >
              {subtitle}
            </Typography>
          )}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            {primaryButton && (
              <CustomButton
                variant={primaryButton.variant || "primary"}
                size="large"
                startIcon={primaryButton.icon}
                onClick={primaryButton.action}
              >
                {primaryButton.text}
              </CustomButton>
            )}
            {secondaryButton && (
              <CustomButton
                variant={secondaryButton.variant || "secondary"}
                size="large"
                startIcon={secondaryButton.icon}
                onClick={secondaryButton.action}
              >
                {secondaryButton.text}
              </CustomButton>
            )}
          </Stack>
          {trustSignals && (
            <Box sx={{ display: "flex", gap: 3, mt: 4, flexWrap: "wrap" }}>
              {trustSignals.map((signal, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  {signal.icon}
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {signal.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Grid>
        {contactInfo && (
          <Grid item xs={12} md={4}>
            <GlassCard
              glow
              hover={false}
              sx={{
                p: 4,
                backgroundColor: "rgba(20, 20, 20, 0.8) !important",
                borderColor: "rgba(80, 200, 120, 0.2) !important",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: 600, mb: 3 }}
              >
                {contactInfo.title}
              </Typography>
              <Stack spacing={3}>
                {contactInfo.whatsApp && (
                  <CustomButton
                    variant="whatsapp"
                    size="medium"
                    fullWidth
                    startIcon={<WhatsAppIcon />}
                  >
                    <Box sx={{ textAlign: "left", flex: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {contactInfo.whatsApp.text}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "rgba(255,255,255,0.9)" }}
                      >
                        {contactInfo.whatsApp.number}
                      </Typography>
                    </Box>
                  </CustomButton>
                )}
                {contactInfo.phone && (
                  <CustomButton
                    variant="secondary"
                    size="medium"
                    fullWidth
                    startIcon={<PhoneIcon />}
                  >
                    <Box sx={{ textAlign: "left", flex: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {contactInfo.phone.text}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "grey.400" }}>
                        {contactInfo.phone.number}
                      </Typography>
                    </Box>
                  </CustomButton>
                )}
                {contactInfo.email && (
                  <CustomButton
                    variant="secondary"
                    size="medium"
                    fullWidth
                    startIcon={<EmailIcon />}
                  >
                    <Box sx={{ textAlign: "left", flex: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {contactInfo.email.text}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "grey.400" }}>
                        {contactInfo.email.address}
                      </Typography>
                    </Box>
                  </CustomButton>
                )}
              </Stack>
              {contactInfo.availability && (
                <>
                  <Divider
                    sx={{ my: 3, borderColor: "rgba(80, 200, 120, 0.1)" }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: "grey.500",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    {contactInfo.availability}
                  </Typography>
                </>
              )}
            </GlassCard>
          </Grid>
        )}
      </Grid>
    </Container>
  );

  const renderInclusionLayout = () => (
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 6 }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#A0A0A0",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: "500px",
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {primaryButton && (
              <Button
                size="large"
                variant="contained"
                onClick={primaryButton.action}
                sx={{
                  bgcolor: "#25D366",
                  color: "#000",
                  fontWeight: 700,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  px: { xs: 4, md: 6 },
                  py: { xs: 1.5, md: 2 },
                  borderRadius: 2,
                  textTransform: "none",
                  boxShadow: "0 8px 32px rgba(37, 211, 102, 0.4)",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    bgcolor: "#20bd5a",
                    boxShadow: "0 12px 40px rgba(37, 211, 102, 0.5)",
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {primaryButton.text}
              </Button>
            )}
          </Box>
        </motion.div>
      </Stack>
    </Container>
  );

  const renderLayout = () => {
    switch (layout) {
      case "simple":
        return renderSimpleLayout();
      case "extended":
        return renderExtendedLayout();
      case "inclusion":
        return renderInclusionLayout();
      default:
        return renderSimpleLayout();
    }
  };

  return (
    <Box
      sx={{
        py: 12,
        background,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(80, 200, 120, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(80, 200, 120, 0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.3,
        }}
      />

      {renderLayout()}
    </Box>
  );
};

export default MasterCTA;
