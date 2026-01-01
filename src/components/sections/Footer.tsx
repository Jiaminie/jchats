import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Link,
  TextField,
  Divider,
  Alert,
  Snackbar,
} from "@mui/material";
import { CustomButton } from "../ui";
import { WhatsApp } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { openWhatsAppChat } from "../../utils/whatsappService";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowSuccess(true);
      setEmail("");
    }
  };

  const platformLinks = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Get Started", href: "/get-started" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.default",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        pt: 10,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <img src="/logo.webp" alt="Logo" width={80} height={60} loading="lazy" decoding="async" />
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                JChats
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mb: 4,
                lineHeight: 1.7,
                maxWidth: { xs: "100%", md: "300px" },
              }}
            >
             JChats helps African businesses turn WhatsApp conversations into orders, payments, and repeat customers - automatically.
            </Typography>

            <CustomButton
              component={RouterLink}
              onClick={() => openWhatsAppChat('general')}
              variant="secondary"
              size="medium"
              startIcon={<WhatsApp />}
              sx={{
                borderColor: "primary.main",
                color: "primary.main",
                "&:hover": {
                  borderColor: "primary.light",
                  backgroundColor: "rgba(80, 200, 120, 0.1)",
                },
              }}
            >
              Consult Sales
            </CustomButton>
          </Grid>

          {/* Platform Links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle2"
              sx={{
                mb: 3,
                color: "text.primary",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              PLATFORM
            </Typography>
            <Stack spacing={2}>
              {platformLinks.map((link) => (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.href}
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Company Links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle2"
              sx={{
                mb: 3,
                color: "text.primary",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              COMPANY
            </Typography>
            <Stack spacing={2}>
              {[
                { label: "About", href: "/about" },
                { label: "Legal", href: "/legal" },
                { label: "Terms", href: "/terms" },
                { label: "Privacy", href: "/privacy" },
              ].map((link) => (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.href}
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Audit Signup */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              sx={{
                mb: 3,
                color: "text.primary",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              SYSTEM AUDIT
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
             Get a clear picture of where conversations, orders, and payments are breaking down - and how to fix them.
            </Typography>

            <Box component="form" onSubmit={handleNewsletterSubmit}>
              <TextField
                placeholder="Work Email"
                variant="outlined"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "rgba(255,255,255,0.03)",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&.Mui-focused fieldset": { borderColor: "primary.main" },
                  },
                  "& input": { color: "white" },
                }}
              />
              <CustomButton
                variant="primary"
                size="medium"
                fullWidth
                type="submit"
                sx={{ py: 1 }}
              >
                Request Audit
              </CustomButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8, borderColor: "rgba(255,255,255,0.05)" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", opacity: 0.6 }}
          >
            © 2024 Jiaminie Tech. Enterprise Systems.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              component={RouterLink}
              to="/privacy"
              sx={{
                color: "text.secondary",
                opacity: 0.6,
                textDecoration: "none",
                "&:hover": { opacity: 1 },
              }}
            >
              Privacy
            </Link>
            <Link
              component={RouterLink}
              to="/terms"
              sx={{
                color: "text.secondary",
                opacity: 0.6,
                textDecoration: "none",
                "&:hover": { opacity: 1 },
              }}
            >
              Terms
            </Link>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          variant="filled"
          sx={{ bgcolor: "primary.dark", color: "white" }}
        >
          Request received. Our systems team will contact you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;
