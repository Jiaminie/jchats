import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { motion } from "framer-motion";

const GettingStartedEasy: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#000000",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* LEFT: Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Getting Started Is Easy
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#FFFFFF",
                  mb: 4,
                  maxWidth: 460,
                }}
              >
                Talk to an expert and we’ll guide you from first conversation to
                live system.
              </Typography>

              {/* Bullet List */}
              <Box component="ul" sx={{ listStyle: "none", pl: 0, mb: 4 }}>
                {[
                  "No technical setup required",
                  "No disruption to your business",
                  "Works with how customers already contact you",
                  "Support when you need it",
                ].map((item, index) => (
                  <Box
                    key={index}
                    component="li"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 1.5,
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ color: "#25D366" }} />
                    <Typography sx={{ color: "#FFFFFF" }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* CTA */}
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#25D366",
                  color: "#000000",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#1ebe5d",
                  },
                }}
                href="#"
              >
                Talk to an Expert →
              </Button>

              <Typography
                variant="caption"
                sx={{ color: "#AAAAAA", display: "block", mt: 1.5 }}
              >
                No commitment required.
              </Typography>
            </motion.div>
          </Grid>

          {/* RIGHT: Abstract Ease Visual */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    backgroundColor: "rgba(37, 211, 102, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChatBubbleOutlineIcon
                    sx={{ fontSize: 48, color: "#25D366" }}
                  />
                </Box>

                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LightbulbOutlinedIcon
                    sx={{ fontSize: 48, color: "#FFFFFF" }}
                  />
                </Box>

                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    backgroundColor: "rgba(37, 211, 102, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 48, color: "#25D366" }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GettingStartedEasy;
